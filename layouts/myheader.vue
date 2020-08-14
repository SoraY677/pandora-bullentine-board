<template>
  <div>
    <header class="page p-10">
      <b-button v-b-toggle.slide_bar class="slide-bar-btn p-1" squared variant="outline-primary">
        <div class="menu-bar-container">
          <span class="menu-bar"></span>
          <span class="menu-bar"></span>
          <span class="menu-bar"></span>
        </div>
        <span class="menu-sub">menu</span>
      </b-button>
      <h1 class="page-title">{{ getPageName }}</h1>
      <b-sidebar class="slide-bar-container" id="slide_bar" backdrop shadow>
        <slidebar />
      </b-sidebar>
      <b-btn class="float-right my-1 mx-2" variant="primary">?</b-btn>
      <div class="search-box-container">
        <searchbox class="float-right" />
      </div>
      
    </header>
  </div>
</template>

<script>
import searchbox from "@/components/searchBox";
import slidebar from "@/components/slideBar";
export default {
  components: {
    searchbox,
    slidebar
  },
  computed: {
    getPageName() {
      const path = this.$route.name;
      switch (path) {
        case "index":
          return "ホーム";
        case "mypage":
          return "マイページ";
        case "hot":
          return "ホットな話題";
        default:
          return "";
      }
    }
  }
};
</script>

<style>
header.page {
  z-index: 100;
  width: 100%;
  height:10vh;
  padding:10px 20px;
  overflow: hidden;
  border-bottom: 1px solid #bbb;
  box-shadow: 1px 1px 1px 1px #ddd;
  background-color: var(--white);
}

.block {
  display: block;
}

.menu-bar-container{
  position: relative;
  width:100%;
  height:1.5rem;
  padding:5px;
}

button:hover .menu-bar{
  background-color:var(--white);
}

.menu-bar{
  position:absolute;
  content:'';
  height:4px;
  width:80%;
  margin:0 auto;
  background-color:var(--primary);
  transform:translateX(-50%);
}

.menu-bar:nth-child(1){
  top:10%
}

.menu-bar:nth-child(2){
  top:50%;
  transform:translateX(-50%) translateY(-50%)
}

.menu-bar:nth-child(3){
  bottom:10%;
}

.menu-sub{
  font-size:0.9em;
}

.search-box-container {
  width: 50%;
  float: right;
}

.slide-bar-btn {
  float: left;
}



.page-title {
  display: inline-block;
  margin-left: 0.5em;
  padding: 0.2em 0 0.3em 0.4em;
  align-items: center;
  font-size: 1.4em;
  border-left: 1.5px solid var(--gray);
}

.question{
  float:right;
  margin:5px 0 5px 5px;
}

@media screen and (min-width:900px) { 
    .slide-bar-btn{
      display: none;
    }
}
</style>
