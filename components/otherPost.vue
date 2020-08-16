<template>
  <b-card>
    <div class="other-post">
      <div>
        <!-- 投稿 -->
        <div class="post-content-container p-3">
          <!-- 投稿文 -->
          <p class="post-content p-3">{{ content }}</p>

          <div class="px-1 pt-1">
            <!-- リアクション -->
            <reaction :id="id" @reactionSymbol="changeReaction" />
            <span v-if="reactionSymbol != ''" class="reaction-symbol">{{
              reactionSymbol
            }}</span>
            {{ reactionnum }}件
            <!-- コメント -->
            <div class="float-right" v-if="commentmode === 0">
              <nuxt-link :to="'/post?id=' + id" class="show-comment">
                <span>コメント{{ String(commentnum) }}件</span>
              </nuxt-link>
              <b-btn @click="selectpost()">コメントする</b-btn>
            </div>
          </div>
        </div>
      </div>

      <!-- アイコンと名前 -->
      <div class="other-icon flex-center">
        <div>
          <b-avatar></b-avatar>
          <span class="block">{{ username }}</span>
        </div>
      </div>
    </div>
  </b-card>
</template>

<script>

import reaction from "@/components/reaction";

export default {
  components: {
    reaction
  },
  data() {
    return {
      reactionSymbol: ""
    };
  },
  props: {
    id: String,
    content: String,
    username: String,
    commentnum: 0,
    commentmode: 0,
    reactionnum: 0
  },
  methods: {
    changeReaction(symbol) {
      this.reactionSymbol = symbol;
    },
    selectpost() {
      this.$emit("selectcomment", this.id);
      this.$bvModal.show("new-comment-modal");
    }
  },
};
</script>

<style scoped>
.other-post {
  display: grid;
  grid-template-columns: 1fr 80px;
}

.post-content-container {
  width: 100%;
  height: 100%;
  float: left;
}

.post-content {
  border: 1px solid #ddd;
}

.other-icon {
  text-align: center;
  width: 100%;
  height: 100%;
  float: left;
}

.reaction-symbol {
  font-size: 1.3em;
}

.show-comment {
  color: var(--primary);
  transition-duration: 0.3s;
}

.show-comment:hover {
  opacity: 0.5;
}
</style>
