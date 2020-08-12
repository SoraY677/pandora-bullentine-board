<template>
  <div>
    <Myheader />
    <nuxt />
  </div>
</template>

<script>
import Myheader from "~/layouts/myheader"
export default {
  components:{
    Myheader
  }
}
</script>

<style>
html {
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

main{
  width:80%;
  margin:0 auto;
  padding-top:20px
}

ul{
  list-style: none;
  margin:0;
  padding:0;
}

p{
  margin:0;
  padding:0;
}

.flex-center{
  display:flex;
  justify-content: center;
  align-items: center;
}

.divide-line{
  width:80%;
  padding:3px 0;
  margin:0 auto;
  border-bottom:1px solid #dedede;
  
}


</style>
