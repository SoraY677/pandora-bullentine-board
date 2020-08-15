<template>
  <div>
    <div class="mb-4">
      <span>対象者</span>
      <b-form-select
        v-model="selected"
        :options="
        [{ value: null, text: '対象者を選択' },
          { value: '1', text: 'H.N' }]"
      ></b-form-select>
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
    <b-button class="mt-3" block @click="confirm()">確定</b-button>
  </div>
</template>

<script>
import firestore from "@/plugins/firebase";

export default {
  data() {
    return {
      content: "",
      selected:null
    };
  },
  methods: {
    confirm() {
      const date = new Date();
      const year = date.getFullYear() * 10000000000;
      const month = (date.getMonth() + 1) * 100000000;
      const day = date.getDate() * 1000000;
      const hour = date.getHours() * 10000;
      const minutes = date.getMinutes() * 100;
      const second = date.getSeconds() * 1;
      const timestamp = year + month + day + hour + minutes + second;
      
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
          timestamp: timestamp
        })
        .then((res) => {
          //ここでIDを取得し、commentも生成
          firestore.collection("comment")
          .add({
            target:res.id,
            list:[]
          })
        });
    }
  }
};
</script>

<style></style>
