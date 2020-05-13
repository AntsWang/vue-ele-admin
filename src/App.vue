<template>
  <router-view></router-view>
</template>

<script>
import Index from "./page/index";
export default {
  name: "app",
  components: {
    Index
  },
  created() {
    this.$request.get("/api").then(data => {
      console.log(data);
    }).catch((err)=>{
           console.log(err);
    });
  },
  methods: {}
};
</script>

<style>
</style>
