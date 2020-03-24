<template>
    <div class="yelo_button">
        <yelo-button>按钮</yelo-button>

        <param-table :paramsList="paramsList"></param-table>
    </div>
</template>
<script>
import paramTable from "../../components/paramTable";
export default {
    data() {
        return {
            paramsList: [{
                paramTitle: "样式",
                params: [
                    {paramName: "padding", describe: "内边距", value: "5px 8px"},
                    {paramName: "width", describe: "宽度", value: ""},
                    {paramName: "height", describe: "高度", value: ""},
                    {paramName: "fontSize", describe: "字体大小", value: "16px"},
                    {paramName: "color", describe: "字体颜色", value: "white"},
                    {paramName: "type", describe: "类型，与原element一致", value: "primary"},
                ]
            },{
                paramTitle: "事件",
                params: [
                    {paramName: "click", describe: "点击事件", value: ""},
                ]
            }]
        }
    },
    components: {
        paramTable,
    }
}
</script>
<style lang="scss" scoped>
.yelo_button {
    table {
        border-collapse: collapse;
        text-align: left;
        th {
            display: block;
        }
        td {
            border: 1px solid #cad9ea;
            color: #666;
            line-height: 30px;
            width: 300px;
            height: 30px;
            padding-left: 10px;
        }
        .title {
            font-weight: bold;
        }
    }
}
</style>