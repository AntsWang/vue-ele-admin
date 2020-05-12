<template>
  <div>
    <el-table
      :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
      style="width: 100%"
    >
      <el-table-column label="Date" prop="date"></el-table-column>
      <el-table-column label="Name" prop="name"></el-table-column>
      <el-table-column label="Address" prop="address"></el-table-column>
      <el-table-column align="right">
        <template slot="header" slot-scope="scope">
          <div style="display:flex">
            <el-input v-model="search" size="mini" placeholder="输入Name搜索" />
            <el-button class="btnAdd" size="mini" @click="add()">添加</el-button>
          </div>
        </template>
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-pagination background layout="prev, pager, next" :total="20" page-size='10'></el-pagination>

    <el-dialog title="编辑" :visible.sync="dialogVisible">
      <el-form :model="dialogData">
        <el-form-item label="Date" :label-width="formLabelWidth">
          <el-input v-model="dialogData.date" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="Name" :label-width="formLabelWidth">
          <el-input v-model="dialogData.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="Address" :label-width="formLabelWidth">
          <el-input v-model="dialogData.address" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="editSubmit">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: false,
      formLabelWidth: "120px",
      dialogData: {},
      dialogIndex: "",
      isAdd: false,
      tableData: [
        {
          date: "2016-05-02",
          name: "一虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "二虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "三虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "四虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ],
      search: ""
    };
  },
  methods: {
    handleEdit(index, row) {
      this.dialogData = row;
      this.dialogIndex = index;
      this.dialogVisible = true;

      console.log(index, row);
    },
    handleDelete(index, row) {
      this.$confirm("确认删除？")
        .then(_ => {
          this.tableData.splice(index, 1);
          this.$message({ message: "删除成功", type: "success" });
          // done();
        })
        .catch(_ => {});
      // this.tableData.splice(index, 1);
      console.log(index, row);
    },
    editSubmit() {
      if (this.isAdd) {
        this.tableData.push(this.dialogData);
        this.$message({ message: "添加成功", type: "success" });
      } else {
        this.tableData.splice(this.dialogIndex, 1, this.dialogData);
        this.$message({ message: "编辑成功", type: "success" });
      }

      this.dialogVisible = false;
    },
    add() {
      this.isAdd = true;
      this.dialogVisible = true;
    }
  },
  watch: {
    dialogVisible: function(val, oldVal) {
      if (!val) {
        this.dialogData = {};
        this.isAdd = false;
      }
    }
  }
};
</script>

<style lang="css" scoped>
.btnAdd {
  margin-left: 8px;
}
.el-pagination {
    white-space: nowrap;
    padding: 2px 5px;
    color: #303133;
    font-weight: 700;
    margin-top: 40px;
    text-align: right;
}
</style>
