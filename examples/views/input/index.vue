<template>
    <div>
        输入: <yelo-input v-model="value"></yelo-input>
        <param-table :paramsList="paramsList" width="250px"></param-table>
    </div>
</template>
<script>
import paramTable from "../../components/paramTable";
export default {
    data() {
        return {
            value:"",
            paramsList: [{
                paramTitle: "样式",
                params: [
                    {paramName: "width", describe: "宽度", value: ""},
                    {paramName: "height", describe: "高度", value: "40px"},
                ]
            }, {
                paramTitle:"参数",
                params: [
                    {paramName: "type", describe: "输入框类别", value: ""},
                    {paramName: "placeholder", describe: "输入框内置文本", value: ""},
                    {paramName: "value", describe: "输入框值，v-model绑定", value: ""},
                ]
            }, {
                paramTitle:"事件",
                params: [
                    {paramName: "enterSearch", describe: "回车事件", value: ""},
                ]
            }]
        }
    },
    components: {
        paramTable,
    },
}
</script>