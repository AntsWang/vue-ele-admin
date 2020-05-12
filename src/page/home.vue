<!--  -->
<template>
  <div>
    <div class="chartWraper">
      <div class="echart" id="echart1">index</div>
      <div class="echart" id="echart2">index</div>
    </div>
    <div class="chartWraper">
      <div class="echart" id="echart3">index</div>
      <div class="echart" id="echart4">index</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {
    this.init();
  },
  methods: {
    init() {
      // 基于准备好的dom，初始化echarts实例
      let myChart1 = this.$echarts.init(document.getElementById("echart1")),
        myChart2 = this.$echarts.init(document.getElementById("echart2")),
        myChart3 = this.$echarts.init(document.getElementById("echart3")),
        myChart4 = this.$echarts.init(document.getElementById("echart4"));

      // 指定图表的配置项和数据
      let option1 = {
        title: {
          text: "第一个 ECharts 实例"
        },
        tooltip: {},
        legend: {
          data: ["销量"]
        },
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      };
      let option2 = {
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: "line",
            areaStyle: {}
          }
        ]
      };
      let option3 = {
        title: {
          text: "某站点用户访问来源",
          subtext: "纯属虚构",
          left: "center"
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          left: "left",
          data: ["直接访问", "邮件营销", "联盟广告", "视频广告", "搜索引擎"]
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: "55%",
            center: ["50%", "60%"],
            data: [
              { value: 335, name: "直接访问" },
              { value: 310, name: "邮件营销" },
              { value: 234, name: "联盟广告" },
              { value: 135, name: "视频广告" },
              { value: 1548, name: "搜索引擎" }
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ]
      };

      // 使用刚指定的配置项和数据显示图表。
      myChart1.setOption(option1);
      myChart2.setOption(option2);
      myChart3.setOption(option3);
      myChart4.setOption(option1);
    }
  }
};
</script>
<style scoped>
/* @import url(); 引入css类 */
.chartWraper {
  display: flex;
}
.echart {
  height: 402px;
  flex:1;
}
</style>