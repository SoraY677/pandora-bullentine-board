<template>
  <div class="authform-container text-center">
    <div class="mb-4">
      <span class="guide-text">アカウントをお持ちの場合</span>
      <div class="mt-2">
      <span class="sub-title pl-2">ユーザ名</span>
      <input type="text" class="text-box block" placeholder="ユーザーID" />
      </div>
      <div class="mt-2">
      <span class="sub-title pl-2">パスワード</span>
      <input type="text" class="text-box block" placeholder="パスワード" />
      </div>
      <p class="text-center mt-2">
        <b-btn variant="primary" @click="login()">ログイン</b-btn>
      </p>
    </div>
    <div>
      <span class="guide-text mb-1">アカウントをまだ持っていない場合</span>
      <b-btn variant="primary" class="block mx-auto">新規登録</b-btn>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    login(){
      this.$router.push("/")
    }
  }
};
</script>

<style scoped>
.authform-container {
  background-color: rgba(255, 255, 255, 0.4);
  padding: 1em;
}

.text-box {
  background-color: rgba(0, 0, 0, 0);
  margin:0 auto;
}

.sub-title{
  display: block;
  font-size:0.7rem;
}

.guide-text{
  display: block;
  font-size:0.9em;
  padding:0.2em 0.5em;
  border:1.5px solid var(--gray);
  border-radius:3px;
}
</style>
