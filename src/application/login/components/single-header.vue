<template>
  <el-header style="height: 47px;position: absolute;">
    <div class="header-left">
        <i class="iconfont icon-yunshujukuRDS" style="font-size: 22px;"></i>
        <span class="fs-16">罪犯数据库</span>
    </div>
    <ul class="header-right">
        <li><router-link to="/index"><i class="iconfont icon-shezhi"></i></router-link></li>
        <li><router-link to="/login">您好，请登录！</router-link></li>
    </ul>
    </el-header>
</template>

<script>
  export default {
  };
</script>

<style lang="scss" scoped>
.header-left {
  display: flex;
  align-items: center;
  .fs-16 {
    margin-left: 10px;
  }
}
.header-right {
  display: flex;
  align-items: center;
  li {
    margin-left: 20px;
    a {
      color: #fff;
      font-size: 14px;
    }
  }
}
</style>
