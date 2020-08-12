<template>
  <b-card class="bg-primary text-center">
    <p class="text-white">
      投稿： 計
      <span class="sum-num">{{sum}}</span>
      件
    </p>
  </b-card>
</template>

<script>
export default {
  props:{
    sum : Number
  }
}
</script>

<style scoped>
.sum-num{
  font-size:3em;
}

</style>