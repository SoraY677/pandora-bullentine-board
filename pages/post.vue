<template>
  <main>
    <div v-if="mainpost.length != 0">
    <post :id="mainpost.id" :content="mainpost.content" :username="mainpost.name" :commentnum="mainpost.comment_num" :commentmode="1"/>
    <h2 class="comment-list-title">コメント一覧</h2>
    <ul>
      <li v-for="comment in commentList" :key="comment.id">hoge</li>
    </ul>
    </div>
  </main>
</template>

<script>
import firestore from "@/plugins/firebase";

import post from "@/components/otherPost";
export default {
  data(){
    return{
    mainpost:[],
    commentList:Array
    }
  },
  components:{
    post
  },
  beforeCreate(){
    //firebaseアクセス
    const db = firestore;
    db.collection("content").doc(this.$route.query.id).get().then(res => {
      let contentLine = res.data()
      contentLine.id = res.id
      this.mainpost = contentLine
      console.log(this.mainpost.name)
    })

  }
}
</script>

<style scoped>
.comment-list-title{
  padding:0.3em;
  font-size:1.2em;
  text-align: center;
  background-color:var(--white);
  border-top:10px solid rgba(0, 0, 0, 0.2);
  border-bottom:1px solid rgba(0, 0, 0, 0.125);
  border-right:1px solid rgba(0, 0, 0, 0.125);
  border-left:1px solid rgba(0, 0, 0, 0.125);
}
</style>
