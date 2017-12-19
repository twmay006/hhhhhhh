<template>
  <div>
    <div class="card">
      <div class="um-title">
        <p>修改密码</p>
      </div>
      <el-form class="w340" :model="userPassword" :rules="rules" ref="form">
          <el-form-item class="noLable" prop="oldPassword">
              <el-input type="password" class="el-input-inner" placeholder="原始密码" v-model="userPassword.oldPassword" />
          </el-form-item>
          <el-form-item class="noLable" prop="newPassword">
              <el-input class="el-input-inner" :type="isShowPwd?'text':'password'" placeholder="请输入新密码" v-model="userPassword.newPassword">
                  <span slot="suffix" class="iconfont" :class="isShowPwd?'icon-kejian':'icon-attentionforbid'" @click="isShow"></span>
              </el-input>
          </el-form-item>
          <el-form-item class="noLable" prop="checkPassword">
              <el-input class="el-input-inner" :type="isShowPwd_again?'text':'password'" placeholder="请再次输入新密码" v-model="userPassword.checkPassword">
                <span slot="suffix" class="iconfont" :class="isShowPwd_again?'icon-kejian':'icon-attentionforbid'" @click="isShow_again"></span>
              </el-input>
          </el-form-item>
          <div class="form-btn">
              <el-button @click="goBack">返回</el-button>
              <el-button type="primary" @click="onSubmit">确认</el-button>
          </div>
      </el-form>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.userPassword.checkPassword !== "") {
          this.$refs.ruleForm.validateField("checkPassword");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.userPassword.newPassword) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      userPassword: {
        oldPassword: "",
        newPassword: "",
        checkPassword: ""
      },
      rules: {
        oldPassword: [
          { required: true, message: "密码不能为空", trigger: "blur" },
          { min: 6, message: "密码必须大于6位", trigger: "blur" }
        ],
        newPassword: [
          { validator: validatePass, trigger: "blur" },
          { required: true, message: "密码不能为空", trigger: "blur" },
          { min: 6, message: "密码必须大于6位", trigger: "blur" }
        ],
        checkPassword: [
          { validator: validatePass2, trigger: "blur" },
          { required: true, message: "密码不能为空", trigger: "blur" },
          { min: 6, message: "密码必须大于6位", trigger: "blur" }
        ]
      },
      isShowPwd: false,
      isShowPwd_again: false
    };
  },
  methods: {
    ...mapActions(["updateMyPassword"]),
    onSubmit() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          this.updateMyPassword(this.userPassword)
            .then(() => {
              this.$message.success("修改成功");
            })
            .catch(() => {
              this.$message.error("修改失败");
            });
        }
      });
    },
    isShow() {
      this.isShowPwd = !this.isShowPwd;
    },
    isShow_again() {
      this.isShowPwd_again = !this.isShowPwd_again;
    },
    goBack() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="scss" scoped>
.el-input-inner /deep/ .el-input__inner {
  padding-right: 36px;
  background: #f5f5f5;
  font-size: 12px;
  &:focus {
    background: #ffffff;
  }
}
.w340 {
  width: 400px;
  padding: 30px;
  margin: auto;
  .form-btn {
    display: flex;
    justify-content: space-between;
    align-items: center;
    /deep/ button {
      width: 160px;
    }
  }
  .iconfont {
    font-size: 20px;
    color: #666;
  }
}
</style>
