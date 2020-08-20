<template>
    <div>
        <el-input
            v-model="moneyValue"
            maxlength="maxlength"
        ></el-input>
    </div>
</template>
<script>
import Vue from "vue";
import { Input } from "element-ui";
Vue.use(Input);

export default {
    name: "yeloMoneyInput",
    props: {
        maxScaleLength: {//最大小数位数
            type: Number,
            default: 2
        },
        maxlength: {//最大长度
            type: Number,
            default: null
        },
        maxValue: {//最大值
            type: Number,
            default: null
        },
        minValue: {//最小值
            type: Number,
            default: null
        }
    },
    watch: {
        moneyValue(val) {
            if(val < 0) {
                this.moneyValue = 0;
                return;
            }
            this.moneyValue = val > this.maxValue ? this.maxValue : val ;
            this.moneyValue = val < this.minValue ? this.minValue : val ;
            this.moneyValue = val.toFixed(this.maxScaleLength);
            
        }
    },
    data() {
        return {
            moneyValue: "",
        }
    }
    
}
</script>
<style lang="scss" scoped>

</style>