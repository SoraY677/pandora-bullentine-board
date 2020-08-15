<template>
  <main class="top-page">
    <div class="bg-img">
        <div class="pt-5 explain">
          <ul class="message-box">
            <li class="pb-1">不満の対象や自身を匿名で投稿する。</li>
            <li class="pb-1">不満にリアクションする。</li>
            <li class="pb-1">自身の投稿に対するリアクションを楽しむ。</li>
            <li class="pb-1">嫌いな人への不満を分析する。</li>
            <li></li>
          </ul>
          <span class="pt-5 block">ようこそ。パンドラの掲示板へ。</span>
        </div>
        <div class="auth">
          <authform />
        </div>
    </div>
  </main>
</template>

<script>
import authform from "@/components/authform"

export default {
  layout: "toplayout",
  components:{
    authform
  }
};
</script>

<style scoped>
.top-page {
  position: relative;
}

.bg-img {
  display:relative;
  background-image: url("/top-bg.jpg");
  background-size: cover;
  height: 100%;
}

.explain{
  position: absolute;
  top:45%;
  left:10px;
  min-width:380px;
  width:30%;
  color:var(--white);
  font-size:1.4rem;
}

.message-box{
  border:2px solid var(--white);
  padding:0.8em;
  border-radius:10px;
  font-size:1.2rem;
}

.auth{
position: absolute;
  top:18%;
  left:50%;
  width:40%;
  z-index:100;
}
</style>
