<template>
    <div>
        <div class="card">
            <span class="um-title">修改租户</span>
            <el-form class="formPadding" :model="criminal" :rules="rules" ref="form" label-position="top">
                <el-form-item label="编号" class="w50" prop="code">
                    <el-input v-model="criminal.code"></el-input>
                </el-form-item>
                <el-form-item label="名称" class="w50" prop="name">
                    <el-input v-model="criminal.name"></el-input>
                </el-form-item>
                <el-form-item class="w100 textarea" label="描述" prop="description">
                    <el-input :maxlength="255" type="textarea" resize="none" v-model="criminal.description"></el-input>
                </el-form-item>
                <el-form-item class="hasButton">
                    <el-button @click="onBack">返 回</el-button>
                    <el-button type="primary" :loading="saving" @click="onSubmit">确 认</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script>
import { mapActions } from "vuex";
import _ from "lodash";

export default {
  data() {
    return {
      criminal: _.cloneDeep(this.$store.state.criminal.criminal),
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
  created() {
    this.getTenant(this.$route.params.id).then(() => {
      this.criminal = _.cloneDeep(this.$store.state.criminal.criminal);
    });
  },
  watch: {
    criminal: {
      handler: _.debounce(function(criminal) {
        this.$store.commit("updateTenant", criminal);
      }, 500),
      deep: true
    }
  },
  methods: {
    ...mapActions(["getTenant", "updatePrisonTenant"]),
    onSubmit() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          this.saving = true;
          this.updatePrisonTenant()
            .then(res => {
              this.saving = false;
              this.$message.success("修改成功");
              this.$router.push(`/criminal/list`);
            })
            .catch(() => {
              this.$message.error("修改失败");
            });
        }
      });
    },
    onBack() {
      this.$router.go(-1);
    }
  }
};
</script>
<style lang="scss" scoped>
</style>
