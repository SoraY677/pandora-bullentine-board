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
          />
        </li>
      </ul>
    </div>
  </main>
</template>

<script>
import firestore from "@/plugins/firebase";

import post from "@/components/otherPost";
export default {
  async asyncData({ params }) {
    const db = firestore;
    const content = [];
    db.collection("content")
      .orderBy("timestamp", "desc")
      .limit(20)
      .get()
      .then(res => {
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
    post
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
  padding: 0.3em 0.3em 0 0.3em;
  border-right: 1px solid #ccc;
  border-left: 1px solid #ccc;
}
</style>
