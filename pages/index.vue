<template>
  <main>
    <div class="post-content">
    <ul>
      <li v-for="item in contentList" :key="item.id" class="mb-1">
        <post :content="item.content" :username="item.name" :commentnum="item.comment_num" />
      </li>
    </ul>
    </div>
  </main>
</template>

<script>
import firestore from "@/plugins/firebase";

import post from "@/components/otherPost";
export default {
  async asyncData({params}){
    const db = firestore;
    const content = []
    db.collection("content").get().then(res => {
      res.forEach(doc=>{
        content.push(doc.data())
      });
    })
    return {
      contentList:content,
      
    }

  },
  components: {
    post
  }
};
</script>

<style scoped>
.l-sidenav{
  position:fixed;
  z-index:50;
  top:110px;
}

.post-content{
  float:right;
  width:100%;
  min-height:92vh;
  background-color:var(--light);
  padding:0.3em 0.3em 0 0.3em;
  border-right:1px solid #ccc;
  border-left:1px solid #ccc;
}
</style>