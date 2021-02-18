<!--
 * @Description: 请输入....
 * @Author: wgy
 * @Date: 2021-02-01 13:09:21
-->
<template>
  <el-main class="el-main">
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-row>
        <el-col :span="4">
          <el-form-item label="添加列名" prop="columnKey">
            <el-input
              v-model="ruleForm.columnKey"
              placeholder="请输入内容"
              style="width: 220px"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item>
            <el-button type="primary" @click="addColumn('ruleForm')"
              >添加列</el-button
            >
            <el-button type="primary" @click="dialogFormVisible = true"
              >添加行</el-button
            >
          </el-form-item>
        </el-col>
      </el-row>
      <!-- <el-row style="margin-bottom: 20px">
        <el-col>
          <el-button type="primary" @click="dialogFormVisible = true"
            >添加行</el-button
          >
        </el-col>
      </el-row> -->
    </el-form>
    <el-dialog title="添加行" :visible.sync="dialogFormVisible">
      <el-form :model="addForm" :rules="addFormRules" ref="ruleForm">
        <el-form-item label="类型" label-width="80px" prop="type">
          <el-select
            v-model="addForm.type"
            placeholder="请选择类型"
            style="width: 100%"
            @change="changeType"
          >
            <el-option
              v-for="item in TypeOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="格式" label-width="80px">
          <el-input
            type="textarea"
            :rows="4"
            placeholder="内容格式"
            v-model="addForm.format"
          >
          </el-input>
        </el-form-item>
        <el-form-item label="内容" label-width="80px" prop="coordinates">
          <el-input
            type="textarea"
            :rows="4"
            placeholder="请输入内容"
            v-model="addForm.coordinates"
          >
          </el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="addrow('ruleForm')">确 定</el-button>
      </div>
    </el-dialog>
    <el-table border :data="geoData" class="tb-edit" style="width: 100%" :height="tableHeight" stripe>
      <el-table-column type="expand">
        <template slot-scope="{ row }">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-row>
              <el-col :span="8">
                <el-form-item label="经度">
                  <span>{{ row.geometry.coordinates[0] }}</span>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="纬度">
                  <span>{{ row.geometry.coordinates[1] }}</span>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="海拔">
                  <span>{{ row.geometry.coordinates[2] }}</span>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </template>
      </el-table-column>
      <template v-for="(item,index) in geoHeader">  
          <el-table-column
            :label="item.property"
            :property="item.property"
            :render-header="renderHeader"
            :key="index"
            v-if="item.property"
          >
            <template slot-scope="scope">
              <el-input
                v-model="scope.row[scope.column.property]"
                @blur="
                  focus(scope.row[scope.column.property], scope.column.property)
                "
              >
              </el-input>
            </template>
          </el-table-column>
      </template>
      <el-table-column v-if="geoHeader.length>0" label="操作" width="100">
          <template slot-scope="scope">
            <el-button type="text" size="small" icon="el-icon-edit" @click="deleteRow(scope.$index, geoData)">删除</el-button>
          </template>
        </el-table-column>
    </el-table>
    <el-button @click="commit" style="margin-top: 20px">提交</el-button>
  </el-main>
</template>

