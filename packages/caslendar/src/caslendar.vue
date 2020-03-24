<template>
  <div :style='{"width": width}'>
    <el-select :disabled="disabled" style="width: 15%" clearable @change="changeProvince" v-model="provinceId" placeholder="省">
      <el-option v-for="item in province" :key="item.id" :label="item.mapName" :value="item.id">
      </el-option>
    </el-select>
    <el-select :disabled="disabled" style="width: 15%" clearable @change="changeCity" v-model="cityId" placeholder="市">
      <el-option v-for="item in city" :key="item.id" :label="item.mapName" :value="item.id">
      </el-option>
    </el-select>
    <el-select :disabled="disabled" style="width: 15%" clearable @change="changeArea" v-model="areaId" placeholder="区">
      <el-option v-for="item in area" :key="item.id" :label="item.mapName" :value="item.id">
      </el-option>
    </el-select>
    <el-input :disabled="disabled" style="width: 50%" maxlength="50" @change="changeDetail" v-model="detailAddress"></el-input>
  </div>
</template>

<script>
import Vue from 'vue'
import { Select,Input } from 'element-ui'
import { province, city, area } from '../../../examples/assets/map'
Vue.use(Select);
Vue.use(Input);

export default {
  name: 'yeloCaslendar',
  model: {
    prop: 'addressList',
    event: 'changeValue'
  },
  props: {
    width: {
      type: String,
      default: '100%'
    },
    addressList: {
      type: Object,
      default: {}
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      provinceMap: [],
      cityMap: [],
      areaMap: [],
      province: [],
      city: [],
      area: [],
      provinceId: '',
      cityId: '',
      areaId: '',
      detailAddress: '',
      addresses: this.addressList
    }
  },
  watch: {
    addressList(val) {
      this.addresses = val
      this.setAddressList()
    },
    addresses: {
      handler(val, oldVal) {
        if(val.provinceId===''){
          val.cityId=''
          val.cityName=''
          val.areaId=''
          val.areaName=''
        }
        if(val.cityId===''){
          val.areaId=''
          val.areaName=''
        }
        this.$emit('changeValue', val)
      },
      deep: true
    }
  },
  mounted() {
    this.map2String()
    this.province = this.provinceMap
    this.setAddressList()
  },
  methods: {
    setAddressList() {
      this.provinceId = this.addresses.provinceId
      this.changeProvince(this.provinceId)
      this.cityId = this.addresses.cityId
      this.changeCity(this.cityId)
      this.areaId = this.addresses.areaId
      this.detailAddress = this.addresses.detailAddress
    },
    map2String() {
      province.find(item => {
        item = {
          id: item['id'].toString(),
          mapName: item['mapName'],
          mapParentId: item['mapParentId'].toString()
        }
        this.provinceMap.push(item)
      })

      city.find(item => {
        item = {
          id: item['id'].toString(),
          mapName: item['mapName'],
          mapParentId: item['mapParentId'].toString()
        }
        this.cityMap.push(item)
      })

      area.find(item => {
        item = {
          id: item['id'].toString(),
          mapName: item['mapName'],
          mapParentId: item['mapParentId'].toString()
        }
        this.areaMap.push(item)
      })
    },
    // 选中省触发事件
    changeProvince(val) {
      // 选中后返回label值
      let obj = {}
      obj = this.provinceMap.find(item => {
        // 这里的userList就是上面遍历的数据源
        return item.id === val // 筛选出匹配数据
      })

      this.addresses.provinceName = obj == undefined ? '' : obj.mapName
      this.addresses.provinceId = val
      // 加载市
      this.cityId = ''
      this.areaId = ''
      this.city = []
      this.area = []
      this.cityMap.find(item => {
        // 这里的userList就是上面遍历的数据源
        if (item.mapParentId === val) {
          item = {
            id: item['id'].toString(),
            mapName: item['mapName']
          }
          this.city.push(item)
        }
      })
    },

    // 选中市触发事件
    changeCity(val) {
      let obj = {}
      obj = this.cityMap.find(item => {
        // 这里的userList就是上面遍历的数据源
        return item.id === val // 筛选出匹配数据
      })
      this.addresses.cityName = obj == undefined ? '' : obj.mapName
      this.addresses.cityId = val
      this.areaId = ''
      this.area = []
      this.areaMap.find(item => {
        // 这里的userList就是上面遍历的数据源
        if (item.mapParentId === val) {
          item = {
            id: item['id'].toString(),
            mapName: item['mapName']
          }
          this.area.push(item)
        }
      })
    },

    // 选中区触发事件
    changeArea(val) {
      let obj = {}
      obj = this.areaMap.find(item => {
        // 这里的userList就是上面遍历的数据源
        return item.id === val // 筛选出匹配数据
      })
      this.addresses.areaName = obj == undefined ? '' : obj.mapName
      this.addresses.areaId = val
    },

    // 详细地址改变后调用方法
    changeDetail(val) {
      this.addresses.detailAddress = val
    }
  }
}
</script>

<style scoped>
</style>
