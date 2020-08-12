<template>
  <main>
    <ul>
      <li class="mt-5">
      <post :content="'test'" :username="'H.N さん'" :commentnum="3"/>
      </li>
      <li class="mt-5">
      <post :content="'test'" :username="'H.N さん'" :commentnum="3"/>
      </li>
      <li class="mt-5">
      <post :content="'test'" :username="'H.N さん'" :commentnum="3"/>
      </li>
    </ul>
  </main>
</template>

<script>
import post from "@/components/otherPost"
export default {
  components:{
    post
  }
};
</script>
