<template>
    <el-aside :width="collapsed ? '55px' : '260px'" :class="collapsed ? 'aside menu-collapsed' : 'aside menu-expanded'">
        <router-link to="/dashboard">
          <div class="avatar" :class="collapsed ? 'avatar-collapsed' : ''">
              <img src="../../../assets/images/avatar.png" alt="">
                <div class="avatar-right">
                    <span>管理员</span>
                    <div class="">
                        <i class="el-icon-location"></i>
                        <span>管理员</span>
                    </div>
                </div>
          </div>
        </router-link>
        <the-menu></the-menu>
    </el-aside>
</template>
<script>
import { default as theMenu } from "./the-menu";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      menuText: ""
    };
  },
  components: {
    "the-menu": theMenu
  },
  computed: {
      ...mapGetters(["collapsed"])
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
.aside {
  background: #263238;
  color: #fff;
  transition: all 0.2s linear;
}
.avatar {
  display: flex;
  padding: 20px 0 20px 7px;
  align-items: stretch;
  color: #fff;
  img {
    height: 38px;
    width: 38px;
    margin-right: 16px;
  }
  .avatar-right {
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 12px;
    & > span {
      margin-bottom: 10px;
    }
    i {
        // font-size: 12px;
      margin-right: 6px;
    }
  }
  &.avatar-collapsed {
    img {
      margin: 0;
    }
    .avatar-right {
      display: none;
    }
  }
}
</style>
