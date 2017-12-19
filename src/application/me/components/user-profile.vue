<template>
  <div>
    <div class="card">
      <div class="um-title">
          <p>修改个人信息</p>
      </div>
      <el-form class="labelInTop" :model="userProfile" :rules="rules" ref="form">
          <el-form-item label="用户名" class="w50 the-disabled">
              <span class="el-input__inner">{{ userProfile.username }}</span>
          </el-form-item>
          <el-form-item label="姓名" class="w50" prop="name">
              <el-input v-model="userProfile.name"></el-input>
          </el-form-item>
          <el-form-item label="创建时间" class="w50 the-disabled">
              <span class="el-input__inner">{{ userProfile.createdTime }}</span>
          </el-form-item>
          <el-form-item label="最后更新时间" class="w50 the-disabled">
              <span class="el-input__inner">{{ userProfile.lastUpdatedTime }}</span>
          </el-form-item>

          <div class="el-form-item el-form-item-div">
            <el-button class="btn-return" @click="goBack">返回</el-button>
            <el-button type="primary" class="btn-confirm" @click="submit">保存</el-button>
          </div>
      </el-form>
    </div>
    <div class="um-modifyPassword card">
      <p>修改密码</p>
      <span>安全性高的密码可以使账号更安全，密码长度要求超过6位以上的密码。</span>
      <router-link class="modififyPassword" to="/me/password">修改</router-link>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import _ from "lodash";

export default {
  data() {
    return {
      userProfile: _.cloneDeep(this.$store.state.me.userProfile),
      rules: {
        name: [{ required: true, message: "姓名不能为空", trigger: "blur" }]
      }
    };
  },
  created() {
    this.getMyProfile().then(() => {
      this.userProfile = _.cloneDeep(this.$store.state.me.userProfile);
    });
  },
  watch: {
    userProfile: {
      handler: _.debounce(function(userProfile) {
        this.$store.commit("updateUserProfile", userProfile);
      }, 500),
      deep: true
    }
  },
  methods: {
    ...mapActions(["getMyProfile", "updateMyProfile"]),
    submit() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          this.updateMyProfile()
            .then(() => {
              this.$message.success("修改成功");
            })
            .catch(() => {
              this.$message.error("修改失败");
            });
        }
      });
    },
    goBack() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="scss" scoped>
.card {
  .labelInTop {
    margin: 26px 0 0 21px;
  }
}
.um-modifyPassword {
  padding: 20px 22px 20px 20px;
  font-size: 14px;
  color: #333;
  line-height: 1;
  p {
    display: inline-block;
    margin-right: 40px;
  }
  span {
    font-size: 12px;
    color: #999;
  }
  .modififyPassword {
    float: right;
    font-size: 12px;
    color: #2196f3;
  }
}
</style>
