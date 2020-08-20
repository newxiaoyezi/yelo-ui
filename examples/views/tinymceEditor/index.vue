<template>
    <div>
        <yelo-tiny-editor v-model="message"></yelo-tiny-editor>
        <param-table :paramsList="paramsList" width="250px"></param-table>
    </div>
</template>
<script>
import paramTable from "../../components/paramTable";
export default {
    data() {
        return {
            message: "",
            paramsList: [{
                paramTitle: "参数",
                params: [
                    {paramName: "disabled", describe: "是否禁用", value: "false"},
                    {paramName: "pdfName", describe: "高度", value: "上传PDF文件的名字"},
                    {paramName: "imageUrl", describe: "图片信息", value: 
                `{
    relativePath: "",
    src: "",
    id: ""
}`},
                    {paramName: "showClose", describe: "上传后是否显示删除按钮", value: "true"},
                    {paramName: "uploadAction", describe: "上传地址", value: ""},
                ]
            }]
        }
    },
    components: {
        paramTable,
    }
}
</script>