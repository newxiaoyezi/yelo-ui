<template>
    <div>
        <yelo-select v-model="selected" :pageShow="true" :pageSize="5" :options="options"></yelo-select>
        <p>选中后返回的值：{{selected}}</p>

        <param-table :paramsList="paramsList" width="250px"></param-table>
    </div>
</template>

<script>
import paramTable from "../../components/paramTable";
export default {
    data() {
        return {
            selected:"",
            options: [
                { value:"1", label:"数据1",param:"其他属性" },
                { value:"2", label:"数据2",param:"其他属性" },
                { value:"3", label:"数据3",param:"其他属性" },
                { value:"4", label:"数据4",param:"其他属性" },
                { value:"5", label:"数据5",param:"其他属性" },
                { value:"6", label:"数据6",param:"其他属性" },
                { value:"7", label:"数据7",param:"其他属性" },
                { value:"8", label:"数据8",param:"其他属性" },
                { value:"9", label:"数据9",param:"其他属性" },
                { value:"10", label:"数据10",param:"其他属性" },
                { value:"11", label:"数据11",param:"其他属性" },
            ],
            paramsList: [{
                paramTitle: "样式",
                params: [
                    {paramName: "width", describe: "宽度", value: "200px"},
                ]
            }, {
                paramTitle:"参数",
                params: [
                    {paramName: "placeholder", describe: "下拉框内置文本", value: ""},
                    {paramName: "value", describe: "选定的值，v-model绑定，初始化可传入有value属性的对象，也可直接传入value", value: ""},
                    {paramName: "options", describe: "传入的下拉框集合", value: []},
                    {paramName: "pageShow", describe: "是否显示分页", value: false},
                    {paramName: "pageSize", describe: "下拉框一页数量，pageShow为true时生效", value: 10},
                    {paramName: "searchAble", describe: "是否可以输入搜索", value: false},
                    {paramName: "reqPromise", describe: "远程搜索方法，searchAble为true传入", value: ''},
                    {paramName: "axiosDataAble", describe: "是否从接口只获取一页的数据", value: false},
                    {paramName: "totalNum", describe: "数据总量，axiosDataAble为true传入", value: 0},

                ]
            }, {
                paramTitle:"事件",
                params: [
                    {paramName: "pageChange", describe: "页数改变时调用", value: ""},
                ]
            }]
        }
    },
    components: {
        paramTable,
    }
}
</script>