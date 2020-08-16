<template>
  <main>
    <div v-if="contentList.length != 0">
      <div class="post-sum-container mx-auto py-3">
        <postsum :sum="contentList[0].postsum" />
      </div>
      <ul class="mypost-container mx-auto" v-if="contentList[0].targetList.length != 0">
        <li v-for="content in contentList[0].targetList" :key="content.id">
          <mypost
            :username="content.name"
            :postnum="content.postnum"
            :percentage="[content.reaction_0,content.reaction_1,content.reaction_2,content.reaction_3,content.reaction_4]"
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
    const content = [];
    let result = {};
    result.postsum = 0;
    result.targetList = [];
    const targetIDList = [];
    //各対象者を初期化
    firestore
      .collection("target")
      .where("userid", "==", "0")
      .onSnapshot(async res => {
        let i = 0;
        await res.forEach(doc => {
          //1対象者情報を取得
          const target = doc.data();
          targetIDList.push(doc.id); //id登録
          //結果用のObject
          result.targetList.push({});
          result.targetList[i].name = target.name;
          result.targetList[i].postnum = 0
          result.targetList[i]["reaction_0"] = 0;
          result.targetList[i]["reaction_1"] = 0;
          result.targetList[i]["reaction_2"] = 0;
          result.targetList[i]["reaction_3"] = 0;
          result.targetList[i]["reaction_4"] = 0;
          i += 1;
        });

        //各対象者ごとにクエリを実行し、データを取得
        for (let j = 0; j < targetIDList.length; j++) {
          
          firestore
            .collection("content")
            .where("target", "==", targetIDList[j])
            .onSnapshot(res => {
              res.forEach(doc => {
                result["postsum"] += 1; // カウントを増やす
                const post = doc.data();
                result.targetList[j].postnum += 1;
                result.targetList[j]["reaction_0"] += post["reaction_0"];
                result.targetList[j]["reaction_1"] += post["reaction_1"];
                result.targetList[j]["reaction_2"] += post["reaction_2"];
                result.targetList[j]["reaction_3"] += post["reaction_3"];
                result.targetList[j]["reaction_4"] += post["reaction_4"];
              });
            });
        }
      });
    content.splice(0);
    content.push(result);
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
