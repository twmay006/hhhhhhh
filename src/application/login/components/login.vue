<template>
    <div class="login" :span="24">
      <single-header></single-header>
      <div class="login-box" :span="6">
          <i class="iconfont icon-yunshujukuRDS"></i>
          <el-form class="login-input" :model="user" :rules="rules" ref="form">
              <el-form-item class="noLable form-input-user" prop="username">
                  <el-input type="text" class="el-input-inner" placeholder="请输入用户名" v-model="user.username" />
                  <span class="user"></span>
              </el-form-item>
              <el-form-item class="noLable form-input-pwd" prop="password">
                  <el-input type="password" class="el-input-inner" placeholder="请输入密码" v-model="user.password" />
                  <span class="lock"></span>
              </el-form-item>
              <el-form-item class="form-input-remember">
                  <el-checkbox label="记住我"></el-checkbox>
              </el-form-item>
                <div class="form-input-submit">
                  <el-button type="info" @click="onSubmit">登录</el-button>
              </div>
          </el-form>
      </div>
      <single-footer></single-footer>
    </div>
</template>
<script>
import { mapActions } from "vuex";
import singleFooter from "./single-footer";
import singleHeader from "./single-header";

export default {
  components: { singleFooter, singleHeader },
  data() {
    return {
      user: {
        username: "prs0001",
        password: "Password@1"
      },
      rules: {
        username: [{ required: true, message: "用户名不能为空", trigger: "blur" }],
        password: [
          { required: true, message: "密码不能为空", trigger: "blur" },
          { min: 6, message: "密码必须大于6位", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    ...mapActions(["login"]),
    onSubmit() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          this.login(this.user)
            .then(() => {
              this.$router.push("/dashboard");
            })
            .catch(() => {
              this.$message.error("登陆失败");
            });
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
%mt1 {
  display: inline-block;
  width: 16px;
  height: 18px;
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
}
.user {
  @extend %mt1;
  background: url(../../../assets/images/user.png) 0 0 no-repeat;
  background-size: 16px 18px;
}
.lock {
  @extend %mt1;
  background: url(../../../assets/images/lock.png) 0 0 no-repeat;
  background-size: 12px 18px;
}
.login {
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: url(../../../assets/images/background.png) 0 0 no-repeat;
  background-size: cover;
  .login-box {
    margin-top: 168px;
    width: 322px;
    padding-top: 36px;
    box-sizing: content-box;
    background: url(../../../assets/images/login.png) 0 0 no-repeat;
    background-size: 100% 100%;
    background-position: center;
    .icon-yunshujukuRDS {
      color: #37474f;
      font-size: 72px;
      display: block;
      text-align: center;
    }
    .login-input {
      padding: 0 15px;
      margin-top: 38px;
      & /deep/ .el-input__inner {
        color: #999999;
        padding-left: 32px;
      }
      .form-input-remember {
        margin-top: -5px;
        /deep/ .el-form-item__content {
          font-size: 14px;
          line-height: 1;
          color: #999;
        }
      }
      .form-input-submit {
        margin-bottom: 37px;
        button {
          width: 292px;
          background-color: #516671;
        }
      }
    }
  }
}
</style>
