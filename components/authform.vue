<template>
  <div class="authform-container text-center">
    <div class="mb-4">
      <div class="mt-2">
        <span class="sub-title pl-2">ユーザ名</span>
        <input
          type="text"
          class="text-box block"
          placeholder="ユーザーID"
          v-model="userid"
        />
      </div>
      <div class="mt-2">
        <span class="sub-title pl-2">パスワード</span>
        <input
          type="password"
          class="text-box block"
          placeholder="パスワード"
          v-model="password"
        />
      </div>
      <p class="text-center mt-2">
        <b-btn variant="primary" @click="login()">ログイン</b-btn>
      </p>
      <b-alert v-model="alert" variant="danger" dismissible class="m-2">
        内容入力は必須です！
      </b-alert>
    </div>
  </div>
</template>

<script>
import firestore from "@/plugins/firebase";

export default {
  data() {
    return {
      userid: "",
      password: "",
      alert: false
    };
  },
  methods: {
    login() {
      if (this.userid == "" || this.password == "") {
        this.alert = true;
      } else {
        firestore
          .collection("user")
          .where("userid", "==", this.userid)
          .where("password", "==", this.password)
          .get()
          .then(res => {
            //存在しない場合
            if (res.empty == true) {
              firestore
                .collection("user")
                .add({
                  userid: this.userid,
                  password: this.password,
                  filter: false
                })
                .then(res => {
                  this.$store.commit("regist", res.id, false);
                  this.$router.push("/");
                });
            } else {
              res.forEach((doc)=>{
                this.$store.commit("regist", doc.id, doc.data().filter);
                this.$router.push("/");
              })
            }
          });
      }
    }
  }
};
</script>

<style scoped>
.authform-container {
  background-color: rgba(255, 255, 255, 0.67);
  padding: 1em;
}

.text-box {
  background-color: rgba(0, 0, 0, 0);
  margin: 0 auto;
}

.sub-title {
  display: block;
  font-size: 0.7rem;
}

.guide-text {
  display: block;
  font-size: 0.9em;
  padding: 0.2em 0.5em;
  border: 1.5px solid var(--gray);
  border-radius: 3px;
}
</style>
