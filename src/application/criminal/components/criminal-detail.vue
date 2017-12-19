<template>
    <div>
        <div class="card">
            <span class="um-title">{{ criminal.name }} - 明细</span>
            <div class="form-container">
                <el-row type="flex" justify="space-between">
                    <el-col :span="12">
                        <label>编号：</label><span>{{ criminal.code }}</span>
                    </el-col>
                    <el-col :span="12">
                        <label>创建时间：</label><span>{{ criminal.createdTime }}</span>
                    </el-col>
                </el-row>
                <el-row type="flex" justify="space-between">
                    <el-col :span="12">
                        <label>最后更新时间：</label><span>{{ criminal.lastUpdatedTime }}</span>
                    </el-col>
                </el-row>
            </div>
            <div class="padding20">
                <div class="form-container">
                    <label class="title">租户描述：</label>
                    <div>{{ criminal.description }}</div>
                </div>
                <el-button @click="onBack">返回</el-button>
            </div>
        </div>

    </div>
</template>
<script>
import { mapState, mapActions } from "vuex";

export default {
  computed: {
    ...mapState({
      criminal: state => state.criminal.criminal
    })
  },
  created() {
    this.getTenant(this.$route.params.id);
  },
  methods: {
    ...mapActions(["getTenant"]),
    onBack() {
      this.$router.go(-1);
    }
  }
};
</script>
<style lang="scss" scoped>
.form-container {
  box-sizing: border-box;
  width: 100%;
  position: relative;
  padding: 20px 20px 20px 41px;
  font-size: 14px;
  label {
    font-weight: bold;
    color: #333;
    width: 148px;
    padding-top: 20px;
    line-height: 1;
    box-sizing: border-box;
    float: left;
  }
  span {
    display: inline-block;
    border-bottom: 1px solid #ddd;
    padding-bottom: 10px;
    padding-top: 20px;
    width: calc(100% - 148px);
    color: #333;
    height: 14px;
    vertical-align: middle;
  }
  .el-row .el-col-12:first-child {
    span {
      width: calc(100% - 198px);
    }
  }
  .title {
    display: block;
    margin-bottom: 10px;
    float: none;
    padding-top: 0;
    & + div {
      line-height: 24px;
    }
  }
}
.padding20 {
  padding-bottom: 20px;
  padding-right: 20px;
  overflow: hidden;
  background: #fff;
  border-top: 1px solid #ddd;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  button {
    float: right;
  }
}
</style>
