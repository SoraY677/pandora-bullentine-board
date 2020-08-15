<template>
  <div>
    <b-form-textarea
      id="textarea"
      v-model="content"
      placeholder="コメント内容を入力してください。ただし、以下を禁止します。
          ＊個人を特定できる内容
          ＊誹謗中傷を含む内容"
      rows="6"
      max-rows="6"
    ></b-form-textarea>
    <b-button class="mt-3" block @click="confirm()">確定</b-button>
  </div>
</template>

<script>
export default {
  data(){
    return{
      content:""
    }
  }
};
</script>

<style></style>
