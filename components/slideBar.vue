<template>
<div>
  <h3 class="p-2">menu</h3>
  <b-list-group>
    <b-list-group-item :to="'/'">
      ホーム
    </b-list-group-item>
    <b-list-group-item :to="'/mypage'">
      マイページ
    </b-list-group-item>
  </b-list-group>
</div>
</template>

<script>
export default {};
</script>

<style scoped>
a {
  width: 100%;
  height: 100%;
}
</style>
