<template>
    <div class="container">
        <div class="card">
            <span class="um-title">查询租户</span>
            <div class="filters">
                <div class="filter">
                    <el-input placeholder="编号" v-model="filter.code" @keyup.enter.native="onSearch"></el-input>
                    <el-input placeholder="租户名称" v-model="filter.name" @keyup.enter.native="onSearch"></el-input>
                    <el-button class="searchbtn" :loading="searching" @click="onSearch">查询</el-button>
                </div>
                <el-button type="primary" @click="onNew">新增租户</el-button>
            </div>
            <template>
                <el-table class="my_table" :data="pagedTenants.content" border header-row-class-name="tableHeader">
                  <el-table-column prop="code" label="编号">
                  </el-table-column>
                  <el-table-column prop="name" label="名称">
                  </el-table-column>
                  <el-table-column prop="createdTime" label="创建时间" sortable>
                  </el-table-column>
                  <el-table-column prop="lastUpdatedTime" label="最后更新时间" sortable>
                  </el-table-column>
                  <el-table-column align="center" prop="opretion" label="操作">
                    <template slot-scope="scope">
                      <el-button type="text" @click="onEdit(scope.row.id)">修改</el-button>
                      <el-button type="text" @click="onView(scope.row.id)">明细</el-button>
                      <el-button type="text" @click="onDelete(scope.row)">删除</el-button>
                    </template>
                  </el-table-column>
                </el-table>
                <div class="pagination-box">
                    <span>共{{ pagedTenants.totalElements }}条信息</span>
                    <el-pagination
                      @current-change="onPageChange"
                      :current-page.sync="currentPage"
                      :page-size="pagination.size"
                      layout="prev, pager, next, jumper"
                      :total="pagedTenants.totalElements">
                    </el-pagination>
                </div>
            </template>
        </div>
        <el-dialog width="400px" :center="true" custom-class="noPadding" :visible.sync="deleteDialogVisible">
          <i class="iconfont icon-tishishuoming"></i>
          <span>确认删除<b style="margin: 0 10px;">{{ deleteItem.name }}</b>吗</span>
          <span slot="footer" class="dialog-footer">
            <el-button @click="deleteDialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="onDeleteConfirm" :loading="deleting">确 定</el-button>
          </span>
        </el-dialog>
    </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
import _ from "lodash";

export default {
  data() {
    return {
      filter: {},
      pagination: {
        page: 0,
        size: 10,
        sort: "createdTime,desc"
      },
      currentPage: 1,
      searching: false,
      deleting: false,
      deleteDialogVisible: false,
      deleteItem: {}
    };
  },
  computed: {
    ...mapState({
      pagedTenants: state => state.criminal.pagedTenants
    })
  },
  created() {
    this.search();
  },
  methods: {
    ...mapActions(["getPagedTenants", "deleteTenant"]),
    onSearch() {
      this.pagination.page = 0;
      this.search();
    },
    onPageChange(page) {
      this.pagination.page = page - 1;
      this.search();
    },
    onView(id) {
      this.$router.push(`/criminal/detail/${id}`);
    },
    onEdit(id) {
      this.$router.push(`/criminal/edit/${id}`);
    },
    onDelete(item) {
      this.deleteItem = item;
      this.deleteDialogVisible = true;
    },
    onNew() {
      this.$router.push(`/criminal/new`);
    },
    onDeleteConfirm() {
      this.deleting = true;
      this.deleteTenant(this.deleteItem.id)
        .then(res => {
          this.deleting = false;
          this.deleteDialogVisible = false;
          this.$message.success("删除成功");
          this.search();
        })
        .catch(() => {
          this.$message.error("删除失败");
          this.deleting = false;
        });
    },
    search() {
      this.searching = true;
      let params = Object.assign({}, this.getFilter(), this.pagination);
      this.getPagedTenants(params).then(() => {
        this.searching = false;
      });
    },
    getFilter() {
      return _.transform(this.filter, (result, value, key) => {
        if (value) {
          result[key] = value;
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.container {
  height: 100%;
  /deep/ .el-dialog__body {
    color: #333;
    text-align: center;
    padding-bottom: 0;
    b {
      font-weight: bold;
    }
    .icon-tishishuoming {
      color: #e82e21;
      font-size: 80px;
      display: block;
      line-height: 80px;
      margin-bottom: 27px;
      & + span {
        line-height: 1;
      }
    }
  }
  /deep/ .el-dialog__footer {
    padding-top: 30px;
    button {
      width: 76px;
      background: #fcfcfc;
      color: #666;
      & + button {
        margin-left: 20px;
        color: #fff;
        background: #085eb5;
        border-color: #085eb5;
      }
    }
  }
  /deep/ .el-table__body-wrapper {
    overflow: inherit;
  }
}

.cell {
  button:nth-child(1) {
    color: #2196f3;
  }
  button:nth-child(2) {
    color: #29b0a3;
    margin-left: 20px;
  }
  button:nth-child(3) {
    color: #f44336;
    margin-left: 20px;
  }
}
</style>
