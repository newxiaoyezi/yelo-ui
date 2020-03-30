<template>
    <div>
        <yelo-table-comm :tableData="tableData" :columns="columns"></yelo-table-comm>
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
                cost: "5元",
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
                cost: "50元",
                btnItems: [{
                        btnTitle:"添加",
                        color:"green",
                        func: () => {}
                    },{
                        btnTitle:"删除",
                        color:"red",
                        func: () => {}
                    },],
            }],
            columns: [
                { label: "名称", prop: "name", minWidth: "120" },
                { label: "单价", prop: "price", minWidth: "120" },
                { label: "数量", prop: "num", minWidth: "120" },
                { label: "总价", prop: "cost", minWidth: "120" },
                { label: "操作", prop: "", minWidth: "120",fixed: "left",btnItems: [] },
            ],
            paramsList: [
                {
                    paramTitle: "样式",
                    params: [
                        {paramName: "minWidth", describe: "表格最小宽度", value: ""},
                    ]
                }, {
                    paramTitle: "参数",
                    params: [
                        {paramName: "tableData", describe: `表格数据,需要操作的数据{
                name: "apple",
                price: "5元",
                num: "10",
                cost: "50元",
                btnItems: [{
                        btnTitle:"添加",
                        color:"green",
                        func: () => {}
                    },{
                        btnTitle:"删除",
                        color:"red",
                        func: () => {}
                    },],
            }`, value: ""},
                        {paramName: "columns", describe: '表头,操作列{ label: "操作", prop: "", minWidth: "120",fixed: "left",btnItems: [] },', value: ""},
                        {paramName: "tooltip", describe: "是否展示超出长度数据文字提示", value: "true"},
                        {paramName: "isIndex", describe: "是否展示序号", value: "false"},
                    ]
                }
            ],
        }
    },
    components: {
        paramTable,
    }
}
</script>