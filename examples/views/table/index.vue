<template>
    <div>
        <yelo-table 
            :data="tableData" 
            :columns="columns" 
            column-type="selection"
        ></yelo-table>
        <div>
           
        </div>
        <param-table :paramsList="paramsList" width="250px"></param-table>
    </div>
</template>
<script>
import paramTable from "../../components/paramTable";
export default {
    data() {
        return {
            tableData:[{
                name: "apple",
                price: "5元",
                num: "1",
                cost: "5元"
            },{
                name: "pear",
                price: "8元",
                num: "3",
                cost: "24元"
            },{
                name: "orange",
                price: "2元",
                num: "2",
                cost: "4元"
            },{
                name: "apple",
                price: "5元",
                num: "10",
                cost: "50元"
            },],
            columns: [
                { label: "名称", prop: "name", minWidth: "120" },
                { label: "单价", prop: "price", minWidth: "120" },
                { label: "数量", prop: "num", minWidth: "120" },
                { label: "总价", prop: "cost", minWidth: "120" },
            ],
            paramsList: [
                {
                    paramTitle: "参数",
                    params: [
                        {paramName: "data", describe: "表格数据", value: ""},
                        {paramName: "columns", describe: 
    `表头列表
    { 
        label: "名称", //表头名称
        prop: "name", //prop对应data中参数名
        minWidth: "120", //最小宽度
        align:"left",//非必传，默认left
        type:"",//selection/index/expand/
        ...... 
        参考element-ui Table组件的Table-column Attributes
    },
    `, value: ""},
                        {paramName: "columnType", describe: "特殊列,String/Array,具体为selection/index/expand", value: ""},
                        {paramName: "columnTypeProps", describe: 
    `特殊列表头，Object，可进行特殊处理
    columnTypeProps: {
        selection: {//表格为多选
          selectable: (row, index) => {
              if(...){
                  return true;//可选
              }
              return false;//不可选
          }
        }
    }`, value: ""},
                        {paramName: "columnKeyMap", describe: "关键表头？？？？，可不传", value: ""},
                        {paramName: "columnsProps", describe: "？？？？？", value: ""},
                        {paramName: "columnsSchema", describe: 
    `列处理 [{
        操作: {//label作为属性名
        component: Btns,//数据可为组件 ，emit触发listeners事件
        fixed: "right",//固定
        listeners: {//组件内监听事件
            "row-edit": row => {
                this.edit(row);
            },
            "row-operate": row => {
                this.operate(row);
            }
        }
    },{
        状态: {
          formater(row, col) {//格式化内容，return返回
            return '';
          }
        }
    }]`, value: ""},
                        {paramName: "columnsHandler", describe:
    `与columnsSchema类似,
Function类型，参数为已传入的表头数据
    (cols) {
      return cols.concat({
        fixed: "right",
        //columnsSchema已存在列，columnsHandler添加
        label: "操作",
        align: "center",
        width: "140",
        component: Btns,
        listeners: {
          "row-forbidden": row => {
           //.......
          },
      });
    }
    
    `, value: ""},
                        {paramName: "slotAppend", describe: "是否需要添加插槽", value: "false"},
                    ]
                }
            ]
        }
    },
    components: {
        paramTable
    },

}
</script>
