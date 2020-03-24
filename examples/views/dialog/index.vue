<template>
    <div>
        <yelo-button :click="openDialog">点击打开dialog</yelo-button>

        <yelo-dialog v-model="dialogVisible">
            <h3 style="text-align: center">打开的对话框</h3>
        </yelo-dialog>

        <param-table :paramsList="paramsList"></param-table>
    </div>
</template>
<script>
import paramTable from "../../components/paramTable";
export default {
    data() {
        return {
            dialogVisible: false,
            paramsList: [{
                paramTitle: "样式",
                params: [
                    {paramName: "width", describe: "宽度", value: "35%"},
                ]
            },{
                paramTitle: "参数",
                params: [
                    {paramName: "title", describe: "弹窗名称", value: "提示"},
                    {paramName: "dialogVisible", describe: "弹窗显示与否，v-model绑定", value: "false"},
                    {paramName: "showCancel", describe: "是否展示取消按钮", value: "true"},
                    {paramName: "cancelTxt", describe: "取消按钮显示文本", value: "取消"},
                    {paramName: "showConfirm", describe: "是否展示确认按钮", value: "true"},
                    {paramName: "confirmTxt", describe: "确认按钮显示文本", value: "确认"},
                    {paramName: "btnArray", describe: 
                        `自定义下方展示按钮,数组形式
    [{
        title: "", type: "",
        fontSize: "", width: "", height: "", 
        func: ()=>{}, ......
    }]`, value: ""},
                ]
            },{
                paramTitle: "事件",
                params: [
                    {paramName: "clickCancelEvent", describe: "取消事件,会先关闭弹窗再执行", value: ""},
                    {paramName: "clickConfirmEvent", describe: "确认事件", value: ""},
                ]
            }]
        }
    },
    components: {
        paramTable
    },
    methods: {
        openDialog() {
            this.dialogVisible = true;
        }
    }
}
</script>