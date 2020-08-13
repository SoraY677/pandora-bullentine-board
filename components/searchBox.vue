<template>
  <input type="text" class="search-box bg-blue" placeholder="🔍キーワード検索"/>
</template>

<script>
export default {

}
</script>

<style scoped>
.search-box{
  display: block;
  width:10em;
  padding:0.4em 0.5em;
  border:1px solid #888;
  font-size:1.2em;
  outline: none;
  border-radius: 20px;
  color:var(--white);
  background-color: #bbb;
  transition-duration: 0.3s;
  float:right;
}

.search-box::placeholder{
  color:#fff;
}


.search-box:focus::placeholder{
  color:var(--gray);
}

.search-box:focus{
  width:100%;
  outline: none;
  color:var(--gray-dark);
  border-color:#007bff;
  background-color:#fff;
}
</style>