<script>
let geoJson = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: {
        id: 1,
        Name: "停机坪1",
        age: 11,
      },
      geometry: {
        type: "Point",
        coordinates: [116.42211914057, 40.38839687388361, 415],
      },
    },
    {
      type: "Feature",
      properties: {
        id: 2,
        Name: "停机坪2",
        age: 12,
      },
      geometry: {
        type: "Point",
        coordinates: [116.1996459961, 40.40513069752789, 415],
      },
    },
    {
      type: "Feature",
      properties: {
        id: 3,
        Name: "停机坪3",
        age: 13,
      },
      geometry: {
        type: "Point",
        coordinates: [116.9604492188, 40.413496049701955, 415],
      },
    },
  ],
};
export default {
  name: "material-block-table-geoJson-table",
  data() {
    return {
      tableHeight: 650,
      geoJson: geoJson,
      TypeOptions: [
        {
          value: "Point",
          label: "点——Point",
        },
        {
          value: "LineString",
          label: "线——LineString",
        },
        {
          value: "Polygon",
          label: "多边形——Polygon",
        },
      ],
      ruleForm: {
        columnKey: "",
      },
      addForm: {
        type: "",
        coordinates: null,
        format: "",
      },
      dialogFormVisible: false,
      geoData: [], //数据
      geoHeader: [], //头部
      checkedList: [],
      rules: {
        columnKey: [
          {
            required: true,
            message: "请输入列名",
            trigger: "blur",
          },
          {
            pattern: /^[a-zA-Z]+$/,
            message: "只能输入英文",
            trigger: "blur",
          },
        ],
      },
      addFormRules: {
        coordinates: [
          {
            required: true,
            message: "请输入内容",
            trigger: "blur",
          },
        ],
        type: [
          {
            required: true,
            message: "请选择类型",
            trigger: "change",
          },
        ],
      },
    };
  },
  mounted() {
    this.initJeoJson();
  },
  methods: {
    // 初始数据转换表格格式
    initJeoJson() {
      // jeoJson转换为table格式
       this.geoHeader = [];
        this.geoData = [];
      geoJson.features.map((item, index) => {
        this.geoData.push({
          ...item.properties,
          geometry: {
            type: item.geometry.type,
            coordinates: item.geometry.coordinates,
          },
        });
      });
      this.geoData = [...this.geoData];
      //取出第一个数组对象中的properties 字段作为头部
      for (const key in geoJson.features[0].properties) {
        this.geoHeader.push({
          property: key,
        });
      }
    },
    // 添加列
    addColumn(formName) {
      this.dialogFormVisible = true;
      let columnKey = this.ruleForm.columnKey;
      let isColumnKey = false;
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.geoData.forEach((item) => {
            //判断对象中是否包含指定的key
            if (item.hasOwnProperty(columnKey)) {
              isColumnKey = true;
            } else {
              isColumnKey = false;
            }
          });
          if (isColumnKey) {
            this.$message({
              type: "error",
              message: `${columnKey}已存在请重新添加`,
            });
          } else {
            // 添加列
            this.geoData = this.geoData.map((item) => {
              return {
                ...item,
                [this.ruleForm.columnKey]: "",
              };
            });
            // 添加头部
            this.geoHeader.push({
              property: this.ruleForm.columnKey,
            });
            this.$message({
              type: "success",
              message: "添加成功",
            });
          }
        } else {
          this.$message({
            type: "error",
            message: "列名只能为英文",
          });
          return false;
        }
      });
    },
    // 获取添加行type类型
    changeType(type) {
      switch (type) {
        case "Point":
          this.addForm.format = `[116.9604492188,40.413496049701955,415]`;
          break;
        case "LineString":
          this.addForm.format = `[
          [
            115.98129272460936,
            40.587885288417915
          ],
          [
            116.3067626953125,
            40.561807971278185
          ],
          [
            116.01150512695312,
            40.43649540640561
          ],
          [
            115.98129272460936,
            40.58162765924269
          ]
        ]`;
          break;
        case "Polygon":
          this.addForm.format = ` [
          [
            [
              116.553955078125,
              40.617079816381285
            ],
            [
              116.81900024414062,
              40.617079816381285
            ],
            [
              116.81900024414062,
              40.749337730454826
            ],
            [
              116.553955078125,
              40.749337730454826
            ],
            [
              116.553955078125,
              40.617079816381285
            ]
          ]
        ]`;
          break;
        default:
          break;
      }
    },
    // 添加行
    addrow(formName) {
      let startData = JSON.parse(JSON.stringify(this.geoData[0]));
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let obj = {};
          let { geometry, ...rest } = startData;
          for (const key in rest) {
            obj[key] = "";
          }
          let coordinates = JSON.parse(this.addForm.coordinates);
          obj.geometry = geometry;
          obj.geometry.type = this.addForm.type;
          obj.geometry.coordinates = coordinates;
          this.geoData.push(obj);
          this.dialogFormVisible = false;
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    // 删除行
    deleteRow(index, row) {
      row.splice(index, 1)
    },
    //提交数据
    commit() {
      // 获取所有选中key的值
      let isCheckedList = [];
      // 获取所有选中的key
      let newArr = this.checkedList.filter((item) => item.state === true);
      this.geoData.map((item) => {
        newArr.map((x) => {
          isCheckedList.push(item[x.key] + x.key);
        });
      });
      //默认所有ID项验证
      let ids = this.geoData.map((item) => String(item.id));
      let resultList = [...isCheckedList, ...ids];
      if (new Set(resultList).size !== resultList.length) {
        this.$message({
          type: "error",
          message: `有重复项,不可以提交`,
        });
      } else {
        let params = {};
        //获取所有geometry类型
        let geometryTypeList = geoJson.features.map((item) => {
          return {
            ...item.geometry,
          };
        });
        let newArr = [];
        let resultJeo = this.geoData.map((item, index) => {
          const { geometry, ...rest } = item;
          return {
            type: "Feature",
            geometry: {
              type: item.geometry.type,
              coordinates: item.geometry.coordinates,
            },
            properties: rest,
          };
        });
        if (resultJeo.length) {
          params.type = geoJson.type;
          params.features = resultJeo;
          console.log(JSON.stringify(params));
          this.initJeoJson();
        }
      }
    },
    // render 事件
    renderHeader(h, { column }) {
      let _this = this;
      return h("div", [
        h("span", column.label),
        column.property !== "id" &&
          column.property !== "Name" &&
          h("el-button", {
            style: "margin-left:20px",
            props: {
              type: "primary",
              size: "small",
              icon: "el-icon-edit",
            },
            on: {
              click: () => {
                this.modification(column);
              },
            },
          }),
        column.property !== "id" &&
          column.property !== "Name" &&
          h("el-button", {
            props: {
              type: "danger",
              size: "small",
              icon: "el-icon-delete",
            },
            on: {
              click: () => {
                this.delete(column);
              },
            },
          }),
        h(
          "el-checkbox",
          {
            style: "margin-left: 20px;",
            props: {
              checked: column.property === "id" ? true : false,
              disabled: column.property === "id" ? true : false,
            },
            on: {
              change: (val) => {
                this.change(val, column);
              },
            },
          },
          "验证"
        ),
      ]);
    },
    // 验证是否有重复项
    change(state, column) {
      let key = column.property;
      let Index = this.checkedList.findIndex((item) => item.key === key);
      if (Index === -1) {
        this.checkedList.push({
          key,
          state,
        });
      } else {
        this.checkedList.forEach((item) => {
          if (item.key === key) {
            item.state = state;
          }
        });
      }
    },
    // 修改
    modification(row) {
      this.$prompt(`是否要修改【${row.property}】字段`, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        inputPattern: /^[a-zA-Z]+$/,
        inputErrorMessage: "内容只能为字母",
      })
        .then(({ value }) => {
          if (value !== "") {
            for (var i = 0; i < this.geoData.length; i++) {
              for (var key in this.geoData[i]) {
                if (key === row.property) {
                  this.geoData[i][value] = this.geoData[i][key];
                  delete this.geoData[i][key];
                }
              }
            }
            this.geoHeader.map((item) => {
              if (item.property === row.property) {
                item.property = value;
              }
            });
            this.$message({
              type: "success",
              message: "修改成功",
            });
          }
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消修改",
          });
        });
    },
    // 失去焦点验证
    focus(val, type) {
      if (type === "id") {
        let newArr = this.geoData.map((item) => String(item[type]));
        if (new Set(newArr).size !== newArr.length) {
          newArr.forEach((item, index) => {
            if (newArr.indexOf(item) !== index) {
              setTimeout(() => {
                this.$message({
                  type: "error",
                  message: `当前列${index + 1}行有重复项`,
                });
              }, 200);
            }
          });
        }
      }
    },
    // 删除
    delete(row) {
      //获取当前列的key
      let key = row.property;
      this.$confirm(`是否要删除当前列`, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.geoData.forEach((item) => {
            for (const i in item) {
              delete item[key];
            }
          });
          this.geoData = [...this.geoData];
          this.geoHeader.map((item) => {
            if (item.property === row.property) {
              delete item.property;
            }
          });
          this.$message({
            type: "success",
            message: "删除成功!",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
  },
};
</script>
<style scoped lang='scss'>
.el-main {
  padding: 20px;
}
</style>
