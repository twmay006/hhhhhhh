<template>
    <div class="card">
        <div class="um-title">
            <p>新增租户</p>
        </div>
        <el-form class="formPadding" :model="tenant" :rules="rules" ref="form" label-position="top">
            <el-form-item class="w50" label="编号" prop="code">
                <el-input v-model="tenant.code"></el-input>
            </el-form-item>
            <el-form-item class="w50" label="名称" prop="name">
                <el-input v-model="tenant.name"></el-input>
            </el-form-item>
            <el-form-item class="w100 textarea" label="描述" prop="description">
                <el-input :maxlength="255" v-model="tenant.description" type="textarea" resize="none"></el-input>
            </el-form-item>
            <el-form-item class="hasButton">
                <el-button type="primary" :loading="saving" @click="onSubmit(tenant)">新增</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import { mapActions } from "vuex";
import _ from "lodash";
export default {
  data() {
    return {
      tenant: {},
      rules: {
        code: [
          { required: true, message: "请输入编号", trigger: "blur" },
          { max: 50, message: "长度在 1 到 50 个字符", trigger: "blur" }
        ],
        name: [
          { required: true, message: "请输入租户名称", trigger: "blur" },
          { max: 100, message: "长度在 1 到 100 个字符", trigger: "blur" }
        ],
        description: [{ max: 255, message: "255 个字符以内", trigger: "blur" }]
      },
      saving: false
    };
  },
  watch: {
    tenant: {
      handler: _.debounce(function(tenant) {
        this.$store.commit("updateTenant", tenant);
      }, 500),
      deep: true
    }
  },
  methods: {
    ...mapActions(["addPrisonTenant"]),
    onSubmit() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          this.saving = true;
          this.addPrisonTenant()
            .then(res => {
              this.saving = false;
              this.$message.success("新增成功");
              this.$router.push(`/tenant/list`);
            })
            .catch(() => {
              this.$message.error("新增失败");
              this.saving = false;
            });
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
