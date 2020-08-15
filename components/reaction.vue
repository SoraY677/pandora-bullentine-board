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
    id: String
  },
  data() {
    return {
      reactionList: [
        { str: "うーん？", symbol: "🤨" },
        { str: "わかる", symbol: "🤤" },
        { str: "うわっ", symbol: "😅" },
        { str: "やばすぎ！", symbol: "😱" },
        { str: "ｱｪｰ", symbol: "🤪" }
      ]
    };
  },
  methods: {
    onReaction(symbol, index) {
      const ap = firestore
        .collection("content")
        .doc(this.id)
        .get()
        .then(res => {
          const targetName = "reaction_" + index;
          const targetNum = res.data()[targetName];
          const tmp = {};
          tmp[targetName] = firebase.firestore.FieldValue.increment(
            targetNum + 1
          );
          firestore
            .collection("content")
            .doc(this.id)
            .update(tmp);
        });
      this.$emit("reactionSymbol", symbol);
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
