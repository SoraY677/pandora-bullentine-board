<template>
  <b-dropdown text="リアクション">
    <b-dropdown-item
      v-for="(reaction, index) in reactionList"
      :key="index"
      class="reaction-item"
      v-on:click="onReaction(reaction.symbol, index)"
    >
      {{ reaction.symbol + reaction.str }}
    </b-dropdown-item>
  </b-dropdown>
</template>

<script>
import firebase from "firebase/app";
import firestore from "@/plugins/firebase";

export default {
  props: {
    id: String,
  },
  data() {
    return {
      reactionList: [
        { str: "うーん？", symbol: "🤨" },
        { str: "わかる", symbol: "🤤" },
        { str: "うわっ", symbol: "😅" },
        { str: "やばすぎ！", symbol: "😱" },
        { str: "ｱｪｰ", symbol: "🤪" }
      ],
      prevReaction: -1,
      commentID:"",
    };
  },
  mounted() {
    // リアクション取得
    firestore
      .collection("reaction")
      .where("userid", "==", "0")
      .where("commentid", "==", this.id)
      .onSnapshot(res => {
        //リアクションがあれば
        if (!res.empty) {
          res.forEach(doc => {
            const num = doc.data().num;
            this.prevReaction = num;
            this.$emit("reactionSymbol", this.reactionList[num].symbol);
            this.commentID = doc.id
          });
        }
      });
  },
  methods: {
    async onReaction(symbol, index) {
      if (this.prevReaction != index) {
        const ap = await firestore
          .collection("content")
          .doc(this.id)
          .get()
          .then(res => {
            //今選択されたリアクションを+1
            const targetName = "reaction_" + index;
            const tmp = {};
            tmp[targetName] = firebase.firestore.FieldValue.increment(1);
            firestore
              .collection("content")
              .doc(this.id)
              .update(tmp);

            //一つ前のリアクションが新しいばあいに前のリアクションを変更
            if (this.prevReaction != -1) {
              //リアクション-1
              const prevTargetName = "reaction_" + this.prevReaction;
              const prevtmp = {};
              prevtmp[prevTargetName] = firebase.firestore.FieldValue.increment(
                -1
              );
              firestore
                .collection("content")
                .doc(this.id)
                .update(prevtmp);
              this.prevReaction = index;

              // //リアクションを更新
              firestore
                .collection("reaction")
                .doc(this.commentID)
                .update({num:index})
            }
          });
        this.$emit("reactionSymbol", symbol);
      }
    }
  }
};
</script>

<style scoped>
.reaction-item:hover {
  animation: scale-big 0.3s ease 0s 1 normal forwards;
}

@keyframes scale-big {
  0% {
    transform: scale(1);
  }
  10% {
    transform: scale(0.9);
  }
  100% {
    transform: scale(1.5);
  }
}
</style>
