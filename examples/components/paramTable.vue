<template>
    <div>
        <h4>参数列表</h4>
        <table>
            <th>
                <td>参数名</td>
                <td>描述</td>
                <td>默认值</td>
            </th>
            <div v-for="item in paramsList" :key="item.paramTitle">
                <tr class="title">
                    <td colspan="3">{{item.paramTitle}}</td>
                </tr>
                <tr v-for="paramItem in item.params" :key="paramItem.paramName">
                    <td>{{paramItem.paramName}}</td>
                    <td>{{paramItem.describe}}</td>
                    <td>{{paramItem.value}}</td>
                </tr>
            </div>
        </table>
    </div>
</template>
<script>
export default {
    props: {
        paramsList: {
            type: Array,
            default: () => {
                return []
            }
        }
    }
}
</script>
<style lang="scss" scoped>
    table {
        border-collapse: collapse;
        text-align: left;
        th {
            display: block;
        }
        td {
            border: 1px solid #cad9ea;
            color: #666;
            line-height: 30px;
            width: 300px;
            height: 30px;
            padding-left: 10px;
            white-space: pre-wrap;
        }
        .title {
            font-weight: bold;
        }
    }
</style>