<template>
  <el-menu unique-opened :collapse="collapsed" class="base" text-color="#d1d1d1" active-text-color="#fff">
    <template v-for="(menu, index) in menus">
      <el-submenu :index="menu.index" v-if="menu.children" class="first" @mouseenter.native="showMenu(index,menu.name)">
          <li class="menuText" :style="collapsed ? 'display: block' : 'display: none'">{{ menuText }}</li>
          <template slot="title">
            <i class="iconfont icon-shezhi"></i>
            <span>{{menu.name}}</span>
          </template>
          <template v-for="submenu in menu.children">
              <el-submenu :index="submenu.index" v-if="submenu.children" class="second">
                  <template slot="title">
                      <span>{{submenu.name}}</span>
                  </template>
                  <template v-for="item in submenu.children">
                      <el-menu-item :index="item.index" @click.native="onNavigate(item.path)"  class="third">
                          <span slot="title">{{item.name}}</span>
                      </el-menu-item>
                  </template>
              </el-submenu>
              <el-menu-item :index="submenu.index" v-else @click.native="onNavigate(submenu.path)">
                  <span slot="title">{{submenu.name}}</span>
              </el-menu-item>
          </template>
      </el-submenu>
      <el-menu-item :index="menu.index" v-else @click.native="onNavigate(menu.path)" class="hahahaha">
          <i class="iconfont icon-shezhi"></i>
          <span slot="title">{{menu.name}}</span>
      </el-menu-item>
    </template>
  </el-menu>
</template>
<script>
import { default as menus } from "../service/menu-service";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      menus: menus,
      menuText: ''
    };
  },
  computed: {
      ...mapGetters(["collapsed"])
  },
  methods: {
      showMenu(e, status) {
            // console.log(status)
            // console.log(e, status);
            // let menuText = status;
            this.menuText = status;
        },
    onNavigate(path) {
      this.$router.push(path);
    }
  }
};
</script>
<style lang="scss" scoped>
.aside {
  .base {
    border-right: 0;
    transition: all 0s linear;
    background: #263238;
  }
  .first {
    &.is-opened {
      background: #29b0a3;
      & > .el-submenu__title {
        &:hover {
          background: transparent;
        }
      }
    }
    .second:last-child {
      border-bottom: 1px solid #303b40;
    }
    .el-menu-item[role="menuitem"]:not(.third){
        background: #202a2f;
        padding-left: 47px !important;
    }
    .el-menu-item.third[role="menuitem"]{
        padding-left: 66px !important;
    }
  }
  .second {
    background: #202a2f;
    &.is-active {
      background: #182125;
    }
    &.is-opened {
      .third:last-child {
        border-bottom: 1px solid #303b40;
      }
    }
  }
  .third {
    background: #182125;
    &.is-active {
      background: #13191c;
    }
  }
  .menuText {
    height: 43px;
    line-height: 43px;
    padding-left: 20px;
    font-size: 14px;
    background: #29b0a3;
    color: #fff;
  }
  .iconfont{
      margin-right: 14px;
  }
}
</style>
