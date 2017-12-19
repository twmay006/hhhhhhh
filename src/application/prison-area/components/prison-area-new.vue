<template>
    <div class="card">
        <div class="um-title">
            <p>新增监区</p>
        </div>
        <el-form class="formPadding" :model="prisonArea" :rules="rules" ref="form" label-position="top">
          <el-form-item class="w50" label="编号" prop="code">
            <el-input v-model="prisonArea.code"></el-input>
          </el-form-item>
          <el-form-item class="w50" label="名称" prop="name">
            <el-input v-model="prisonArea.name"></el-input>
          </el-form-item>
          <el-form-item class="w50" label="上级监区" prop="parentPrisonAreaId">
            <el-select v-model="prisonArea.parentPrisonAreaId" clearable :loading="gettingAllPrisonAreas">
              <el-option v-for="(item, index) in allPrisonAreas" :key="index" :label="item.name" :value="item.id"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item class="w100 textarea" label="描述" prop="description">
            <el-input v-model="prisonArea.description" type="textarea" :maxlength="255" resize="none"></el-input>
          </el-form-item>
          <el-form-item class="hasButton">
            <el-button @click="onBack">返 回</el-button>
            <el-button type="primary" :loading="saving" @click="onSubmit">新增</el-button>
          </el-form-item>
        </el-form>
    </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import _ from "lodash";

export default {
  data() {
    return {
      prisonArea: {},
      gettingAllPrisonAreas: true,
      saving: false,
      rules: {
        code: [
          { required: true, message: "请输入组织机构代码", trigger: "blur" },
          { max: 50, message: "长度在 1 到 50 个字符", trigger: "blur" }
        ],
        name: [
          { required: true, message: "请输入监区名称", trigger: "blur" },
          { max: 100, message: "长度在 1 到 100 个字符", trigger: "blur" }
        ],
        description: [{ max: 255, message: "255 个字符以内", trigger: "blur" }]
      }
    };
  },
  computed: {
    ...mapState({
      allPrisonAreas: state => state.prisonArea.allPrisonAreas
    })
  },
  watch: {
    prisonArea: {
      handler: _.debounce(function(prisonArea) {
        this.$store.commit("updatePrisonArea", prisonArea);
      }, 500),
      deep: true
    }
  },
  created() {
    this.getAllPrisonAreas().then(() => {
      this.gettingAllPrisonAreas = false;
    });
  },
  methods: {
    ...mapActions(["addPrisonArea", "getAllPrisonAreas"]),
    onBack() {
      this.$router.go(-1);
    },
    onSubmit() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          this.saving = true;
          this.addPrisonArea()
            .then(res => {
              this.$message.success("新增成功");
              this.$router.push(`/prison-area/list`);
              this.saving = false;
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
