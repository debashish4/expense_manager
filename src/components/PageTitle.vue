<template>
  <h3 class="page-title"><span v-if="backArrowVisiblity" @click="$router.back()" class="mr-5 text-lg">&#8678;</span>{{title}}</h3>
</template>

<script>
export default {


props: {
    title: {
        type: String,
        default: ""
    },
    backArrowVisiblity: {
      type: Boolean,
      default: false
    }
}
}
</script>

<style scoped>
.page-title {
  height: 50px;
  display: flex;
  align-items: center;
  background: #444;
  color: #fff;
  padding-left: 10px;
}
</style>