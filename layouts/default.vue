<template>
  <div>
    <Myheader />
    <div class="content">
    <sidelink class="float-left l-side-link"/>
    <nuxt class="float-left l-main-content"/>
    </div>
  </div>
</template>

<script>
import Myheader from "~/layouts/myheader"
import sidelink from "~/layouts/sidelink"
export default {
  components:{
    Myheader,
    sidelink,
  }
}
</script>

<style>

.l-side-link{
  width:20%;
}

.l-main-content{
  width:80%;
}



/* common setting */

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

.content{
  height:90vh;
}

main{
  height:100%;
  overflow-x: auto;
  margin:0 auto;
  background-color:var(--light);
}

ul{
  list-style: none;
  margin:0;
  padding:0;
}

h1{
  margin:0;
}

p{
  margin:0;
  padding:0;
}

a,a:hover{
  color:#2e2e2e;
  text-decoration: none;
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

.strong-font{
  font-size:1.8em;
}

.block{
  display:block;
}



</style>
