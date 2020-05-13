<template>
  <el-form
    ref="ruleForm"
    :rules="rules"
    class="form"
    :label-position="labelPosition"
    label-width="80px"
    :model="loginData"
  >
    <el-form-item prop="name" label="用户名">
      <el-input v-model="loginData.name" placeholder="王二"></el-input>
    </el-form-item>
    <el-form-item prop="password" label="密码">
      <el-input placeholder="请输入密码(123456)" v-model="loginData.password" show-password></el-input>
    </el-form-item>
    <el-form-item class="btnLogin">
      <el-button type="primary" @click="submitForm">登录</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import {mapActions } from 'vuex';
export default {
  name: "Login",
  components: {},
  props: {},
  data() {
    return {
      labelPosition: "right",
      loginData: {
        name: "",
        password: ""
      },
      rules: {
        name: [{ required: true, message: "请输入用户名称", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      }
    };
  },
  created() {},
  mounted() {},
  activited() {},
  update() {},
  beforeRouteUpdate() {},
  methods: {
    submitForm() {
      this.$refs["ruleForm"].validate(valid => {
        if (valid) {
          console.log(this.loginData);
          let { name, password } = this.loginData;
          if (name == "王二" && password == "123456") {
            this.$store.dispatch("login");
            this.$storage.set("token", "123456789");
            this.$router.replace("/home");
          }
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    ...mapActions(['login'])
  },
  filter: {},
  computed: {},
  watch: {}
};
</script>

<style scoped>
.form {
  width: 500px;
  margin: auto;
  margin-top: 200px;
}
.btnLogin {
  text-align: center;
}
.el-button {
  width: 420px;
}
</style>
