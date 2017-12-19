<template>
    <el-header style="height: 47px;">
        <div class="header-left">
            <i class="iconfont icon-yunshujukuRDS" style="font-size: 22px;"></i>
            <span class="fs-16">罪犯数据库</span>
            <i class="iconfont icon-caidan" @click="test"></i>
        </div>
        <ul class="header-right">
            <li><router-link to="/"><i class="iconfont icon-shezhi"></i></router-link></li>
            <li><el-badge is-dot><router-link to="/"><i class="iconfont icon-xiaoxizhongxin"></i></router-link></el-badge></li>
            <li class="hasImg"><router-link to="/me"><img src="../../../assets/images/avatar.png" alt=""><span>管理员</span></router-link></li>
            <li @click="logout"><i class="iconfont icon-tuichu"></i></li>
        </ul>
    </el-header>
</template>
<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
    };
  },
  computed: {
  },
  methods: {
    ...mapActions(["handleCollapse"]),
    test() {
      this.handleCollapse();
    },
    // 注销
    logout() {
      window.localStorage.removeItem("TOKEN");
      this.$message.success("已登出");
      this.$router.push("/login");
    }
  }
};
</script>
<style lang="scss" scoped>
.icon-caidan {
  cursor: pointer;
  font-size: 20px;
}

.header-left {
  display: flex;
  align-items: center;
  .fs-16 {
    margin: 0 142px 0 10px;
  }
}
.header-right {
  display: flex;
  align-items: center;
  li {
        margin-left: 20px;
        i {
          display: block;
          height: 16px;
          width: 16px;
          font-size: 16px;
          // background: #fff;
        }
        a {
          color: #fff;
          font-size: 12px;
        }
        img{
            margin-right: 7px;
        }
    }
    li.hasImg a{
        display: flex;
        align-items: center;
    }
}
</style>
