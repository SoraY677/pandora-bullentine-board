<template>
  <div class="comment-box p-3">
    <span class="block comment-sub-title pb-2">💬comment:</span>
    <p class="comment-box-text">{{commentstr}}</p>
  </div>
</template>

<script>
export default {
  props:{
    commentstr:""
  }
}
</script>

<style scoped>
.comment-box{
  background-color:var(--white);
  border: 1px solid rgba(0, 0, 0, 0.125);
}

.comment-sub-title{
  padding-left:3em;
}

.comment-box-text{
  width:80%;
  padding:0.8em;
  margin:0 auto;
  border:1px solid var(--gray)
}
</style>