<template>
  <b-dropdown text="リアクション">
    <b-dropdown-item v-for="(reaction,index) in reactionList" :key="index" class="reaction-item" v-on:click="onReaction(reaction.symbol)" >
      {{reaction.symbol + reaction.str}}
    </b-dropdown-item>
  </b-dropdown>
</template>

<script>
export default {
  data(){
    return{
      reactionList:[
        {str:"うーん？",symbol:"🤨"},
        {str:"わかる",symbol:"🤤"},
        {str:"うわっ",symbol:"😅",},
        {str:"やばすぎ！",symbol:"😱"},
        {str:"あえー",symbol:"🤪"}
      ]
    }
  },
  methods:{
    onReaction(symbol){
      this.$emit('reactionSymbol',symbol)
    }
  }
};
</script>

<style scoped>
.reaction-item:hover {
  animation: scale-big 0.3s ease 0s 1 normal forwards;
}

@keyframes scale-big {
  0% {
    transform: scale(1);
  }
  10% {
    transform: scale(0.9);
  }
  100% {
    transform: scale(1.5);
  }
}
</style>
