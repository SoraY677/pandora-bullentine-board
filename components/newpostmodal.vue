<template>
  <div>
    <div class="mb-4">
      <span>対象者</span>
      <b-form-select v-model="selected" :options="options"></b-form-select>
    </div>
    <div class="mb-4">
      <span>投稿内容</span>
      <b-form-textarea
        id="textarea"
        v-model="content"
        placeholder="投稿内容を入力してください。ただし、以下を禁止します。
      ＊個人を特定できる内容
      ＊誹謗中傷を含む内容"
        rows="6"
        max-rows="6"
      ></b-form-textarea>
    </div>
    <b-alert v-model="show" variant="danger" dismissible class="m-2">
      内容入力は必須です！
    </b-alert>
    <b-button class="mt-3" block @click="confirm()">確定</b-button>
  </div>
</template>

<script>
import firestore from "@/plugins/firebase";

export default {
  data() {
    return {
      content: "",
      selected: null,
      show: false,
      options: []
    };
  },
  props: {
    targetList: Array
  },
  mounted() {
    this.options = [];
    this.options.push({
      value: null,
      text: "対象者を選択"
    });
    this.targetList.forEach(res => {
      this.options.push({
        value: res.id,
        text: res.name
      });
    });
  },
  methods: {
    confirm() {
      if (this.content != "") {
        /*COTOHAAPIアクセスし、 */
        //アクセストークンの取得
        this.$axios
          .$post(
            "https://api.ce-cotoha.com/v1/oauth/accesstokens",
            {
              grantType: "client_credentials",
              clientId: process.env.cotoha.id,
              clientSecret: process.env.cotoha.secret
            },
            {
              header: { "Content-Type": "application/json" }
            }
          )
          //取れたら
          .then(res => {
            const wheader = {
              "Content-Type": "application/json;charset=UTF-8",
              Authorization: "Bearer " + res.access_token
            };

            this.$axios
              .$post(
                "https://api.ce-cotoha.com/api/dev/nlp/v1/sentiment",
                { sentence: this.content },
                { headers: wheader }
              )
              .then(res => {
                const date = new Date();
                const year = date.getFullYear() * 10000000000;
                const month = (date.getMonth() + 1) * 100000000;
                const day = date.getDate() * 1000000;
                const hour = date.getHours() * 10000;
                const minutes = date.getMinutes() * 100;
                const second = date.getSeconds() * 1;
                const timestamp = year + month + day + hour + minutes + second;

                let negativeflag = false
                const apiresult = res.result;

                if(apiresult.sentiment == "Negative" && apiresult.score > 0.5)
                  negativeflag = true

                firestore
                  .collection("content")
                  .add({
                    comment_num: 0,
                    content: this.content,
                    name: "T.U",
                    reaction_0: 0,
                    reaction_1: 0,
                    reaction_2: 0,
                    reaction_3: 0,
                    reaction_4: 0,
                    timestamp: timestamp,
                    target: this.selected,
                    isnegative: negativeflag
                  })
                  .then(res => {
                    //ここでIDを取得し、commentも生成
                    firestore.collection("comment").add({
                      target: res.id,
                      list: []
                    });
                  });

                this.$emit("confirm");
              });
          });
      } else {
        this.show = true;
      }
    }
  }
};
</script>

<style></style>
