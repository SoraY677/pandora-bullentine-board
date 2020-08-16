<template>
  <div>
    <button class="nav-btn btn-red" @click="$bvModal.show('new-post-modal')">
      <span class="strong-font block rotate-anim">💋</span>
      <span class="block">投稿</span>
    </button>
    <b-modal id="new-post-modal" hide-footer ref="post-modal">
      <template v-slot:modal-title>
        投稿内容を入力してください
      </template>
      <modal @confirm="hideModal" :targetList="targetLists" v-if="targetLists.length != 0"/>
    </b-modal>
  </div>
</template>

<script>
import modal from "@/components/newpostmodal";
export default {
  props:{
    targetLists:Array
  },
  components: {
    modal
  },
  methods:{
    hideModal(){
      this.$refs["post-modal"].hide()
    }
  }
};
</script>

<style scoped>
.nav-btn {
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  border: 2px solid;
  color: var(--white);
  font-size: 1.3rem;
  transition-duration: 0.3s;
}

.nav-btn:hover {
  background-color: var(--white);
  transform: scale(1.2);
}

.nav-btn:focus {
  outline: none;
}

.nav-btn:hover > .rotate-anim {
  animation: rotate 0.3s ease 0s 1 normal forwards;
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(45deg);
  }
}

@keyframes rotate-back {
  0% {
    transform: rotate(45deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

.btn-red {
  background-color: var(--red);
  border-color: var(--red);
}

.btn-red:hover {
  color: var(--red);
}

.btn-blue {
  background-color: var(--cyan);
  border-color: var(--cyan);
}

.btn-blue:hover {
  color: var(--cyan);
}
</style>
