<template>
  <header class="p-3">
    <nuxt-link to="/">
    <b-avatar></b-avatar>
    </nuxt-link>
    <b-row class="float-right text-center" cols="2">
      <b-col>
        <b-avatar></b-avatar>
        <span class="block">投稿</span>
      </b-col>
      <b-col>
        <nuxt-link to="mypage">
          <b-avatar></b-avatar>
          <span class="block">MyPage</span>
        </nuxt-link>
      </b-col>
    </b-row>
  </header>
</template>

<script>
export default {};
</script>

<style>
header {
  height: 6em;
  border-bottom: 1px solid #ededed;
}

.block {
  display: block;
}
</style>
