<!--
 * @Author: zlf
 * @Date: 2020-03-30 15:38:57
 * @LastEditors: zlf
 * @LastEditTime: 2020-08-20 14:02:42
 * @Description: 
 * @FilePath: \yelo-ui\examples\views\upload\index.vue
-->
<template>
    <div>
        <yelo-upload v-model="imageUrl" :uploadAction="uploadAction"></yelo-upload>
        <param-table :paramsList="paramsList" width="250px"></param-table>
    </div>
</template>
<script>
import paramTable from "../../components/paramTable";
export default {
    data() {
        return {
            imageUrl:{
                relativePath: "",
                src: "",
                id: ""
            },
            uploadAction: '',
            paramsList: [{
                paramTitle: "参数",
                params: [
                    {paramName: "disabled", describe: "是否禁用", value: "false"},
                    {paramName: "pdfName", describe: "上传PDF文件的名字", value: ""},
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