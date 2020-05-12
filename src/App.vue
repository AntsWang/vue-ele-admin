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
    this.$request.get("htt://wwww/baidu.com").then(data => {
      console.log(data);
    });
  },
  methods: {}
};
</script>

<style>
</style>
