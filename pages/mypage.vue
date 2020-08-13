<template>
 <div>
   <div class="post-sum-container mx-auto py-3">
   <postsum :sum="200"/>
   </div>
   <ul class="mypost-container mx-auto">
     <li><mypost :username="'H.N'" :postnum="20"/></li>
   </ul>
 </div>
</template>

<script>
import postsum from "@/components/postSum"
import mypost from "@/components/mypost"

export default {
  components:{
    postsum,
    mypost
  }
}
</script>

<style>

.post-sum-container{
  width:30%;
  min-width:380px
}

.mypost-container{
  width:85%;
}

</style>