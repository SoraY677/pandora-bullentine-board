<template>
  <ul>
    <li v-for="link in linkList" :key="link.id" class="side-link-menu-item">
      <n-link :to="link.url" class="side-link-element">{{link.title}}</n-link>
      </li>
  </ul>
</template>

<script>
export default {
  data(){
    return{
      linkList:[
        {title:"💡最新の話題",url:"/"},
         {title:"🔥ホットな話題",url:"/hot"},
        {title:"👤マイページ",url:"/mypage"},
        {title:"🔑設定",url:"/setting"},
        {title:"🚪ログアウト",url:"/top"},
       
      ]
    }
  }
}
</script>

<style scoped>
.side-link-menu-item{
  border-bottom:1px solid var(--gray);
}

.side-link-element{
  display: block;
  padding:1.2em 0 1.2em 0.8em;
  transition-duration: 0.3s;
}

.side-link-element:hover{
  color:var(--white);
  background-color:var(--primary);
}
</style>