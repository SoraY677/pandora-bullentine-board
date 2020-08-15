<template>
  <main>
    <div v-if="mainpost.length != 0">
    <post :id="mainpost.id" :content="mainpost.content" :username="mainpost.name" :commentnum="mainpost.comment_num" :commentmode="1"/>
    <div class="comment-header-block">
    <h2 class="comment-list-title">コメント一覧</h2>
    <b-btn block variant="primary" @click="$bvModal.show('new-comment-modal')">✐コメントを書き込む</b-btn>
    </div>
    <b-modal id="new-comment-modal" hide-footer>
      <template v-slot:modal-title>
        コメント内容を入力してください
      </template>
      <modal />
    </b-modal>
    <ul v-if="commentList.length != 0">
      <li v-for="comment in commentList" :key="comment.id" class="l-comment-item mt-2">
        <comment :commentstr="comment" />
      </li>
    </ul>
    </div>
  </main>
</template>

<script>
import firestore from "@/plugins/firebase";

import post from "@/components/otherPost";
import modal from "@/components/newcommentmodal"
import comment from "@/components/comment"
export default {
  data(){
    return{
    mainpost:[],
    commentList:[]
    }
  },
  components:{
    post,
    modal,
    comment
  },
  beforeCreate(){
    //firebaseアクセス
    const db = firestore;
    db.collection("content").doc(this.$route.query.id).get().then(res => {
      let contentLine = res.data()
      contentLine.id = res.id
      this.mainpost = contentLine
    })

    db.collection("comment").doc(this.$route.query.id).get().then(res => {
      this.commentList = res.data().commentList;
    })

  }
}
</script>

<style scoped>
.comment-list-title{
  padding:0.3em;
  font-size:1.2em;
  text-align: center;
}

.comment-header-block{
  padding:0.5em 0.2em;
  background-color:var(--white);
  border-top:10px solid rgba(0, 0, 0, 0.2);
  border-bottom:1px solid rgba(0, 0, 0, 0.125);
  border-right:1px solid rgba(0, 0, 0, 0.125);
  border-left:1px solid rgba(0, 0, 0, 0.125);
}

.l-comment-item{
  width:90%;
  margin:0 auto;
}
</style>
