<template>
  <div class="card">
    <div class="um-title">
      <p>新增监舍</p>
    </div>
    <el-form class="formPadding" :model="prisonHouse" :rules="rules" ref="form" label-position="top">
      <el-form-item class="w50" label="编号" prop="code" >
        <el-input v-model="prisonHouse.code"></el-input>
      </el-form-item>
      <el-form-item class="w50" label="监舍名称" prop="name" >
        <el-input v-model="prisonHouse.name"></el-input>
      </el-form-item>
      <el-form-item class="w100 textarea" label="描述" prop="description" >
        <el-input type="textarea" resize="none" v-model="prisonHouse.description"></el-input>
      </el-form-item>
      <el-form-item class="hasButton">
          <el-button type="primary" :loading="saving" @click="onSubmit">新增</el-button>
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
      prisonHouse: {},
      rules: {
        code: [
          { required: true, message: "请输入编号", trigger: "blur" },
          { max: 50, message: "长度在 1 到 50 个字符", trigger: "blur" }
        ],
        name: [
          { required: true, message: "请输入监舍名称", trigger: "blur" },
          { max: 100, message: '长度在 1 到 100 个字符', trigger: 'blur' }
        ],
        description: [
          { max: 255, message: '255 个字符以内', trigger: 'blur' }
        ]
      },
      saving: false
    };
  },
  watch: {
    prisonHouse: {
      handler: _.debounce(function(prisonHouse) {
        this.$store.commit("updatePrisonHouse", prisonHouse);
      }, 500),
      deep: true
    }
  },
  methods: {
    ...mapActions(["addPrisonHouse"]),
    onSubmit() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          this.saving = true;
          this.addPrisonHouse()
            .then(res => {
              this.saving = false;
              this.$message.success("新增成功");
              this.$router.push(`/prison-house/list`);
            })
            .catch(() => {
              this.$message.error("新增失败");
            });
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>

</style>
