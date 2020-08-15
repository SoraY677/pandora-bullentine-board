<template>
  <main>
    <div v-if="mainpost.length != 0">
      <post
        :id="mainpost[0].id"
        :content="mainpost[0].content"
        :username="mainpost[0].name"
        :commentnum="mainpost[0].comment_num"
        :reactionnum="
          mainpost[0].reaction_0 +
            mainpost[0].reaction_1 +
            mainpost[0].reaction_2 +
            mainpost[0].reaction_3 +
            mainpost[0].reaction_4
        "
        :commentmode="1"
      />
      <div class="comment-header-block">
        <h2 class="comment-list-title">コメント一覧</h2>
        <b-btn
          block
          variant="primary"
          @click="$bvModal.show('new-comment-modal')"
          >✐コメントを書き込む</b-btn
        >
      </div>
      <b-modal id="new-comment-modal" hide-footer ref="modal">
        <template v-slot:modal-title>
          コメント内容を入力してください
        </template>
        <modal :targetID="$route.query.id" @confirm="hideModal"/>
      </b-modal>
      <ul v-if="commentList.length != 0">
        <li
          v-for="comment in commentList"
          :key="comment.id"
          class="l-comment-item mt-2"
        >
          <comment :commentstr="comment" />
        </li>
      </ul>
    </div>
  </main>
</template>

<script>
import firestore from "@/plugins/firebase";

import post from "@/components/otherPost";
import modal from "@/components/newcommentmodal";
import comment from "@/components/comment";
export default {
  data() {
    return {
      mainpost: [],
      commentList: []
    };
  },
  components: {
    post,
    modal,
    comment
  },
  methods:{
    hideModal(){
      this.$refs["modal"].hide()
    }
  },
  beforeCreate() {
    //firebaseアクセス
    const db = firestore;

    db.collection("content")
      .doc(this.$route.query.id)
      .onSnapshot(res => {
        let contentLine = res.data();
        contentLine.id = res.id;
        const postcontent = [contentLine];
        this.mainpost = postcontent;
      });

    const content = [];
    db.collection("comment")
      .where("target", "==", this.$route.query.id)
      .onSnapshot(res => {
        res.forEach(document => {
          firestore
            .collection("comment")
            .doc(document.id)
            .onSnapshot(res2 => {
              content.splice(0);
              const commentlist = res2.data().commentlist;
                commentlist.forEach(res3 => {
                  let contentLine = res3;
                  content.push(contentLine.str);
                });
              this.commentList = content;
            });
        });
      });
  }
};
</script>

<style scoped>
.comment-list-title {
  padding: 0.3em;
  font-size: 1.2em;
  text-align: center;
}

.comment-header-block {
  padding: 0.5em 0.2em;
  background-color: var(--white);
  border-top: 10px solid rgba(0, 0, 0, 0.2);
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
  border-right: 1px solid rgba(0, 0, 0, 0.125);
  border-left: 1px solid rgba(0, 0, 0, 0.125);
}

.l-comment-item {
  width: 90%;
  margin: 0 auto;
}
</style>
