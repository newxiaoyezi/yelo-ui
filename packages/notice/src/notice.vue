<style scoped lang="scss">
.head-a {
  display: flex;
  align-items: center;
}

.notice {
  // margin-right: 30px;
  margin-bottom: 1px;
}
</style>
<style>
.head-a a,
.popover a {
  text-decoration: none;
}

</style>

<template>
    <div class='head-a' style='font-size:16px;'>
      <el-popover :visible-arrow='true' v-model="visible" class="popover" @hide="hide" placement="bottom" width="450" trigger="click">
        <!-- <div style='display:flex;width:100%'>
        <i class="el-icon-close"></i>

        </div> -->
        <div style='height: 480px;padding: 10px 10px 10px 10px;overflow: hidden;overflow-y: auto;'>
          <div v-for="(item,index) in noticeData" :key="index" style='display:flex;margin-bottom:10px;flex-direction:column;width:100%;border-bottom:1px solid lightgray'>
            <p style='font-size:16px;font-weight:bold'>{{item.typeTxt}}</p>
            <p style="margin-top:5px;font-size:14px;width:100%;white-space:normal; word-break:break-all;">{{item.content}}！</p>
            <a style='width:100%;margin-bottom:5px;text-align:end;margin-top:10px;text-decoration: none;' @click="toDetail(item)" href="javascript:void(0)">查看详情</a>
          </div>
        </div>

        <a style='color:white;' slot="reference" href="javascript:void(0)">
          <el-badge :is-dot='showDot' class="notice">通知</el-badge>
        </a>

      </el-popover>
    </div>
</template>
<script>
import Vue from 'vue'
import { Popover,Badge } from 'element-ui'
Vue.use(Popover);
Vue.use(Badge);

export default {
  name: "yeloNotice",
  props: [
    'noticeToDetail'
  ],

  data() {
    return {
      noticeData: [
        {
          type: "1",
          mark: 'C180529001',
          typeTxt: '库存提醒',
          content:
            '采购单C1805290001还有三天就到库存截止日期了，请及时派车运货！'
        },
        {
          type: "1",
          mark: 'C180529002',
          typeTxt: '库存提醒',
          content:
            '采购单C1805290002还有三天就到库存截止日期了，请及时派车运货！'
        },
        {
          type: "1",
          mark: 'C180529003',
          typeTxt: '库存提醒',
          content:
            '采购单C1805290003还有三天就到库存截止日期了，请及时派车运货！'
        },
        {
          type: "1",
          mark: 'C180529003',
          typeTxt: '库存提醒',
          content:
            '采购单C1805290003还有三天就到库存截止日期了，请及时派车运货！'
        },
        {
          type: "1",
          mark: 'C180529003',
          typeTxt: '库存提醒',
          content:
            '采购单C1805290003还有三天就到库存截止日期了，请及时派车运货！'
        },
        {
          type: "1",
          mark: 'C180529003',
          typeTxt: '库存提醒',
          content:
            '采购单C1805290003还有三天就到库存截止日期了，请及时派车运货！'
        },
        {
          type: "1",
          mark: 'C180529003',
          typeTxt: '库存提醒',
          content:
            '采购单C1805290003还有三天就到库存截止日期了，请及时派车运货！'
        },
        {
          type: "1",
          mark: 'C180529003',
          typeTxt: '库存提醒',
          content:
            '采购单C1805290003还有三天就到库存截止日期了，请及时派车运货！'
        },
        {
          type: "1",
          mark: 'C180529003',
          typeTxt: '库存提醒',
          content:
            '采购单C1805290003还有三天就到库存截止日期了，请及时派车运货！'
        },
        {
          type: "1",
          mark: 'C180529003',
          typeTxt: '库存提醒',
          content:
            '采购单C1805290003还有三天就到库存截止日期了，请及时派车运货！'
        },
        {
          type: "1",
          mark: 'C180529003',
          typeTxt: '库存提醒',
          content:
            '采购单C1805290003还有三天就到库存截止日期了，请及时派车运货！'
        }
      ],
      visible: false,
      showDot: true
    }
  },
  watch: {},
  mounted(){
    this.websocket()
  },
  methods: {
     websocket () {
      //  // console.dir('websocket....')
     let ws = new WebSocket(this.$axios.webSocket())
     ws.onopen = () => {
        // Web Socket 已连接上，使用 send() 方法发送数据
          ws.send('Holle')
          // console.log('数据发送中...')
      }
      ws.onmessage = evt => {
        // console.log('数据已接收...')
        // console.dir(evt)
      }
      ws.onclose = function () {
        // 关闭 websocket
        // console.log('连接已关闭...')
      }
      // 路由跳转时结束websocket链接
      this.$router.afterEach(function () {
        ws.close()
      })
    },

    toDetail(item) {
      this.visible = false
      this.noticeToDetail(item)
    },
    hide() {
      this.showDot = false
    },
    add() {
      this.showDot = true
    }
  }
}
</script>
