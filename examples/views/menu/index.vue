<template>
    <div>
        <yelo-menu :menu="menuList"></yelo-menu>

        <param-table :paramsList="paramsList" width="250px"></param-table>
    </div>
</template>
<script>
import paramTable from "../../components/paramTable";
export default {
    data() {
        return {
            menuList:[{
                title: "菜单 1",
                icon: "1",
                component: "",
                data: "",
                children: [
                    {
                        title: "菜单 1-1",
                        icon: "",
                        component: "",
                        data: "",
                        children: []
                    },
                    {
                        title: "菜单 1-2",
                        icon: "",
                        component: "",
                        data: "",
                        children: []
                    },
                ]
            },{
                title: "菜单 2",
                icon: "2",
                component: "",
                data: "",
                children: [{
                    title: "菜单 2-1",
                    icon: "",
                    component: "",
                    data: "",
                    children: []
                },]
            }],
            paramsList: [{
                paramTitle:"参数",
                params: [
                    {paramName: "menu", describe: 
`菜单列表，数组形式
    [{
        title: "菜单1",//菜单名
        icon: "",//名称前icon
        component: "",//页面对应组件
        data: "",//数据
        children: [{//子菜单
            title: "菜单1-1",
            icon: "",
            component: "",
            data: "",
            children: []//必填
        }]
    },{
        title: "菜单2",
        icon: "",
        component: "",
        data: "",
        children: []
    }]`, value: ""},
                    {paramName: "defaultClick", 
                    describe: "默认选中的菜单,值格式JSON格式{name:title,component:component,data:data}", 
                    value: ""}
                ]
            },{
                paramTitle:"时间",
                params: [
                    {paramName: "handleClose", describe: "打开菜单触发", value: ""},
                    {paramName: "handleOpen", describe: "关闭菜单触发", value: ""}
                ],
            }]
        }
    },
    methods: {
        getMenuData() {
            
        },
    },
    components: {
        paramTable,
    },
}
</script>