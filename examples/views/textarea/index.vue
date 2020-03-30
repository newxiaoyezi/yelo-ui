<template>
    <div>
        多行输入文本框：<yelo-textarea v-model="inputValue"></yelo-textarea>
        <param-table :paramsList="paramsList" width="250px"></param-table>
    </div>
</template>
<script>
import paramTable from "../../components/paramTable";
export default {
    data() {
        return {
            inputValue:"",
            paramsList: [{
                paramTitle: "样式",
                params: [
                    {paramName: "width", describe: "宽度", value: ""},
                    {paramName: "height", describe: "高度", value: ""},
                    {paramName: "fontSize", describe: "字体大小", value: ""},
                ]
            }, {
                paramTitle:"参数",
                params: [
                    {paramName: "maxlength", describe: "输入框最多可输入长度", value: ""},
                    {paramName: "placeholder", describe: "输入框内置文本", value: ""},
                    {paramName: "inputValue", describe: "输入框值，v-model绑定", value: ""},
                ]
            },]
        }
    },
    components: {
        paramTable
    }
}
</script>