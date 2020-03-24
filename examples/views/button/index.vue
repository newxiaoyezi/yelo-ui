<template>
    <div class="yelo_button">
        <yelo-button>按钮</yelo-button>

        <h4>参数列表</h4>
        <table>
            <th>
                <td>参数名</td>
                <td>描述</td>
                <td>默认值</td>
            </th>
            <div v-for="item in paramsList" :key="item.paramTitle">
                <tr class="title">
                    <td colspan="3">{{item.paramTitle}}</td>
                </tr>
                <tr v-for="paramItem in item.params" :key="paramItem.paramName">
                    <td>{{paramItem.paramName}}</td>
                    <td>{{paramItem.describe}}</td>
                    <td>{{paramItem.value}}</td>
                </tr>
            </div>
        </table>
    </div>
</template>
<script>
export default {
    data() {
        return {
            paramsList: [{
                paramTitle: "样式",
                params: [
                    {paramName: "padding", describe: "内边距", value: ""},
                    {paramName: "width", describe: "宽度", value: ""},
                    {paramName: "height", describe: "高度", value: ""},
                    {paramName: "fontSize", describe: "字体大小", value: ""},
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
            width: 250px;
            height: 30px;
            padding-left: 10px;
        }
        .title {
            font-weight: bold;
        }
    }
}
</style>