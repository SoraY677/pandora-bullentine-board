<template>
  <main class="p-5">
    <b-card class="px-3">
      <span class="sub-title">利用者情報</span>
      <div class="pl-5 pt-3 overflow-hidden">
        <div class="float-left">
          <b-avatar size="10rem"></b-avatar>
        </div>
        <div class="float-left pl-4 user-box">
          <!-- 利用者名 -->
          <div>
            <span class="block pt-2">利用者名</span>
            <span class="strong-box pl-3">T.U</span>
          </div>
          <!-- パスワード -->
          <span class="block pt-2">パスワード</span>
          <span class="strong-box pl-3">********</span>
        </div>
      </div>
    </b-card>
    <b-card class="px-3 mt-3" v-if="targetList.length != 0">
      <span class="sub-title">登録対象者リスト</span>
      <b-list-group class="mt-2">
        <b-list-group-item
          v-for="targetName in targetList"
          :key="targetName.id"
          >{{ targetName }}</b-list-group-item
        >
      </b-list-group>

      <div class="mt-5 pm-2">
        <span class="block">新規登録者情報の入力</span>
        <div class="mt-2 overflow-hidden">
          <b-form-select
            v-model="targetHead"
            :options="alphabetList"
            class="w-50 float-left"
          ></b-form-select>
          <b-form-select
            v-model="targetTail"
            :options="alphabetList"
            class="w-50 float-left"
          ></b-form-select>
        </div>
        <b-alert
          v-model="addTargetAlert"
          variant="danger"
          dismissible
          class="m-2"
        >
          内容入力は必須です！
        </b-alert>
        <b-btn
          block
          class="block mt-2"
          variant="primary"
          @click="addNewTarget()"
          >登録</b-btn
        >
      </div>
    </b-card>
  </main>
</template>

<script>
import firestore from "@/plugins/firebase";

export default {
  data() {
    return {
      targetHead: "",
      targetTail: "",
      addTargetAlert: false,
      alphabetList: [
        { value: "", text: "英単語を選択" },
        { value: "A", text: "A" },
        { value: "B", text: "B" },
        { value: "C", text: "C" },
        { value: "D", text: "D" },
        { value: "E", text: "E" },
        { value: "F", text: "F" },
        { value: "G", text: "G" },
        { value: "H", text: "H" },
        { value: "I", text: "I" },
        { value: "J", text: "J" },
        { value: "K", text: "K" },
        { value: "L", text: "L" },
        { value: "M", text: "M" },
        { value: "N", text: "N" },
        { value: "O", text: "O" },
        { value: "P", text: "P" },
        { value: "Q", text: "Q" },
        { value: "R", text: "R" },
        { value: "S", text: "S" },
        { value: "T", text: "T" },
        { value: "U", text: "U" },
        { value: "V", text: "V" },
        { value: "W", text: "W" },
        { value: "X", text: "X" },
        { value: "Y", text: "Y" },
        { value: "Z", text: "Z" }
      ],
      targetList:[]
    };
  },
  // mounted() {
  //   const targetNameList = [];
  //   firestore
  //     .collection("target")
  //     .where("userid", "==", this.$store.state.id)
  //     .onSnapshot(res => {
  //       targetNameList.splice(0); //配列初期化
  //       res.forEach(doc => {
  //         const targetName = doc.data().name;
  //         targetNameList.push(targetName);
  //       });
  //     });

  //   this.targetList = targetNameList;
  // },

  async asyncData({ param }) {
    const targetNameList = [];
    firestore
      .collection("target")
      .where("userid", "==", "0")
      .onSnapshot(res => {
        targetNameList.splice(0); //配列初期化
        res.forEach(doc => {
          const targetName = doc.data().name;
          targetNameList.push(targetName);
        });
      });
    return {
      targetList: targetNameList
    };
  },
  methods: {
    addNewTarget() {
      if (this.targetHead != "" && this.targetTail != "") {
        this.addTargetAlert = false;
        const name = this.targetHead + "." + this.targetTail;
        firestore.collection("target").add({
          userid: "0",
          name: name
        });
        this.targetHead = "";
        this.targetTail = "";
      } else {
        this.addTargetAlert = true;
      }
    }
  }
};
</script>

<style scoped>
.strong-box {
  font-size: 2rem;
  width: 100%;
}

.user-box {
  width: 60%;
}
.sub-title {
  padding: 0.2rem;
  font-size: 0.8rem;
  color: #888;
  border: 1px solid #888;
  border-radius: 5px;
}
</style>
