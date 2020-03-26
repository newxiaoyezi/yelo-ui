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
                title: "菜单1",
                icon: "",
                component: "",
                data: "",
                children: [
                    {
                        title: "菜单1-1",
                        icon: "",
                        component: "",
                        data: "",
                    },
                    {
                        title: "菜单1-2",
                        icon: "",
                        component: "",
                        data: "",
                    },
                ]
            },{
                title: "菜单2",
                icon: "",
                component: "",
                data: "",
                children: []
            }],
            paramsList: [{
                paramTitle:"参数",
                params: [
                    {paramName: "menu", describe: `菜单列表，数组形式
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
        }]
    },{
        title: "菜单2",
        icon: "",
        component: "",
        data: "",
        children: []
    }]`, value: ""},
                ]
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