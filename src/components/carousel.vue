<!--  -->
<template>
<el-carousel :interval="2000" type="card" height="240px">
    <el-carousel-item v-for="item in list" :key="item">
      <img width='110%' height='100%' :src="item.img"/>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
data() {
return {
    list:[
        {img:require('../assets/1.jpg')},
        {img:require('../assets/2.jpg')},
        {img:require('../assets/3.jpg')},
        {img:require('../assets/4.jpg')},
        {img:require('../assets/5.jpg')},
        {img:require('../assets/6.jpg')},
        ]
}
},
//生命周期 - 创建完成（访问当前this实例）
created() {

},
//生命周期 - 挂载完成（访问DOM元素）
mounted() {

}
}
</script>
<style scoped>
/* @import url(); 引入css类 */
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
</style>