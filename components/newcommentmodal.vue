<template>
  <div>
    <b-form-textarea
      id="textarea"
      v-model="content"
      placeholder="コメント内容を入力してください。ただし、以下を禁止します。
          ＊個人を特定できる内容
          ＊誹謗中傷を含む内容"
      rows="6"
      max-rows="6"
    ></b-form-textarea>
    <b-button class="mt-3" block @click="confirm()">確定</b-button>
  </div>
</template>

<script>
import firebase from "firebase/app";
import firestore from "@/plugins/firebase";

export default {
  props: {
    targetID: ""
  },
  data() {
    return {
      content: ""
    };
  },
  methods: {
    confirm() {
      //タイムスタンプの生成
      const date = new Date();
      const year = date.getFullYear() * 10000000000;
      const month = (date.getMonth() + 1) * 100000000;
      const day = date.getDate() * 1000000;
      const hour = date.getHours() * 10000;
      const minutes = date.getMinutes() * 100;
      const second = date.getSeconds() * 1;
      const timestamp = year + month + day + hour + minutes + second;
      const commentstr = this.content
      //コメントの追加
      firestore
        .collection("comment")
        .where("target", "==", this.targetID)
        .get()
        .then(res => {
          res.forEach(function(document) {
            firestore.collection("comment").doc(document.id).update({
              commentlist: firebase.firestore.FieldValue.arrayUnion({
                str: commentstr,
                timestamp: timestamp
              })
            });
          });
        });

      //コメント数の増加
      firestore
      .collection("content")
      .doc(this.targetID)
      .update({comment_num:firebase.firestore.FieldValue.increment(1)})
    }
  }
};
</script>

<style></style>
