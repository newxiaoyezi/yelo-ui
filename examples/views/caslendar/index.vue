<template>
  <div>
    <yelo-caslendar v-model="addressList"></yelo-caslendar>
    {{addressList}}
    <p>v-model绑定的值需要具体声明内部的属性值，参照上面</p>

    <param-table :paramsList="paramsList" width="250px"></param-table>
  </div>
</template>
<script>
import paramTable from "../../components/paramTable";
export default {
  data() {
    return {
      addressList: {
        provinceName: "",
        provinceId: "",
        cityName: "",
        cityId: "",
        areaName: "",
        areaId: "",
        detailAddress: ""
      },
      paramsList: [
        {
          paramTitle: "样式",
          params: [{ paramName: "width", describe: "宽度", value: "100%" }]
        },
        {
          paramTitle: "参数",
          params: [
            { paramName: "disabled", describe: "是否禁用", value: "false" },
            { paramName: "addressList", describe: "v-model绑定", value: "" }
          ]
        }
      ]
    };
  },
  components: {
    paramTable
  }
};
</script>