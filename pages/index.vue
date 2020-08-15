<template>
  <main>
    <div class="post-content">
      <ul>
        <li v-for="item in contentList" :key="item.id" class="mb-1">
          <post
            :id="item.id"
            :content="item.content"
            :username="item.name"
            :commentnum="item.comment_num"
            :commentmode="0"
            :reactionnum="
              item.reaction_0 +
                item.reaction_1 +
                item.reaction_2 +
                item.reaction_3 +
                item.reaction_4
            "
            @selectcomment="getID"
          />
        </li>
      </ul>
    </div>
    <div class="l-post-btn">
      <postbtn />
    </div>
    <b-modal id="new-comment-modal" hide-footer ref="new-comment-modal">
      <template v-slot:modal-title>
        コメント内容を入力してください
      </template>
      <commentmodal :targetID="targetID" @confirm="hidemodal"/>
    </b-modal>
  </main>
</template>

<script>
import firestore from "@/plugins/firebase";

import postbtn from "@/components/postbtn";
import post from "@/components/otherPost";
import commentmodal from "@/components/newcommentmodal";
export default {
  data() {
    return {
      targetID: "",
    };
  },
  async asyncData({ params }) {
    const db = firestore;
    const content = [];
    db.collection("content")
      .orderBy("timestamp", "desc")
      .limit(20)
      .onSnapshot(res => {
        content.splice(0);
        res.forEach(doc => {
          let contentLine = doc.data();
          contentLine.id = doc.id;
          content.push(contentLine);
        });
      });
    return {
      contentList: content
    };
  },
  components: {
    post,
    postbtn,
    commentmodal
  },
  methods: {
    getID(id) {
      this.targetID = id
    },
    hidemodal(){
      this.$refs['new-comment-modal'].hide()
    }
  }
};
</script>

<style scoped>
.l-sidenav {
  position: fixed;
  z-index: 50;
  top: 110px;
}

.post-content {
  float: right;
  width: 100%;
  min-height: 92vh;
  background-color: var(--light);
  padding: 0.3em 1.3em 0 1.3em;
  border-right: 1px solid #ccc;
  border-left: 1px solid #ccc;
}

.l-post-btn {
  position: absolute;
  bottom: 20px;
  left: 20px;
}
</style>
