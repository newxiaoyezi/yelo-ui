<template>
    <div>
        <yelo-tree :data="treeData" :checkedKeys="checkedKeys" v-model="tree" :checkedBox="checkedBox"></yelo-tree>
        <param-table :paramsList="paramsList" width="250px"></param-table>
    </div>
</template>
<script>
import paramTable from "../../components/paramTable";
export default {
    data() {
        return {
            tree:{},
            treeData: [{
                id: "1",
                label: "树形 1",
                children: [{
                    id: "1.1",
                    label: "树形 1-1",
                    children: [],
                },{
                    id: "1.2",
                    label: "树形 1-2",
                    children: [],
                },{
                    id: "1.3",
                    label: "树形 1-3",
                    children: [],
                },]
            },{
                id: "2",
                label: "树形 2",
                children: [{
                    id: "2.1",
                    label: "树形 2-1",
                    children: [{
                        id: "2.1.1",
                        label: "树形 2-1-1",
                        children: [],
                    }],
                }]
            },{
                id: "3",
                label: "树形 3",
                children: []
            }],
            checkedKeys:['3'],
            paramsList: [{
                paramTitle:"参数",
                params: [
                    {paramName: "data", describe: "树形控件数据,Array,[{label:'',id:'',children:[]}]", value: ""},
                    {paramName: "checkedKeys", describe: "默认选中的值id集合", value: ""},
                    {paramName: "strictly", describe: "父子是否关联", value: "false"},
                    {paramName: "tree", describe: "v-model绑定，值为this.$refs.getRoleTree", value: "false"},
                ]
            },{
                paramTitle:"事件",
                params: [
                    {paramName: "checkedBox", describe: "复选框点击时触发，参数为点击的对象", value: ""},
                ],
            }]
        }
    },
    methods: {
        checkedBox(data) {
        }
    },
    components: {
        paramTable,
    }
}
</script>