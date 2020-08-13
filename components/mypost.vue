<template>
  <b-card>
    <!-- ユーザ名 -->
    <div class="text-center flex-center">
      <b-avatar></b-avatar>
      <span class="strong-font ml-2">{{ username }}</span>
    </div>

    <div class="divide-line"></div>
    <div class="text-center py-4">
      <!-- 投稿合計 -->
      <div>
        <h2 class="about-title">投稿</h2>
        <span class="strong-font">{{ postnum }}</span>
        件
      </div>
      <div class="divide-line"></div>
      <!-- 分析部分 -->
      <div class="py-4">
        <h2 class="about-title mb-2">内訳</h2>
        <canvas ref="myChart"></canvas>
      </div>
    </div>
  </b-card>
</template>

<script>
require("chart.js")

export default {
  props: {
    postnum: Number,
    username: String
  },
  mounted() {
    var ctx = this.$refs.myChart.getContext("2d");
    var chart = new Chart(ctx, {
      // The type of chart we want to create
      type: "doughnut",

      // The data for our dataset
      data: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July"
        ],
        datasets: [
          {

            backgroundColor: ["rgb(255, 99, 132)","rgb(255, 120, 132)","rgb(255, 150, 132)","rgb(255, 180, 132)","rgb(255, 99, 132)","rgb(255, 99, 132),","rgb(255, 99, 132)"],
            data: [0, 10, 5, 2, 20, 30, 45]
          }
        ]
      },

      // Configuration options go here
      options: {
        legend: {
            display: false
         }
      }
    });
  }
};
</script>

<style scoped>
.about-title{
  width:fit-content;
  padding:5px 8px;
  margin:0 auto;
  font-size:1em;
  color:#888;
  border:1px solid #888;
  border-radius: 5px;
}

.strong-font {
  font-size:2em;
}
</style>
