<template>
    <img width="100%" height="100%" :src="img"/>
</template>

<script>
export default {
  name: 'Header',
  data(){
    return{
      img:require('../assets/5.jpg')
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
