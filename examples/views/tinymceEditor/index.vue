<template>
    <div>
        <yelo-tiny-editor v-model="message" :wordCountNum="wordCountNum"></yelo-tiny-editor>
        <div>编辑器中内容字符长度为{{messageLength}}</div>
        <div>编辑器中内容图片数量为{{imgCount}}</div>
        <param-table :paramsList="paramsList" width="250px"></param-table>
    </div>
</template>
<script>
import paramTable from "../../components/paramTable";
export default {
    data() {
        return {
            message: "",
            messageLength: 0,
            imgCount: 0,
            paramsList: [{
                paramTitle: "参数",
                params: [
                    {paramName: "disabled", describe: "是否禁用", value: "false"},
                    {paramName: "uploadUrl", describe: "图片上传路径", value: ""},
                    {paramName: "plugins", describe: "插件", value: "lists image media table wordcount"},
                    {paramName: "pdfName", describe: "上传PDF文件名称，若为空，只能上传图片", value: ""},
                    {paramName: "toolbar", describe: "工具栏配置", value: ""},
                    {paramName: "defaultColor", describe: "字体默认颜色", value: "#000"},
                    {paramName: "height", describe: "高度", value: "500"},
                    {paramName: "wordCountNum", describe: "内容有变化触发方法，参数返回字符长度", value: "500"},
                ]
            }]
        }
    },
    methods: {
      wordCountNum(count, imgCount) {
        this.messageLength = count;
        this.imgCount = imgCount;
      }
    },
    components: {
        paramTable,
    }
}
</script>