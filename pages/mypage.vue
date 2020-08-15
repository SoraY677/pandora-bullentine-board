<template>
  <main>
    <div v-if="contentList.length != 0">
      <div class="post-sum-container mx-auto py-3">
        <postsum :sum="contentList[0].post_sum" />
      </div>
      <ul class="mypost-container mx-auto">
        <li v-for="content in contentList[0].target" :key="content.id">
          <mypost
            :username="content.name"
            :postnum="content.post_num"
            :percentage="content.reaction"
          />
        </li>
      </ul>
    </div>
  </main>
</template>

<script>
import firestore from "@/plugins/firebase";

import postsum from "@/components/postSum";
import mypost from "@/components/mypost";

export default {
  async asyncData({ params }) {
    const db = firestore;
    const content = [];
    db.collection("userpage")
      .get()
      .then(res => {
        res.forEach(doc => {
          content.push(doc.data());
        })
      });
    return {
      contentList: content
    };
  },
  components: {
    postsum,
    mypost
  }
};
</script>

<style>
.post-sum-container {
  width: 30%;
  min-width: 380px;
}

.mypost-container {
  width: 85%;
}
</style>
