<template>
    <div class="box">
        <el-container class="flex-column">
            <the-header></the-header>
            <el-container>
                <the-sidebar v-if="!$route.meta||!$route.meta.noSide"></the-sidebar>
                <el-container class="flex-column">
                    <the-breadcrumb v-if="!$route.meta||!$route.meta.noSide"></the-breadcrumb>
                    <el-main :style="!$route.meta||!$route.meta.noSide?'':'padding:0'">
                        <transition name="router-fade" mode="out-in">
                            <router-view></router-view>
                        </transition>
                    </el-main>
                    <the-footer v-if="!$route.meta||!$route.meta.noSide"></the-footer>
                </el-container>
            </el-container>
        </el-container>
    </div>
</template>
<script>
import * as commonComponents from "./common/components";

export default {
  components: {
    "the-header": commonComponents.theHeader,
    "the-sidebar": commonComponents.theSidebar,
    "the-breadcrumb": commonComponents.theBreadcrumb,
    "the-footer": commonComponents.theFooter
  }
};
</script>
<style lang="scss" scoped>

</style>
