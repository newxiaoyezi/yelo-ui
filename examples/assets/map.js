//$.namespace('logistics.common.data');

let province = [
  {
    id: 110000,
    mapName: '北京市',
    mapParentId: 100000
  },
  {
    id: 120000,
    mapName: '天津市',

    mapParentId: 100000
  },
  {
    id: 130000,
    mapName: '河北省',

    mapParentId: 100000
  },
  {
    id: 140000,
    mapName: '山西省',

    mapParentId: 100000
  },
  {
    id: 150000,
    mapName: '内蒙古自治区',

    mapParentId: 100000
  },
  {
    id: 210000,
    mapName: '辽宁省',

    mapParentId: 100000
  },
  {
    id: 220000,
    mapName: '吉林省',

    mapParentId: 100000
  },
  {
    id: 230000,
    mapName: '黑龙江省',

    mapParentId: 100000
  },
  {
    id: 310000,
    mapName: '上海市',

    mapParentId: 100000
  },
  {
    id: 320000,
    mapName: '江苏省',

    mapParentId: 100000
  },
  {
    id: 330000,
    mapName: '浙江省',

    mapParentId: 100000
  },
  {
    id: 340000,
    mapName: '安徽省',

    mapParentId: 100000
  },
  {
    id: 350000,
    mapName: '福建省',

    mapParentId: 100000
  },
  {
    id: 360000,
    mapName: '江西省',

    mapParentId: 100000
  },
  {
    id: 370000,
    mapName: '山东省',

    mapParentId: 100000
  },
  {
    id: 410000,
    mapName: '河南省',

    mapParentId: 100000
  },
  {
    id: 420000,
    mapName: '湖北省',

    mapParentId: 100000
  },
  {
    id: 430000,
    mapName: '湖南省',

    mapParentId: 100000
  },
  {
    id: 440000,
    mapName: '广东省',

    mapParentId: 100000
  },
  {
    id: 450000,
    mapName: '广西壮族自治区',

    mapParentId: 100000
  },
  {
    id: 460000,
    mapName: '海南省',

    mapParentId: 100000
  },
  {
    id: 500000,
    mapName: '重庆市',

    mapParentId: 100000
  },
  {
    id: 510000,
    mapName: '四川省',

    mapParentId: 100000
  },
  {
    id: 520000,
    mapName: '贵州省',

    mapParentId: 100000
  },
  {
    id: 530000,
    mapName: '云南省',

    mapParentId: 100000
  },
  {
    id: 540000,
    mapName: '西藏自治区',

    mapParentId: 100000
  },
  {
    id: 610000,
    mapName: '陕西省',

    mapParentId: 100000
  },
  {
    id: 620000,
    mapName: '甘肃省',

    mapParentId: 100000
  },
  {
    id: 630000,
    mapName: '青海省',

    mapParentId: 100000
  },
  {
    id: 640000,
    mapName: '宁夏回族自治区',

    mapParentId: 100000
  },
  {
    id: 650000,
    mapName: '新疆维吾尔自治区',

    mapParentId: 100000
  },
  {
    id: 710000,
    mapName: '台湾省',

    mapParentId: 100000
  },
  {
    id: 810000,
    mapName: '香港特别行政区',

    mapParentId: 100000
  },
  {
    id: 820000,
    mapName: '澳门特别行政区',

    mapParentId: 100000
  }
]

let city = [
  {
    id: 110100,
    mapName: '北京城区',

    mapParentId: 110000
  },
  {
    id: 120100,
    mapName: '天津城区',

    mapParentId: 120000
  },
  {
    id: 130100,
    mapName: '石家庄市',

    mapParentId: 130000
  },
  {
    id: 130200,
    mapName: '唐山市',

    mapParentId: 130000
  },
  {
    id: 130300,
    mapName: '秦皇岛市',

    mapParentId: 130000
  },
  {
    id: 130400,
    mapName: '邯郸市',

    mapParentId: 130000
  },
  {
    id: 130500,
    mapName: '邢台市',

    mapParentId: 130000
  },
  {
    id: 130600,
    mapName: '保定市',

    mapParentId: 130000
  },
  {
    id: 130700,
    mapName: '张家口市',

    mapParentId: 130000
  },
  {
    id: 130800,
    mapName: '承德市',

    mapParentId: 130000
  },
  {
    id: 130900,
    mapName: '沧州市',

    mapParentId: 130000
  },
  {
    id: 131000,
    mapName: '廊坊市',

    mapParentId: 130000
  },
  {
    id: 131100,
    mapName: '衡水市',

    mapParentId: 130000
  },
  {
    id: 140100,
    mapName: '太原市',

    mapParentId: 140000
  },
  {
    id: 140200,
    mapName: '大同市',

    mapParentId: 140000
  },
  {
    id: 140300,
    mapName: '阳泉市',

    mapParentId: 140000
  },
  {
    id: 140400,
    mapName: '长治市',

    mapParentId: 140000
  },
  {
    id: 140500,
    mapName: '晋城市',

    mapParentId: 140000
  },
  {
    id: 140600,
    mapName: '朔州市',

    mapParentId: 140000
  },
  {
    id: 140700,
    mapName: '晋中市',

    mapParentId: 140000
  },
  {
    id: 140800,
    mapName: '运城市',

    mapParentId: 140000
  },
  {
    id: 140900,
    mapName: '忻州市',

    mapParentId: 140000
  },
  {
    id: 141000,
    mapName: '临汾市',

    mapParentId: 140000
  },
  {
    id: 141100,
    mapName: '吕梁市',

    mapParentId: 140000
  },
  {
    id: 150100,
    mapName: '呼和浩特市',

    mapParentId: 150000
  },
  {
    id: 150200,
    mapName: '包头市',

    mapParentId: 150000
  },
  {
    id: 150300,
    mapName: '乌海市',

    mapParentId: 150000
  },
  {
    id: 150400,
    mapName: '赤峰市',

    mapParentId: 150000
  },
  {
    id: 150500,
    mapName: '通辽市',

    mapParentId: 150000
  },
  {
    id: 150600,
    mapName: '鄂尔多斯市',

    mapParentId: 150000
  },
  {
    id: 150700,
    mapName: '呼伦贝尔市',

    mapParentId: 150000
  },
  {
    id: 150800,
    mapName: '巴彦淖尔市',

    mapParentId: 150000
  },
  {
    id: 150900,
    mapName: '乌兰察布市',

    mapParentId: 150000
  },
  {
    id: 152200,
    mapName: '兴安盟',

    mapParentId: 150000
  },
  {
    id: 152500,
    mapName: '锡林郭勒盟',

    mapParentId: 150000
  },
  {
    id: 152900,
    mapName: '阿拉善盟',

    mapParentId: 150000
  },
  {
    id: 210100,
    mapName: '沈阳市',

    mapParentId: 210000
  },
  {
    id: 210200,
    mapName: '大连市',

    mapParentId: 210000
  },
  {
    id: 210300,
    mapName: '鞍山市',

    mapParentId: 210000
  },
  {
    id: 210400,
    mapName: '抚顺市',

    mapParentId: 210000
  },
  {
    id: 210500,
    mapName: '本溪市',

    mapParentId: 210000
  },
  {
    id: 210600,
    mapName: '丹东市',

    mapParentId: 210000
  },
  {
    id: 210700,
    mapName: '锦州市',

    mapParentId: 210000
  },
  {
    id: 210800,
    mapName: '营口市',

    mapParentId: 210000
  },
  {
    id: 210900,
    mapName: '阜新市',

    mapParentId: 210000
  },
  {
    id: 211000,
    mapName: '辽阳市',

    mapParentId: 210000
  },
  {
    id: 211100,
    mapName: '盘锦市',

    mapParentId: 210000
  },
  {
    id: 211200,
    mapName: '铁岭市',

    mapParentId: 210000
  },
  {
    id: 211300,
    mapName: '朝阳市',

    mapParentId: 210000
  },
  {
    id: 211400,
    mapName: '葫芦岛市',

    mapParentId: 210000
  },
  {
    id: 220100,
    mapName: '长春市',

    mapParentId: 220000
  },
  {
    id: 220200,
    mapName: '吉林市',

    mapParentId: 220000
  },
  {
    id: 220300,
    mapName: '四平市',

    mapParentId: 220000
  },
  {
    id: 220400,
    mapName: '辽源市',

    mapParentId: 220000
  },
  {
    id: 220500,
    mapName: '通化市',

    mapParentId: 220000
  },
  {
    id: 220600,
    mapName: '白山市',

    mapParentId: 220000
  },
  {
    id: 220700,
    mapName: '松原市',

    mapParentId: 220000
  },
  {
    id: 220800,
    mapName: '白城市',

    mapParentId: 220000
  },
  {
    id: 222400,
    mapName: '延边朝鲜族自治州',

    mapParentId: 220000
  },
  {
    id: 230100,
    mapName: '哈尔滨市',

    mapParentId: 230000
  },
  {
    id: 230200,
    mapName: '齐齐哈尔市',

    mapParentId: 230000
  },
  {
    id: 230300,
    mapName: '鸡西市',

    mapParentId: 230000
  },
  {
    id: 230400,
    mapName: '鹤岗市',

    mapParentId: 230000
  },
  {
    id: 230500,
    mapName: '双鸭山市',

    mapParentId: 230000
  },
  {
    id: 230600,
    mapName: '大庆市',

    mapParentId: 230000
  },
  {
    id: 230700,
    mapName: '伊春市',

    mapParentId: 230000
  },
  {
    id: 230800,
    mapName: '佳木斯市',

    mapParentId: 230000
  },
  {
    id: 230900,
    mapName: '七台河市',

    mapParentId: 230000
  },
  {
    id: 231000,
    mapName: '牡丹江市',

    mapParentId: 230000
  },
  {
    id: 231100,
    mapName: '黑河市',

    mapParentId: 230000
  },
  {
    id: 231200,
    mapName: '绥化市',

    mapParentId: 230000
  },
  {
    id: 232700,
    mapName: '大兴安岭地区',

    mapParentId: 230000
  },
  {
    id: 310100,
    mapName: '上海城区',

    mapParentId: 310000
  },
  {
    id: 320100,
    mapName: '南京市',

    mapParentId: 320000
  },
  {
    id: 320200,
    mapName: '无锡市',

    mapParentId: 320000
  },
  {
    id: 320300,
    mapName: '徐州市',

    mapParentId: 320000
  },
  {
    id: 320400,
    mapName: '常州市',

    mapParentId: 320000
  },
  {
    id: 320500,
    mapName: '苏州市',

    mapParentId: 320000
  },
  {
    id: 320600,
    mapName: '南通市',

    mapParentId: 320000
  },
  {
    id: 320700,
    mapName: '连云港市',

    mapParentId: 320000
  },
  {
    id: 320800,
    mapName: '淮安市',

    mapParentId: 320000
  },
  {
    id: 320900,
    mapName: '盐城市',

    mapParentId: 320000
  },
  {
    id: 321000,
    mapName: '扬州市',

    mapParentId: 320000
  },
  {
    id: 321100,
    mapName: '镇江市',

    mapParentId: 320000
  },
  {
    id: 321200,
    mapName: '泰州市',

    mapParentId: 320000
  },
  {
    id: 321300,
    mapName: '宿迁市',

    mapParentId: 320000
  },
  {
    id: 330100,
    mapName: '杭州市',

    mapParentId: 330000
  },
  {
    id: 330200,
    mapName: '宁波市',

    mapParentId: 330000
  },
  {
    id: 330300,
    mapName: '温州市',

    mapParentId: 330000
  },
  {
    id: 330400,
    mapName: '嘉兴市',

    mapParentId: 330000
  },
  {
    id: 330500,
    mapName: '湖州市',

    mapParentId: 330000
  },
  {
    id: 330600,
    mapName: '绍兴市',

    mapParentId: 330000
  },
  {
    id: 330700,
    mapName: '金华市',

    mapParentId: 330000
  },
  {
    id: 330800,
    mapName: '衢州市',

    mapParentId: 330000
  },
  {
    id: 330900,
    mapName: '舟山市',

    mapParentId: 330000
  },
  {
    id: 331000,
    mapName: '台州市',

    mapParentId: 330000
  },
  {
    id: 331100,
    mapName: '丽水市',

    mapParentId: 330000
  },
  {
    id: 340100,
    mapName: '合肥市',

    mapParentId: 340000
  },
  {
    id: 340200,
    mapName: '芜湖市',

    mapParentId: 340000
  },
  {
    id: 340300,
    mapName: '蚌埠市',

    mapParentId: 340000
  },
  {
    id: 340400,
    mapName: '淮南市',

    mapParentId: 340000
  },
  {
    id: 340500,
    mapName: '马鞍山市',

    mapParentId: 340000
  },
  {
    id: 340600,
    mapName: '淮北市',

    mapParentId: 340000
  },
  {
    id: 340700,
    mapName: '铜陵市',

    mapParentId: 340000
  },
  {
    id: 340800,
    mapName: '安庆市',

    mapParentId: 340000
  },
  {
    id: 341000,
    mapName: '黄山市',

    mapParentId: 340000
  },
  {
    id: 341100,
    mapName: '滁州市',

    mapParentId: 340000
  },
  {
    id: 341200,
    mapName: '阜阳市',

    mapParentId: 340000
  },
  {
    id: 341300,
    mapName: '宿州市',

    mapParentId: 340000
  },
  {
    id: 341500,
    mapName: '六安市',

    mapParentId: 340000
  },
  {
    id: 341600,
    mapName: '亳州市',

    mapParentId: 340000
  },
  {
    id: 341700,
    mapName: '池州市',

    mapParentId: 340000
  },
  {
    id: 341800,
    mapName: '宣城市',

    mapParentId: 340000
  },
  {
    id: 350100,
    mapName: '福州市',

    mapParentId: 350000
  },
  {
    id: 350200,
    mapName: '厦门市',

    mapParentId: 350000
  },
  {
    id: 350300,
    mapName: '莆田市',

    mapParentId: 350000
  },
  {
    id: 350400,
    mapName: '三明市',

    mapParentId: 350000
  },
  {
    id: 350500,
    mapName: '泉州市',

    mapParentId: 350000
  },
  {
    id: 350600,
    mapName: '漳州市',

    mapParentId: 350000
  },
  {
    id: 350700,
    mapName: '南平市',

    mapParentId: 350000
  },
  {
    id: 350800,
    mapName: '龙岩市',

    mapParentId: 350000
  },
  {
    id: 350900,
    mapName: '宁德市',

    mapParentId: 350000
  },
  {
    id: 360100,
    mapName: '南昌市',

    mapParentId: 360000
  },
  {
    id: 360200,
    mapName: '景德镇市',

    mapParentId: 360000
  },
  {
    id: 360300,
    mapName: '萍乡市',

    mapParentId: 360000
  },
  {
    id: 360400,
    mapName: '九江市',

    mapParentId: 360000
  },
  {
    id: 360500,
    mapName: '新余市',

    mapParentId: 360000
  },
  {
    id: 360600,
    mapName: '鹰潭市',

    mapParentId: 360000
  },
  {
    id: 360700,
    mapName: '赣州市',

    mapParentId: 360000
  },
  {
    id: 360800,
    mapName: '吉安市',

    mapParentId: 360000
  },
  {
    id: 360900,
    mapName: '宜春市',

    mapParentId: 360000
  },
  {
    id: 361000,
    mapName: '抚州市',

    mapParentId: 360000
  },
  {
    id: 361100,
    mapName: '上饶市',

    mapParentId: 360000
  },
  {
    id: 370100,
    mapName: '济南市',

    mapParentId: 370000
  },
  {
    id: 370200,
    mapName: '青岛市',

    mapParentId: 370000
  },
  {
    id: 370300,
    mapName: '淄博市',

    mapParentId: 370000
  },
  {
    id: 370400,
    mapName: '枣庄市',

    mapParentId: 370000
  },
  {
    id: 370500,
    mapName: '东营市',

    mapParentId: 370000
  },
  {
    id: 370600,
    mapName: '烟台市',

    mapParentId: 370000
  },
  {
    id: 370700,
    mapName: '潍坊市',

    mapParentId: 370000
  },
  {
    id: 370800,
    mapName: '济宁市',

    mapParentId: 370000
  },
  {
    id: 370900,
    mapName: '泰安市',

    mapParentId: 370000
  },
  {
    id: 371000,
    mapName: '威海市',

    mapParentId: 370000
  },
  {
    id: 371100,
    mapName: '日照市',

    mapParentId: 370000
  },
  {
    id: 371300,
    mapName: '临沂市',

    mapParentId: 370000
  },
  {
    id: 371400,
    mapName: '德州市',

    mapParentId: 370000
  },
  {
    id: 371500,
    mapName: '聊城市',

    mapParentId: 370000
  },
  {
    id: 371600,
    mapName: '滨州市',

    mapParentId: 370000
  },
  {
    id: 371700,
    mapName: '菏泽市',

    mapParentId: 370000
  },
  {
    id: 410100,
    mapName: '郑州市',

    mapParentId: 410000
  },
  {
    id: 410200,
    mapName: '开封市',

    mapParentId: 410000
  },
  {
    id: 410300,
    mapName: '洛阳市',

    mapParentId: 410000
  },
  {
    id: 410400,
    mapName: '平顶山市',

    mapParentId: 410000
  },
  {
    id: 410500,
    mapName: '安阳市',

    mapParentId: 410000
  },
  {
    id: 410600,
    mapName: '鹤壁市',

    mapParentId: 410000
  },
  {
    id: 410700,
    mapName: '新乡市',

    mapParentId: 410000
  },
  {
    id: 410800,
    mapName: '焦作市',

    mapParentId: 410000
  },
  {
    id: 410900,
    mapName: '濮阳市',

    mapParentId: 410000
  },
  {
    id: 411000,
    mapName: '许昌市',

    mapParentId: 410000
  },
  {
    id: 411100,
    mapName: '漯河市',

    mapParentId: 410000
  },
  {
    id: 411200,
    mapName: '三门峡市',

    mapParentId: 410000
  },
  {
    id: 411300,
    mapName: '南阳市',

    mapParentId: 410000
  },
  {
    id: 411400,
    mapName: '商丘市',

    mapParentId: 410000
  },
  {
    id: 411500,
    mapName: '信阳市',

    mapParentId: 410000
  },
  {
    id: 411600,
    mapName: '周口市',

    mapParentId: 410000
  },
  {
    id: 411700,
    mapName: '驻马店市',

    mapParentId: 410000
  },
  {
    id: 419001,
    mapName: '济源市',

    mapParentId: 410000
  },
  {
    id: 420100,
    mapName: '武汉市',

    mapParentId: 420000
  },
  {
    id: 420200,
    mapName: '黄石市',

    mapParentId: 420000
  },
  {
    id: 420300,
    mapName: '十堰市',

    mapParentId: 420000
  },
  {
    id: 420500,
    mapName: '宜昌市',

    mapParentId: 420000
  },
  {
    id: 420600,
    mapName: '襄阳市',

    mapParentId: 420000
  },
  {
    id: 420700,
    mapName: '鄂州市',

    mapParentId: 420000
  },
  {
    id: 420800,
    mapName: '荆门市',

    mapParentId: 420000
  },
  {
    id: 420900,
    mapName: '孝感市',

    mapParentId: 420000
  },
  {
    id: 421000,
    mapName: '荆州市',

    mapParentId: 420000
  },
  {
    id: 421100,
    mapName: '黄冈市',

    mapParentId: 420000
  },
  {
    id: 421200,
    mapName: '咸宁市',

    mapParentId: 420000
  },
  {
    id: 421300,
    mapName: '随州市',

    mapParentId: 420000
  },
  {
    id: 422800,
    mapName: '恩施土家族苗族自治州',

    mapParentId: 420000
  },
  {
    id: 429004,
    mapName: '仙桃市',

    mapParentId: 420000
  },
  {
    id: 429005,
    mapName: '潜江市',

    mapParentId: 420000
  },
  {
    id: 429006,
    mapName: '天门市',

    mapParentId: 420000
  },
  {
    id: 429021,
    mapName: '神农架林区',

    mapParentId: 420000
  },
  {
    id: 430100,
    mapName: '长沙市',

    mapParentId: 430000
  },
  {
    id: 430200,
    mapName: '株洲市',

    mapParentId: 430000
  },
  {
    id: 430300,
    mapName: '湘潭市',

    mapParentId: 430000
  },
  {
    id: 430400,
    mapName: '衡阳市',

    mapParentId: 430000
  },
  {
    id: 430500,
    mapName: '邵阳市',

    mapParentId: 430000
  },
  {
    id: 430600,
    mapName: '岳阳市',

    mapParentId: 430000
  },
  {
    id: 430700,
    mapName: '常德市',

    mapParentId: 430000
  },
  {
    id: 430800,
    mapName: '张家界市',

    mapParentId: 430000
  },
  {
    id: 430900,
    mapName: '益阳市',

    mapParentId: 430000
  },
  {
    id: 431000,
    mapName: '郴州市',

    mapParentId: 430000
  },
  {
    id: 431100,
    mapName: '永州市',

    mapParentId: 430000
  },
  {
    id: 431200,
    mapName: '怀化市',

    mapParentId: 430000
  },
  {
    id: 431300,
    mapName: '娄底市',

    mapParentId: 430000
  },
  {
    id: 433100,
    mapName: '湘西土家族苗族自治州',

    mapParentId: 430000
  },
  {
    id: 440100,
    mapName: '广州市',

    mapParentId: 440000
  },
  {
    id: 440200,
    mapName: '韶关市',

    mapParentId: 440000
  },
  {
    id: 440300,
    mapName: '深圳市',

    mapParentId: 440000
  },
  {
    id: 440400,
    mapName: '珠海市',

    mapParentId: 440000
  },
  {
    id: 440500,
    mapName: '汕头市',

    mapParentId: 440000
  },
  {
    id: 440600,
    mapName: '佛山市',

    mapParentId: 440000
  },
  {
    id: 440700,
    mapName: '江门市',

    mapParentId: 440000
  },
  {
    id: 440800,
    mapName: '湛江市',

    mapParentId: 440000
  },
  {
    id: 440900,
    mapName: '茂名市',

    mapParentId: 440000
  },
  {
    id: 441200,
    mapName: '肇庆市',

    mapParentId: 440000
  },
  {
    id: 441300,
    mapName: '惠州市',

    mapParentId: 440000
  },
  {
    id: 441400,
    mapName: '梅州市',

    mapParentId: 440000
  },
  {
    id: 441500,
    mapName: '汕尾市',

    mapParentId: 440000
  },
  {
    id: 441600,
    mapName: '河源市',

    mapParentId: 440000
  },
  {
    id: 441700,
    mapName: '阳江市',

    mapParentId: 440000
  },
  {
    id: 441800,
    mapName: '清远市',

    mapParentId: 440000
  },
  {
    id: 441900,
    mapName: '东莞市',

    mapParentId: 440000
  },
  {
    id: 442000,
    mapName: '中山市',

    mapParentId: 440000
  },
  {
    id: 442100,
    mapName: '东沙群岛',

    mapParentId: 440000
  },
  {
    id: 445100,
    mapName: '潮州市',

    mapParentId: 440000
  },
  {
    id: 445200,
    mapName: '揭阳市',

    mapParentId: 440000
  },
  {
    id: 445300,
    mapName: '云浮市',

    mapParentId: 440000
  },
  {
    id: 450100,
    mapName: '南宁市',

    mapParentId: 450000
  },
  {
    id: 450200,
    mapName: '柳州市',

    mapParentId: 450000
  },
  {
    id: 450300,
    mapName: '桂林市',

    mapParentId: 450000
  },
  {
    id: 450400,
    mapName: '梧州市',

    mapParentId: 450000
  },
  {
    id: 450500,
    mapName: '北海市',

    mapParentId: 450000
  },
  {
    id: 450600,
    mapName: '防城港市',

    mapParentId: 450000
  },
  {
    id: 450700,
    mapName: '钦州市',

    mapParentId: 450000
  },
  {
    id: 450800,
    mapName: '贵港市',

    mapParentId: 450000
  },
  {
    id: 450900,
    mapName: '玉林市',

    mapParentId: 450000
  },
  {
    id: 451000,
    mapName: '百色市',

    mapParentId: 450000
  },
  {
    id: 451100,
    mapName: '贺州市',

    mapParentId: 450000
  },
  {
    id: 451200,
    mapName: '河池市',

    mapParentId: 450000
  },
  {
    id: 451300,
    mapName: '来宾市',

    mapParentId: 450000
  },
  {
    id: 451400,
    mapName: '崇左市',

    mapParentId: 450000
  },
  {
    id: 460100,
    mapName: '海口市',

    mapParentId: 460000
  },
  {
    id: 460200,
    mapName: '三亚市',

    mapParentId: 460000
  },
  {
    id: 460300,
    mapName: '三沙市',

    mapParentId: 460000
  },
  {
    id: 460400,
    mapName: '儋州市',

    mapParentId: 460000
  },
  {
    id: 469001,
    mapName: '五指山市',

    mapParentId: 460000
  },
  {
    id: 469002,
    mapName: '琼海市',

    mapParentId: 460000
  },
  {
    id: 469005,
    mapName: '文昌市',

    mapParentId: 460000
  },
  {
    id: 469006,
    mapName: '万宁市',

    mapParentId: 460000
  },
  {
    id: 469007,
    mapName: '东方市',

    mapParentId: 460000
  },
  {
    id: 469021,
    mapName: '定安县',

    mapParentId: 460000
  },
  {
    id: 469022,
    mapName: '屯昌县',

    mapParentId: 460000
  },
  {
    id: 469023,
    mapName: '澄迈县',

    mapParentId: 460000
  },
  {
    id: 469024,
    mapName: '临高县',

    mapParentId: 460000
  },
  {
    id: 469025,
    mapName: '白沙黎族自治县',

    mapParentId: 460000
  },
  {
    id: 469026,
    mapName: '昌江黎族自治县',

    mapParentId: 460000
  },
  {
    id: 469027,
    mapName: '乐东黎族自治县',

    mapParentId: 460000
  },
  {
    id: 469028,
    mapName: '陵水黎族自治县',

    mapParentId: 460000
  },
  {
    id: 469029,
    mapName: '保亭黎族苗族自治县',

    mapParentId: 460000
  },
  {
    id: 469030,
    mapName: '琼中黎族苗族自治县',

    mapParentId: 460000
  },
  {
    id: 500100,
    mapName: '重庆城区',

    mapParentId: 500000
  },
  {
    id: 500200,
    mapName: '重庆郊县',

    mapParentId: 500000
  },
  {
    id: 510100,
    mapName: '成都市',

    mapParentId: 510000
  },
  {
    id: 510300,
    mapName: '自贡市',

    mapParentId: 510000
  },
  {
    id: 510400,
    mapName: '攀枝花市',

    mapParentId: 510000
  },
  {
    id: 510500,
    mapName: '泸州市',

    mapParentId: 510000
  },
  {
    id: 510600,
    mapName: '德阳市',

    mapParentId: 510000
  },
  {
    id: 510700,
    mapName: '绵阳市',

    mapParentId: 510000
  },
  {
    id: 510800,
    mapName: '广元市',

    mapParentId: 510000
  },
  {
    id: 510900,
    mapName: '遂宁市',

    mapParentId: 510000
  },
  {
    id: 511000,
    mapName: '内江市',

    mapParentId: 510000
  },
  {
    id: 511100,
    mapName: '乐山市',

    mapParentId: 510000
  },
  {
    id: 511300,
    mapName: '南充市',

    mapParentId: 510000
  },
  {
    id: 511400,
    mapName: '眉山市',

    mapParentId: 510000
  },
  {
    id: 511500,
    mapName: '宜宾市',

    mapParentId: 510000
  },
  {
    id: 511600,
    mapName: '广安市',

    mapParentId: 510000
  },
  {
    id: 511700,
    mapName: '达州市',

    mapParentId: 510000
  },
  {
    id: 511800,
    mapName: '雅安市',

    mapParentId: 510000
  },
  {
    id: 511900,
    mapName: '巴中市',

    mapParentId: 510000
  },
  {
    id: 512000,
    mapName: '资阳市',

    mapParentId: 510000
  },
  {
    id: 513200,
    mapName: '阿坝藏族羌族自治州',

    mapParentId: 510000
  },
  {
    id: 513300,
    mapName: '甘孜藏族自治州',

    mapParentId: 510000
  },
  {
    id: 513400,
    mapName: '凉山彝族自治州',

    mapParentId: 510000
  },
  {
    id: 520100,
    mapName: '贵阳市',

    mapParentId: 520000
  },
  {
    id: 520200,
    mapName: '六盘水市',

    mapParentId: 520000
  },
  {
    id: 520300,
    mapName: '遵义市',

    mapParentId: 520000
  },
  {
    id: 520400,
    mapName: '安顺市',

    mapParentId: 520000
  },
  {
    id: 520500,
    mapName: '毕节市',

    mapParentId: 520000
  },
  {
    id: 520600,
    mapName: '铜仁市',

    mapParentId: 520000
  },
  {
    id: 522300,
    mapName: '黔西南布依族苗族自治州',

    mapParentId: 520000
  },
  {
    id: 522600,
    mapName: '黔东南苗族侗族自治州',

    mapParentId: 520000
  },
  {
    id: 522700,
    mapName: '黔南布依族苗族自治州',

    mapParentId: 520000
  },
  {
    id: 530100,
    mapName: '昆明市',

    mapParentId: 530000
  },
  {
    id: 530300,
    mapName: '曲靖市',

    mapParentId: 530000
  },
  {
    id: 530400,
    mapName: '玉溪市',

    mapParentId: 530000
  },
  {
    id: 530500,
    mapName: '保山市',

    mapParentId: 530000
  },
  {
    id: 530600,
    mapName: '昭通市',

    mapParentId: 530000
  },
  {
    id: 530700,
    mapName: '丽江市',

    mapParentId: 530000
  },
  {
    id: 530800,
    mapName: '普洱市',

    mapParentId: 530000
  },
  {
    id: 530900,
    mapName: '临沧市',

    mapParentId: 530000
  },
  {
    id: 532300,
    mapName: '楚雄彝族自治州',

    mapParentId: 530000
  },
  {
    id: 532500,
    mapName: '红河哈尼族彝族自治州',

    mapParentId: 530000
  },
  {
    id: 532600,
    mapName: '文山壮族苗族自治州',

    mapParentId: 530000
  },
  {
    id: 532800,
    mapName: '西双版纳傣族自治州',

    mapParentId: 530000
  },
  {
    id: 532900,
    mapName: '大理白族自治州',

    mapParentId: 530000
  },
  {
    id: 533100,
    mapName: '德宏傣族景颇族自治州',

    mapParentId: 530000
  },
  {
    id: 533300,
    mapName: '怒江傈僳族自治州',

    mapParentId: 530000
  },
  {
    id: 533400,
    mapName: '迪庆藏族自治州',

    mapParentId: 530000
  },
  {
    id: 540100,
    mapName: '拉萨市',

    mapParentId: 540000
  },
  {
    id: 540200,
    mapName: '日喀则市',

    mapParentId: 540000
  },
  {
    id: 540300,
    mapName: '昌都市',

    mapParentId: 540000
  },
  {
    id: 540400,
    mapName: '林芝市',

    mapParentId: 540000
  },
  {
    id: 540500,
    mapName: '山南市',

    mapParentId: 540000
  },
  {
    id: 540600,
    mapName: '那曲市',

    mapParentId: 540000
  },
  {
    id: 542500,
    mapName: '阿里地区',

    mapParentId: 540000
  },
  {
    id: 610100,
    mapName: '西安市',

    mapParentId: 610000
  },
  {
    id: 610200,
    mapName: '铜川市',

    mapParentId: 610000
  },
  {
    id: 610300,
    mapName: '宝鸡市',

    mapParentId: 610000
  },
  {
    id: 610400,
    mapName: '咸阳市',

    mapParentId: 610000
  },
  {
    id: 610500,
    mapName: '渭南市',

    mapParentId: 610000
  },
  {
    id: 610600,
    mapName: '延安市',

    mapParentId: 610000
  },
  {
    id: 610700,
    mapName: '汉中市',

    mapParentId: 610000
  },
  {
    id: 610800,
    mapName: '榆林市',

    mapParentId: 610000
  },
  {
    id: 610900,
    mapName: '安康市',

    mapParentId: 610000
  },
  {
    id: 611000,
    mapName: '商洛市',

    mapParentId: 610000
  },
  {
    id: 620100,
    mapName: '兰州市',

    mapParentId: 620000
  },
  {
    id: 620200,
    mapName: '嘉峪关市',

    mapParentId: 620000
  },
  {
    id: 620300,
    mapName: '金昌市',

    mapParentId: 620000
  },
  {
    id: 620400,
    mapName: '白银市',

    mapParentId: 620000
  },
  {
    id: 620500,
    mapName: '天水市',

    mapParentId: 620000
  },
  {
    id: 620600,
    mapName: '武威市',

    mapParentId: 620000
  },
  {
    id: 620700,
    mapName: '张掖市',

    mapParentId: 620000
  },
  {
    id: 620800,
    mapName: '平凉市',

    mapParentId: 620000
  },
  {
    id: 620900,
    mapName: '酒泉市',

    mapParentId: 620000
  },
  {
    id: 621000,
    mapName: '庆阳市',

    mapParentId: 620000
  },
  {
    id: 621100,
    mapName: '定西市',

    mapParentId: 620000
  },
  {
    id: 621200,
    mapName: '陇南市',

    mapParentId: 620000
  },
  {
    id: 622900,
    mapName: '临夏回族自治州',

    mapParentId: 620000
  },
  {
    id: 623000,
    mapName: '甘南藏族自治州',

    mapParentId: 620000
  },
  {
    id: 630100,
    mapName: '西宁市',

    mapParentId: 630000
  },
  {
    id: 630200,
    mapName: '海东市',

    mapParentId: 630000
  },
  {
    id: 632200,
    mapName: '海北藏族自治州',

    mapParentId: 630000
  },
  {
    id: 632300,
    mapName: '黄南藏族自治州',

    mapParentId: 630000
  },
  {
    id: 632500,
    mapName: '海南藏族自治州',

    mapParentId: 630000
  },
  {
    id: 632600,
    mapName: '果洛藏族自治州',

    mapParentId: 630000
  },
  {
    id: 632700,
    mapName: '玉树藏族自治州',

    mapParentId: 630000
  },
  {
    id: 632800,
    mapName: '海西蒙古族藏族自治州',

    mapParentId: 630000
  },
  {
    id: 640100,
    mapName: '银川市',

    mapParentId: 640000
  },
  {
    id: 640200,
    mapName: '石嘴山市',

    mapParentId: 640000
  },
  {
    id: 640300,
    mapName: '吴忠市',

    mapParentId: 640000
  },
  {
    id: 640400,
    mapName: '固原市',

    mapParentId: 640000
  },
  {
    id: 640500,
    mapName: '中卫市',

    mapParentId: 640000
  },
  {
    id: 650100,
    mapName: '乌鲁木齐市',

    mapParentId: 650000
  },
  {
    id: 650200,
    mapName: '克拉玛依市',

    mapParentId: 650000
  },
  {
    id: 650400,
    mapName: '吐鲁番市',

    mapParentId: 650000
  },
  {
    id: 650500,
    mapName: '哈密市',

    mapParentId: 650000
  },
  {
    id: 652300,
    mapName: '昌吉回族自治州',

    mapParentId: 650000
  },
  {
    id: 652700,
    mapName: '博尔塔拉蒙古自治州',

    mapParentId: 650000
  },
  {
    id: 652800,
    mapName: '巴音郭楞蒙古自治州',

    mapParentId: 650000
  },
  {
    id: 652900,
    mapName: '阿克苏地区',

    mapParentId: 650000
  },
  {
    id: 653000,
    mapName: '克孜勒苏柯尔克孜自治州',

    mapParentId: 650000
  },
  {
    id: 653100,
    mapName: '喀什地区',

    mapParentId: 650000
  },
  {
    id: 653200,
    mapName: '和田地区',

    mapParentId: 650000
  },
  {
    id: 654000,
    mapName: '伊犁哈萨克自治州',

    mapParentId: 650000
  },
  {
    id: 654200,
    mapName: '塔城地区',

    mapParentId: 650000
  },
  {
    id: 654300,
    mapName: '阿勒泰地区',

    mapParentId: 650000
  },
  {
    id: 659001,
    mapName: '石河子市',

    mapParentId: 650000
  },
  {
    id: 659002,
    mapName: '阿拉尔市',

    mapParentId: 650000
  },
  {
    id: 659003,
    mapName: '图木舒克市',

    mapParentId: 650000
  },
  {
    id: 659004,
    mapName: '五家渠市',

    mapParentId: 650000
  },
  {
    id: 659005,
    mapName: '北屯市',

    mapParentId: 650000
  },
  {
    id: 659006,
    mapName: '铁门关市',

    mapParentId: 650000
  },
  {
    id: 659007,
    mapName: '双河市',

    mapParentId: 650000
  },
  {
    id: 659008,
    mapName: '可克达拉市',

    mapParentId: 650000
  },
  {
    id: 659009,
    mapName: '昆玉市',

    mapParentId: 650000
  },
  {
    id: 71000001,
    mapName: '台湾',

    mapParentId: 710000
  },
  {
    id: 81000001,
    mapName: '香港特别行政区',

    mapParentId: 810000
  },
  {
    id: 82000001,
    mapName: '澳门特别行政区',

    mapParentId: 820000
  }
]

let area = [
  {
    id: 110101,
    mapName: '东城区',

    mapParentId: 110100
  },
  {
    id: 110102,
    mapName: '西城区',

    mapParentId: 110100
  },
  {
    id: 110105,
    mapName: '朝阳区',

    mapParentId: 110100
  },
  {
    id: 110106,
    mapName: '丰台区',

    mapParentId: 110100
  },
  {
    id: 110107,
    mapName: '石景山区',

    mapParentId: 110100
  },
  {
    id: 110108,
    mapName: '海淀区',

    mapParentId: 110100
  },
  {
    id: 110109,
    mapName: '门头沟区',

    mapParentId: 110100
  },
  {
    id: 110111,
    mapName: '房山区',

    mapParentId: 110100
  },
  {
    id: 110112,
    mapName: '通州区',

    mapParentId: 110100
  },
  {
    id: 110113,
    mapName: '顺义区',

    mapParentId: 110100
  },
  {
    id: 110114,
    mapName: '昌平区',

    mapParentId: 110100
  },
  {
    id: 110115,
    mapName: '大兴区',

    mapParentId: 110100
  },
  {
    id: 110116,
    mapName: '怀柔区',

    mapParentId: 110100
  },
  {
    id: 110117,
    mapName: '平谷区',

    mapParentId: 110100
  },
  {
    id: 110118,
    mapName: '密云区',

    mapParentId: 110100
  },
  {
    id: 110119,
    mapName: '延庆区',

    mapParentId: 110100
  },
  {
    id: 120101,
    mapName: '和平区',

    mapParentId: 120100
  },
  {
    id: 120102,
    mapName: '河东区',

    mapParentId: 120100
  },
  {
    id: 120103,
    mapName: '河西区',

    mapParentId: 120100
  },
  {
    id: 120104,
    mapName: '南开区',

    mapParentId: 120100
  },
  {
    id: 120105,
    mapName: '河北区',

    mapParentId: 120100
  },
  {
    id: 120106,
    mapName: '红桥区',

    mapParentId: 120100
  },
  {
    id: 120110,
    mapName: '东丽区',

    mapParentId: 120100
  },
  {
    id: 120111,
    mapName: '西青区',

    mapParentId: 120100
  },
  {
    id: 120112,
    mapName: '津南区',

    mapParentId: 120100
  },
  {
    id: 120113,
    mapName: '北辰区',

    mapParentId: 120100
  },
  {
    id: 120114,
    mapName: '武清区',

    mapParentId: 120100
  },
  {
    id: 120115,
    mapName: '宝坻区',

    mapParentId: 120100
  },
  {
    id: 120116,
    mapName: '滨海新区',

    mapParentId: 120100
  },
  {
    id: 120117,
    mapName: '宁河区',

    mapParentId: 120100
  },
  {
    id: 120118,
    mapName: '静海区',

    mapParentId: 120100
  },
  {
    id: 120119,
    mapName: '蓟州区',

    mapParentId: 120100
  },
  {
    id: 130102,
    mapName: '长安区',

    mapParentId: 130100
  },
  {
    id: 130104,
    mapName: '桥西区',

    mapParentId: 130100
  },
  {
    id: 130105,
    mapName: '新华区',

    mapParentId: 130100
  },
  {
    id: 130107,
    mapName: '井陉矿区',

    mapParentId: 130100
  },
  {
    id: 130108,
    mapName: '裕华区',

    mapParentId: 130100
  },
  {
    id: 130109,
    mapName: '藁城区',

    mapParentId: 130100
  },
  {
    id: 130110,
    mapName: '鹿泉区',

    mapParentId: 130100
  },
  {
    id: 130111,
    mapName: '栾城区',

    mapParentId: 130100
  },
  {
    id: 130121,
    mapName: '井陉县',

    mapParentId: 130100
  },
  {
    id: 130123,
    mapName: '正定县',

    mapParentId: 130100
  },
  {
    id: 130125,
    mapName: '行唐县',

    mapParentId: 130100
  },
  {
    id: 130126,
    mapName: '灵寿县',

    mapParentId: 130100
  },
  {
    id: 130127,
    mapName: '高邑县',

    mapParentId: 130100
  },
  {
    id: 130128,
    mapName: '深泽县',

    mapParentId: 130100
  },
  {
    id: 130129,
    mapName: '赞皇县',

    mapParentId: 130100
  },
  {
    id: 130130,
    mapName: '无极县',

    mapParentId: 130100
  },
  {
    id: 130131,
    mapName: '平山县',

    mapParentId: 130100
  },
  {
    id: 130132,
    mapName: '元氏县',

    mapParentId: 130100
  },
  {
    id: 130133,
    mapName: '赵县',

    mapParentId: 130100
  },
  {
    id: 130181,
    mapName: '辛集市',

    mapParentId: 130100
  },
  {
    id: 130183,
    mapName: '晋州市',

    mapParentId: 130100
  },
  {
    id: 130184,
    mapName: '新乐市',

    mapParentId: 130100
  },
  {
    id: 130202,
    mapName: '路南区',

    mapParentId: 130200
  },
  {
    id: 130203,
    mapName: '路北区',

    mapParentId: 130200
  },
  {
    id: 130204,
    mapName: '古冶区',

    mapParentId: 130200
  },
  {
    id: 130205,
    mapName: '开平区',

    mapParentId: 130200
  },
  {
    id: 130207,
    mapName: '丰南区',

    mapParentId: 130200
  },
  {
    id: 130208,
    mapName: '丰润区',

    mapParentId: 130200
  },
  {
    id: 130209,
    mapName: '曹妃甸区',

    mapParentId: 130200
  },
  {
    id: 130224,
    mapName: '滦南县',

    mapParentId: 130200
  },
  {
    id: 130225,
    mapName: '乐亭县',

    mapParentId: 130200
  },
  {
    id: 130227,
    mapName: '迁西县',

    mapParentId: 130200
  },
  {
    id: 130229,
    mapName: '玉田县',

    mapParentId: 130200
  },
  {
    id: 130281,
    mapName: '遵化市',

    mapParentId: 130200
  },
  {
    id: 130283,
    mapName: '迁安市',

    mapParentId: 130200
  },
  {
    id: 130284,
    mapName: '滦州市',

    mapParentId: 130200
  },
  {
    id: 130302,
    mapName: '海港区',

    mapParentId: 130300
  },
  {
    id: 130303,
    mapName: '山海关区',

    mapParentId: 130300
  },
  {
    id: 130304,
    mapName: '北戴河区',

    mapParentId: 130300
  },
  {
    id: 130306,
    mapName: '抚宁区',

    mapParentId: 130300
  },
  {
    id: 130321,
    mapName: '青龙满族自治县',

    mapParentId: 130300
  },
  {
    id: 130322,
    mapName: '昌黎县',

    mapParentId: 130300
  },
  {
    id: 130324,
    mapName: '卢龙县',

    mapParentId: 130300
  },
  {
    id: 130402,
    mapName: '邯山区',

    mapParentId: 130400
  },
  {
    id: 130403,
    mapName: '丛台区',

    mapParentId: 130400
  },
  {
    id: 130404,
    mapName: '复兴区',

    mapParentId: 130400
  },
  {
    id: 130406,
    mapName: '峰峰矿区',

    mapParentId: 130400
  },
  {
    id: 130407,
    mapName: '肥乡区',

    mapParentId: 130400
  },
  {
    id: 130408,
    mapName: '永年区',

    mapParentId: 130400
  },
  {
    id: 130423,
    mapName: '临漳县',

    mapParentId: 130400
  },
  {
    id: 130424,
    mapName: '成安县',

    mapParentId: 130400
  },
  {
    id: 130425,
    mapName: '大名县',

    mapParentId: 130400
  },
  {
    id: 130426,
    mapName: '涉县',

    mapParentId: 130400
  },
  {
    id: 130427,
    mapName: '磁县',

    mapParentId: 130400
  },
  {
    id: 130430,
    mapName: '邱县',

    mapParentId: 130400
  },
  {
    id: 130431,
    mapName: '鸡泽县',

    mapParentId: 130400
  },
  {
    id: 130432,
    mapName: '广平县',

    mapParentId: 130400
  },
  {
    id: 130433,
    mapName: '馆陶县',

    mapParentId: 130400
  },
  {
    id: 130434,
    mapName: '魏县',

    mapParentId: 130400
  },
  {
    id: 130435,
    mapName: '曲周县',

    mapParentId: 130400
  },
  {
    id: 130481,
    mapName: '武安市',

    mapParentId: 130400
  },
  {
    id: 130502,
    mapName: '桥东区',

    mapParentId: 130500
  },
  {
    id: 130503,
    mapName: '桥西区',

    mapParentId: 130500
  },
  {
    id: 130521,
    mapName: '邢台县',

    mapParentId: 130500
  },
  {
    id: 130522,
    mapName: '临城县',

    mapParentId: 130500
  },
  {
    id: 130523,
    mapName: '内丘县',

    mapParentId: 130500
  },
  {
    id: 130524,
    mapName: '柏乡县',

    mapParentId: 130500
  },
  {
    id: 130525,
    mapName: '隆尧县',

    mapParentId: 130500
  },
  {
    id: 130526,
    mapName: '任县',

    mapParentId: 130500
  },
  {
    id: 130527,
    mapName: '南和县',

    mapParentId: 130500
  },
  {
    id: 130528,
    mapName: '宁晋县',

    mapParentId: 130500
  },
  {
    id: 130529,
    mapName: '巨鹿县',

    mapParentId: 130500
  },
  {
    id: 130530,
    mapName: '新河县',

    mapParentId: 130500
  },
  {
    id: 130531,
    mapName: '广宗县',

    mapParentId: 130500
  },
  {
    id: 130532,
    mapName: '平乡县',

    mapParentId: 130500
  },
  {
    id: 130533,
    mapName: '威县',

    mapParentId: 130500
  },
  {
    id: 130534,
    mapName: '清河县',

    mapParentId: 130500
  },
  {
    id: 130535,
    mapName: '临西县',

    mapParentId: 130500
  },
  {
    id: 130581,
    mapName: '南宫市',

    mapParentId: 130500
  },
  {
    id: 130582,
    mapName: '沙河市',

    mapParentId: 130500
  },
  {
    id: 130602,
    mapName: '竞秀区',

    mapParentId: 130600
  },
  {
    id: 130606,
    mapName: '莲池区',

    mapParentId: 130600
  },
  {
    id: 130607,
    mapName: '满城区',

    mapParentId: 130600
  },
  {
    id: 130608,
    mapName: '清苑区',

    mapParentId: 130600
  },
  {
    id: 130609,
    mapName: '徐水区',

    mapParentId: 130600
  },
  {
    id: 130623,
    mapName: '涞水县',

    mapParentId: 130600
  },
  {
    id: 130624,
    mapName: '阜平县',

    mapParentId: 130600
  },
  {
    id: 130626,
    mapName: '定兴县',

    mapParentId: 130600
  },
  {
    id: 130627,
    mapName: '唐县',

    mapParentId: 130600
  },
  {
    id: 130628,
    mapName: '高阳县',

    mapParentId: 130600
  },
  {
    id: 130629,
    mapName: '容城县',

    mapParentId: 130600
  },
  {
    id: 130630,
    mapName: '涞源县',

    mapParentId: 130600
  },
  {
    id: 130631,
    mapName: '望都县',

    mapParentId: 130600
  },
  {
    id: 130632,
    mapName: '安新县',

    mapParentId: 130600
  },
  {
    id: 130633,
    mapName: '易县',

    mapParentId: 130600
  },
  {
    id: 130634,
    mapName: '曲阳县',

    mapParentId: 130600
  },
  {
    id: 130635,
    mapName: '蠡县',

    mapParentId: 130600
  },
  {
    id: 130636,
    mapName: '顺平县',

    mapParentId: 130600
  },
  {
    id: 130637,
    mapName: '博野县',

    mapParentId: 130600
  },
  {
    id: 130638,
    mapName: '雄县',

    mapParentId: 130600
  },
  {
    id: 130681,
    mapName: '涿州市',

    mapParentId: 130600
  },
  {
    id: 130682,
    mapName: '定州市',

    mapParentId: 130600
  },
  {
    id: 130683,
    mapName: '安国市',

    mapParentId: 130600
  },
  {
    id: 130684,
    mapName: '高碑店市',

    mapParentId: 130600
  },
  {
    id: 130702,
    mapName: '桥东区',

    mapParentId: 130700
  },
  {
    id: 130703,
    mapName: '桥西区',

    mapParentId: 130700
  },
  {
    id: 130705,
    mapName: '宣化区',

    mapParentId: 130700
  },
  {
    id: 130706,
    mapName: '下花园区',

    mapParentId: 130700
  },
  {
    id: 130708,
    mapName: '万全区',

    mapParentId: 130700
  },
  {
    id: 130709,
    mapName: '崇礼区',

    mapParentId: 130700
  },
  {
    id: 130722,
    mapName: '张北县',

    mapParentId: 130700
  },
  {
    id: 130723,
    mapName: '康保县',

    mapParentId: 130700
  },
  {
    id: 130724,
    mapName: '沽源县',

    mapParentId: 130700
  },
  {
    id: 130725,
    mapName: '尚义县',

    mapParentId: 130700
  },
  {
    id: 130726,
    mapName: '蔚县',

    mapParentId: 130700
  },
  {
    id: 130727,
    mapName: '阳原县',

    mapParentId: 130700
  },
  {
    id: 130728,
    mapName: '怀安县',

    mapParentId: 130700
  },
  {
    id: 130730,
    mapName: '怀来县',

    mapParentId: 130700
  },
  {
    id: 130731,
    mapName: '涿鹿县',

    mapParentId: 130700
  },
  {
    id: 130732,
    mapName: '赤城县',

    mapParentId: 130700
  },
  {
    id: 130802,
    mapName: '双桥区',

    mapParentId: 130800
  },
  {
    id: 130803,
    mapName: '双滦区',

    mapParentId: 130800
  },
  {
    id: 130804,
    mapName: '鹰手营子矿区',

    mapParentId: 130800
  },
  {
    id: 130821,
    mapName: '承德县',

    mapParentId: 130800
  },
  {
    id: 130822,
    mapName: '兴隆县',

    mapParentId: 130800
  },
  {
    id: 130824,
    mapName: '滦平县',

    mapParentId: 130800
  },
  {
    id: 130825,
    mapName: '隆化县',

    mapParentId: 130800
  },
  {
    id: 130826,
    mapName: '丰宁满族自治县',

    mapParentId: 130800
  },
  {
    id: 130827,
    mapName: '宽城满族自治县',

    mapParentId: 130800
  },
  {
    id: 130828,
    mapName: '围场满族蒙古族自治县',

    mapParentId: 130800
  },
  {
    id: 130881,
    mapName: '平泉市',

    mapParentId: 130800
  },
  {
    id: 130902,
    mapName: '新华区',

    mapParentId: 130900
  },
  {
    id: 130903,
    mapName: '运河区',

    mapParentId: 130900
  },
  {
    id: 130921,
    mapName: '沧县',

    mapParentId: 130900
  },
  {
    id: 130922,
    mapName: '青县',

    mapParentId: 130900
  },
  {
    id: 130923,
    mapName: '东光县',

    mapParentId: 130900
  },
  {
    id: 130924,
    mapName: '海兴县',

    mapParentId: 130900
  },
  {
    id: 130925,
    mapName: '盐山县',

    mapParentId: 130900
  },
  {
    id: 130926,
    mapName: '肃宁县',

    mapParentId: 130900
  },
  {
    id: 130927,
    mapName: '南皮县',

    mapParentId: 130900
  },
  {
    id: 130928,
    mapName: '吴桥县',

    mapParentId: 130900
  },
  {
    id: 130929,
    mapName: '献县',

    mapParentId: 130900
  },
  {
    id: 130930,
    mapName: '孟村回族自治县',

    mapParentId: 130900
  },
  {
    id: 130981,
    mapName: '泊头市',

    mapParentId: 130900
  },
  {
    id: 130982,
    mapName: '任丘市',

    mapParentId: 130900
  },
  {
    id: 130983,
    mapName: '黄骅市',

    mapParentId: 130900
  },
  {
    id: 130984,
    mapName: '河间市',

    mapParentId: 130900
  },
  {
    id: 131002,
    mapName: '安次区',

    mapParentId: 131000
  },
  {
    id: 131003,
    mapName: '广阳区',

    mapParentId: 131000
  },
  {
    id: 131022,
    mapName: '固安县',

    mapParentId: 131000
  },
  {
    id: 131023,
    mapName: '永清县',

    mapParentId: 131000
  },
  {
    id: 131024,
    mapName: '香河县',

    mapParentId: 131000
  },
  {
    id: 131025,
    mapName: '大城县',

    mapParentId: 131000
  },
  {
    id: 131026,
    mapName: '文安县',

    mapParentId: 131000
  },
  {
    id: 131028,
    mapName: '大厂回族自治县',

    mapParentId: 131000
  },
  {
    id: 131081,
    mapName: '霸州市',

    mapParentId: 131000
  },
  {
    id: 131082,
    mapName: '三河市',

    mapParentId: 131000
  },
  {
    id: 131102,
    mapName: '桃城区',

    mapParentId: 131100
  },
  {
    id: 131103,
    mapName: '冀州区',

    mapParentId: 131100
  },
  {
    id: 131121,
    mapName: '枣强县',

    mapParentId: 131100
  },
  {
    id: 131122,
    mapName: '武邑县',

    mapParentId: 131100
  },
  {
    id: 131123,
    mapName: '武强县',

    mapParentId: 131100
  },
  {
    id: 131124,
    mapName: '饶阳县',

    mapParentId: 131100
  },
  {
    id: 131125,
    mapName: '安平县',

    mapParentId: 131100
  },
  {
    id: 131126,
    mapName: '故城县',

    mapParentId: 131100
  },
  {
    id: 131127,
    mapName: '景县',

    mapParentId: 131100
  },
  {
    id: 131128,
    mapName: '阜城县',

    mapParentId: 131100
  },
  {
    id: 131182,
    mapName: '深州市',

    mapParentId: 131100
  },
  {
    id: 140105,
    mapName: '小店区',

    mapParentId: 140100
  },
  {
    id: 140106,
    mapName: '迎泽区',

    mapParentId: 140100
  },
  {
    id: 140107,
    mapName: '杏花岭区',

    mapParentId: 140100
  },
  {
    id: 140108,
    mapName: '尖草坪区',

    mapParentId: 140100
  },
  {
    id: 140109,
    mapName: '万柏林区',

    mapParentId: 140100
  },
  {
    id: 140110,
    mapName: '晋源区',

    mapParentId: 140100
  },
  {
    id: 140121,
    mapName: '清徐县',

    mapParentId: 140100
  },
  {
    id: 140122,
    mapName: '阳曲县',

    mapParentId: 140100
  },
  {
    id: 140123,
    mapName: '娄烦县',

    mapParentId: 140100
  },
  {
    id: 140181,
    mapName: '古交市',

    mapParentId: 140100
  },
  {
    id: 140212,
    mapName: '新荣区',

    mapParentId: 140200
  },
  {
    id: 140213,
    mapName: '平城区',

    mapParentId: 140200
  },
  {
    id: 140214,
    mapName: '云冈区',

    mapParentId: 140200
  },
  {
    id: 140215,
    mapName: '云州区',

    mapParentId: 140200
  },
  {
    id: 140221,
    mapName: '阳高县',

    mapParentId: 140200
  },
  {
    id: 140222,
    mapName: '天镇县',

    mapParentId: 140200
  },
  {
    id: 140223,
    mapName: '广灵县',

    mapParentId: 140200
  },
  {
    id: 140224,
    mapName: '灵丘县',

    mapParentId: 140200
  },
  {
    id: 140225,
    mapName: '浑源县',

    mapParentId: 140200
  },
  {
    id: 140226,
    mapName: '左云县',

    mapParentId: 140200
  },
  {
    id: 140302,
    mapName: '城区',

    mapParentId: 140300
  },
  {
    id: 140303,
    mapName: '矿区',

    mapParentId: 140300
  },
  {
    id: 140311,
    mapName: '郊区',

    mapParentId: 140300
  },
  {
    id: 140321,
    mapName: '平定县',

    mapParentId: 140300
  },
  {
    id: 140322,
    mapName: '盂县',

    mapParentId: 140300
  },
  {
    id: 140403,
    mapName: '潞州区',

    mapParentId: 140400
  },
  {
    id: 140404,
    mapName: '上党区',

    mapParentId: 140400
  },
  {
    id: 140405,
    mapName: '屯留区',

    mapParentId: 140400
  },
  {
    id: 140406,
    mapName: '潞城区',

    mapParentId: 140400
  },
  {
    id: 140423,
    mapName: '襄垣县',

    mapParentId: 140400
  },
  {
    id: 140425,
    mapName: '平顺县',

    mapParentId: 140400
  },
  {
    id: 140426,
    mapName: '黎城县',

    mapParentId: 140400
  },
  {
    id: 140427,
    mapName: '壶关县',

    mapParentId: 140400
  },
  {
    id: 140428,
    mapName: '长子县',

    mapParentId: 140400
  },
  {
    id: 140429,
    mapName: '武乡县',

    mapParentId: 140400
  },
  {
    id: 140430,
    mapName: '沁县',

    mapParentId: 140400
  },
  {
    id: 140431,
    mapName: '沁源县',

    mapParentId: 140400
  },
  {
    id: 140502,
    mapName: '城区',

    mapParentId: 140500
  },
  {
    id: 140521,
    mapName: '沁水县',

    mapParentId: 140500
  },
  {
    id: 140522,
    mapName: '阳城县',

    mapParentId: 140500
  },
  {
    id: 140524,
    mapName: '陵川县',

    mapParentId: 140500
  },
  {
    id: 140525,
    mapName: '泽州县',

    mapParentId: 140500
  },
  {
    id: 140581,
    mapName: '高平市',

    mapParentId: 140500
  },
  {
    id: 140602,
    mapName: '朔城区',

    mapParentId: 140600
  },
  {
    id: 140603,
    mapName: '平鲁区',

    mapParentId: 140600
  },
  {
    id: 140621,
    mapName: '山阴县',

    mapParentId: 140600
  },
  {
    id: 140622,
    mapName: '应县',

    mapParentId: 140600
  },
  {
    id: 140623,
    mapName: '右玉县',

    mapParentId: 140600
  },
  {
    id: 140681,
    mapName: '怀仁市',

    mapParentId: 140600
  },
  {
    id: 140702,
    mapName: '榆次区',

    mapParentId: 140700
  },
  {
    id: 140721,
    mapName: '榆社县',

    mapParentId: 140700
  },
  {
    id: 140722,
    mapName: '左权县',

    mapParentId: 140700
  },
  {
    id: 140723,
    mapName: '和顺县',

    mapParentId: 140700
  },
  {
    id: 140724,
    mapName: '昔阳县',

    mapParentId: 140700
  },
  {
    id: 140725,
    mapName: '寿阳县',

    mapParentId: 140700
  },
  {
    id: 140726,
    mapName: '太谷县',

    mapParentId: 140700
  },
  {
    id: 140727,
    mapName: '祁县',

    mapParentId: 140700
  },
  {
    id: 140728,
    mapName: '平遥县',

    mapParentId: 140700
  },
  {
    id: 140729,
    mapName: '灵石县',

    mapParentId: 140700
  },
  {
    id: 140781,
    mapName: '介休市',

    mapParentId: 140700
  },
  {
    id: 140802,
    mapName: '盐湖区',

    mapParentId: 140800
  },
  {
    id: 140821,
    mapName: '临猗县',

    mapParentId: 140800
  },
  {
    id: 140822,
    mapName: '万荣县',

    mapParentId: 140800
  },
  {
    id: 140823,
    mapName: '闻喜县',

    mapParentId: 140800
  },
  {
    id: 140824,
    mapName: '稷山县',

    mapParentId: 140800
  },
  {
    id: 140825,
    mapName: '新绛县',

    mapParentId: 140800
  },
  {
    id: 140826,
    mapName: '绛县',

    mapParentId: 140800
  },
  {
    id: 140827,
    mapName: '垣曲县',

    mapParentId: 140800
  },
  {
    id: 140828,
    mapName: '夏县',

    mapParentId: 140800
  },
  {
    id: 140829,
    mapName: '平陆县',

    mapParentId: 140800
  },
  {
    id: 140830,
    mapName: '芮城县',

    mapParentId: 140800
  },
  {
    id: 140881,
    mapName: '永济市',

    mapParentId: 140800
  },
  {
    id: 140882,
    mapName: '河津市',

    mapParentId: 140800
  },
  {
    id: 140902,
    mapName: '忻府区',

    mapParentId: 140900
  },
  {
    id: 140921,
    mapName: '定襄县',

    mapParentId: 140900
  },
  {
    id: 140922,
    mapName: '五台县',

    mapParentId: 140900
  },
  {
    id: 140923,
    mapName: '代县',

    mapParentId: 140900
  },
  {
    id: 140924,
    mapName: '繁峙县',

    mapParentId: 140900
  },
  {
    id: 140925,
    mapName: '宁武县',

    mapParentId: 140900
  },
  {
    id: 140926,
    mapName: '静乐县',

    mapParentId: 140900
  },
  {
    id: 140927,
    mapName: '神池县',

    mapParentId: 140900
  },
  {
    id: 140928,
    mapName: '五寨县',

    mapParentId: 140900
  },
  {
    id: 140929,
    mapName: '岢岚县',

    mapParentId: 140900
  },
  {
    id: 140930,
    mapName: '河曲县',

    mapParentId: 140900
  },
  {
    id: 140931,
    mapName: '保德县',

    mapParentId: 140900
  },
  {
    id: 140932,
    mapName: '偏关县',

    mapParentId: 140900
  },
  {
    id: 140981,
    mapName: '原平市',

    mapParentId: 140900
  },
  {
    id: 141002,
    mapName: '尧都区',

    mapParentId: 141000
  },
  {
    id: 141021,
    mapName: '曲沃县',

    mapParentId: 141000
  },
  {
    id: 141022,
    mapName: '翼城县',

    mapParentId: 141000
  },
  {
    id: 141023,
    mapName: '襄汾县',

    mapParentId: 141000
  },
  {
    id: 141024,
    mapName: '洪洞县',

    mapParentId: 141000
  },
  {
    id: 141025,
    mapName: '古县',

    mapParentId: 141000
  },
  {
    id: 141026,
    mapName: '安泽县',

    mapParentId: 141000
  },
  {
    id: 141027,
    mapName: '浮山县',

    mapParentId: 141000
  },
  {
    id: 141028,
    mapName: '吉县',

    mapParentId: 141000
  },
  {
    id: 141029,
    mapName: '乡宁县',

    mapParentId: 141000
  },
  {
    id: 141030,
    mapName: '大宁县',

    mapParentId: 141000
  },
  {
    id: 141031,
    mapName: '隰县',

    mapParentId: 141000
  },
  {
    id: 141032,
    mapName: '永和县',

    mapParentId: 141000
  },
  {
    id: 141033,
    mapName: '蒲县',

    mapParentId: 141000
  },
  {
    id: 141034,
    mapName: '汾西县',

    mapParentId: 141000
  },
  {
    id: 141081,
    mapName: '侯马市',

    mapParentId: 141000
  },
  {
    id: 141082,
    mapName: '霍州市',

    mapParentId: 141000
  },
  {
    id: 141102,
    mapName: '离石区',

    mapParentId: 141100
  },
  {
    id: 141121,
    mapName: '文水县',

    mapParentId: 141100
  },
  {
    id: 141122,
    mapName: '交城县',

    mapParentId: 141100
  },
  {
    id: 141123,
    mapName: '兴县',

    mapParentId: 141100
  },
  {
    id: 141124,
    mapName: '临县',

    mapParentId: 141100
  },
  {
    id: 141125,
    mapName: '柳林县',

    mapParentId: 141100
  },
  {
    id: 141126,
    mapName: '石楼县',

    mapParentId: 141100
  },
  {
    id: 141127,
    mapName: '岚县',

    mapParentId: 141100
  },
  {
    id: 141128,
    mapName: '方山县',

    mapParentId: 141100
  },
  {
    id: 141129,
    mapName: '中阳县',

    mapParentId: 141100
  },
  {
    id: 141130,
    mapName: '交口县',

    mapParentId: 141100
  },
  {
    id: 141181,
    mapName: '孝义市',

    mapParentId: 141100
  },
  {
    id: 141182,
    mapName: '汾阳市',

    mapParentId: 141100
  },
  {
    id: 150102,
    mapName: '新城区',

    mapParentId: 150100
  },
  {
    id: 150103,
    mapName: '回民区',

    mapParentId: 150100
  },
  {
    id: 150104,
    mapName: '玉泉区',

    mapParentId: 150100
  },
  {
    id: 150105,
    mapName: '赛罕区',

    mapParentId: 150100
  },
  {
    id: 150121,
    mapName: '土默特左旗',

    mapParentId: 150100
  },
  {
    id: 150122,
    mapName: '托克托县',

    mapParentId: 150100
  },
  {
    id: 150123,
    mapName: '和林格尔县',

    mapParentId: 150100
  },
  {
    id: 150124,
    mapName: '清水河县',

    mapParentId: 150100
  },
  {
    id: 150125,
    mapName: '武川县',

    mapParentId: 150100
  },
  {
    id: 150202,
    mapName: '东河区',

    mapParentId: 150200
  },
  {
    id: 150203,
    mapName: '昆都仑区',

    mapParentId: 150200
  },
  {
    id: 150204,
    mapName: '青山区',

    mapParentId: 150200
  },
  {
    id: 150205,
    mapName: '石拐区',

    mapParentId: 150200
  },
  {
    id: 150206,
    mapName: '白云鄂博矿区',

    mapParentId: 150200
  },
  {
    id: 150207,
    mapName: '九原区',

    mapParentId: 150200
  },
  {
    id: 150221,
    mapName: '土默特右旗',

    mapParentId: 150200
  },
  {
    id: 150222,
    mapName: '固阳县',

    mapParentId: 150200
  },
  {
    id: 150223,
    mapName: '达尔罕茂明安联合旗',

    mapParentId: 150200
  },
  {
    id: 150302,
    mapName: '海勃湾区',

    mapParentId: 150300
  },
  {
    id: 150303,
    mapName: '海南区',

    mapParentId: 150300
  },
  {
    id: 150304,
    mapName: '乌达区',

    mapParentId: 150300
  },
  {
    id: 150402,
    mapName: '红山区',

    mapParentId: 150400
  },
  {
    id: 150403,
    mapName: '元宝山区',

    mapParentId: 150400
  },
  {
    id: 150404,
    mapName: '松山区',

    mapParentId: 150400
  },
  {
    id: 150421,
    mapName: '阿鲁科尔沁旗',

    mapParentId: 150400
  },
  {
    id: 150422,
    mapName: '巴林左旗',

    mapParentId: 150400
  },
  {
    id: 150423,
    mapName: '巴林右旗',

    mapParentId: 150400
  },
  {
    id: 150424,
    mapName: '林西县',

    mapParentId: 150400
  },
  {
    id: 150425,
    mapName: '克什克腾旗',

    mapParentId: 150400
  },
  {
    id: 150426,
    mapName: '翁牛特旗',

    mapParentId: 150400
  },
  {
    id: 150428,
    mapName: '喀喇沁旗',

    mapParentId: 150400
  },
  {
    id: 150429,
    mapName: '宁城县',

    mapParentId: 150400
  },
  {
    id: 150430,
    mapName: '敖汉旗',

    mapParentId: 150400
  },
  {
    id: 150502,
    mapName: '科尔沁区',

    mapParentId: 150500
  },
  {
    id: 150521,
    mapName: '科尔沁左翼中旗',

    mapParentId: 150500
  },
  {
    id: 150522,
    mapName: '科尔沁左翼后旗',

    mapParentId: 150500
  },
  {
    id: 150523,
    mapName: '开鲁县',

    mapParentId: 150500
  },
  {
    id: 150524,
    mapName: '库伦旗',

    mapParentId: 150500
  },
  {
    id: 150525,
    mapName: '奈曼旗',

    mapParentId: 150500
  },
  {
    id: 150526,
    mapName: '扎鲁特旗',

    mapParentId: 150500
  },
  {
    id: 150581,
    mapName: '霍林郭勒市',

    mapParentId: 150500
  },
  {
    id: 150602,
    mapName: '东胜区',

    mapParentId: 150600
  },
  {
    id: 150603,
    mapName: '康巴什区',

    mapParentId: 150600
  },
  {
    id: 150621,
    mapName: '达拉特旗',

    mapParentId: 150600
  },
  {
    id: 150622,
    mapName: '准格尔旗',

    mapParentId: 150600
  },
  {
    id: 150623,
    mapName: '鄂托克前旗',

    mapParentId: 150600
  },
  {
    id: 150624,
    mapName: '鄂托克旗',

    mapParentId: 150600
  },
  {
    id: 150625,
    mapName: '杭锦旗',

    mapParentId: 150600
  },
  {
    id: 150626,
    mapName: '乌审旗',

    mapParentId: 150600
  },
  {
    id: 150627,
    mapName: '伊金霍洛旗',

    mapParentId: 150600
  },
  {
    id: 150702,
    mapName: '海拉尔区',

    mapParentId: 150700
  },
  {
    id: 150703,
    mapName: '扎赉诺尔区',

    mapParentId: 150700
  },
  {
    id: 150721,
    mapName: '阿荣旗',

    mapParentId: 150700
  },
  {
    id: 150722,
    mapName: '莫力达瓦达斡尔族自治旗',

    mapParentId: 150700
  },
  {
    id: 150723,
    mapName: '鄂伦春自治旗',

    mapParentId: 150700
  },
  {
    id: 150724,
    mapName: '鄂温克族自治旗',

    mapParentId: 150700
  },
  {
    id: 150725,
    mapName: '陈巴尔虎旗',

    mapParentId: 150700
  },
  {
    id: 150726,
    mapName: '新巴尔虎左旗',

    mapParentId: 150700
  },
  {
    id: 150727,
    mapName: '新巴尔虎右旗',

    mapParentId: 150700
  },
  {
    id: 150781,
    mapName: '满洲里市',

    mapParentId: 150700
  },
  {
    id: 150782,
    mapName: '牙克石市',

    mapParentId: 150700
  },
  {
    id: 150783,
    mapName: '扎兰屯市',

    mapParentId: 150700
  },
  {
    id: 150784,
    mapName: '额尔古纳市',

    mapParentId: 150700
  },
  {
    id: 150785,
    mapName: '根河市',

    mapParentId: 150700
  },
  {
    id: 150802,
    mapName: '临河区',

    mapParentId: 150800
  },
  {
    id: 150821,
    mapName: '五原县',

    mapParentId: 150800
  },
  {
    id: 150822,
    mapName: '磴口县',

    mapParentId: 150800
  },
  {
    id: 150823,
    mapName: '乌拉特前旗',

    mapParentId: 150800
  },
  {
    id: 150824,
    mapName: '乌拉特中旗',

    mapParentId: 150800
  },
  {
    id: 150825,
    mapName: '乌拉特后旗',

    mapParentId: 150800
  },
  {
    id: 150826,
    mapName: '杭锦后旗',

    mapParentId: 150800
  },
  {
    id: 150902,
    mapName: '集宁区',

    mapParentId: 150900
  },
  {
    id: 150921,
    mapName: '卓资县',

    mapParentId: 150900
  },
  {
    id: 150922,
    mapName: '化德县',

    mapParentId: 150900
  },
  {
    id: 150923,
    mapName: '商都县',

    mapParentId: 150900
  },
  {
    id: 150924,
    mapName: '兴和县',

    mapParentId: 150900
  },
  {
    id: 150925,
    mapName: '凉城县',

    mapParentId: 150900
  },
  {
    id: 150926,
    mapName: '察哈尔右翼前旗',

    mapParentId: 150900
  },
  {
    id: 150927,
    mapName: '察哈尔右翼中旗',

    mapParentId: 150900
  },
  {
    id: 150928,
    mapName: '察哈尔右翼后旗',

    mapParentId: 150900
  },
  {
    id: 150929,
    mapName: '四子王旗',

    mapParentId: 150900
  },
  {
    id: 150981,
    mapName: '丰镇市',

    mapParentId: 150900
  },
  {
    id: 152201,
    mapName: '乌兰浩特市',

    mapParentId: 152200
  },
  {
    id: 152202,
    mapName: '阿尔山市',

    mapParentId: 152200
  },
  {
    id: 152221,
    mapName: '科尔沁右翼前旗',

    mapParentId: 152200
  },
  {
    id: 152222,
    mapName: '科尔沁右翼中旗',

    mapParentId: 152200
  },
  {
    id: 152223,
    mapName: '扎赉特旗',

    mapParentId: 152200
  },
  {
    id: 152224,
    mapName: '突泉县',

    mapParentId: 152200
  },
  {
    id: 152501,
    mapName: '二连浩特市',

    mapParentId: 152500
  },
  {
    id: 152502,
    mapName: '锡林浩特市',

    mapParentId: 152500
  },
  {
    id: 152522,
    mapName: '阿巴嘎旗',

    mapParentId: 152500
  },
  {
    id: 152523,
    mapName: '苏尼特左旗',

    mapParentId: 152500
  },
  {
    id: 152524,
    mapName: '苏尼特右旗',

    mapParentId: 152500
  },
  {
    id: 152525,
    mapName: '东乌珠穆沁旗',

    mapParentId: 152500
  },
  {
    id: 152526,
    mapName: '西乌珠穆沁旗',

    mapParentId: 152500
  },
  {
    id: 152527,
    mapName: '太仆寺旗',

    mapParentId: 152500
  },
  {
    id: 152528,
    mapName: '镶黄旗',

    mapParentId: 152500
  },
  {
    id: 152529,
    mapName: '正镶白旗',

    mapParentId: 152500
  },
  {
    id: 152530,
    mapName: '正蓝旗',

    mapParentId: 152500
  },
  {
    id: 152531,
    mapName: '多伦县',

    mapParentId: 152500
  },
  {
    id: 152921,
    mapName: '阿拉善左旗',

    mapParentId: 152900
  },
  {
    id: 152922,
    mapName: '阿拉善右旗',

    mapParentId: 152900
  },
  {
    id: 152923,
    mapName: '额济纳旗',

    mapParentId: 152900
  },
  {
    id: 210102,
    mapName: '和平区',

    mapParentId: 210100
  },
  {
    id: 210103,
    mapName: '沈河区',

    mapParentId: 210100
  },
  {
    id: 210104,
    mapName: '大东区',

    mapParentId: 210100
  },
  {
    id: 210105,
    mapName: '皇姑区',

    mapParentId: 210100
  },
  {
    id: 210106,
    mapName: '铁西区',

    mapParentId: 210100
  },
  {
    id: 210111,
    mapName: '苏家屯区',

    mapParentId: 210100
  },
  {
    id: 210112,
    mapName: '浑南区',

    mapParentId: 210100
  },
  {
    id: 210113,
    mapName: '沈北新区',

    mapParentId: 210100
  },
  {
    id: 210114,
    mapName: '于洪区',

    mapParentId: 210100
  },
  {
    id: 210115,
    mapName: '辽中区',

    mapParentId: 210100
  },
  {
    id: 210123,
    mapName: '康平县',

    mapParentId: 210100
  },
  {
    id: 210124,
    mapName: '法库县',

    mapParentId: 210100
  },
  {
    id: 210181,
    mapName: '新民市',

    mapParentId: 210100
  },
  {
    id: 210202,
    mapName: '中山区',

    mapParentId: 210200
  },
  {
    id: 210203,
    mapName: '西岗区',

    mapParentId: 210200
  },
  {
    id: 210204,
    mapName: '沙河口区',

    mapParentId: 210200
  },
  {
    id: 210211,
    mapName: '甘井子区',

    mapParentId: 210200
  },
  {
    id: 210212,
    mapName: '旅顺口区',

    mapParentId: 210200
  },
  {
    id: 210213,
    mapName: '金州区',

    mapParentId: 210200
  },
  {
    id: 210214,
    mapName: '普兰店区',

    mapParentId: 210200
  },
  {
    id: 210224,
    mapName: '长海县',

    mapParentId: 210200
  },
  {
    id: 210281,
    mapName: '瓦房店市',

    mapParentId: 210200
  },
  {
    id: 210283,
    mapName: '庄河市',

    mapParentId: 210200
  },
  {
    id: 210302,
    mapName: '铁东区',

    mapParentId: 210300
  },
  {
    id: 210303,
    mapName: '铁西区',

    mapParentId: 210300
  },
  {
    id: 210304,
    mapName: '立山区',

    mapParentId: 210300
  },
  {
    id: 210311,
    mapName: '千山区',

    mapParentId: 210300
  },
  {
    id: 210321,
    mapName: '台安县',

    mapParentId: 210300
  },
  {
    id: 210323,
    mapName: '岫岩满族自治县',

    mapParentId: 210300
  },
  {
    id: 210381,
    mapName: '海城市',

    mapParentId: 210300
  },
  {
    id: 210402,
    mapName: '新抚区',

    mapParentId: 210400
  },
  {
    id: 210403,
    mapName: '东洲区',

    mapParentId: 210400
  },
  {
    id: 210404,
    mapName: '望花区',

    mapParentId: 210400
  },
  {
    id: 210411,
    mapName: '顺城区',

    mapParentId: 210400
  },
  {
    id: 210421,
    mapName: '抚顺县',

    mapParentId: 210400
  },
  {
    id: 210422,
    mapName: '新宾满族自治县',

    mapParentId: 210400
  },
  {
    id: 210423,
    mapName: '清原满族自治县',

    mapParentId: 210400
  },
  {
    id: 210502,
    mapName: '平山区',

    mapParentId: 210500
  },
  {
    id: 210503,
    mapName: '溪湖区',

    mapParentId: 210500
  },
  {
    id: 210504,
    mapName: '明山区',

    mapParentId: 210500
  },
  {
    id: 210505,
    mapName: '南芬区',

    mapParentId: 210500
  },
  {
    id: 210521,
    mapName: '本溪满族自治县',

    mapParentId: 210500
  },
  {
    id: 210522,
    mapName: '桓仁满族自治县',

    mapParentId: 210500
  },
  {
    id: 210602,
    mapName: '元宝区',

    mapParentId: 210600
  },
  {
    id: 210603,
    mapName: '振兴区',

    mapParentId: 210600
  },
  {
    id: 210604,
    mapName: '振安区',

    mapParentId: 210600
  },
  {
    id: 210624,
    mapName: '宽甸满族自治县',

    mapParentId: 210600
  },
  {
    id: 210681,
    mapName: '东港市',

    mapParentId: 210600
  },
  {
    id: 210682,
    mapName: '凤城市',

    mapParentId: 210600
  },
  {
    id: 210702,
    mapName: '古塔区',

    mapParentId: 210700
  },
  {
    id: 210703,
    mapName: '凌河区',

    mapParentId: 210700
  },
  {
    id: 210711,
    mapName: '太和区',

    mapParentId: 210700
  },
  {
    id: 210726,
    mapName: '黑山县',

    mapParentId: 210700
  },
  {
    id: 210727,
    mapName: '义县',

    mapParentId: 210700
  },
  {
    id: 210781,
    mapName: '凌海市',

    mapParentId: 210700
  },
  {
    id: 210782,
    mapName: '北镇市',

    mapParentId: 210700
  },
  {
    id: 210802,
    mapName: '站前区',

    mapParentId: 210800
  },
  {
    id: 210803,
    mapName: '西市区',

    mapParentId: 210800
  },
  {
    id: 210804,
    mapName: '鲅鱼圈区',

    mapParentId: 210800
  },
  {
    id: 210811,
    mapName: '老边区',

    mapParentId: 210800
  },
  {
    id: 210881,
    mapName: '盖州市',

    mapParentId: 210800
  },
  {
    id: 210882,
    mapName: '大石桥市',

    mapParentId: 210800
  },
  {
    id: 210902,
    mapName: '海州区',

    mapParentId: 210900
  },
  {
    id: 210903,
    mapName: '新邱区',

    mapParentId: 210900
  },
  {
    id: 210904,
    mapName: '太平区',

    mapParentId: 210900
  },
  {
    id: 210905,
    mapName: '清河门区',

    mapParentId: 210900
  },
  {
    id: 210911,
    mapName: '细河区',

    mapParentId: 210900
  },
  {
    id: 210921,
    mapName: '阜新蒙古族自治县',

    mapParentId: 210900
  },
  {
    id: 210922,
    mapName: '彰武县',

    mapParentId: 210900
  },
  {
    id: 211002,
    mapName: '白塔区',

    mapParentId: 211000
  },
  {
    id: 211003,
    mapName: '文圣区',

    mapParentId: 211000
  },
  {
    id: 211004,
    mapName: '宏伟区',

    mapParentId: 211000
  },
  {
    id: 211005,
    mapName: '弓长岭区',

    mapParentId: 211000
  },
  {
    id: 211011,
    mapName: '太子河区',

    mapParentId: 211000
  },
  {
    id: 211021,
    mapName: '辽阳县',

    mapParentId: 211000
  },
  {
    id: 211081,
    mapName: '灯塔市',

    mapParentId: 211000
  },
  {
    id: 211102,
    mapName: '双台子区',

    mapParentId: 211100
  },
  {
    id: 211103,
    mapName: '兴隆台区',

    mapParentId: 211100
  },
  {
    id: 211104,
    mapName: '大洼区',

    mapParentId: 211100
  },
  {
    id: 211122,
    mapName: '盘山县',

    mapParentId: 211100
  },
  {
    id: 211202,
    mapName: '银州区',

    mapParentId: 211200
  },
  {
    id: 211204,
    mapName: '清河区',

    mapParentId: 211200
  },
  {
    id: 211221,
    mapName: '铁岭县',

    mapParentId: 211200
  },
  {
    id: 211223,
    mapName: '西丰县',

    mapParentId: 211200
  },
  {
    id: 211224,
    mapName: '昌图县',

    mapParentId: 211200
  },
  {
    id: 211281,
    mapName: '调兵山市',

    mapParentId: 211200
  },
  {
    id: 211282,
    mapName: '开原市',

    mapParentId: 211200
  },
  {
    id: 211302,
    mapName: '双塔区',

    mapParentId: 211300
  },
  {
    id: 211303,
    mapName: '龙城区',

    mapParentId: 211300
  },
  {
    id: 211321,
    mapName: '朝阳县',

    mapParentId: 211300
  },
  {
    id: 211322,
    mapName: '建平县',

    mapParentId: 211300
  },
  {
    id: 211324,
    mapName: '喀喇沁左翼蒙古族自治县',

    mapParentId: 211300
  },
  {
    id: 211381,
    mapName: '北票市',

    mapParentId: 211300
  },
  {
    id: 211382,
    mapName: '凌源市',

    mapParentId: 211300
  },
  {
    id: 211402,
    mapName: '连山区',

    mapParentId: 211400
  },
  {
    id: 211403,
    mapName: '龙港区',

    mapParentId: 211400
  },
  {
    id: 211404,
    mapName: '南票区',

    mapParentId: 211400
  },
  {
    id: 211421,
    mapName: '绥中县',

    mapParentId: 211400
  },
  {
    id: 211422,
    mapName: '建昌县',

    mapParentId: 211400
  },
  {
    id: 211481,
    mapName: '兴城市',

    mapParentId: 211400
  },
  {
    id: 220102,
    mapName: '南关区',

    mapParentId: 220100
  },
  {
    id: 220103,
    mapName: '宽城区',

    mapParentId: 220100
  },
  {
    id: 220104,
    mapName: '朝阳区',

    mapParentId: 220100
  },
  {
    id: 220105,
    mapName: '二道区',

    mapParentId: 220100
  },
  {
    id: 220106,
    mapName: '绿园区',

    mapParentId: 220100
  },
  {
    id: 220112,
    mapName: '双阳区',

    mapParentId: 220100
  },
  {
    id: 220113,
    mapName: '九台区',

    mapParentId: 220100
  },
  {
    id: 220122,
    mapName: '农安县',

    mapParentId: 220100
  },
  {
    id: 220182,
    mapName: '榆树市',

    mapParentId: 220100
  },
  {
    id: 220183,
    mapName: '德惠市',

    mapParentId: 220100
  },
  {
    id: 220202,
    mapName: '昌邑区',

    mapParentId: 220200
  },
  {
    id: 220203,
    mapName: '龙潭区',

    mapParentId: 220200
  },
  {
    id: 220204,
    mapName: '船营区',

    mapParentId: 220200
  },
  {
    id: 220211,
    mapName: '丰满区',

    mapParentId: 220200
  },
  {
    id: 220221,
    mapName: '永吉县',

    mapParentId: 220200
  },
  {
    id: 220281,
    mapName: '蛟河市',

    mapParentId: 220200
  },
  {
    id: 220282,
    mapName: '桦甸市',

    mapParentId: 220200
  },
  {
    id: 220283,
    mapName: '舒兰市',

    mapParentId: 220200
  },
  {
    id: 220284,
    mapName: '磐石市',

    mapParentId: 220200
  },
  {
    id: 220302,
    mapName: '铁西区',

    mapParentId: 220300
  },
  {
    id: 220303,
    mapName: '铁东区',

    mapParentId: 220300
  },
  {
    id: 220322,
    mapName: '梨树县',

    mapParentId: 220300
  },
  {
    id: 220323,
    mapName: '伊通满族自治县',

    mapParentId: 220300
  },
  {
    id: 220381,
    mapName: '公主岭市',

    mapParentId: 220300
  },
  {
    id: 220382,
    mapName: '双辽市',

    mapParentId: 220300
  },
  {
    id: 220402,
    mapName: '龙山区',

    mapParentId: 220400
  },
  {
    id: 220403,
    mapName: '西安区',

    mapParentId: 220400
  },
  {
    id: 220421,
    mapName: '东丰县',

    mapParentId: 220400
  },
  {
    id: 220422,
    mapName: '东辽县',

    mapParentId: 220400
  },
  {
    id: 220502,
    mapName: '东昌区',

    mapParentId: 220500
  },
  {
    id: 220503,
    mapName: '二道江区',

    mapParentId: 220500
  },
  {
    id: 220521,
    mapName: '通化县',

    mapParentId: 220500
  },
  {
    id: 220523,
    mapName: '辉南县',

    mapParentId: 220500
  },
  {
    id: 220524,
    mapName: '柳河县',

    mapParentId: 220500
  },
  {
    id: 220581,
    mapName: '梅河口市',

    mapParentId: 220500
  },
  {
    id: 220582,
    mapName: '集安市',

    mapParentId: 220500
  },
  {
    id: 220602,
    mapName: '浑江区',

    mapParentId: 220600
  },
  {
    id: 220605,
    mapName: '江源区',

    mapParentId: 220600
  },
  {
    id: 220621,
    mapName: '抚松县',

    mapParentId: 220600
  },
  {
    id: 220622,
    mapName: '靖宇县',

    mapParentId: 220600
  },
  {
    id: 220623,
    mapName: '长白朝鲜族自治县',

    mapParentId: 220600
  },
  {
    id: 220681,
    mapName: '临江市',

    mapParentId: 220600
  },
  {
    id: 220702,
    mapName: '宁江区',

    mapParentId: 220700
  },
  {
    id: 220721,
    mapName: '前郭尔罗斯蒙古族自治县',

    mapParentId: 220700
  },
  {
    id: 220722,
    mapName: '长岭县',

    mapParentId: 220700
  },
  {
    id: 220723,
    mapName: '乾安县',

    mapParentId: 220700
  },
  {
    id: 220781,
    mapName: '扶余市',

    mapParentId: 220700
  },
  {
    id: 220802,
    mapName: '洮北区',

    mapParentId: 220800
  },
  {
    id: 220821,
    mapName: '镇赉县',

    mapParentId: 220800
  },
  {
    id: 220822,
    mapName: '通榆县',

    mapParentId: 220800
  },
  {
    id: 220881,
    mapName: '洮南市',

    mapParentId: 220800
  },
  {
    id: 220882,
    mapName: '大安市',

    mapParentId: 220800
  },
  {
    id: 222401,
    mapName: '延吉市',

    mapParentId: 222400
  },
  {
    id: 222402,
    mapName: '图们市',

    mapParentId: 222400
  },
  {
    id: 222403,
    mapName: '敦化市',

    mapParentId: 222400
  },
  {
    id: 222404,
    mapName: '珲春市',

    mapParentId: 222400
  },
  {
    id: 222405,
    mapName: '龙井市',

    mapParentId: 222400
  },
  {
    id: 222406,
    mapName: '和龙市',

    mapParentId: 222400
  },
  {
    id: 222424,
    mapName: '汪清县',

    mapParentId: 222400
  },
  {
    id: 222426,
    mapName: '安图县',

    mapParentId: 222400
  },
  {
    id: 230102,
    mapName: '道里区',

    mapParentId: 230100
  },
  {
    id: 230103,
    mapName: '南岗区',

    mapParentId: 230100
  },
  {
    id: 230104,
    mapName: '道外区',

    mapParentId: 230100
  },
  {
    id: 230108,
    mapName: '平房区',

    mapParentId: 230100
  },
  {
    id: 230109,
    mapName: '松北区',

    mapParentId: 230100
  },
  {
    id: 230110,
    mapName: '香坊区',

    mapParentId: 230100
  },
  {
    id: 230111,
    mapName: '呼兰区',

    mapParentId: 230100
  },
  {
    id: 230112,
    mapName: '阿城区',

    mapParentId: 230100
  },
  {
    id: 230113,
    mapName: '双城区',

    mapParentId: 230100
  },
  {
    id: 230123,
    mapName: '依兰县',

    mapParentId: 230100
  },
  {
    id: 230124,
    mapName: '方正县',

    mapParentId: 230100
  },
  {
    id: 230125,
    mapName: '宾县',

    mapParentId: 230100
  },
  {
    id: 230126,
    mapName: '巴彦县',

    mapParentId: 230100
  },
  {
    id: 230127,
    mapName: '木兰县',

    mapParentId: 230100
  },
  {
    id: 230128,
    mapName: '通河县',

    mapParentId: 230100
  },
  {
    id: 230129,
    mapName: '延寿县',

    mapParentId: 230100
  },
  {
    id: 230183,
    mapName: '尚志市',

    mapParentId: 230100
  },
  {
    id: 230184,
    mapName: '五常市',

    mapParentId: 230100
  },
  {
    id: 230202,
    mapName: '龙沙区',

    mapParentId: 230200
  },
  {
    id: 230203,
    mapName: '建华区',

    mapParentId: 230200
  },
  {
    id: 230204,
    mapName: '铁锋区',

    mapParentId: 230200
  },
  {
    id: 230205,
    mapName: '昂昂溪区',

    mapParentId: 230200
  },
  {
    id: 230206,
    mapName: '富拉尔基区',

    mapParentId: 230200
  },
  {
    id: 230207,
    mapName: '碾子山区',

    mapParentId: 230200
  },
  {
    id: 230208,
    mapName: '梅里斯达斡尔族区',

    mapParentId: 230200
  },
  {
    id: 230221,
    mapName: '龙江县',

    mapParentId: 230200
  },
  {
    id: 230223,
    mapName: '依安县',

    mapParentId: 230200
  },
  {
    id: 230224,
    mapName: '泰来县',

    mapParentId: 230200
  },
  {
    id: 230225,
    mapName: '甘南县',

    mapParentId: 230200
  },
  {
    id: 230227,
    mapName: '富裕县',

    mapParentId: 230200
  },
  {
    id: 230229,
    mapName: '克山县',

    mapParentId: 230200
  },
  {
    id: 230230,
    mapName: '克东县',

    mapParentId: 230200
  },
  {
    id: 230231,
    mapName: '拜泉县',

    mapParentId: 230200
  },
  {
    id: 230281,
    mapName: '讷河市',

    mapParentId: 230200
  },
  {
    id: 230302,
    mapName: '鸡冠区',

    mapParentId: 230300
  },
  {
    id: 230303,
    mapName: '恒山区',

    mapParentId: 230300
  },
  {
    id: 230304,
    mapName: '滴道区',

    mapParentId: 230300
  },
  {
    id: 230305,
    mapName: '梨树区',

    mapParentId: 230300
  },
  {
    id: 230306,
    mapName: '城子河区',

    mapParentId: 230300
  },
  {
    id: 230307,
    mapName: '麻山区',

    mapParentId: 230300
  },
  {
    id: 230321,
    mapName: '鸡东县',

    mapParentId: 230300
  },
  {
    id: 230381,
    mapName: '虎林市',

    mapParentId: 230300
  },
  {
    id: 230382,
    mapName: '密山市',

    mapParentId: 230300
  },
  {
    id: 230402,
    mapName: '向阳区',

    mapParentId: 230400
  },
  {
    id: 230403,
    mapName: '工农区',

    mapParentId: 230400
  },
  {
    id: 230404,
    mapName: '南山区',

    mapParentId: 230400
  },
  {
    id: 230405,
    mapName: '兴安区',

    mapParentId: 230400
  },
  {
    id: 230406,
    mapName: '东山区',

    mapParentId: 230400
  },
  {
    id: 230407,
    mapName: '兴山区',

    mapParentId: 230400
  },
  {
    id: 230421,
    mapName: '萝北县',

    mapParentId: 230400
  },
  {
    id: 230422,
    mapName: '绥滨县',

    mapParentId: 230400
  },
  {
    id: 230502,
    mapName: '尖山区',

    mapParentId: 230500
  },
  {
    id: 230503,
    mapName: '岭东区',

    mapParentId: 230500
  },
  {
    id: 230505,
    mapName: '四方台区',

    mapParentId: 230500
  },
  {
    id: 230506,
    mapName: '宝山区',

    mapParentId: 230500
  },
  {
    id: 230521,
    mapName: '集贤县',

    mapParentId: 230500
  },
  {
    id: 230522,
    mapName: '友谊县',

    mapParentId: 230500
  },
  {
    id: 230523,
    mapName: '宝清县',

    mapParentId: 230500
  },
  {
    id: 230524,
    mapName: '饶河县',

    mapParentId: 230500
  },
  {
    id: 230602,
    mapName: '萨尔图区',

    mapParentId: 230600
  },
  {
    id: 230603,
    mapName: '龙凤区',

    mapParentId: 230600
  },
  {
    id: 230604,
    mapName: '让胡路区',

    mapParentId: 230600
  },
  {
    id: 230605,
    mapName: '红岗区',

    mapParentId: 230600
  },
  {
    id: 230606,
    mapName: '大同区',

    mapParentId: 230600
  },
  {
    id: 230621,
    mapName: '肇州县',

    mapParentId: 230600
  },
  {
    id: 230622,
    mapName: '肇源县',

    mapParentId: 230600
  },
  {
    id: 230623,
    mapName: '林甸县',

    mapParentId: 230600
  },
  {
    id: 230624,
    mapName: '杜尔伯特蒙古族自治县',

    mapParentId: 230600
  },
  {
    id: 230702,
    mapName: '伊春区',

    mapParentId: 230700
  },
  {
    id: 230703,
    mapName: '南岔区',

    mapParentId: 230700
  },
  {
    id: 230704,
    mapName: '友好区',

    mapParentId: 230700
  },
  {
    id: 230705,
    mapName: '西林区',

    mapParentId: 230700
  },
  {
    id: 230706,
    mapName: '翠峦区',

    mapParentId: 230700
  },
  {
    id: 230707,
    mapName: '新青区',

    mapParentId: 230700
  },
  {
    id: 230708,
    mapName: '美溪区',

    mapParentId: 230700
  },
  {
    id: 230709,
    mapName: '金山屯区',

    mapParentId: 230700
  },
  {
    id: 230710,
    mapName: '五营区',

    mapParentId: 230700
  },
  {
    id: 230711,
    mapName: '乌马河区',

    mapParentId: 230700
  },
  {
    id: 230712,
    mapName: '汤旺河区',

    mapParentId: 230700
  },
  {
    id: 230713,
    mapName: '带岭区',

    mapParentId: 230700
  },
  {
    id: 230714,
    mapName: '乌伊岭区',

    mapParentId: 230700
  },
  {
    id: 230715,
    mapName: '红星区',

    mapParentId: 230700
  },
  {
    id: 230716,
    mapName: '上甘岭区',

    mapParentId: 230700
  },
  {
    id: 230722,
    mapName: '嘉荫县',

    mapParentId: 230700
  },
  {
    id: 230781,
    mapName: '铁力市',

    mapParentId: 230700
  },
  {
    id: 230803,
    mapName: '向阳区',

    mapParentId: 230800
  },
  {
    id: 230804,
    mapName: '前进区',

    mapParentId: 230800
  },
  {
    id: 230805,
    mapName: '东风区',

    mapParentId: 230800
  },
  {
    id: 230811,
    mapName: '郊区',

    mapParentId: 230800
  },
  {
    id: 230822,
    mapName: '桦南县',

    mapParentId: 230800
  },
  {
    id: 230826,
    mapName: '桦川县',

    mapParentId: 230800
  },
  {
    id: 230828,
    mapName: '汤原县',

    mapParentId: 230800
  },
  {
    id: 230881,
    mapName: '同江市',

    mapParentId: 230800
  },
  {
    id: 230882,
    mapName: '富锦市',

    mapParentId: 230800
  },
  {
    id: 230883,
    mapName: '抚远市',

    mapParentId: 230800
  },
  {
    id: 230902,
    mapName: '新兴区',

    mapParentId: 230900
  },
  {
    id: 230903,
    mapName: '桃山区',

    mapParentId: 230900
  },
  {
    id: 230904,
    mapName: '茄子河区',

    mapParentId: 230900
  },
  {
    id: 230921,
    mapName: '勃利县',

    mapParentId: 230900
  },
  {
    id: 231002,
    mapName: '东安区',

    mapParentId: 231000
  },
  {
    id: 231003,
    mapName: '阳明区',

    mapParentId: 231000
  },
  {
    id: 231004,
    mapName: '爱民区',

    mapParentId: 231000
  },
  {
    id: 231005,
    mapName: '西安区',

    mapParentId: 231000
  },
  {
    id: 231025,
    mapName: '林口县',

    mapParentId: 231000
  },
  {
    id: 231081,
    mapName: '绥芬河市',

    mapParentId: 231000
  },
  {
    id: 231083,
    mapName: '海林市',

    mapParentId: 231000
  },
  {
    id: 231084,
    mapName: '宁安市',

    mapParentId: 231000
  },
  {
    id: 231085,
    mapName: '穆棱市',

    mapParentId: 231000
  },
  {
    id: 231086,
    mapName: '东宁市',

    mapParentId: 231000
  },
  {
    id: 231102,
    mapName: '爱辉区',

    mapParentId: 231100
  },
  {
    id: 231121,
    mapName: '嫩江县',

    mapParentId: 231100
  },
  {
    id: 231123,
    mapName: '逊克县',

    mapParentId: 231100
  },
  {
    id: 231124,
    mapName: '孙吴县',

    mapParentId: 231100
  },
  {
    id: 231181,
    mapName: '北安市',

    mapParentId: 231100
  },
  {
    id: 231182,
    mapName: '五大连池市',

    mapParentId: 231100
  },
  {
    id: 231202,
    mapName: '北林区',

    mapParentId: 231200
  },
  {
    id: 231221,
    mapName: '望奎县',

    mapParentId: 231200
  },
  {
    id: 231222,
    mapName: '兰西县',

    mapParentId: 231200
  },
  {
    id: 231223,
    mapName: '青冈县',

    mapParentId: 231200
  },
  {
    id: 231224,
    mapName: '庆安县',

    mapParentId: 231200
  },
  {
    id: 231225,
    mapName: '明水县',

    mapParentId: 231200
  },
  {
    id: 231226,
    mapName: '绥棱县',

    mapParentId: 231200
  },
  {
    id: 231281,
    mapName: '安达市',

    mapParentId: 231200
  },
  {
    id: 231282,
    mapName: '肇东市',

    mapParentId: 231200
  },
  {
    id: 231283,
    mapName: '海伦市',

    mapParentId: 231200
  },
  {
    id: 232701,
    mapName: '漠河市',

    mapParentId: 232700
  },
  {
    id: 232718,
    mapName: '加格达奇区',

    mapParentId: 232700
  },
  {
    id: 232721,
    mapName: '呼玛县',

    mapParentId: 232700
  },
  {
    id: 232722,
    mapName: '塔河县',

    mapParentId: 232700
  },
  {
    id: 310101,
    mapName: '黄浦区',

    mapParentId: 310100
  },
  {
    id: 310104,
    mapName: '徐汇区',

    mapParentId: 310100
  },
  {
    id: 310105,
    mapName: '长宁区',

    mapParentId: 310100
  },
  {
    id: 310106,
    mapName: '静安区',

    mapParentId: 310100
  },
  {
    id: 310107,
    mapName: '普陀区',

    mapParentId: 310100
  },
  {
    id: 310109,
    mapName: '虹口区',

    mapParentId: 310100
  },
  {
    id: 310110,
    mapName: '杨浦区',

    mapParentId: 310100
  },
  {
    id: 310112,
    mapName: '闵行区',

    mapParentId: 310100
  },
  {
    id: 310113,
    mapName: '宝山区',

    mapParentId: 310100
  },
  {
    id: 310114,
    mapName: '嘉定区',

    mapParentId: 310100
  },
  {
    id: 310115,
    mapName: '浦东新区',

    mapParentId: 310100
  },
  {
    id: 310116,
    mapName: '金山区',

    mapParentId: 310100
  },
  {
    id: 310117,
    mapName: '松江区',

    mapParentId: 310100
  },
  {
    id: 310118,
    mapName: '青浦区',

    mapParentId: 310100
  },
  {
    id: 310120,
    mapName: '奉贤区',

    mapParentId: 310100
  },
  {
    id: 310151,
    mapName: '崇明区',

    mapParentId: 310100
  },
  {
    id: 320102,
    mapName: '玄武区',

    mapParentId: 320100
  },
  {
    id: 320104,
    mapName: '秦淮区',

    mapParentId: 320100
  },
  {
    id: 320105,
    mapName: '建邺区',

    mapParentId: 320100
  },
  {
    id: 320106,
    mapName: '鼓楼区',

    mapParentId: 320100
  },
  {
    id: 320111,
    mapName: '浦口区',

    mapParentId: 320100
  },
  {
    id: 320113,
    mapName: '栖霞区',

    mapParentId: 320100
  },
  {
    id: 320114,
    mapName: '雨花台区',

    mapParentId: 320100
  },
  {
    id: 320115,
    mapName: '江宁区',

    mapParentId: 320100
  },
  {
    id: 320116,
    mapName: '六合区',

    mapParentId: 320100
  },
  {
    id: 320117,
    mapName: '溧水区',

    mapParentId: 320100
  },
  {
    id: 320118,
    mapName: '高淳区',

    mapParentId: 320100
  },
  {
    id: 320205,
    mapName: '锡山区',

    mapParentId: 320200
  },
  {
    id: 320206,
    mapName: '惠山区',

    mapParentId: 320200
  },
  {
    id: 320211,
    mapName: '滨湖区',

    mapParentId: 320200
  },
  {
    id: 320213,
    mapName: '梁溪区',

    mapParentId: 320200
  },
  {
    id: 320214,
    mapName: '新吴区',

    mapParentId: 320200
  },
  {
    id: 320281,
    mapName: '江阴市',

    mapParentId: 320200
  },
  {
    id: 320282,
    mapName: '宜兴市',

    mapParentId: 320200
  },
  {
    id: 320302,
    mapName: '鼓楼区',

    mapParentId: 320300
  },
  {
    id: 320303,
    mapName: '云龙区',

    mapParentId: 320300
  },
  {
    id: 320305,
    mapName: '贾汪区',

    mapParentId: 320300
  },
  {
    id: 320311,
    mapName: '泉山区',

    mapParentId: 320300
  },
  {
    id: 320312,
    mapName: '铜山区',

    mapParentId: 320300
  },
  {
    id: 320321,
    mapName: '丰县',

    mapParentId: 320300
  },
  {
    id: 320322,
    mapName: '沛县',

    mapParentId: 320300
  },
  {
    id: 320324,
    mapName: '睢宁县',

    mapParentId: 320300
  },
  {
    id: 320381,
    mapName: '新沂市',

    mapParentId: 320300
  },
  {
    id: 320382,
    mapName: '邳州市',

    mapParentId: 320300
  },
  {
    id: 320402,
    mapName: '天宁区',

    mapParentId: 320400
  },
  {
    id: 320404,
    mapName: '钟楼区',

    mapParentId: 320400
  },
  {
    id: 320411,
    mapName: '新北区',

    mapParentId: 320400
  },
  {
    id: 320412,
    mapName: '武进区',

    mapParentId: 320400
  },
  {
    id: 320413,
    mapName: '金坛区',

    mapParentId: 320400
  },
  {
    id: 320481,
    mapName: '溧阳市',

    mapParentId: 320400
  },
  {
    id: 320505,
    mapName: '虎丘区',

    mapParentId: 320500
  },
  {
    id: 320506,
    mapName: '吴中区',

    mapParentId: 320500
  },
  {
    id: 320507,
    mapName: '相城区',

    mapParentId: 320500
  },
  {
    id: 320508,
    mapName: '姑苏区',

    mapParentId: 320500
  },
  {
    id: 320509,
    mapName: '吴江区',

    mapParentId: 320500
  },
  {
    id: 320571,
    mapName: '苏州工业园区',

    mapParentId: 320500
  },
  {
    id: 320581,
    mapName: '常熟市',

    mapParentId: 320500
  },
  {
    id: 320582,
    mapName: '张家港市',

    mapParentId: 320500
  },
  {
    id: 320583,
    mapName: '昆山市',

    mapParentId: 320500
  },
  {
    id: 320585,
    mapName: '太仓市',

    mapParentId: 320500
  },
  {
    id: 320602,
    mapName: '崇川区',

    mapParentId: 320600
  },
  {
    id: 320611,
    mapName: '港闸区',

    mapParentId: 320600
  },
  {
    id: 320612,
    mapName: '通州区',

    mapParentId: 320600
  },
  {
    id: 320623,
    mapName: '如东县',

    mapParentId: 320600
  },
  {
    id: 320681,
    mapName: '启东市',

    mapParentId: 320600
  },
  {
    id: 320682,
    mapName: '如皋市',

    mapParentId: 320600
  },
  {
    id: 320684,
    mapName: '海门市',

    mapParentId: 320600
  },
  {
    id: 320685,
    mapName: '海安市',

    mapParentId: 320600
  },
  {
    id: 320703,
    mapName: '连云区',

    mapParentId: 320700
  },
  {
    id: 320706,
    mapName: '海州区',

    mapParentId: 320700
  },
  {
    id: 320707,
    mapName: '赣榆区',

    mapParentId: 320700
  },
  {
    id: 320722,
    mapName: '东海县',

    mapParentId: 320700
  },
  {
    id: 320723,
    mapName: '灌云县',

    mapParentId: 320700
  },
  {
    id: 320724,
    mapName: '灌南县',

    mapParentId: 320700
  },
  {
    id: 320803,
    mapName: '淮安区',

    mapParentId: 320800
  },
  {
    id: 320804,
    mapName: '淮阴区',

    mapParentId: 320800
  },
  {
    id: 320812,
    mapName: '清江浦区',

    mapParentId: 320800
  },
  {
    id: 320813,
    mapName: '洪泽区',

    mapParentId: 320800
  },
  {
    id: 320826,
    mapName: '涟水县',

    mapParentId: 320800
  },
  {
    id: 320830,
    mapName: '盱眙县',

    mapParentId: 320800
  },
  {
    id: 320831,
    mapName: '金湖县',

    mapParentId: 320800
  },
  {
    id: 320902,
    mapName: '亭湖区',

    mapParentId: 320900
  },
  {
    id: 320903,
    mapName: '盐都区',

    mapParentId: 320900
  },
  {
    id: 320904,
    mapName: '大丰区',

    mapParentId: 320900
  },
  {
    id: 320921,
    mapName: '响水县',

    mapParentId: 320900
  },
  {
    id: 320922,
    mapName: '滨海县',

    mapParentId: 320900
  },
  {
    id: 320923,
    mapName: '阜宁县',

    mapParentId: 320900
  },
  {
    id: 320924,
    mapName: '射阳县',

    mapParentId: 320900
  },
  {
    id: 320925,
    mapName: '建湖县',

    mapParentId: 320900
  },
  {
    id: 320981,
    mapName: '东台市',

    mapParentId: 320900
  },
  {
    id: 321002,
    mapName: '广陵区',

    mapParentId: 321000
  },
  {
    id: 321003,
    mapName: '邗江区',

    mapParentId: 321000
  },
  {
    id: 321012,
    mapName: '江都区',

    mapParentId: 321000
  },
  {
    id: 321023,
    mapName: '宝应县',

    mapParentId: 321000
  },
  {
    id: 321081,
    mapName: '仪征市',

    mapParentId: 321000
  },
  {
    id: 321084,
    mapName: '高邮市',

    mapParentId: 321000
  },
  {
    id: 321102,
    mapName: '京口区',

    mapParentId: 321100
  },
  {
    id: 321111,
    mapName: '润州区',

    mapParentId: 321100
  },
  {
    id: 321112,
    mapName: '丹徒区',

    mapParentId: 321100
  },
  {
    id: 321181,
    mapName: '丹阳市',

    mapParentId: 321100
  },
  {
    id: 321182,
    mapName: '扬中市',

    mapParentId: 321100
  },
  {
    id: 321183,
    mapName: '句容市',

    mapParentId: 321100
  },
  {
    id: 321202,
    mapName: '海陵区',

    mapParentId: 321200
  },
  {
    id: 321203,
    mapName: '高港区',

    mapParentId: 321200
  },
  {
    id: 321204,
    mapName: '姜堰区',

    mapParentId: 321200
  },
  {
    id: 321281,
    mapName: '兴化市',

    mapParentId: 321200
  },
  {
    id: 321282,
    mapName: '靖江市',

    mapParentId: 321200
  },
  {
    id: 321283,
    mapName: '泰兴市',

    mapParentId: 321200
  },
  {
    id: 321302,
    mapName: '宿城区',

    mapParentId: 321300
  },
  {
    id: 321311,
    mapName: '宿豫区',

    mapParentId: 321300
  },
  {
    id: 321322,
    mapName: '沭阳县',

    mapParentId: 321300
  },
  {
    id: 321323,
    mapName: '泗阳县',

    mapParentId: 321300
  },
  {
    id: 321324,
    mapName: '泗洪县',

    mapParentId: 321300
  },
  {
    id: 330102,
    mapName: '上城区',

    mapParentId: 330100
  },
  {
    id: 330103,
    mapName: '下城区',

    mapParentId: 330100
  },
  {
    id: 330104,
    mapName: '江干区',

    mapParentId: 330100
  },
  {
    id: 330105,
    mapName: '拱墅区',

    mapParentId: 330100
  },
  {
    id: 330106,
    mapName: '西湖区',

    mapParentId: 330100
  },
  {
    id: 330108,
    mapName: '滨江区',

    mapParentId: 330100
  },
  {
    id: 330109,
    mapName: '萧山区',

    mapParentId: 330100
  },
  {
    id: 330110,
    mapName: '余杭区',

    mapParentId: 330100
  },
  {
    id: 330111,
    mapName: '富阳区',

    mapParentId: 330100
  },
  {
    id: 330112,
    mapName: '临安区',

    mapParentId: 330100
  },
  {
    id: 330122,
    mapName: '桐庐县',

    mapParentId: 330100
  },
  {
    id: 330127,
    mapName: '淳安县',

    mapParentId: 330100
  },
  {
    id: 330182,
    mapName: '建德市',

    mapParentId: 330100
  },
  {
    id: 330203,
    mapName: '海曙区',

    mapParentId: 330200
  },
  {
    id: 330205,
    mapName: '江北区',

    mapParentId: 330200
  },
  {
    id: 330206,
    mapName: '北仑区',

    mapParentId: 330200
  },
  {
    id: 330211,
    mapName: '镇海区',

    mapParentId: 330200
  },
  {
    id: 330212,
    mapName: '鄞州区',

    mapParentId: 330200
  },
  {
    id: 330213,
    mapName: '奉化区',

    mapParentId: 330200
  },
  {
    id: 330225,
    mapName: '象山县',

    mapParentId: 330200
  },
  {
    id: 330226,
    mapName: '宁海县',

    mapParentId: 330200
  },
  {
    id: 330281,
    mapName: '余姚市',

    mapParentId: 330200
  },
  {
    id: 330282,
    mapName: '慈溪市',

    mapParentId: 330200
  },
  {
    id: 330302,
    mapName: '鹿城区',

    mapParentId: 330300
  },
  {
    id: 330303,
    mapName: '龙湾区',

    mapParentId: 330300
  },
  {
    id: 330304,
    mapName: '瓯海区',

    mapParentId: 330300
  },
  {
    id: 330305,
    mapName: '洞头区',

    mapParentId: 330300
  },
  {
    id: 330324,
    mapName: '永嘉县',

    mapParentId: 330300
  },
  {
    id: 330326,
    mapName: '平阳县',

    mapParentId: 330300
  },
  {
    id: 330327,
    mapName: '苍南县',

    mapParentId: 330300
  },
  {
    id: 330328,
    mapName: '文成县',

    mapParentId: 330300
  },
  {
    id: 330329,
    mapName: '泰顺县',

    mapParentId: 330300
  },
  {
    id: 330381,
    mapName: '瑞安市',

    mapParentId: 330300
  },
  {
    id: 330382,
    mapName: '乐清市',

    mapParentId: 330300
  },
  {
    id: 330402,
    mapName: '南湖区',

    mapParentId: 330400
  },
  {
    id: 330411,
    mapName: '秀洲区',

    mapParentId: 330400
  },
  {
    id: 330421,
    mapName: '嘉善县',

    mapParentId: 330400
  },
  {
    id: 330424,
    mapName: '海盐县',

    mapParentId: 330400
  },
  {
    id: 330481,
    mapName: '海宁市',

    mapParentId: 330400
  },
  {
    id: 330482,
    mapName: '平湖市',

    mapParentId: 330400
  },
  {
    id: 330483,
    mapName: '桐乡市',

    mapParentId: 330400
  },
  {
    id: 330502,
    mapName: '吴兴区',

    mapParentId: 330500
  },
  {
    id: 330503,
    mapName: '南浔区',

    mapParentId: 330500
  },
  {
    id: 330521,
    mapName: '德清县',

    mapParentId: 330500
  },
  {
    id: 330522,
    mapName: '长兴县',

    mapParentId: 330500
  },
  {
    id: 330523,
    mapName: '安吉县',

    mapParentId: 330500
  },
  {
    id: 330602,
    mapName: '越城区',

    mapParentId: 330600
  },
  {
    id: 330603,
    mapName: '柯桥区',

    mapParentId: 330600
  },
  {
    id: 330604,
    mapName: '上虞区',

    mapParentId: 330600
  },
  {
    id: 330624,
    mapName: '新昌县',

    mapParentId: 330600
  },
  {
    id: 330681,
    mapName: '诸暨市',

    mapParentId: 330600
  },
  {
    id: 330683,
    mapName: '嵊州市',

    mapParentId: 330600
  },
  {
    id: 330702,
    mapName: '婺城区',

    mapParentId: 330700
  },
  {
    id: 330703,
    mapName: '金东区',

    mapParentId: 330700
  },
  {
    id: 330723,
    mapName: '武义县',

    mapParentId: 330700
  },
  {
    id: 330726,
    mapName: '浦江县',

    mapParentId: 330700
  },
  {
    id: 330727,
    mapName: '磐安县',

    mapParentId: 330700
  },
  {
    id: 330781,
    mapName: '兰溪市',

    mapParentId: 330700
  },
  {
    id: 330782,
    mapName: '义乌市',

    mapParentId: 330700
  },
  {
    id: 330783,
    mapName: '东阳市',

    mapParentId: 330700
  },
  {
    id: 330784,
    mapName: '永康市',

    mapParentId: 330700
  },
  {
    id: 330802,
    mapName: '柯城区',

    mapParentId: 330800
  },
  {
    id: 330803,
    mapName: '衢江区',

    mapParentId: 330800
  },
  {
    id: 330822,
    mapName: '常山县',

    mapParentId: 330800
  },
  {
    id: 330824,
    mapName: '开化县',

    mapParentId: 330800
  },
  {
    id: 330825,
    mapName: '龙游县',

    mapParentId: 330800
  },
  {
    id: 330881,
    mapName: '江山市',

    mapParentId: 330800
  },
  {
    id: 330902,
    mapName: '定海区',

    mapParentId: 330900
  },
  {
    id: 330903,
    mapName: '普陀区',

    mapParentId: 330900
  },
  {
    id: 330921,
    mapName: '岱山县',

    mapParentId: 330900
  },
  {
    id: 330922,
    mapName: '嵊泗县',

    mapParentId: 330900
  },
  {
    id: 331002,
    mapName: '椒江区',

    mapParentId: 331000
  },
  {
    id: 331003,
    mapName: '黄岩区',

    mapParentId: 331000
  },
  {
    id: 331004,
    mapName: '路桥区',

    mapParentId: 331000
  },
  {
    id: 331022,
    mapName: '三门县',

    mapParentId: 331000
  },
  {
    id: 331023,
    mapName: '天台县',

    mapParentId: 331000
  },
  {
    id: 331024,
    mapName: '仙居县',

    mapParentId: 331000
  },
  {
    id: 331081,
    mapName: '温岭市',

    mapParentId: 331000
  },
  {
    id: 331082,
    mapName: '临海市',

    mapParentId: 331000
  },
  {
    id: 331083,
    mapName: '玉环市',

    mapParentId: 331000
  },
  {
    id: 331102,
    mapName: '莲都区',

    mapParentId: 331100
  },
  {
    id: 331121,
    mapName: '青田县',

    mapParentId: 331100
  },
  {
    id: 331122,
    mapName: '缙云县',

    mapParentId: 331100
  },
  {
    id: 331123,
    mapName: '遂昌县',

    mapParentId: 331100
  },
  {
    id: 331124,
    mapName: '松阳县',

    mapParentId: 331100
  },
  {
    id: 331125,
    mapName: '云和县',

    mapParentId: 331100
  },
  {
    id: 331126,
    mapName: '庆元县',

    mapParentId: 331100
  },
  {
    id: 331127,
    mapName: '景宁畲族自治县',

    mapParentId: 331100
  },
  {
    id: 331181,
    mapName: '龙泉市',

    mapParentId: 331100
  },
  {
    id: 340102,
    mapName: '瑶海区',

    mapParentId: 340100
  },
  {
    id: 340103,
    mapName: '庐阳区',

    mapParentId: 340100
  },
  {
    id: 340104,
    mapName: '蜀山区',

    mapParentId: 340100
  },
  {
    id: 340111,
    mapName: '包河区',

    mapParentId: 340100
  },
  {
    id: 340121,
    mapName: '长丰县',

    mapParentId: 340100
  },
  {
    id: 340122,
    mapName: '肥东县',

    mapParentId: 340100
  },
  {
    id: 340123,
    mapName: '肥西县',

    mapParentId: 340100
  },
  {
    id: 340124,
    mapName: '庐江县',

    mapParentId: 340100
  },
  {
    id: 340181,
    mapName: '巢湖市',

    mapParentId: 340100
  },
  {
    id: 340202,
    mapName: '镜湖区',

    mapParentId: 340200
  },
  {
    id: 340203,
    mapName: '弋江区',

    mapParentId: 340200
  },
  {
    id: 340207,
    mapName: '鸠江区',

    mapParentId: 340200
  },
  {
    id: 340208,
    mapName: '三山区',

    mapParentId: 340200
  },
  {
    id: 340221,
    mapName: '芜湖县',

    mapParentId: 340200
  },
  {
    id: 340222,
    mapName: '繁昌县',

    mapParentId: 340200
  },
  {
    id: 340223,
    mapName: '南陵县',

    mapParentId: 340200
  },
  {
    id: 340225,
    mapName: '无为县',

    mapParentId: 340200
  },
  {
    id: 340302,
    mapName: '龙子湖区',

    mapParentId: 340300
  },
  {
    id: 340303,
    mapName: '蚌山区',

    mapParentId: 340300
  },
  {
    id: 340304,
    mapName: '禹会区',

    mapParentId: 340300
  },
  {
    id: 340311,
    mapName: '淮上区',

    mapParentId: 340300
  },
  {
    id: 340321,
    mapName: '怀远县',

    mapParentId: 340300
  },
  {
    id: 340322,
    mapName: '五河县',

    mapParentId: 340300
  },
  {
    id: 340323,
    mapName: '固镇县',

    mapParentId: 340300
  },
  {
    id: 340402,
    mapName: '大通区',

    mapParentId: 340400
  },
  {
    id: 340403,
    mapName: '田家庵区',

    mapParentId: 340400
  },
  {
    id: 340404,
    mapName: '谢家集区',

    mapParentId: 340400
  },
  {
    id: 340405,
    mapName: '八公山区',

    mapParentId: 340400
  },
  {
    id: 340406,
    mapName: '潘集区',

    mapParentId: 340400
  },
  {
    id: 340421,
    mapName: '凤台县',

    mapParentId: 340400
  },
  {
    id: 340422,
    mapName: '寿县',

    mapParentId: 340400
  },
  {
    id: 340503,
    mapName: '花山区',

    mapParentId: 340500
  },
  {
    id: 340504,
    mapName: '雨山区',

    mapParentId: 340500
  },
  {
    id: 340506,
    mapName: '博望区',

    mapParentId: 340500
  },
  {
    id: 340521,
    mapName: '当涂县',

    mapParentId: 340500
  },
  {
    id: 340522,
    mapName: '含山县',

    mapParentId: 340500
  },
  {
    id: 340523,
    mapName: '和县',

    mapParentId: 340500
  },
  {
    id: 340602,
    mapName: '杜集区',

    mapParentId: 340600
  },
  {
    id: 340603,
    mapName: '相山区',

    mapParentId: 340600
  },
  {
    id: 340604,
    mapName: '烈山区',

    mapParentId: 340600
  },
  {
    id: 340621,
    mapName: '濉溪县',

    mapParentId: 340600
  },
  {
    id: 340705,
    mapName: '铜官区',

    mapParentId: 340700
  },
  {
    id: 340706,
    mapName: '义安区',

    mapParentId: 340700
  },
  {
    id: 340711,
    mapName: '郊区',

    mapParentId: 340700
  },
  {
    id: 340722,
    mapName: '枞阳县',

    mapParentId: 340700
  },
  {
    id: 340802,
    mapName: '迎江区',

    mapParentId: 340800
  },
  {
    id: 340803,
    mapName: '大观区',

    mapParentId: 340800
  },
  {
    id: 340811,
    mapName: '宜秀区',

    mapParentId: 340800
  },
  {
    id: 340822,
    mapName: '怀宁县',

    mapParentId: 340800
  },
  {
    id: 340825,
    mapName: '太湖县',

    mapParentId: 340800
  },
  {
    id: 340826,
    mapName: '宿松县',

    mapParentId: 340800
  },
  {
    id: 340827,
    mapName: '望江县',

    mapParentId: 340800
  },
  {
    id: 340828,
    mapName: '岳西县',

    mapParentId: 340800
  },
  {
    id: 340881,
    mapName: '桐城市',

    mapParentId: 340800
  },
  {
    id: 340882,
    mapName: '潜山市',

    mapParentId: 340800
  },
  {
    id: 341002,
    mapName: '屯溪区',

    mapParentId: 341000
  },
  {
    id: 341003,
    mapName: '黄山区',

    mapParentId: 341000
  },
  {
    id: 341004,
    mapName: '徽州区',

    mapParentId: 341000
  },
  {
    id: 341021,
    mapName: '歙县',

    mapParentId: 341000
  },
  {
    id: 341022,
    mapName: '休宁县',

    mapParentId: 341000
  },
  {
    id: 341023,
    mapName: '黟县',

    mapParentId: 341000
  },
  {
    id: 341024,
    mapName: '祁门县',

    mapParentId: 341000
  },
  {
    id: 341102,
    mapName: '琅琊区',

    mapParentId: 341100
  },
  {
    id: 341103,
    mapName: '南谯区',

    mapParentId: 341100
  },
  {
    id: 341122,
    mapName: '来安县',

    mapParentId: 341100
  },
  {
    id: 341124,
    mapName: '全椒县',

    mapParentId: 341100
  },
  {
    id: 341125,
    mapName: '定远县',

    mapParentId: 341100
  },
  {
    id: 341126,
    mapName: '凤阳县',

    mapParentId: 341100
  },
  {
    id: 341181,
    mapName: '天长市',

    mapParentId: 341100
  },
  {
    id: 341182,
    mapName: '明光市',

    mapParentId: 341100
  },
  {
    id: 341202,
    mapName: '颍州区',

    mapParentId: 341200
  },
  {
    id: 341203,
    mapName: '颍东区',

    mapParentId: 341200
  },
  {
    id: 341204,
    mapName: '颍泉区',

    mapParentId: 341200
  },
  {
    id: 341221,
    mapName: '临泉县',

    mapParentId: 341200
  },
  {
    id: 341222,
    mapName: '太和县',

    mapParentId: 341200
  },
  {
    id: 341225,
    mapName: '阜南县',

    mapParentId: 341200
  },
  {
    id: 341226,
    mapName: '颍上县',

    mapParentId: 341200
  },
  {
    id: 341282,
    mapName: '界首市',

    mapParentId: 341200
  },
  {
    id: 341302,
    mapName: '埇桥区',

    mapParentId: 341300
  },
  {
    id: 341321,
    mapName: '砀山县',

    mapParentId: 341300
  },
  {
    id: 341322,
    mapName: '萧县',

    mapParentId: 341300
  },
  {
    id: 341323,
    mapName: '灵璧县',

    mapParentId: 341300
  },
  {
    id: 341324,
    mapName: '泗县',

    mapParentId: 341300
  },
  {
    id: 341502,
    mapName: '金安区',

    mapParentId: 341500
  },
  {
    id: 341503,
    mapName: '裕安区',

    mapParentId: 341500
  },
  {
    id: 341504,
    mapName: '叶集区',

    mapParentId: 341500
  },
  {
    id: 341522,
    mapName: '霍邱县',

    mapParentId: 341500
  },
  {
    id: 341523,
    mapName: '舒城县',

    mapParentId: 341500
  },
  {
    id: 341524,
    mapName: '金寨县',

    mapParentId: 341500
  },
  {
    id: 341525,
    mapName: '霍山县',

    mapParentId: 341500
  },
  {
    id: 341602,
    mapName: '谯城区',

    mapParentId: 341600
  },
  {
    id: 341621,
    mapName: '涡阳县',

    mapParentId: 341600
  },
  {
    id: 341622,
    mapName: '蒙城县',

    mapParentId: 341600
  },
  {
    id: 341623,
    mapName: '利辛县',

    mapParentId: 341600
  },
  {
    id: 341702,
    mapName: '贵池区',

    mapParentId: 341700
  },
  {
    id: 341721,
    mapName: '东至县',

    mapParentId: 341700
  },
  {
    id: 341722,
    mapName: '石台县',

    mapParentId: 341700
  },
  {
    id: 341723,
    mapName: '青阳县',

    mapParentId: 341700
  },
  {
    id: 341802,
    mapName: '宣州区',

    mapParentId: 341800
  },
  {
    id: 341821,
    mapName: '郎溪县',

    mapParentId: 341800
  },
  {
    id: 341822,
    mapName: '广德县',

    mapParentId: 341800
  },
  {
    id: 341823,
    mapName: '泾县',

    mapParentId: 341800
  },
  {
    id: 341824,
    mapName: '绩溪县',

    mapParentId: 341800
  },
  {
    id: 341825,
    mapName: '旌德县',

    mapParentId: 341800
  },
  {
    id: 341881,
    mapName: '宁国市',

    mapParentId: 341800
  },
  {
    id: 350102,
    mapName: '鼓楼区',

    mapParentId: 350100
  },
  {
    id: 350103,
    mapName: '台江区',

    mapParentId: 350100
  },
  {
    id: 350104,
    mapName: '仓山区',

    mapParentId: 350100
  },
  {
    id: 350105,
    mapName: '马尾区',

    mapParentId: 350100
  },
  {
    id: 350111,
    mapName: '晋安区',

    mapParentId: 350100
  },
  {
    id: 350112,
    mapName: '长乐区',

    mapParentId: 350100
  },
  {
    id: 350121,
    mapName: '闽侯县',

    mapParentId: 350100
  },
  {
    id: 350122,
    mapName: '连江县',

    mapParentId: 350100
  },
  {
    id: 350123,
    mapName: '罗源县',

    mapParentId: 350100
  },
  {
    id: 350124,
    mapName: '闽清县',

    mapParentId: 350100
  },
  {
    id: 350125,
    mapName: '永泰县',

    mapParentId: 350100
  },
  {
    id: 350128,
    mapName: '平潭县',

    mapParentId: 350100
  },
  {
    id: 350181,
    mapName: '福清市',

    mapParentId: 350100
  },
  {
    id: 350203,
    mapName: '思明区',

    mapParentId: 350200
  },
  {
    id: 350205,
    mapName: '海沧区',

    mapParentId: 350200
  },
  {
    id: 350206,
    mapName: '湖里区',

    mapParentId: 350200
  },
  {
    id: 350211,
    mapName: '集美区',

    mapParentId: 350200
  },
  {
    id: 350212,
    mapName: '同安区',

    mapParentId: 350200
  },
  {
    id: 350213,
    mapName: '翔安区',

    mapParentId: 350200
  },
  {
    id: 350302,
    mapName: '城厢区',

    mapParentId: 350300
  },
  {
    id: 350303,
    mapName: '涵江区',

    mapParentId: 350300
  },
  {
    id: 350304,
    mapName: '荔城区',

    mapParentId: 350300
  },
  {
    id: 350305,
    mapName: '秀屿区',

    mapParentId: 350300
  },
  {
    id: 350322,
    mapName: '仙游县',

    mapParentId: 350300
  },
  {
    id: 350402,
    mapName: '梅列区',

    mapParentId: 350400
  },
  {
    id: 350403,
    mapName: '三元区',

    mapParentId: 350400
  },
  {
    id: 350421,
    mapName: '明溪县',

    mapParentId: 350400
  },
  {
    id: 350423,
    mapName: '清流县',

    mapParentId: 350400
  },
  {
    id: 350424,
    mapName: '宁化县',

    mapParentId: 350400
  },
  {
    id: 350425,
    mapName: '大田县',

    mapParentId: 350400
  },
  {
    id: 350426,
    mapName: '尤溪县',

    mapParentId: 350400
  },
  {
    id: 350427,
    mapName: '沙县',

    mapParentId: 350400
  },
  {
    id: 350428,
    mapName: '将乐县',

    mapParentId: 350400
  },
  {
    id: 350429,
    mapName: '泰宁县',

    mapParentId: 350400
  },
  {
    id: 350430,
    mapName: '建宁县',

    mapParentId: 350400
  },
  {
    id: 350481,
    mapName: '永安市',

    mapParentId: 350400
  },
  {
    id: 350502,
    mapName: '鲤城区',

    mapParentId: 350500
  },
  {
    id: 350503,
    mapName: '丰泽区',

    mapParentId: 350500
  },
  {
    id: 350504,
    mapName: '洛江区',

    mapParentId: 350500
  },
  {
    id: 350505,
    mapName: '泉港区',

    mapParentId: 350500
  },
  {
    id: 350521,
    mapName: '惠安县',

    mapParentId: 350500
  },
  {
    id: 350524,
    mapName: '安溪县',

    mapParentId: 350500
  },
  {
    id: 350525,
    mapName: '永春县',

    mapParentId: 350500
  },
  {
    id: 350526,
    mapName: '德化县',

    mapParentId: 350500
  },
  {
    id: 350527,
    mapName: '金门县',

    mapParentId: 350500
  },
  {
    id: 350581,
    mapName: '石狮市',

    mapParentId: 350500
  },
  {
    id: 350582,
    mapName: '晋江市',

    mapParentId: 350500
  },
  {
    id: 350583,
    mapName: '南安市',

    mapParentId: 350500
  },
  {
    id: 350602,
    mapName: '芗城区',

    mapParentId: 350600
  },
  {
    id: 350603,
    mapName: '龙文区',

    mapParentId: 350600
  },
  {
    id: 350622,
    mapName: '云霄县',

    mapParentId: 350600
  },
  {
    id: 350623,
    mapName: '漳浦县',

    mapParentId: 350600
  },
  {
    id: 350624,
    mapName: '诏安县',

    mapParentId: 350600
  },
  {
    id: 350625,
    mapName: '长泰县',

    mapParentId: 350600
  },
  {
    id: 350626,
    mapName: '东山县',

    mapParentId: 350600
  },
  {
    id: 350627,
    mapName: '南靖县',

    mapParentId: 350600
  },
  {
    id: 350628,
    mapName: '平和县',

    mapParentId: 350600
  },
  {
    id: 350629,
    mapName: '华安县',

    mapParentId: 350600
  },
  {
    id: 350681,
    mapName: '龙海市',

    mapParentId: 350600
  },
  {
    id: 350702,
    mapName: '延平区',

    mapParentId: 350700
  },
  {
    id: 350703,
    mapName: '建阳区',

    mapParentId: 350700
  },
  {
    id: 350721,
    mapName: '顺昌县',

    mapParentId: 350700
  },
  {
    id: 350722,
    mapName: '浦城县',

    mapParentId: 350700
  },
  {
    id: 350723,
    mapName: '光泽县',

    mapParentId: 350700
  },
  {
    id: 350724,
    mapName: '松溪县',

    mapParentId: 350700
  },
  {
    id: 350725,
    mapName: '政和县',

    mapParentId: 350700
  },
  {
    id: 350781,
    mapName: '邵武市',

    mapParentId: 350700
  },
  {
    id: 350782,
    mapName: '武夷山市',

    mapParentId: 350700
  },
  {
    id: 350783,
    mapName: '建瓯市',

    mapParentId: 350700
  },
  {
    id: 350802,
    mapName: '新罗区',

    mapParentId: 350800
  },
  {
    id: 350803,
    mapName: '永定区',

    mapParentId: 350800
  },
  {
    id: 350821,
    mapName: '长汀县',

    mapParentId: 350800
  },
  {
    id: 350823,
    mapName: '上杭县',

    mapParentId: 350800
  },
  {
    id: 350824,
    mapName: '武平县',

    mapParentId: 350800
  },
  {
    id: 350825,
    mapName: '连城县',

    mapParentId: 350800
  },
  {
    id: 350881,
    mapName: '漳平市',

    mapParentId: 350800
  },
  {
    id: 350902,
    mapName: '蕉城区',

    mapParentId: 350900
  },
  {
    id: 350921,
    mapName: '霞浦县',

    mapParentId: 350900
  },
  {
    id: 350922,
    mapName: '古田县',

    mapParentId: 350900
  },
  {
    id: 350923,
    mapName: '屏南县',

    mapParentId: 350900
  },
  {
    id: 350924,
    mapName: '寿宁县',

    mapParentId: 350900
  },
  {
    id: 350925,
    mapName: '周宁县',

    mapParentId: 350900
  },
  {
    id: 350926,
    mapName: '柘荣县',

    mapParentId: 350900
  },
  {
    id: 350981,
    mapName: '福安市',

    mapParentId: 350900
  },
  {
    id: 350982,
    mapName: '福鼎市',

    mapParentId: 350900
  },
  {
    id: 360102,
    mapName: '东湖区',

    mapParentId: 360100
  },
  {
    id: 360103,
    mapName: '西湖区',

    mapParentId: 360100
  },
  {
    id: 360104,
    mapName: '青云谱区',

    mapParentId: 360100
  },
  {
    id: 360105,
    mapName: '湾里区',

    mapParentId: 360100
  },
  {
    id: 360111,
    mapName: '青山湖区',

    mapParentId: 360100
  },
  {
    id: 360112,
    mapName: '新建区',

    mapParentId: 360100
  },
  {
    id: 360121,
    mapName: '南昌县',

    mapParentId: 360100
  },
  {
    id: 360123,
    mapName: '安义县',

    mapParentId: 360100
  },
  {
    id: 360124,
    mapName: '进贤县',

    mapParentId: 360100
  },
  {
    id: 360202,
    mapName: '昌江区',

    mapParentId: 360200
  },
  {
    id: 360203,
    mapName: '珠山区',

    mapParentId: 360200
  },
  {
    id: 360222,
    mapName: '浮梁县',

    mapParentId: 360200
  },
  {
    id: 360281,
    mapName: '乐平市',

    mapParentId: 360200
  },
  {
    id: 360302,
    mapName: '安源区',

    mapParentId: 360300
  },
  {
    id: 360313,
    mapName: '湘东区',

    mapParentId: 360300
  },
  {
    id: 360321,
    mapName: '莲花县',

    mapParentId: 360300
  },
  {
    id: 360322,
    mapName: '上栗县',

    mapParentId: 360300
  },
  {
    id: 360323,
    mapName: '芦溪县',

    mapParentId: 360300
  },
  {
    id: 360402,
    mapName: '濂溪区',

    mapParentId: 360400
  },
  {
    id: 360403,
    mapName: '浔阳区',

    mapParentId: 360400
  },
  {
    id: 360404,
    mapName: '柴桑区',

    mapParentId: 360400
  },
  {
    id: 360423,
    mapName: '武宁县',

    mapParentId: 360400
  },
  {
    id: 360424,
    mapName: '修水县',

    mapParentId: 360400
  },
  {
    id: 360425,
    mapName: '永修县',

    mapParentId: 360400
  },
  {
    id: 360426,
    mapName: '德安县',

    mapParentId: 360400
  },
  {
    id: 360428,
    mapName: '都昌县',

    mapParentId: 360400
  },
  {
    id: 360429,
    mapName: '湖口县',

    mapParentId: 360400
  },
  {
    id: 360430,
    mapName: '彭泽县',

    mapParentId: 360400
  },
  {
    id: 360481,
    mapName: '瑞昌市',

    mapParentId: 360400
  },
  {
    id: 360482,
    mapName: '共青城市',

    mapParentId: 360400
  },
  {
    id: 360483,
    mapName: '庐山市',

    mapParentId: 360400
  },
  {
    id: 360502,
    mapName: '渝水区',

    mapParentId: 360500
  },
  {
    id: 360521,
    mapName: '分宜县',

    mapParentId: 360500
  },
  {
    id: 360602,
    mapName: '月湖区',

    mapParentId: 360600
  },
  {
    id: 360603,
    mapName: '余江区',

    mapParentId: 360600
  },
  {
    id: 360681,
    mapName: '贵溪市',

    mapParentId: 360600
  },
  {
    id: 360702,
    mapName: '章贡区',

    mapParentId: 360700
  },
  {
    id: 360703,
    mapName: '南康区',

    mapParentId: 360700
  },
  {
    id: 360704,
    mapName: '赣县区',

    mapParentId: 360700
  },
  {
    id: 360722,
    mapName: '信丰县',

    mapParentId: 360700
  },
  {
    id: 360723,
    mapName: '大余县',

    mapParentId: 360700
  },
  {
    id: 360724,
    mapName: '上犹县',

    mapParentId: 360700
  },
  {
    id: 360725,
    mapName: '崇义县',

    mapParentId: 360700
  },
  {
    id: 360726,
    mapName: '安远县',

    mapParentId: 360700
  },
  {
    id: 360727,
    mapName: '龙南县',

    mapParentId: 360700
  },
  {
    id: 360728,
    mapName: '定南县',

    mapParentId: 360700
  },
  {
    id: 360729,
    mapName: '全南县',

    mapParentId: 360700
  },
  {
    id: 360730,
    mapName: '宁都县',

    mapParentId: 360700
  },
  {
    id: 360731,
    mapName: '于都县',

    mapParentId: 360700
  },
  {
    id: 360732,
    mapName: '兴国县',

    mapParentId: 360700
  },
  {
    id: 360733,
    mapName: '会昌县',

    mapParentId: 360700
  },
  {
    id: 360734,
    mapName: '寻乌县',

    mapParentId: 360700
  },
  {
    id: 360735,
    mapName: '石城县',

    mapParentId: 360700
  },
  {
    id: 360781,
    mapName: '瑞金市',

    mapParentId: 360700
  },
  {
    id: 360802,
    mapName: '吉州区',

    mapParentId: 360800
  },
  {
    id: 360803,
    mapName: '青原区',

    mapParentId: 360800
  },
  {
    id: 360821,
    mapName: '吉安县',

    mapParentId: 360800
  },
  {
    id: 360822,
    mapName: '吉水县',

    mapParentId: 360800
  },
  {
    id: 360823,
    mapName: '峡江县',

    mapParentId: 360800
  },
  {
    id: 360824,
    mapName: '新干县',

    mapParentId: 360800
  },
  {
    id: 360825,
    mapName: '永丰县',

    mapParentId: 360800
  },
  {
    id: 360826,
    mapName: '泰和县',

    mapParentId: 360800
  },
  {
    id: 360827,
    mapName: '遂川县',

    mapParentId: 360800
  },
  {
    id: 360828,
    mapName: '万安县',

    mapParentId: 360800
  },
  {
    id: 360829,
    mapName: '安福县',

    mapParentId: 360800
  },
  {
    id: 360830,
    mapName: '永新县',

    mapParentId: 360800
  },
  {
    id: 360881,
    mapName: '井冈山市',

    mapParentId: 360800
  },
  {
    id: 360902,
    mapName: '袁州区',

    mapParentId: 360900
  },
  {
    id: 360921,
    mapName: '奉新县',

    mapParentId: 360900
  },
  {
    id: 360922,
    mapName: '万载县',

    mapParentId: 360900
  },
  {
    id: 360923,
    mapName: '上高县',

    mapParentId: 360900
  },
  {
    id: 360924,
    mapName: '宜丰县',

    mapParentId: 360900
  },
  {
    id: 360925,
    mapName: '靖安县',

    mapParentId: 360900
  },
  {
    id: 360926,
    mapName: '铜鼓县',

    mapParentId: 360900
  },
  {
    id: 360981,
    mapName: '丰城市',

    mapParentId: 360900
  },
  {
    id: 360982,
    mapName: '樟树市',

    mapParentId: 360900
  },
  {
    id: 360983,
    mapName: '高安市',

    mapParentId: 360900
  },
  {
    id: 361002,
    mapName: '临川区',

    mapParentId: 361000
  },
  {
    id: 361003,
    mapName: '东乡区',

    mapParentId: 361000
  },
  {
    id: 361021,
    mapName: '南城县',

    mapParentId: 361000
  },
  {
    id: 361022,
    mapName: '黎川县',

    mapParentId: 361000
  },
  {
    id: 361023,
    mapName: '南丰县',

    mapParentId: 361000
  },
  {
    id: 361024,
    mapName: '崇仁县',

    mapParentId: 361000
  },
  {
    id: 361025,
    mapName: '乐安县',

    mapParentId: 361000
  },
  {
    id: 361026,
    mapName: '宜黄县',

    mapParentId: 361000
  },
  {
    id: 361027,
    mapName: '金溪县',

    mapParentId: 361000
  },
  {
    id: 361028,
    mapName: '资溪县',

    mapParentId: 361000
  },
  {
    id: 361030,
    mapName: '广昌县',

    mapParentId: 361000
  },
  {
    id: 361102,
    mapName: '信州区',

    mapParentId: 361100
  },
  {
    id: 361103,
    mapName: '广丰区',

    mapParentId: 361100
  },
  {
    id: 361121,
    mapName: '上饶县',

    mapParentId: 361100
  },
  {
    id: 361123,
    mapName: '玉山县',

    mapParentId: 361100
  },
  {
    id: 361124,
    mapName: '铅山县',

    mapParentId: 361100
  },
  {
    id: 361125,
    mapName: '横峰县',

    mapParentId: 361100
  },
  {
    id: 361126,
    mapName: '弋阳县',

    mapParentId: 361100
  },
  {
    id: 361127,
    mapName: '余干县',

    mapParentId: 361100
  },
  {
    id: 361128,
    mapName: '鄱阳县',

    mapParentId: 361100
  },
  {
    id: 361129,
    mapName: '万年县',

    mapParentId: 361100
  },
  {
    id: 361130,
    mapName: '婺源县',

    mapParentId: 361100
  },
  {
    id: 361181,
    mapName: '德兴市',

    mapParentId: 361100
  },
  {
    id: 370102,
    mapName: '历下区',

    mapParentId: 370100
  },
  {
    id: 370103,
    mapName: '市中区',

    mapParentId: 370100
  },
  {
    id: 370104,
    mapName: '槐荫区',

    mapParentId: 370100
  },
  {
    id: 370105,
    mapName: '天桥区',

    mapParentId: 370100
  },
  {
    id: 370112,
    mapName: '历城区',

    mapParentId: 370100
  },
  {
    id: 370113,
    mapName: '长清区',

    mapParentId: 370100
  },
  {
    id: 370114,
    mapName: '章丘区',

    mapParentId: 370100
  },
  {
    id: 370115,
    mapName: '济阳区',

    mapParentId: 370100
  },
  {
    id: 370116,
    mapName: '莱芜区',

    mapParentId: 370100
  },
  {
    id: 370117,
    mapName: '钢城区',

    mapParentId: 370100
  },
  {
    id: 370124,
    mapName: '平阴县',

    mapParentId: 370100
  },
  {
    id: 370126,
    mapName: '商河县',

    mapParentId: 370100
  },
  {
    id: 370202,
    mapName: '市南区',

    mapParentId: 370200
  },
  {
    id: 370203,
    mapName: '市北区',

    mapParentId: 370200
  },
  {
    id: 370211,
    mapName: '黄岛区',

    mapParentId: 370200
  },
  {
    id: 370212,
    mapName: '崂山区',

    mapParentId: 370200
  },
  {
    id: 370213,
    mapName: '李沧区',

    mapParentId: 370200
  },
  {
    id: 370214,
    mapName: '城阳区',

    mapParentId: 370200
  },
  {
    id: 370215,
    mapName: '即墨区',

    mapParentId: 370200
  },
  {
    id: 370281,
    mapName: '胶州市',

    mapParentId: 370200
  },
  {
    id: 370283,
    mapName: '平度市',

    mapParentId: 370200
  },
  {
    id: 370285,
    mapName: '莱西市',

    mapParentId: 370200
  },
  {
    id: 370302,
    mapName: '淄川区',

    mapParentId: 370300
  },
  {
    id: 370303,
    mapName: '张店区',

    mapParentId: 370300
  },
  {
    id: 370304,
    mapName: '博山区',

    mapParentId: 370300
  },
  {
    id: 370305,
    mapName: '临淄区',

    mapParentId: 370300
  },
  {
    id: 370306,
    mapName: '周村区',

    mapParentId: 370300
  },
  {
    id: 370321,
    mapName: '桓台县',

    mapParentId: 370300
  },
  {
    id: 370322,
    mapName: '高青县',

    mapParentId: 370300
  },
  {
    id: 370323,
    mapName: '沂源县',

    mapParentId: 370300
  },
  {
    id: 370402,
    mapName: '市中区',

    mapParentId: 370400
  },
  {
    id: 370403,
    mapName: '薛城区',

    mapParentId: 370400
  },
  {
    id: 370404,
    mapName: '峄城区',

    mapParentId: 370400
  },
  {
    id: 370405,
    mapName: '台儿庄区',

    mapParentId: 370400
  },
  {
    id: 370406,
    mapName: '山亭区',

    mapParentId: 370400
  },
  {
    id: 370481,
    mapName: '滕州市',

    mapParentId: 370400
  },
  {
    id: 370502,
    mapName: '东营区',

    mapParentId: 370500
  },
  {
    id: 370503,
    mapName: '河口区',

    mapParentId: 370500
  },
  {
    id: 370505,
    mapName: '垦利区',

    mapParentId: 370500
  },
  {
    id: 370522,
    mapName: '利津县',

    mapParentId: 370500
  },
  {
    id: 370523,
    mapName: '广饶县',

    mapParentId: 370500
  },
  {
    id: 370602,
    mapName: '芝罘区',

    mapParentId: 370600
  },
  {
    id: 370611,
    mapName: '福山区',

    mapParentId: 370600
  },
  {
    id: 370612,
    mapName: '牟平区',

    mapParentId: 370600
  },
  {
    id: 370613,
    mapName: '莱山区',

    mapParentId: 370600
  },
  {
    id: 370634,
    mapName: '长岛县',

    mapParentId: 370600
  },
  {
    id: 370681,
    mapName: '龙口市',

    mapParentId: 370600
  },
  {
    id: 370682,
    mapName: '莱阳市',

    mapParentId: 370600
  },
  {
    id: 370683,
    mapName: '莱州市',

    mapParentId: 370600
  },
  {
    id: 370684,
    mapName: '蓬莱市',

    mapParentId: 370600
  },
  {
    id: 370685,
    mapName: '招远市',

    mapParentId: 370600
  },
  {
    id: 370686,
    mapName: '栖霞市',

    mapParentId: 370600
  },
  {
    id: 370687,
    mapName: '海阳市',

    mapParentId: 370600
  },
  {
    id: 370702,
    mapName: '潍城区',

    mapParentId: 370700
  },
  {
    id: 370703,
    mapName: '寒亭区',

    mapParentId: 370700
  },
  {
    id: 370704,
    mapName: '坊子区',

    mapParentId: 370700
  },
  {
    id: 370705,
    mapName: '奎文区',

    mapParentId: 370700
  },
  {
    id: 370724,
    mapName: '临朐县',

    mapParentId: 370700
  },
  {
    id: 370725,
    mapName: '昌乐县',

    mapParentId: 370700
  },
  {
    id: 370781,
    mapName: '青州市',

    mapParentId: 370700
  },
  {
    id: 370782,
    mapName: '诸城市',

    mapParentId: 370700
  },
  {
    id: 370783,
    mapName: '寿光市',

    mapParentId: 370700
  },
  {
    id: 370784,
    mapName: '安丘市',

    mapParentId: 370700
  },
  {
    id: 370785,
    mapName: '高密市',

    mapParentId: 370700
  },
  {
    id: 370786,
    mapName: '昌邑市',

    mapParentId: 370700
  },
  {
    id: 370811,
    mapName: '任城区',

    mapParentId: 370800
  },
  {
    id: 370812,
    mapName: '兖州区',

    mapParentId: 370800
  },
  {
    id: 370826,
    mapName: '微山县',

    mapParentId: 370800
  },
  {
    id: 370827,
    mapName: '鱼台县',

    mapParentId: 370800
  },
  {
    id: 370828,
    mapName: '金乡县',

    mapParentId: 370800
  },
  {
    id: 370829,
    mapName: '嘉祥县',

    mapParentId: 370800
  },
  {
    id: 370830,
    mapName: '汶上县',

    mapParentId: 370800
  },
  {
    id: 370831,
    mapName: '泗水县',

    mapParentId: 370800
  },
  {
    id: 370832,
    mapName: '梁山县',

    mapParentId: 370800
  },
  {
    id: 370881,
    mapName: '曲阜市',

    mapParentId: 370800
  },
  {
    id: 370883,
    mapName: '邹城市',

    mapParentId: 370800
  },
  {
    id: 370902,
    mapName: '泰山区',

    mapParentId: 370900
  },
  {
    id: 370911,
    mapName: '岱岳区',

    mapParentId: 370900
  },
  {
    id: 370921,
    mapName: '宁阳县',

    mapParentId: 370900
  },
  {
    id: 370923,
    mapName: '东平县',

    mapParentId: 370900
  },
  {
    id: 370982,
    mapName: '新泰市',

    mapParentId: 370900
  },
  {
    id: 370983,
    mapName: '肥城市',

    mapParentId: 370900
  },
  {
    id: 371002,
    mapName: '环翠区',

    mapParentId: 371000
  },
  {
    id: 371003,
    mapName: '文登区',

    mapParentId: 371000
  },
  {
    id: 371082,
    mapName: '荣成市',

    mapParentId: 371000
  },
  {
    id: 371083,
    mapName: '乳山市',

    mapParentId: 371000
  },
  {
    id: 371102,
    mapName: '东港区',

    mapParentId: 371100
  },
  {
    id: 371103,
    mapName: '岚山区',

    mapParentId: 371100
  },
  {
    id: 371121,
    mapName: '五莲县',

    mapParentId: 371100
  },
  {
    id: 371122,
    mapName: '莒县',

    mapParentId: 371100
  },
  {
    id: 371302,
    mapName: '兰山区',

    mapParentId: 371300
  },
  {
    id: 371311,
    mapName: '罗庄区',

    mapParentId: 371300
  },
  {
    id: 371312,
    mapName: '河东区',

    mapParentId: 371300
  },
  {
    id: 371321,
    mapName: '沂南县',

    mapParentId: 371300
  },
  {
    id: 371322,
    mapName: '郯城县',

    mapParentId: 371300
  },
  {
    id: 371323,
    mapName: '沂水县',

    mapParentId: 371300
  },
  {
    id: 371324,
    mapName: '兰陵县',

    mapParentId: 371300
  },
  {
    id: 371325,
    mapName: '费县',

    mapParentId: 371300
  },
  {
    id: 371326,
    mapName: '平邑县',

    mapParentId: 371300
  },
  {
    id: 371327,
    mapName: '莒南县',

    mapParentId: 371300
  },
  {
    id: 371328,
    mapName: '蒙阴县',

    mapParentId: 371300
  },
  {
    id: 371329,
    mapName: '临沭县',

    mapParentId: 371300
  },
  {
    id: 371402,
    mapName: '德城区',

    mapParentId: 371400
  },
  {
    id: 371403,
    mapName: '陵城区',

    mapParentId: 371400
  },
  {
    id: 371422,
    mapName: '宁津县',

    mapParentId: 371400
  },
  {
    id: 371423,
    mapName: '庆云县',

    mapParentId: 371400
  },
  {
    id: 371424,
    mapName: '临邑县',

    mapParentId: 371400
  },
  {
    id: 371425,
    mapName: '齐河县',

    mapParentId: 371400
  },
  {
    id: 371426,
    mapName: '平原县',

    mapParentId: 371400
  },
  {
    id: 371427,
    mapName: '夏津县',

    mapParentId: 371400
  },
  {
    id: 371428,
    mapName: '武城县',

    mapParentId: 371400
  },
  {
    id: 371481,
    mapName: '乐陵市',

    mapParentId: 371400
  },
  {
    id: 371482,
    mapName: '禹城市',

    mapParentId: 371400
  },
  {
    id: 371502,
    mapName: '东昌府区',

    mapParentId: 371500
  },
  {
    id: 371521,
    mapName: '阳谷县',

    mapParentId: 371500
  },
  {
    id: 371522,
    mapName: '莘县',

    mapParentId: 371500
  },
  {
    id: 371523,
    mapName: '茌平县',

    mapParentId: 371500
  },
  {
    id: 371524,
    mapName: '东阿县',

    mapParentId: 371500
  },
  {
    id: 371525,
    mapName: '冠县',

    mapParentId: 371500
  },
  {
    id: 371526,
    mapName: '高唐县',

    mapParentId: 371500
  },
  {
    id: 371581,
    mapName: '临清市',

    mapParentId: 371500
  },
  {
    id: 371602,
    mapName: '滨城区',

    mapParentId: 371600
  },
  {
    id: 371603,
    mapName: '沾化区',

    mapParentId: 371600
  },
  {
    id: 371621,
    mapName: '惠民县',

    mapParentId: 371600
  },
  {
    id: 371622,
    mapName: '阳信县',

    mapParentId: 371600
  },
  {
    id: 371623,
    mapName: '无棣县',

    mapParentId: 371600
  },
  {
    id: 371625,
    mapName: '博兴县',

    mapParentId: 371600
  },
  {
    id: 371681,
    mapName: '邹平市',

    mapParentId: 371600
  },
  {
    id: 371702,
    mapName: '牡丹区',

    mapParentId: 371700
  },
  {
    id: 371703,
    mapName: '定陶区',

    mapParentId: 371700
  },
  {
    id: 371721,
    mapName: '曹县',

    mapParentId: 371700
  },
  {
    id: 371722,
    mapName: '单县',

    mapParentId: 371700
  },
  {
    id: 371723,
    mapName: '成武县',

    mapParentId: 371700
  },
  {
    id: 371724,
    mapName: '巨野县',

    mapParentId: 371700
  },
  {
    id: 371725,
    mapName: '郓城县',

    mapParentId: 371700
  },
  {
    id: 371726,
    mapName: '鄄城县',

    mapParentId: 371700
  },
  {
    id: 371728,
    mapName: '东明县',

    mapParentId: 371700
  },
  {
    id: 410102,
    mapName: '中原区',

    mapParentId: 410100
  },
  {
    id: 410103,
    mapName: '二七区',

    mapParentId: 410100
  },
  {
    id: 410104,
    mapName: '管城回族区',

    mapParentId: 410100
  },
  {
    id: 410105,
    mapName: '金水区',

    mapParentId: 410100
  },
  {
    id: 410106,
    mapName: '上街区',

    mapParentId: 410100
  },
  {
    id: 410108,
    mapName: '惠济区',

    mapParentId: 410100
  },
  {
    id: 410122,
    mapName: '中牟县',

    mapParentId: 410100
  },
  {
    id: 410181,
    mapName: '巩义市',

    mapParentId: 410100
  },
  {
    id: 410182,
    mapName: '荥阳市',

    mapParentId: 410100
  },
  {
    id: 410183,
    mapName: '新密市',

    mapParentId: 410100
  },
  {
    id: 410184,
    mapName: '新郑市',

    mapParentId: 410100
  },
  {
    id: 410185,
    mapName: '登封市',

    mapParentId: 410100
  },
  {
    id: 410202,
    mapName: '龙亭区',

    mapParentId: 410200
  },
  {
    id: 410203,
    mapName: '顺河回族区',

    mapParentId: 410200
  },
  {
    id: 410204,
    mapName: '鼓楼区',

    mapParentId: 410200
  },
  {
    id: 410205,
    mapName: '禹王台区',

    mapParentId: 410200
  },
  {
    id: 410212,
    mapName: '祥符区',

    mapParentId: 410200
  },
  {
    id: 410221,
    mapName: '杞县',

    mapParentId: 410200
  },
  {
    id: 410222,
    mapName: '通许县',

    mapParentId: 410200
  },
  {
    id: 410223,
    mapName: '尉氏县',

    mapParentId: 410200
  },
  {
    id: 410225,
    mapName: '兰考县',

    mapParentId: 410200
  },
  {
    id: 410302,
    mapName: '老城区',

    mapParentId: 410300
  },
  {
    id: 410303,
    mapName: '西工区',

    mapParentId: 410300
  },
  {
    id: 410304,
    mapName: '瀍河回族区',

    mapParentId: 410300
  },
  {
    id: 410305,
    mapName: '涧西区',

    mapParentId: 410300
  },
  {
    id: 410306,
    mapName: '吉利区',

    mapParentId: 410300
  },
  {
    id: 410311,
    mapName: '洛龙区',

    mapParentId: 410300
  },
  {
    id: 410322,
    mapName: '孟津县',

    mapParentId: 410300
  },
  {
    id: 410323,
    mapName: '新安县',

    mapParentId: 410300
  },
  {
    id: 410324,
    mapName: '栾川县',

    mapParentId: 410300
  },
  {
    id: 410325,
    mapName: '嵩县',

    mapParentId: 410300
  },
  {
    id: 410326,
    mapName: '汝阳县',

    mapParentId: 410300
  },
  {
    id: 410327,
    mapName: '宜阳县',

    mapParentId: 410300
  },
  {
    id: 410328,
    mapName: '洛宁县',

    mapParentId: 410300
  },
  {
    id: 410329,
    mapName: '伊川县',

    mapParentId: 410300
  },
  {
    id: 410381,
    mapName: '偃师市',

    mapParentId: 410300
  },
  {
    id: 410402,
    mapName: '新华区',

    mapParentId: 410400
  },
  {
    id: 410403,
    mapName: '卫东区',

    mapParentId: 410400
  },
  {
    id: 410404,
    mapName: '石龙区',

    mapParentId: 410400
  },
  {
    id: 410411,
    mapName: '湛河区',

    mapParentId: 410400
  },
  {
    id: 410421,
    mapName: '宝丰县',

    mapParentId: 410400
  },
  {
    id: 410422,
    mapName: '叶县',

    mapParentId: 410400
  },
  {
    id: 410423,
    mapName: '鲁山县',

    mapParentId: 410400
  },
  {
    id: 410425,
    mapName: '郏县',

    mapParentId: 410400
  },
  {
    id: 410481,
    mapName: '舞钢市',

    mapParentId: 410400
  },
  {
    id: 410482,
    mapName: '汝州市',

    mapParentId: 410400
  },
  {
    id: 410502,
    mapName: '文峰区',

    mapParentId: 410500
  },
  {
    id: 410503,
    mapName: '北关区',

    mapParentId: 410500
  },
  {
    id: 410505,
    mapName: '殷都区',

    mapParentId: 410500
  },
  {
    id: 410506,
    mapName: '龙安区',

    mapParentId: 410500
  },
  {
    id: 410522,
    mapName: '安阳县',

    mapParentId: 410500
  },
  {
    id: 410523,
    mapName: '汤阴县',

    mapParentId: 410500
  },
  {
    id: 410526,
    mapName: '滑县',

    mapParentId: 410500
  },
  {
    id: 410527,
    mapName: '内黄县',

    mapParentId: 410500
  },
  {
    id: 410581,
    mapName: '林州市',

    mapParentId: 410500
  },
  {
    id: 410602,
    mapName: '鹤山区',

    mapParentId: 410600
  },
  {
    id: 410603,
    mapName: '山城区',

    mapParentId: 410600
  },
  {
    id: 410611,
    mapName: '淇滨区',

    mapParentId: 410600
  },
  {
    id: 410621,
    mapName: '浚县',

    mapParentId: 410600
  },
  {
    id: 410622,
    mapName: '淇县',

    mapParentId: 410600
  },
  {
    id: 410702,
    mapName: '红旗区',

    mapParentId: 410700
  },
  {
    id: 410703,
    mapName: '卫滨区',

    mapParentId: 410700
  },
  {
    id: 410704,
    mapName: '凤泉区',

    mapParentId: 410700
  },
  {
    id: 410711,
    mapName: '牧野区',

    mapParentId: 410700
  },
  {
    id: 410721,
    mapName: '新乡县',

    mapParentId: 410700
  },
  {
    id: 410724,
    mapName: '获嘉县',

    mapParentId: 410700
  },
  {
    id: 410725,
    mapName: '原阳县',

    mapParentId: 410700
  },
  {
    id: 410726,
    mapName: '延津县',

    mapParentId: 410700
  },
  {
    id: 410727,
    mapName: '封丘县',

    mapParentId: 410700
  },
  {
    id: 410728,
    mapName: '长垣县',

    mapParentId: 410700
  },
  {
    id: 410781,
    mapName: '卫辉市',

    mapParentId: 410700
  },
  {
    id: 410782,
    mapName: '辉县市',

    mapParentId: 410700
  },
  {
    id: 410802,
    mapName: '解放区',

    mapParentId: 410800
  },
  {
    id: 410803,
    mapName: '中站区',

    mapParentId: 410800
  },
  {
    id: 410804,
    mapName: '马村区',

    mapParentId: 410800
  },
  {
    id: 410811,
    mapName: '山阳区',

    mapParentId: 410800
  },
  {
    id: 410821,
    mapName: '修武县',

    mapParentId: 410800
  },
  {
    id: 410822,
    mapName: '博爱县',

    mapParentId: 410800
  },
  {
    id: 410823,
    mapName: '武陟县',

    mapParentId: 410800
  },
  {
    id: 410825,
    mapName: '温县',

    mapParentId: 410800
  },
  {
    id: 410882,
    mapName: '沁阳市',

    mapParentId: 410800
  },
  {
    id: 410883,
    mapName: '孟州市',

    mapParentId: 410800
  },
  {
    id: 410902,
    mapName: '华龙区',

    mapParentId: 410900
  },
  {
    id: 410922,
    mapName: '清丰县',

    mapParentId: 410900
  },
  {
    id: 410923,
    mapName: '南乐县',

    mapParentId: 410900
  },
  {
    id: 410926,
    mapName: '范县',

    mapParentId: 410900
  },
  {
    id: 410927,
    mapName: '台前县',

    mapParentId: 410900
  },
  {
    id: 410928,
    mapName: '濮阳县',

    mapParentId: 410900
  },
  {
    id: 411002,
    mapName: '魏都区',

    mapParentId: 411000
  },
  {
    id: 411003,
    mapName: '建安区',

    mapParentId: 411000
  },
  {
    id: 411024,
    mapName: '鄢陵县',

    mapParentId: 411000
  },
  {
    id: 411025,
    mapName: '襄城县',

    mapParentId: 411000
  },
  {
    id: 411081,
    mapName: '禹州市',

    mapParentId: 411000
  },
  {
    id: 411082,
    mapName: '长葛市',

    mapParentId: 411000
  },
  {
    id: 411102,
    mapName: '源汇区',

    mapParentId: 411100
  },
  {
    id: 411103,
    mapName: '郾城区',

    mapParentId: 411100
  },
  {
    id: 411104,
    mapName: '召陵区',

    mapParentId: 411100
  },
  {
    id: 411121,
    mapName: '舞阳县',

    mapParentId: 411100
  },
  {
    id: 411122,
    mapName: '临颍县',

    mapParentId: 411100
  },
  {
    id: 411202,
    mapName: '湖滨区',

    mapParentId: 411200
  },
  {
    id: 411203,
    mapName: '陕州区',

    mapParentId: 411200
  },
  {
    id: 411221,
    mapName: '渑池县',

    mapParentId: 411200
  },
  {
    id: 411224,
    mapName: '卢氏县',

    mapParentId: 411200
  },
  {
    id: 411281,
    mapName: '义马市',

    mapParentId: 411200
  },
  {
    id: 411282,
    mapName: '灵宝市',

    mapParentId: 411200
  },
  {
    id: 411302,
    mapName: '宛城区',

    mapParentId: 411300
  },
  {
    id: 411303,
    mapName: '卧龙区',

    mapParentId: 411300
  },
  {
    id: 411321,
    mapName: '南召县',

    mapParentId: 411300
  },
  {
    id: 411322,
    mapName: '方城县',

    mapParentId: 411300
  },
  {
    id: 411323,
    mapName: '西峡县',

    mapParentId: 411300
  },
  {
    id: 411324,
    mapName: '镇平县',

    mapParentId: 411300
  },
  {
    id: 411325,
    mapName: '内乡县',

    mapParentId: 411300
  },
  {
    id: 411326,
    mapName: '淅川县',

    mapParentId: 411300
  },
  {
    id: 411327,
    mapName: '社旗县',

    mapParentId: 411300
  },
  {
    id: 411328,
    mapName: '唐河县',

    mapParentId: 411300
  },
  {
    id: 411329,
    mapName: '新野县',

    mapParentId: 411300
  },
  {
    id: 411330,
    mapName: '桐柏县',

    mapParentId: 411300
  },
  {
    id: 411381,
    mapName: '邓州市',

    mapParentId: 411300
  },
  {
    id: 411402,
    mapName: '梁园区',

    mapParentId: 411400
  },
  {
    id: 411403,
    mapName: '睢阳区',

    mapParentId: 411400
  },
  {
    id: 411421,
    mapName: '民权县',

    mapParentId: 411400
  },
  {
    id: 411422,
    mapName: '睢县',

    mapParentId: 411400
  },
  {
    id: 411423,
    mapName: '宁陵县',

    mapParentId: 411400
  },
  {
    id: 411424,
    mapName: '柘城县',

    mapParentId: 411400
  },
  {
    id: 411425,
    mapName: '虞城县',

    mapParentId: 411400
  },
  {
    id: 411426,
    mapName: '夏邑县',

    mapParentId: 411400
  },
  {
    id: 411481,
    mapName: '永城市',

    mapParentId: 411400
  },
  {
    id: 411502,
    mapName: '浉河区',

    mapParentId: 411500
  },
  {
    id: 411503,
    mapName: '平桥区',

    mapParentId: 411500
  },
  {
    id: 411521,
    mapName: '罗山县',

    mapParentId: 411500
  },
  {
    id: 411522,
    mapName: '光山县',

    mapParentId: 411500
  },
  {
    id: 411523,
    mapName: '新县',

    mapParentId: 411500
  },
  {
    id: 411524,
    mapName: '商城县',

    mapParentId: 411500
  },
  {
    id: 411525,
    mapName: '固始县',

    mapParentId: 411500
  },
  {
    id: 411526,
    mapName: '潢川县',

    mapParentId: 411500
  },
  {
    id: 411527,
    mapName: '淮滨县',

    mapParentId: 411500
  },
  {
    id: 411528,
    mapName: '息县',

    mapParentId: 411500
  },
  {
    id: 411602,
    mapName: '川汇区',

    mapParentId: 411600
  },
  {
    id: 411621,
    mapName: '扶沟县',

    mapParentId: 411600
  },
  {
    id: 411622,
    mapName: '西华县',

    mapParentId: 411600
  },
  {
    id: 411623,
    mapName: '商水县',

    mapParentId: 411600
  },
  {
    id: 411624,
    mapName: '沈丘县',

    mapParentId: 411600
  },
  {
    id: 411625,
    mapName: '郸城县',

    mapParentId: 411600
  },
  {
    id: 411626,
    mapName: '淮阳县',

    mapParentId: 411600
  },
  {
    id: 411627,
    mapName: '太康县',

    mapParentId: 411600
  },
  {
    id: 411628,
    mapName: '鹿邑县',

    mapParentId: 411600
  },
  {
    id: 411681,
    mapName: '项城市',

    mapParentId: 411600
  },
  {
    id: 411702,
    mapName: '驿城区',

    mapParentId: 411700
  },
  {
    id: 411721,
    mapName: '西平县',

    mapParentId: 411700
  },
  {
    id: 411722,
    mapName: '上蔡县',

    mapParentId: 411700
  },
  {
    id: 411723,
    mapName: '平舆县',

    mapParentId: 411700
  },
  {
    id: 411724,
    mapName: '正阳县',

    mapParentId: 411700
  },
  {
    id: 411725,
    mapName: '确山县',

    mapParentId: 411700
  },
  {
    id: 411726,
    mapName: '泌阳县',

    mapParentId: 411700
  },
  {
    id: 411727,
    mapName: '汝南县',

    mapParentId: 411700
  },
  {
    id: 411728,
    mapName: '遂平县',

    mapParentId: 411700
  },
  {
    id: 411729,
    mapName: '新蔡县',

    mapParentId: 411700
  },
  {
    id: 420102,
    mapName: '江岸区',

    mapParentId: 420100
  },
  {
    id: 420103,
    mapName: '江汉区',

    mapParentId: 420100
  },
  {
    id: 420104,
    mapName: '硚口区',

    mapParentId: 420100
  },
  {
    id: 420105,
    mapName: '汉阳区',

    mapParentId: 420100
  },
  {
    id: 420106,
    mapName: '武昌区',

    mapParentId: 420100
  },
  {
    id: 420107,
    mapName: '青山区',

    mapParentId: 420100
  },
  {
    id: 420111,
    mapName: '洪山区',

    mapParentId: 420100
  },
  {
    id: 420112,
    mapName: '东西湖区',

    mapParentId: 420100
  },
  {
    id: 420113,
    mapName: '汉南区',

    mapParentId: 420100
  },
  {
    id: 420114,
    mapName: '蔡甸区',

    mapParentId: 420100
  },
  {
    id: 420115,
    mapName: '江夏区',

    mapParentId: 420100
  },
  {
    id: 420116,
    mapName: '黄陂区',

    mapParentId: 420100
  },
  {
    id: 420117,
    mapName: '新洲区',

    mapParentId: 420100
  },
  {
    id: 420202,
    mapName: '黄石港区',

    mapParentId: 420200
  },
  {
    id: 420203,
    mapName: '西塞山区',

    mapParentId: 420200
  },
  {
    id: 420204,
    mapName: '下陆区',

    mapParentId: 420200
  },
  {
    id: 420205,
    mapName: '铁山区',

    mapParentId: 420200
  },
  {
    id: 420222,
    mapName: '阳新县',

    mapParentId: 420200
  },
  {
    id: 420281,
    mapName: '大冶市',

    mapParentId: 420200
  },
  {
    id: 420302,
    mapName: '茅箭区',

    mapParentId: 420300
  },
  {
    id: 420303,
    mapName: '张湾区',

    mapParentId: 420300
  },
  {
    id: 420304,
    mapName: '郧阳区',

    mapParentId: 420300
  },
  {
    id: 420322,
    mapName: '郧西县',

    mapParentId: 420300
  },
  {
    id: 420323,
    mapName: '竹山县',

    mapParentId: 420300
  },
  {
    id: 420324,
    mapName: '竹溪县',

    mapParentId: 420300
  },
  {
    id: 420325,
    mapName: '房县',

    mapParentId: 420300
  },
  {
    id: 420381,
    mapName: '丹江口市',

    mapParentId: 420300
  },
  {
    id: 420502,
    mapName: '西陵区',

    mapParentId: 420500
  },
  {
    id: 420503,
    mapName: '伍家岗区',

    mapParentId: 420500
  },
  {
    id: 420504,
    mapName: '点军区',

    mapParentId: 420500
  },
  {
    id: 420505,
    mapName: '猇亭区',

    mapParentId: 420500
  },
  {
    id: 420506,
    mapName: '夷陵区',

    mapParentId: 420500
  },
  {
    id: 420525,
    mapName: '远安县',

    mapParentId: 420500
  },
  {
    id: 420526,
    mapName: '兴山县',

    mapParentId: 420500
  },
  {
    id: 420527,
    mapName: '秭归县',

    mapParentId: 420500
  },
  {
    id: 420528,
    mapName: '长阳土家族自治县',

    mapParentId: 420500
  },
  {
    id: 420529,
    mapName: '五峰土家族自治县',

    mapParentId: 420500
  },
  {
    id: 420581,
    mapName: '宜都市',

    mapParentId: 420500
  },
  {
    id: 420582,
    mapName: '当阳市',

    mapParentId: 420500
  },
  {
    id: 420583,
    mapName: '枝江市',

    mapParentId: 420500
  },
  {
    id: 420602,
    mapName: '襄城区',

    mapParentId: 420600
  },
  {
    id: 420606,
    mapName: '樊城区',

    mapParentId: 420600
  },
  {
    id: 420607,
    mapName: '襄州区',

    mapParentId: 420600
  },
  {
    id: 420624,
    mapName: '南漳县',

    mapParentId: 420600
  },
  {
    id: 420625,
    mapName: '谷城县',

    mapParentId: 420600
  },
  {
    id: 420626,
    mapName: '保康县',

    mapParentId: 420600
  },
  {
    id: 420682,
    mapName: '老河口市',

    mapParentId: 420600
  },
  {
    id: 420683,
    mapName: '枣阳市',

    mapParentId: 420600
  },
  {
    id: 420684,
    mapName: '宜城市',

    mapParentId: 420600
  },
  {
    id: 420702,
    mapName: '梁子湖区',

    mapParentId: 420700
  },
  {
    id: 420703,
    mapName: '华容区',

    mapParentId: 420700
  },
  {
    id: 420704,
    mapName: '鄂城区',

    mapParentId: 420700
  },
  {
    id: 420802,
    mapName: '东宝区',

    mapParentId: 420800
  },
  {
    id: 420804,
    mapName: '掇刀区',

    mapParentId: 420800
  },
  {
    id: 420822,
    mapName: '沙洋县',

    mapParentId: 420800
  },
  {
    id: 420881,
    mapName: '钟祥市',

    mapParentId: 420800
  },
  {
    id: 420882,
    mapName: '京山市',

    mapParentId: 420800
  },
  {
    id: 420902,
    mapName: '孝南区',

    mapParentId: 420900
  },
  {
    id: 420921,
    mapName: '孝昌县',

    mapParentId: 420900
  },
  {
    id: 420922,
    mapName: '大悟县',

    mapParentId: 420900
  },
  {
    id: 420923,
    mapName: '云梦县',

    mapParentId: 420900
  },
  {
    id: 420981,
    mapName: '应城市',

    mapParentId: 420900
  },
  {
    id: 420982,
    mapName: '安陆市',

    mapParentId: 420900
  },
  {
    id: 420984,
    mapName: '汉川市',

    mapParentId: 420900
  },
  {
    id: 421002,
    mapName: '沙市区',

    mapParentId: 421000
  },
  {
    id: 421003,
    mapName: '荆州区',

    mapParentId: 421000
  },
  {
    id: 421022,
    mapName: '公安县',

    mapParentId: 421000
  },
  {
    id: 421023,
    mapName: '监利县',

    mapParentId: 421000
  },
  {
    id: 421024,
    mapName: '江陵县',

    mapParentId: 421000
  },
  {
    id: 421081,
    mapName: '石首市',

    mapParentId: 421000
  },
  {
    id: 421083,
    mapName: '洪湖市',

    mapParentId: 421000
  },
  {
    id: 421087,
    mapName: '松滋市',

    mapParentId: 421000
  },
  {
    id: 421102,
    mapName: '黄州区',

    mapParentId: 421100
  },
  {
    id: 421121,
    mapName: '团风县',

    mapParentId: 421100
  },
  {
    id: 421122,
    mapName: '红安县',

    mapParentId: 421100
  },
  {
    id: 421123,
    mapName: '罗田县',

    mapParentId: 421100
  },
  {
    id: 421124,
    mapName: '英山县',

    mapParentId: 421100
  },
  {
    id: 421125,
    mapName: '浠水县',

    mapParentId: 421100
  },
  {
    id: 421126,
    mapName: '蕲春县',

    mapParentId: 421100
  },
  {
    id: 421127,
    mapName: '黄梅县',

    mapParentId: 421100
  },
  {
    id: 421181,
    mapName: '麻城市',

    mapParentId: 421100
  },
  {
    id: 421182,
    mapName: '武穴市',

    mapParentId: 421100
  },
  {
    id: 421202,
    mapName: '咸安区',

    mapParentId: 421200
  },
  {
    id: 421221,
    mapName: '嘉鱼县',

    mapParentId: 421200
  },
  {
    id: 421222,
    mapName: '通城县',

    mapParentId: 421200
  },
  {
    id: 421223,
    mapName: '崇阳县',

    mapParentId: 421200
  },
  {
    id: 421224,
    mapName: '通山县',

    mapParentId: 421200
  },
  {
    id: 421281,
    mapName: '赤壁市',

    mapParentId: 421200
  },
  {
    id: 421303,
    mapName: '曾都区',

    mapParentId: 421300
  },
  {
    id: 421321,
    mapName: '随县',

    mapParentId: 421300
  },
  {
    id: 421381,
    mapName: '广水市',

    mapParentId: 421300
  },
  {
    id: 422801,
    mapName: '恩施市',

    mapParentId: 422800
  },
  {
    id: 422802,
    mapName: '利川市',

    mapParentId: 422800
  },
  {
    id: 422822,
    mapName: '建始县',

    mapParentId: 422800
  },
  {
    id: 422823,
    mapName: '巴东县',

    mapParentId: 422800
  },
  {
    id: 422825,
    mapName: '宣恩县',

    mapParentId: 422800
  },
  {
    id: 422826,
    mapName: '咸丰县',

    mapParentId: 422800
  },
  {
    id: 422827,
    mapName: '来凤县',

    mapParentId: 422800
  },
  {
    id: 422828,
    mapName: '鹤峰县',

    mapParentId: 422800
  },
  {
    id: 430102,
    mapName: '芙蓉区',

    mapParentId: 430100
  },
  {
    id: 430103,
    mapName: '天心区',

    mapParentId: 430100
  },
  {
    id: 430104,
    mapName: '岳麓区',

    mapParentId: 430100
  },
  {
    id: 430105,
    mapName: '开福区',

    mapParentId: 430100
  },
  {
    id: 430111,
    mapName: '雨花区',

    mapParentId: 430100
  },
  {
    id: 430112,
    mapName: '望城区',

    mapParentId: 430100
  },
  {
    id: 430121,
    mapName: '长沙县',

    mapParentId: 430100
  },
  {
    id: 430181,
    mapName: '浏阳市',

    mapParentId: 430100
  },
  {
    id: 430182,
    mapName: '宁乡市',

    mapParentId: 430100
  },
  {
    id: 430202,
    mapName: '荷塘区',

    mapParentId: 430200
  },
  {
    id: 430203,
    mapName: '芦淞区',

    mapParentId: 430200
  },
  {
    id: 430204,
    mapName: '石峰区',

    mapParentId: 430200
  },
  {
    id: 430211,
    mapName: '天元区',

    mapParentId: 430200
  },
  {
    id: 430212,
    mapName: '渌口区',

    mapParentId: 430200
  },
  {
    id: 430223,
    mapName: '攸县',

    mapParentId: 430200
  },
  {
    id: 430224,
    mapName: '茶陵县',

    mapParentId: 430200
  },
  {
    id: 430225,
    mapName: '炎陵县',

    mapParentId: 430200
  },
  {
    id: 430281,
    mapName: '醴陵市',

    mapParentId: 430200
  },
  {
    id: 430302,
    mapName: '雨湖区',

    mapParentId: 430300
  },
  {
    id: 430304,
    mapName: '岳塘区',

    mapParentId: 430300
  },
  {
    id: 430321,
    mapName: '湘潭县',

    mapParentId: 430300
  },
  {
    id: 430381,
    mapName: '湘乡市',

    mapParentId: 430300
  },
  {
    id: 430382,
    mapName: '韶山市',

    mapParentId: 430300
  },
  {
    id: 430405,
    mapName: '珠晖区',

    mapParentId: 430400
  },
  {
    id: 430406,
    mapName: '雁峰区',

    mapParentId: 430400
  },
  {
    id: 430407,
    mapName: '石鼓区',

    mapParentId: 430400
  },
  {
    id: 430408,
    mapName: '蒸湘区',

    mapParentId: 430400
  },
  {
    id: 430412,
    mapName: '南岳区',

    mapParentId: 430400
  },
  {
    id: 430421,
    mapName: '衡阳县',

    mapParentId: 430400
  },
  {
    id: 430422,
    mapName: '衡南县',

    mapParentId: 430400
  },
  {
    id: 430423,
    mapName: '衡山县',

    mapParentId: 430400
  },
  {
    id: 430424,
    mapName: '衡东县',

    mapParentId: 430400
  },
  {
    id: 430426,
    mapName: '祁东县',

    mapParentId: 430400
  },
  {
    id: 430481,
    mapName: '耒阳市',

    mapParentId: 430400
  },
  {
    id: 430482,
    mapName: '常宁市',

    mapParentId: 430400
  },
  {
    id: 430502,
    mapName: '双清区',

    mapParentId: 430500
  },
  {
    id: 430503,
    mapName: '大祥区',

    mapParentId: 430500
  },
  {
    id: 430511,
    mapName: '北塔区',

    mapParentId: 430500
  },
  {
    id: 430521,
    mapName: '邵东县',

    mapParentId: 430500
  },
  {
    id: 430522,
    mapName: '新邵县',

    mapParentId: 430500
  },
  {
    id: 430523,
    mapName: '邵阳县',

    mapParentId: 430500
  },
  {
    id: 430524,
    mapName: '隆回县',

    mapParentId: 430500
  },
  {
    id: 430525,
    mapName: '洞口县',

    mapParentId: 430500
  },
  {
    id: 430527,
    mapName: '绥宁县',

    mapParentId: 430500
  },
  {
    id: 430528,
    mapName: '新宁县',

    mapParentId: 430500
  },
  {
    id: 430529,
    mapName: '城步苗族自治县',

    mapParentId: 430500
  },
  {
    id: 430581,
    mapName: '武冈市',

    mapParentId: 430500
  },
  {
    id: 430602,
    mapName: '岳阳楼区',

    mapParentId: 430600
  },
  {
    id: 430603,
    mapName: '云溪区',

    mapParentId: 430600
  },
  {
    id: 430611,
    mapName: '君山区',

    mapParentId: 430600
  },
  {
    id: 430621,
    mapName: '岳阳县',

    mapParentId: 430600
  },
  {
    id: 430623,
    mapName: '华容县',

    mapParentId: 430600
  },
  {
    id: 430624,
    mapName: '湘阴县',

    mapParentId: 430600
  },
  {
    id: 430626,
    mapName: '平江县',

    mapParentId: 430600
  },
  {
    id: 430681,
    mapName: '汨罗市',

    mapParentId: 430600
  },
  {
    id: 430682,
    mapName: '临湘市',

    mapParentId: 430600
  },
  {
    id: 430702,
    mapName: '武陵区',

    mapParentId: 430700
  },
  {
    id: 430703,
    mapName: '鼎城区',

    mapParentId: 430700
  },
  {
    id: 430721,
    mapName: '安乡县',

    mapParentId: 430700
  },
  {
    id: 430722,
    mapName: '汉寿县',

    mapParentId: 430700
  },
  {
    id: 430723,
    mapName: '澧县',

    mapParentId: 430700
  },
  {
    id: 430724,
    mapName: '临澧县',

    mapParentId: 430700
  },
  {
    id: 430725,
    mapName: '桃源县',

    mapParentId: 430700
  },
  {
    id: 430726,
    mapName: '石门县',

    mapParentId: 430700
  },
  {
    id: 430781,
    mapName: '津市市',

    mapParentId: 430700
  },
  {
    id: 430802,
    mapName: '永定区',

    mapParentId: 430800
  },
  {
    id: 430811,
    mapName: '武陵源区',

    mapParentId: 430800
  },
  {
    id: 430821,
    mapName: '慈利县',

    mapParentId: 430800
  },
  {
    id: 430822,
    mapName: '桑植县',

    mapParentId: 430800
  },
  {
    id: 430902,
    mapName: '资阳区',

    mapParentId: 430900
  },
  {
    id: 430903,
    mapName: '赫山区',

    mapParentId: 430900
  },
  {
    id: 430921,
    mapName: '南县',

    mapParentId: 430900
  },
  {
    id: 430922,
    mapName: '桃江县',

    mapParentId: 430900
  },
  {
    id: 430923,
    mapName: '安化县',

    mapParentId: 430900
  },
  {
    id: 430981,
    mapName: '沅江市',

    mapParentId: 430900
  },
  {
    id: 431002,
    mapName: '北湖区',

    mapParentId: 431000
  },
  {
    id: 431003,
    mapName: '苏仙区',

    mapParentId: 431000
  },
  {
    id: 431021,
    mapName: '桂阳县',

    mapParentId: 431000
  },
  {
    id: 431022,
    mapName: '宜章县',

    mapParentId: 431000
  },
  {
    id: 431023,
    mapName: '永兴县',

    mapParentId: 431000
  },
  {
    id: 431024,
    mapName: '嘉禾县',

    mapParentId: 431000
  },
  {
    id: 431025,
    mapName: '临武县',

    mapParentId: 431000
  },
  {
    id: 431026,
    mapName: '汝城县',

    mapParentId: 431000
  },
  {
    id: 431027,
    mapName: '桂东县',

    mapParentId: 431000
  },
  {
    id: 431028,
    mapName: '安仁县',

    mapParentId: 431000
  },
  {
    id: 431081,
    mapName: '资兴市',

    mapParentId: 431000
  },
  {
    id: 431102,
    mapName: '零陵区',

    mapParentId: 431100
  },
  {
    id: 431103,
    mapName: '冷水滩区',

    mapParentId: 431100
  },
  {
    id: 431121,
    mapName: '祁阳县',

    mapParentId: 431100
  },
  {
    id: 431122,
    mapName: '东安县',

    mapParentId: 431100
  },
  {
    id: 431123,
    mapName: '双牌县',

    mapParentId: 431100
  },
  {
    id: 431124,
    mapName: '道县',

    mapParentId: 431100
  },
  {
    id: 431125,
    mapName: '江永县',

    mapParentId: 431100
  },
  {
    id: 431126,
    mapName: '宁远县',

    mapParentId: 431100
  },
  {
    id: 431127,
    mapName: '蓝山县',

    mapParentId: 431100
  },
  {
    id: 431128,
    mapName: '新田县',

    mapParentId: 431100
  },
  {
    id: 431129,
    mapName: '江华瑶族自治县',

    mapParentId: 431100
  },
  {
    id: 431202,
    mapName: '鹤城区',

    mapParentId: 431200
  },
  {
    id: 431221,
    mapName: '中方县',

    mapParentId: 431200
  },
  {
    id: 431222,
    mapName: '沅陵县',

    mapParentId: 431200
  },
  {
    id: 431223,
    mapName: '辰溪县',

    mapParentId: 431200
  },
  {
    id: 431224,
    mapName: '溆浦县',

    mapParentId: 431200
  },
  {
    id: 431225,
    mapName: '会同县',

    mapParentId: 431200
  },
  {
    id: 431226,
    mapName: '麻阳苗族自治县',

    mapParentId: 431200
  },
  {
    id: 431227,
    mapName: '新晃侗族自治县',

    mapParentId: 431200
  },
  {
    id: 431228,
    mapName: '芷江侗族自治县',

    mapParentId: 431200
  },
  {
    id: 431229,
    mapName: '靖州苗族侗族自治县',

    mapParentId: 431200
  },
  {
    id: 431230,
    mapName: '通道侗族自治县',

    mapParentId: 431200
  },
  {
    id: 431281,
    mapName: '洪江市',

    mapParentId: 431200
  },
  {
    id: 431302,
    mapName: '娄星区',

    mapParentId: 431300
  },
  {
    id: 431321,
    mapName: '双峰县',

    mapParentId: 431300
  },
  {
    id: 431322,
    mapName: '新化县',

    mapParentId: 431300
  },
  {
    id: 431381,
    mapName: '冷水江市',

    mapParentId: 431300
  },
  {
    id: 431382,
    mapName: '涟源市',

    mapParentId: 431300
  },
  {
    id: 433101,
    mapName: '吉首市',

    mapParentId: 433100
  },
  {
    id: 433122,
    mapName: '泸溪县',

    mapParentId: 433100
  },
  {
    id: 433123,
    mapName: '凤凰县',

    mapParentId: 433100
  },
  {
    id: 433124,
    mapName: '花垣县',

    mapParentId: 433100
  },
  {
    id: 433125,
    mapName: '保靖县',

    mapParentId: 433100
  },
  {
    id: 433126,
    mapName: '古丈县',

    mapParentId: 433100
  },
  {
    id: 433127,
    mapName: '永顺县',

    mapParentId: 433100
  },
  {
    id: 433130,
    mapName: '龙山县',

    mapParentId: 433100
  },
  {
    id: 440103,
    mapName: '荔湾区',

    mapParentId: 440100
  },
  {
    id: 440104,
    mapName: '越秀区',

    mapParentId: 440100
  },
  {
    id: 440105,
    mapName: '海珠区',

    mapParentId: 440100
  },
  {
    id: 440106,
    mapName: '天河区',

    mapParentId: 440100
  },
  {
    id: 440111,
    mapName: '白云区',

    mapParentId: 440100
  },
  {
    id: 440112,
    mapName: '黄埔区',

    mapParentId: 440100
  },
  {
    id: 440113,
    mapName: '番禺区',

    mapParentId: 440100
  },
  {
    id: 440114,
    mapName: '花都区',

    mapParentId: 440100
  },
  {
    id: 440115,
    mapName: '南沙区',

    mapParentId: 440100
  },
  {
    id: 440117,
    mapName: '从化区',

    mapParentId: 440100
  },
  {
    id: 440118,
    mapName: '增城区',

    mapParentId: 440100
  },
  {
    id: 440203,
    mapName: '武江区',

    mapParentId: 440200
  },
  {
    id: 440204,
    mapName: '浈江区',

    mapParentId: 440200
  },
  {
    id: 440205,
    mapName: '曲江区',

    mapParentId: 440200
  },
  {
    id: 440222,
    mapName: '始兴县',

    mapParentId: 440200
  },
  {
    id: 440224,
    mapName: '仁化县',

    mapParentId: 440200
  },
  {
    id: 440229,
    mapName: '翁源县',

    mapParentId: 440200
  },
  {
    id: 440232,
    mapName: '乳源瑶族自治县',

    mapParentId: 440200
  },
  {
    id: 440233,
    mapName: '新丰县',

    mapParentId: 440200
  },
  {
    id: 440281,
    mapName: '乐昌市',

    mapParentId: 440200
  },
  {
    id: 440282,
    mapName: '南雄市',

    mapParentId: 440200
  },
  {
    id: 440303,
    mapName: '罗湖区',

    mapParentId: 440300
  },
  {
    id: 440304,
    mapName: '福田区',

    mapParentId: 440300
  },
  {
    id: 440305,
    mapName: '南山区',

    mapParentId: 440300
  },
  {
    id: 440306,
    mapName: '宝安区',

    mapParentId: 440300
  },
  {
    id: 440307,
    mapName: '龙岗区',

    mapParentId: 440300
  },
  {
    id: 440308,
    mapName: '盐田区',

    mapParentId: 440300
  },
  {
    id: 440309,
    mapName: '龙华区',

    mapParentId: 440300
  },
  {
    id: 440310,
    mapName: '坪山区',

    mapParentId: 440300
  },
  {
    id: 440311,
    mapName: '光明区',

    mapParentId: 440300
  },
  {
    id: 440402,
    mapName: '香洲区',

    mapParentId: 440400
  },
  {
    id: 440403,
    mapName: '斗门区',

    mapParentId: 440400
  },
  {
    id: 440404,
    mapName: '金湾区',

    mapParentId: 440400
  },
  {
    id: 440507,
    mapName: '龙湖区',

    mapParentId: 440500
  },
  {
    id: 440511,
    mapName: '金平区',

    mapParentId: 440500
  },
  {
    id: 440512,
    mapName: '濠江区',

    mapParentId: 440500
  },
  {
    id: 440513,
    mapName: '潮阳区',

    mapParentId: 440500
  },
  {
    id: 440514,
    mapName: '潮南区',

    mapParentId: 440500
  },
  {
    id: 440515,
    mapName: '澄海区',

    mapParentId: 440500
  },
  {
    id: 440523,
    mapName: '南澳县',

    mapParentId: 440500
  },
  {
    id: 440604,
    mapName: '禅城区',

    mapParentId: 440600
  },
  {
    id: 440605,
    mapName: '南海区',

    mapParentId: 440600
  },
  {
    id: 440606,
    mapName: '顺德区',

    mapParentId: 440600
  },
  {
    id: 440607,
    mapName: '三水区',

    mapParentId: 440600
  },
  {
    id: 440608,
    mapName: '高明区',

    mapParentId: 440600
  },
  {
    id: 440703,
    mapName: '蓬江区',

    mapParentId: 440700
  },
  {
    id: 440704,
    mapName: '江海区',

    mapParentId: 440700
  },
  {
    id: 440705,
    mapName: '新会区',

    mapParentId: 440700
  },
  {
    id: 440781,
    mapName: '台山市',

    mapParentId: 440700
  },
  {
    id: 440783,
    mapName: '开平市',

    mapParentId: 440700
  },
  {
    id: 440784,
    mapName: '鹤山市',

    mapParentId: 440700
  },
  {
    id: 440785,
    mapName: '恩平市',

    mapParentId: 440700
  },
  {
    id: 440802,
    mapName: '赤坎区',

    mapParentId: 440800
  },
  {
    id: 440803,
    mapName: '霞山区',

    mapParentId: 440800
  },
  {
    id: 440804,
    mapName: '坡头区',

    mapParentId: 440800
  },
  {
    id: 440811,
    mapName: '麻章区',

    mapParentId: 440800
  },
  {
    id: 440823,
    mapName: '遂溪县',

    mapParentId: 440800
  },
  {
    id: 440825,
    mapName: '徐闻县',

    mapParentId: 440800
  },
  {
    id: 440881,
    mapName: '廉江市',

    mapParentId: 440800
  },
  {
    id: 440882,
    mapName: '雷州市',

    mapParentId: 440800
  },
  {
    id: 440883,
    mapName: '吴川市',

    mapParentId: 440800
  },
  {
    id: 440902,
    mapName: '茂南区',

    mapParentId: 440900
  },
  {
    id: 440904,
    mapName: '电白区',

    mapParentId: 440900
  },
  {
    id: 440981,
    mapName: '高州市',

    mapParentId: 440900
  },
  {
    id: 440982,
    mapName: '化州市',

    mapParentId: 440900
  },
  {
    id: 440983,
    mapName: '信宜市',

    mapParentId: 440900
  },
  {
    id: 441202,
    mapName: '端州区',

    mapParentId: 441200
  },
  {
    id: 441203,
    mapName: '鼎湖区',

    mapParentId: 441200
  },
  {
    id: 441204,
    mapName: '高要区',

    mapParentId: 441200
  },
  {
    id: 441223,
    mapName: '广宁县',

    mapParentId: 441200
  },
  {
    id: 441224,
    mapName: '怀集县',

    mapParentId: 441200
  },
  {
    id: 441225,
    mapName: '封开县',

    mapParentId: 441200
  },
  {
    id: 441226,
    mapName: '德庆县',

    mapParentId: 441200
  },
  {
    id: 441284,
    mapName: '四会市',

    mapParentId: 441200
  },
  {
    id: 441302,
    mapName: '惠城区',

    mapParentId: 441300
  },
  {
    id: 441303,
    mapName: '惠阳区',

    mapParentId: 441300
  },
  {
    id: 441322,
    mapName: '博罗县',

    mapParentId: 441300
  },
  {
    id: 441323,
    mapName: '惠东县',

    mapParentId: 441300
  },
  {
    id: 441324,
    mapName: '龙门县',

    mapParentId: 441300
  },
  {
    id: 441402,
    mapName: '梅江区',

    mapParentId: 441400
  },
  {
    id: 441403,
    mapName: '梅县区',

    mapParentId: 441400
  },
  {
    id: 441422,
    mapName: '大埔县',

    mapParentId: 441400
  },
  {
    id: 441423,
    mapName: '丰顺县',

    mapParentId: 441400
  },
  {
    id: 441424,
    mapName: '五华县',

    mapParentId: 441400
  },
  {
    id: 441426,
    mapName: '平远县',

    mapParentId: 441400
  },
  {
    id: 441427,
    mapName: '蕉岭县',

    mapParentId: 441400
  },
  {
    id: 441481,
    mapName: '兴宁市',

    mapParentId: 441400
  },
  {
    id: 441502,
    mapName: '城区',

    mapParentId: 441500
  },
  {
    id: 441521,
    mapName: '海丰县',

    mapParentId: 441500
  },
  {
    id: 441523,
    mapName: '陆河县',

    mapParentId: 441500
  },
  {
    id: 441581,
    mapName: '陆丰市',

    mapParentId: 441500
  },
  {
    id: 441602,
    mapName: '源城区',

    mapParentId: 441600
  },
  {
    id: 441621,
    mapName: '紫金县',

    mapParentId: 441600
  },
  {
    id: 441622,
    mapName: '龙川县',

    mapParentId: 441600
  },
  {
    id: 441623,
    mapName: '连平县',

    mapParentId: 441600
  },
  {
    id: 441624,
    mapName: '和平县',

    mapParentId: 441600
  },
  {
    id: 441625,
    mapName: '东源县',

    mapParentId: 441600
  },
  {
    id: 441702,
    mapName: '江城区',

    mapParentId: 441700
  },
  {
    id: 441704,
    mapName: '阳东区',

    mapParentId: 441700
  },
  {
    id: 441721,
    mapName: '阳西县',

    mapParentId: 441700
  },
  {
    id: 441781,
    mapName: '阳春市',

    mapParentId: 441700
  },
  {
    id: 441802,
    mapName: '清城区',

    mapParentId: 441800
  },
  {
    id: 441803,
    mapName: '清新区',

    mapParentId: 441800
  },
  {
    id: 441821,
    mapName: '佛冈县',

    mapParentId: 441800
  },
  {
    id: 441823,
    mapName: '阳山县',

    mapParentId: 441800
  },
  {
    id: 441825,
    mapName: '连山壮族瑶族自治县',

    mapParentId: 441800
  },
  {
    id: 441826,
    mapName: '连南瑶族自治县',

    mapParentId: 441800
  },
  {
    id: 441881,
    mapName: '英德市',

    mapParentId: 441800
  },
  {
    id: 441882,
    mapName: '连州市',

    mapParentId: 441800
  },
  {
    id: 445102,
    mapName: '湘桥区',

    mapParentId: 445100
  },
  {
    id: 445103,
    mapName: '潮安区',

    mapParentId: 445100
  },
  {
    id: 445122,
    mapName: '饶平县',

    mapParentId: 445100
  },
  {
    id: 445202,
    mapName: '榕城区',

    mapParentId: 445200
  },
  {
    id: 445203,
    mapName: '揭东区',

    mapParentId: 445200
  },
  {
    id: 445222,
    mapName: '揭西县',

    mapParentId: 445200
  },
  {
    id: 445224,
    mapName: '惠来县',

    mapParentId: 445200
  },
  {
    id: 445281,
    mapName: '普宁市',

    mapParentId: 445200
  },
  {
    id: 445302,
    mapName: '云城区',

    mapParentId: 445300
  },
  {
    id: 445303,
    mapName: '云安区',

    mapParentId: 445300
  },
  {
    id: 445321,
    mapName: '新兴县',

    mapParentId: 445300
  },
  {
    id: 445322,
    mapName: '郁南县',

    mapParentId: 445300
  },
  {
    id: 445381,
    mapName: '罗定市',

    mapParentId: 445300
  },
  {
    id: 450102,
    mapName: '兴宁区',

    mapParentId: 450100
  },
  {
    id: 450103,
    mapName: '青秀区',

    mapParentId: 450100
  },
  {
    id: 450105,
    mapName: '江南区',

    mapParentId: 450100
  },
  {
    id: 450107,
    mapName: '西乡塘区',

    mapParentId: 450100
  },
  {
    id: 450108,
    mapName: '良庆区',

    mapParentId: 450100
  },
  {
    id: 450109,
    mapName: '邕宁区',

    mapParentId: 450100
  },
  {
    id: 450110,
    mapName: '武鸣区',

    mapParentId: 450100
  },
  {
    id: 450123,
    mapName: '隆安县',

    mapParentId: 450100
  },
  {
    id: 450124,
    mapName: '马山县',

    mapParentId: 450100
  },
  {
    id: 450125,
    mapName: '上林县',

    mapParentId: 450100
  },
  {
    id: 450126,
    mapName: '宾阳县',

    mapParentId: 450100
  },
  {
    id: 450127,
    mapName: '横县',

    mapParentId: 450100
  },
  {
    id: 450202,
    mapName: '城中区',

    mapParentId: 450200
  },
  {
    id: 450203,
    mapName: '鱼峰区',

    mapParentId: 450200
  },
  {
    id: 450204,
    mapName: '柳南区',

    mapParentId: 450200
  },
  {
    id: 450205,
    mapName: '柳北区',

    mapParentId: 450200
  },
  {
    id: 450206,
    mapName: '柳江区',

    mapParentId: 450200
  },
  {
    id: 450222,
    mapName: '柳城县',

    mapParentId: 450200
  },
  {
    id: 450223,
    mapName: '鹿寨县',

    mapParentId: 450200
  },
  {
    id: 450224,
    mapName: '融安县',

    mapParentId: 450200
  },
  {
    id: 450225,
    mapName: '融水苗族自治县',

    mapParentId: 450200
  },
  {
    id: 450226,
    mapName: '三江侗族自治县',

    mapParentId: 450200
  },
  {
    id: 450302,
    mapName: '秀峰区',

    mapParentId: 450300
  },
  {
    id: 450303,
    mapName: '叠彩区',

    mapParentId: 450300
  },
  {
    id: 450304,
    mapName: '象山区',

    mapParentId: 450300
  },
  {
    id: 450305,
    mapName: '七星区',

    mapParentId: 450300
  },
  {
    id: 450311,
    mapName: '雁山区',

    mapParentId: 450300
  },
  {
    id: 450312,
    mapName: '临桂区',

    mapParentId: 450300
  },
  {
    id: 450321,
    mapName: '阳朔县',

    mapParentId: 450300
  },
  {
    id: 450323,
    mapName: '灵川县',

    mapParentId: 450300
  },
  {
    id: 450324,
    mapName: '全州县',

    mapParentId: 450300
  },
  {
    id: 450325,
    mapName: '兴安县',

    mapParentId: 450300
  },
  {
    id: 450326,
    mapName: '永福县',

    mapParentId: 450300
  },
  {
    id: 450327,
    mapName: '灌阳县',

    mapParentId: 450300
  },
  {
    id: 450328,
    mapName: '龙胜各族自治县',

    mapParentId: 450300
  },
  {
    id: 450329,
    mapName: '资源县',

    mapParentId: 450300
  },
  {
    id: 450330,
    mapName: '平乐县',

    mapParentId: 450300
  },
  {
    id: 450332,
    mapName: '恭城瑶族自治县',

    mapParentId: 450300
  },
  {
    id: 450381,
    mapName: '荔浦市',

    mapParentId: 450300
  },
  {
    id: 450403,
    mapName: '万秀区',

    mapParentId: 450400
  },
  {
    id: 450405,
    mapName: '长洲区',

    mapParentId: 450400
  },
  {
    id: 450406,
    mapName: '龙圩区',

    mapParentId: 450400
  },
  {
    id: 450421,
    mapName: '苍梧县',

    mapParentId: 450400
  },
  {
    id: 450422,
    mapName: '藤县',

    mapParentId: 450400
  },
  {
    id: 450423,
    mapName: '蒙山县',

    mapParentId: 450400
  },
  {
    id: 450481,
    mapName: '岑溪市',

    mapParentId: 450400
  },
  {
    id: 450502,
    mapName: '海城区',

    mapParentId: 450500
  },
  {
    id: 450503,
    mapName: '银海区',

    mapParentId: 450500
  },
  {
    id: 450512,
    mapName: '铁山港区',

    mapParentId: 450500
  },
  {
    id: 450521,
    mapName: '合浦县',

    mapParentId: 450500
  },
  {
    id: 450602,
    mapName: '港口区',

    mapParentId: 450600
  },
  {
    id: 450603,
    mapName: '防城区',

    mapParentId: 450600
  },
  {
    id: 450621,
    mapName: '上思县',

    mapParentId: 450600
  },
  {
    id: 450681,
    mapName: '东兴市',

    mapParentId: 450600
  },
  {
    id: 450702,
    mapName: '钦南区',

    mapParentId: 450700
  },
  {
    id: 450703,
    mapName: '钦北区',

    mapParentId: 450700
  },
  {
    id: 450721,
    mapName: '灵山县',

    mapParentId: 450700
  },
  {
    id: 450722,
    mapName: '浦北县',

    mapParentId: 450700
  },
  {
    id: 450802,
    mapName: '港北区',

    mapParentId: 450800
  },
  {
    id: 450803,
    mapName: '港南区',

    mapParentId: 450800
  },
  {
    id: 450804,
    mapName: '覃塘区',

    mapParentId: 450800
  },
  {
    id: 450821,
    mapName: '平南县',

    mapParentId: 450800
  },
  {
    id: 450881,
    mapName: '桂平市',

    mapParentId: 450800
  },
  {
    id: 450902,
    mapName: '玉州区',

    mapParentId: 450900
  },
  {
    id: 450903,
    mapName: '福绵区',

    mapParentId: 450900
  },
  {
    id: 450921,
    mapName: '容县',

    mapParentId: 450900
  },
  {
    id: 450922,
    mapName: '陆川县',

    mapParentId: 450900
  },
  {
    id: 450923,
    mapName: '博白县',

    mapParentId: 450900
  },
  {
    id: 450924,
    mapName: '兴业县',

    mapParentId: 450900
  },
  {
    id: 450981,
    mapName: '北流市',

    mapParentId: 450900
  },
  {
    id: 451002,
    mapName: '右江区',

    mapParentId: 451000
  },
  {
    id: 451021,
    mapName: '田阳县',

    mapParentId: 451000
  },
  {
    id: 451022,
    mapName: '田东县',

    mapParentId: 451000
  },
  {
    id: 451023,
    mapName: '平果县',

    mapParentId: 451000
  },
  {
    id: 451024,
    mapName: '德保县',

    mapParentId: 451000
  },
  {
    id: 451026,
    mapName: '那坡县',

    mapParentId: 451000
  },
  {
    id: 451027,
    mapName: '凌云县',

    mapParentId: 451000
  },
  {
    id: 451028,
    mapName: '乐业县',

    mapParentId: 451000
  },
  {
    id: 451029,
    mapName: '田林县',

    mapParentId: 451000
  },
  {
    id: 451030,
    mapName: '西林县',

    mapParentId: 451000
  },
  {
    id: 451031,
    mapName: '隆林各族自治县',

    mapParentId: 451000
  },
  {
    id: 451081,
    mapName: '靖西市',

    mapParentId: 451000
  },
  {
    id: 451102,
    mapName: '八步区',

    mapParentId: 451100
  },
  {
    id: 451103,
    mapName: '平桂区',

    mapParentId: 451100
  },
  {
    id: 451121,
    mapName: '昭平县',

    mapParentId: 451100
  },
  {
    id: 451122,
    mapName: '钟山县',

    mapParentId: 451100
  },
  {
    id: 451123,
    mapName: '富川瑶族自治县',

    mapParentId: 451100
  },
  {
    id: 451202,
    mapName: '金城江区',

    mapParentId: 451200
  },
  {
    id: 451203,
    mapName: '宜州区',

    mapParentId: 451200
  },
  {
    id: 451221,
    mapName: '南丹县',

    mapParentId: 451200
  },
  {
    id: 451222,
    mapName: '天峨县',

    mapParentId: 451200
  },
  {
    id: 451223,
    mapName: '凤山县',

    mapParentId: 451200
  },
  {
    id: 451224,
    mapName: '东兰县',

    mapParentId: 451200
  },
  {
    id: 451225,
    mapName: '罗城仫佬族自治县',

    mapParentId: 451200
  },
  {
    id: 451226,
    mapName: '环江毛南族自治县',

    mapParentId: 451200
  },
  {
    id: 451227,
    mapName: '巴马瑶族自治县',

    mapParentId: 451200
  },
  {
    id: 451228,
    mapName: '都安瑶族自治县',

    mapParentId: 451200
  },
  {
    id: 451229,
    mapName: '大化瑶族自治县',

    mapParentId: 451200
  },
  {
    id: 451302,
    mapName: '兴宾区',

    mapParentId: 451300
  },
  {
    id: 451321,
    mapName: '忻城县',

    mapParentId: 451300
  },
  {
    id: 451322,
    mapName: '象州县',

    mapParentId: 451300
  },
  {
    id: 451323,
    mapName: '武宣县',

    mapParentId: 451300
  },
  {
    id: 451324,
    mapName: '金秀瑶族自治县',

    mapParentId: 451300
  },
  {
    id: 451381,
    mapName: '合山市',

    mapParentId: 451300
  },
  {
    id: 451402,
    mapName: '江州区',

    mapParentId: 451400
  },
  {
    id: 451421,
    mapName: '扶绥县',

    mapParentId: 451400
  },
  {
    id: 451422,
    mapName: '宁明县',

    mapParentId: 451400
  },
  {
    id: 451423,
    mapName: '龙州县',

    mapParentId: 451400
  },
  {
    id: 451424,
    mapName: '大新县',

    mapParentId: 451400
  },
  {
    id: 451425,
    mapName: '天等县',

    mapParentId: 451400
  },
  {
    id: 451481,
    mapName: '凭祥市',

    mapParentId: 451400
  },
  {
    id: 460105,
    mapName: '秀英区',

    mapParentId: 460100
  },
  {
    id: 460106,
    mapName: '龙华区',

    mapParentId: 460100
  },
  {
    id: 460107,
    mapName: '琼山区',

    mapParentId: 460100
  },
  {
    id: 460108,
    mapName: '美兰区',

    mapParentId: 460100
  },
  {
    id: 460202,
    mapName: '海棠区',

    mapParentId: 460200
  },
  {
    id: 460203,
    mapName: '吉阳区',

    mapParentId: 460200
  },
  {
    id: 460204,
    mapName: '天涯区',

    mapParentId: 460200
  },
  {
    id: 460205,
    mapName: '崖州区',

    mapParentId: 460200
  },
  {
    id: 460321,
    mapName: '西沙群岛',

    mapParentId: 460300
  },
  {
    id: 460322,
    mapName: '南沙群岛',

    mapParentId: 460300
  },
  {
    id: 460323,
    mapName: '中沙群岛的岛礁及其海域',

    mapParentId: 460300
  },
  {
    id: 500101,
    mapName: '万州区',

    mapParentId: 500100
  },
  {
    id: 500102,
    mapName: '涪陵区',

    mapParentId: 500100
  },
  {
    id: 500103,
    mapName: '渝中区',

    mapParentId: 500100
  },
  {
    id: 500104,
    mapName: '大渡口区',

    mapParentId: 500100
  },
  {
    id: 500105,
    mapName: '江北区',

    mapParentId: 500100
  },
  {
    id: 500106,
    mapName: '沙坪坝区',

    mapParentId: 500100
  },
  {
    id: 500107,
    mapName: '九龙坡区',

    mapParentId: 500100
  },
  {
    id: 500108,
    mapName: '南岸区',

    mapParentId: 500100
  },
  {
    id: 500109,
    mapName: '北碚区',

    mapParentId: 500100
  },
  {
    id: 500110,
    mapName: '綦江区',

    mapParentId: 500100
  },
  {
    id: 500111,
    mapName: '大足区',

    mapParentId: 500100
  },
  {
    id: 500112,
    mapName: '渝北区',

    mapParentId: 500100
  },
  {
    id: 500113,
    mapName: '巴南区',

    mapParentId: 500100
  },
  {
    id: 500114,
    mapName: '黔江区',

    mapParentId: 500100
  },
  {
    id: 500115,
    mapName: '长寿区',

    mapParentId: 500100
  },
  {
    id: 500116,
    mapName: '江津区',

    mapParentId: 500100
  },
  {
    id: 500117,
    mapName: '合川区',

    mapParentId: 500100
  },
  {
    id: 500118,
    mapName: '永川区',

    mapParentId: 500100
  },
  {
    id: 500119,
    mapName: '南川区',

    mapParentId: 500100
  },
  {
    id: 500120,
    mapName: '璧山区',

    mapParentId: 500100
  },
  {
    id: 500151,
    mapName: '铜梁区',

    mapParentId: 500100
  },
  {
    id: 500152,
    mapName: '潼南区',

    mapParentId: 500100
  },
  {
    id: 500153,
    mapName: '荣昌区',

    mapParentId: 500100
  },
  {
    id: 500154,
    mapName: '开州区',

    mapParentId: 500100
  },
  {
    id: 500155,
    mapName: '梁平区',

    mapParentId: 500100
  },
  {
    id: 500156,
    mapName: '武隆区',

    mapParentId: 500100
  },
  {
    id: 500229,
    mapName: '城口县',

    mapParentId: 500200
  },
  {
    id: 500230,
    mapName: '丰都县',

    mapParentId: 500200
  },
  {
    id: 500231,
    mapName: '垫江县',

    mapParentId: 500200
  },
  {
    id: 500233,
    mapName: '忠县',

    mapParentId: 500200
  },
  {
    id: 500235,
    mapName: '云阳县',

    mapParentId: 500200
  },
  {
    id: 500236,
    mapName: '奉节县',

    mapParentId: 500200
  },
  {
    id: 500237,
    mapName: '巫山县',

    mapParentId: 500200
  },
  {
    id: 500238,
    mapName: '巫溪县',

    mapParentId: 500200
  },
  {
    id: 500240,
    mapName: '石柱土家族自治县',

    mapParentId: 500200
  },
  {
    id: 500241,
    mapName: '秀山土家族苗族自治县',

    mapParentId: 500200
  },
  {
    id: 500242,
    mapName: '酉阳土家族苗族自治县',

    mapParentId: 500200
  },
  {
    id: 500243,
    mapName: '彭水苗族土家族自治县',

    mapParentId: 500200
  },
  {
    id: 510104,
    mapName: '锦江区',

    mapParentId: 510100
  },
  {
    id: 510105,
    mapName: '青羊区',

    mapParentId: 510100
  },
  {
    id: 510106,
    mapName: '金牛区',

    mapParentId: 510100
  },
  {
    id: 510107,
    mapName: '武侯区',

    mapParentId: 510100
  },
  {
    id: 510108,
    mapName: '成华区',

    mapParentId: 510100
  },
  {
    id: 510112,
    mapName: '龙泉驿区',

    mapParentId: 510100
  },
  {
    id: 510113,
    mapName: '青白江区',

    mapParentId: 510100
  },
  {
    id: 510114,
    mapName: '新都区',

    mapParentId: 510100
  },
  {
    id: 510115,
    mapName: '温江区',

    mapParentId: 510100
  },
  {
    id: 510116,
    mapName: '双流区',

    mapParentId: 510100
  },
  {
    id: 510117,
    mapName: '郫都区',

    mapParentId: 510100
  },
  {
    id: 510121,
    mapName: '金堂县',

    mapParentId: 510100
  },
  {
    id: 510129,
    mapName: '大邑县',

    mapParentId: 510100
  },
  {
    id: 510131,
    mapName: '蒲江县',

    mapParentId: 510100
  },
  {
    id: 510132,
    mapName: '新津县',

    mapParentId: 510100
  },
  {
    id: 510181,
    mapName: '都江堰市',

    mapParentId: 510100
  },
  {
    id: 510182,
    mapName: '彭州市',

    mapParentId: 510100
  },
  {
    id: 510183,
    mapName: '邛崃市',

    mapParentId: 510100
  },
  {
    id: 510184,
    mapName: '崇州市',

    mapParentId: 510100
  },
  {
    id: 510185,
    mapName: '简阳市',

    mapParentId: 510100
  },
  {
    id: 510302,
    mapName: '自流井区',

    mapParentId: 510300
  },
  {
    id: 510303,
    mapName: '贡井区',

    mapParentId: 510300
  },
  {
    id: 510304,
    mapName: '大安区',

    mapParentId: 510300
  },
  {
    id: 510311,
    mapName: '沿滩区',

    mapParentId: 510300
  },
  {
    id: 510321,
    mapName: '荣县',

    mapParentId: 510300
  },
  {
    id: 510322,
    mapName: '富顺县',

    mapParentId: 510300
  },
  {
    id: 510402,
    mapName: '东区',

    mapParentId: 510400
  },
  {
    id: 510403,
    mapName: '西区',

    mapParentId: 510400
  },
  {
    id: 510411,
    mapName: '仁和区',

    mapParentId: 510400
  },
  {
    id: 510421,
    mapName: '米易县',

    mapParentId: 510400
  },
  {
    id: 510422,
    mapName: '盐边县',

    mapParentId: 510400
  },
  {
    id: 510502,
    mapName: '江阳区',

    mapParentId: 510500
  },
  {
    id: 510503,
    mapName: '纳溪区',

    mapParentId: 510500
  },
  {
    id: 510504,
    mapName: '龙马潭区',

    mapParentId: 510500
  },
  {
    id: 510521,
    mapName: '泸县',

    mapParentId: 510500
  },
  {
    id: 510522,
    mapName: '合江县',

    mapParentId: 510500
  },
  {
    id: 510524,
    mapName: '叙永县',

    mapParentId: 510500
  },
  {
    id: 510525,
    mapName: '古蔺县',

    mapParentId: 510500
  },
  {
    id: 510603,
    mapName: '旌阳区',

    mapParentId: 510600
  },
  {
    id: 510604,
    mapName: '罗江区',

    mapParentId: 510600
  },
  {
    id: 510623,
    mapName: '中江县',

    mapParentId: 510600
  },
  {
    id: 510681,
    mapName: '广汉市',

    mapParentId: 510600
  },
  {
    id: 510682,
    mapName: '什邡市',

    mapParentId: 510600
  },
  {
    id: 510683,
    mapName: '绵竹市',

    mapParentId: 510600
  },
  {
    id: 510703,
    mapName: '涪城区',

    mapParentId: 510700
  },
  {
    id: 510704,
    mapName: '游仙区',

    mapParentId: 510700
  },
  {
    id: 510705,
    mapName: '安州区',

    mapParentId: 510700
  },
  {
    id: 510722,
    mapName: '三台县',

    mapParentId: 510700
  },
  {
    id: 510723,
    mapName: '盐亭县',

    mapParentId: 510700
  },
  {
    id: 510725,
    mapName: '梓潼县',

    mapParentId: 510700
  },
  {
    id: 510726,
    mapName: '北川羌族自治县',

    mapParentId: 510700
  },
  {
    id: 510727,
    mapName: '平武县',

    mapParentId: 510700
  },
  {
    id: 510781,
    mapName: '江油市',

    mapParentId: 510700
  },
  {
    id: 510802,
    mapName: '利州区',

    mapParentId: 510800
  },
  {
    id: 510811,
    mapName: '昭化区',

    mapParentId: 510800
  },
  {
    id: 510812,
    mapName: '朝天区',

    mapParentId: 510800
  },
  {
    id: 510821,
    mapName: '旺苍县',

    mapParentId: 510800
  },
  {
    id: 510822,
    mapName: '青川县',

    mapParentId: 510800
  },
  {
    id: 510823,
    mapName: '剑阁县',

    mapParentId: 510800
  },
  {
    id: 510824,
    mapName: '苍溪县',

    mapParentId: 510800
  },
  {
    id: 510903,
    mapName: '船山区',

    mapParentId: 510900
  },
  {
    id: 510904,
    mapName: '安居区',

    mapParentId: 510900
  },
  {
    id: 510921,
    mapName: '蓬溪县',

    mapParentId: 510900
  },
  {
    id: 510922,
    mapName: '射洪县',

    mapParentId: 510900
  },
  {
    id: 510923,
    mapName: '大英县',

    mapParentId: 510900
  },
  {
    id: 511002,
    mapName: '市中区',

    mapParentId: 511000
  },
  {
    id: 511011,
    mapName: '东兴区',

    mapParentId: 511000
  },
  {
    id: 511024,
    mapName: '威远县',

    mapParentId: 511000
  },
  {
    id: 511025,
    mapName: '资中县',

    mapParentId: 511000
  },
  {
    id: 511083,
    mapName: '隆昌市',

    mapParentId: 511000
  },
  {
    id: 511102,
    mapName: '市中区',

    mapParentId: 511100
  },
  {
    id: 511111,
    mapName: '沙湾区',

    mapParentId: 511100
  },
  {
    id: 511112,
    mapName: '五通桥区',

    mapParentId: 511100
  },
  {
    id: 511113,
    mapName: '金口河区',

    mapParentId: 511100
  },
  {
    id: 511123,
    mapName: '犍为县',

    mapParentId: 511100
  },
  {
    id: 511124,
    mapName: '井研县',

    mapParentId: 511100
  },
  {
    id: 511126,
    mapName: '夹江县',

    mapParentId: 511100
  },
  {
    id: 511129,
    mapName: '沐川县',

    mapParentId: 511100
  },
  {
    id: 511132,
    mapName: '峨边彝族自治县',

    mapParentId: 511100
  },
  {
    id: 511133,
    mapName: '马边彝族自治县',

    mapParentId: 511100
  },
  {
    id: 511181,
    mapName: '峨眉山市',

    mapParentId: 511100
  },
  {
    id: 511302,
    mapName: '顺庆区',

    mapParentId: 511300
  },
  {
    id: 511303,
    mapName: '高坪区',

    mapParentId: 511300
  },
  {
    id: 511304,
    mapName: '嘉陵区',

    mapParentId: 511300
  },
  {
    id: 511321,
    mapName: '南部县',

    mapParentId: 511300
  },
  {
    id: 511322,
    mapName: '营山县',

    mapParentId: 511300
  },
  {
    id: 511323,
    mapName: '蓬安县',

    mapParentId: 511300
  },
  {
    id: 511324,
    mapName: '仪陇县',

    mapParentId: 511300
  },
  {
    id: 511325,
    mapName: '西充县',

    mapParentId: 511300
  },
  {
    id: 511381,
    mapName: '阆中市',

    mapParentId: 511300
  },
  {
    id: 511402,
    mapName: '东坡区',

    mapParentId: 511400
  },
  {
    id: 511403,
    mapName: '彭山区',

    mapParentId: 511400
  },
  {
    id: 511421,
    mapName: '仁寿县',

    mapParentId: 511400
  },
  {
    id: 511423,
    mapName: '洪雅县',

    mapParentId: 511400
  },
  {
    id: 511424,
    mapName: '丹棱县',

    mapParentId: 511400
  },
  {
    id: 511425,
    mapName: '青神县',

    mapParentId: 511400
  },
  {
    id: 511502,
    mapName: '翠屏区',

    mapParentId: 511500
  },
  {
    id: 511503,
    mapName: '南溪区',

    mapParentId: 511500
  },
  {
    id: 511504,
    mapName: '叙州区',

    mapParentId: 511500
  },
  {
    id: 511523,
    mapName: '江安县',

    mapParentId: 511500
  },
  {
    id: 511524,
    mapName: '长宁县',

    mapParentId: 511500
  },
  {
    id: 511525,
    mapName: '高县',

    mapParentId: 511500
  },
  {
    id: 511526,
    mapName: '珙县',

    mapParentId: 511500
  },
  {
    id: 511527,
    mapName: '筠连县',

    mapParentId: 511500
  },
  {
    id: 511528,
    mapName: '兴文县',

    mapParentId: 511500
  },
  {
    id: 511529,
    mapName: '屏山县',

    mapParentId: 511500
  },
  {
    id: 511602,
    mapName: '广安区',

    mapParentId: 511600
  },
  {
    id: 511603,
    mapName: '前锋区',

    mapParentId: 511600
  },
  {
    id: 511621,
    mapName: '岳池县',

    mapParentId: 511600
  },
  {
    id: 511622,
    mapName: '武胜县',

    mapParentId: 511600
  },
  {
    id: 511623,
    mapName: '邻水县',

    mapParentId: 511600
  },
  {
    id: 511681,
    mapName: '华蓥市',

    mapParentId: 511600
  },
  {
    id: 511702,
    mapName: '通川区',

    mapParentId: 511700
  },
  {
    id: 511703,
    mapName: '达川区',

    mapParentId: 511700
  },
  {
    id: 511722,
    mapName: '宣汉县',

    mapParentId: 511700
  },
  {
    id: 511723,
    mapName: '开江县',

    mapParentId: 511700
  },
  {
    id: 511724,
    mapName: '大竹县',

    mapParentId: 511700
  },
  {
    id: 511725,
    mapName: '渠县',

    mapParentId: 511700
  },
  {
    id: 511781,
    mapName: '万源市',

    mapParentId: 511700
  },
  {
    id: 511802,
    mapName: '雨城区',

    mapParentId: 511800
  },
  {
    id: 511803,
    mapName: '名山区',

    mapParentId: 511800
  },
  {
    id: 511822,
    mapName: '荥经县',

    mapParentId: 511800
  },
  {
    id: 511823,
    mapName: '汉源县',

    mapParentId: 511800
  },
  {
    id: 511824,
    mapName: '石棉县',

    mapParentId: 511800
  },
  {
    id: 511825,
    mapName: '天全县',

    mapParentId: 511800
  },
  {
    id: 511826,
    mapName: '芦山县',

    mapParentId: 511800
  },
  {
    id: 511827,
    mapName: '宝兴县',

    mapParentId: 511800
  },
  {
    id: 511902,
    mapName: '巴州区',

    mapParentId: 511900
  },
  {
    id: 511903,
    mapName: '恩阳区',

    mapParentId: 511900
  },
  {
    id: 511921,
    mapName: '通江县',

    mapParentId: 511900
  },
  {
    id: 511922,
    mapName: '南江县',

    mapParentId: 511900
  },
  {
    id: 511923,
    mapName: '平昌县',

    mapParentId: 511900
  },
  {
    id: 512002,
    mapName: '雁江区',

    mapParentId: 512000
  },
  {
    id: 512021,
    mapName: '安岳县',

    mapParentId: 512000
  },
  {
    id: 512022,
    mapName: '乐至县',

    mapParentId: 512000
  },
  {
    id: 513201,
    mapName: '马尔康市',

    mapParentId: 513200
  },
  {
    id: 513221,
    mapName: '汶川县',

    mapParentId: 513200
  },
  {
    id: 513222,
    mapName: '理县',

    mapParentId: 513200
  },
  {
    id: 513223,
    mapName: '茂县',

    mapParentId: 513200
  },
  {
    id: 513224,
    mapName: '松潘县',

    mapParentId: 513200
  },
  {
    id: 513225,
    mapName: '九寨沟县',

    mapParentId: 513200
  },
  {
    id: 513226,
    mapName: '金川县',

    mapParentId: 513200
  },
  {
    id: 513227,
    mapName: '小金县',

    mapParentId: 513200
  },
  {
    id: 513228,
    mapName: '黑水县',

    mapParentId: 513200
  },
  {
    id: 513230,
    mapName: '壤塘县',

    mapParentId: 513200
  },
  {
    id: 513231,
    mapName: '阿坝县',

    mapParentId: 513200
  },
  {
    id: 513232,
    mapName: '若尔盖县',

    mapParentId: 513200
  },
  {
    id: 513233,
    mapName: '红原县',

    mapParentId: 513200
  },
  {
    id: 513301,
    mapName: '康定市',

    mapParentId: 513300
  },
  {
    id: 513322,
    mapName: '泸定县',

    mapParentId: 513300
  },
  {
    id: 513323,
    mapName: '丹巴县',

    mapParentId: 513300
  },
  {
    id: 513324,
    mapName: '九龙县',

    mapParentId: 513300
  },
  {
    id: 513325,
    mapName: '雅江县',

    mapParentId: 513300
  },
  {
    id: 513326,
    mapName: '道孚县',

    mapParentId: 513300
  },
  {
    id: 513327,
    mapName: '炉霍县',

    mapParentId: 513300
  },
  {
    id: 513328,
    mapName: '甘孜县',

    mapParentId: 513300
  },
  {
    id: 513329,
    mapName: '新龙县',

    mapParentId: 513300
  },
  {
    id: 513330,
    mapName: '德格县',

    mapParentId: 513300
  },
  {
    id: 513331,
    mapName: '白玉县',

    mapParentId: 513300
  },
  {
    id: 513332,
    mapName: '石渠县',

    mapParentId: 513300
  },
  {
    id: 513333,
    mapName: '色达县',

    mapParentId: 513300
  },
  {
    id: 513334,
    mapName: '理塘县',

    mapParentId: 513300
  },
  {
    id: 513335,
    mapName: '巴塘县',

    mapParentId: 513300
  },
  {
    id: 513336,
    mapName: '乡城县',

    mapParentId: 513300
  },
  {
    id: 513337,
    mapName: '稻城县',

    mapParentId: 513300
  },
  {
    id: 513338,
    mapName: '得荣县',

    mapParentId: 513300
  },
  {
    id: 513401,
    mapName: '西昌市',

    mapParentId: 513400
  },
  {
    id: 513422,
    mapName: '木里藏族自治县',

    mapParentId: 513400
  },
  {
    id: 513423,
    mapName: '盐源县',

    mapParentId: 513400
  },
  {
    id: 513424,
    mapName: '德昌县',

    mapParentId: 513400
  },
  {
    id: 513425,
    mapName: '会理县',

    mapParentId: 513400
  },
  {
    id: 513426,
    mapName: '会东县',

    mapParentId: 513400
  },
  {
    id: 513427,
    mapName: '宁南县',

    mapParentId: 513400
  },
  {
    id: 513428,
    mapName: '普格县',

    mapParentId: 513400
  },
  {
    id: 513429,
    mapName: '布拖县',

    mapParentId: 513400
  },
  {
    id: 513430,
    mapName: '金阳县',

    mapParentId: 513400
  },
  {
    id: 513431,
    mapName: '昭觉县',

    mapParentId: 513400
  },
  {
    id: 513432,
    mapName: '喜德县',

    mapParentId: 513400
  },
  {
    id: 513433,
    mapName: '冕宁县',

    mapParentId: 513400
  },
  {
    id: 513434,
    mapName: '越西县',

    mapParentId: 513400
  },
  {
    id: 513435,
    mapName: '甘洛县',

    mapParentId: 513400
  },
  {
    id: 513436,
    mapName: '美姑县',

    mapParentId: 513400
  },
  {
    id: 513437,
    mapName: '雷波县',

    mapParentId: 513400
  },
  {
    id: 520102,
    mapName: '南明区',

    mapParentId: 520100
  },
  {
    id: 520103,
    mapName: '云岩区',

    mapParentId: 520100
  },
  {
    id: 520111,
    mapName: '花溪区',

    mapParentId: 520100
  },
  {
    id: 520112,
    mapName: '乌当区',

    mapParentId: 520100
  },
  {
    id: 520113,
    mapName: '白云区',

    mapParentId: 520100
  },
  {
    id: 520115,
    mapName: '观山湖区',

    mapParentId: 520100
  },
  {
    id: 520121,
    mapName: '开阳县',

    mapParentId: 520100
  },
  {
    id: 520122,
    mapName: '息烽县',

    mapParentId: 520100
  },
  {
    id: 520123,
    mapName: '修文县',

    mapParentId: 520100
  },
  {
    id: 520181,
    mapName: '清镇市',

    mapParentId: 520100
  },
  {
    id: 520201,
    mapName: '钟山区',

    mapParentId: 520200
  },
  {
    id: 520203,
    mapName: '六枝特区',

    mapParentId: 520200
  },
  {
    id: 520221,
    mapName: '水城县',

    mapParentId: 520200
  },
  {
    id: 520281,
    mapName: '盘州市',

    mapParentId: 520200
  },
  {
    id: 520302,
    mapName: '红花岗区',

    mapParentId: 520300
  },
  {
    id: 520303,
    mapName: '汇川区',

    mapParentId: 520300
  },
  {
    id: 520304,
    mapName: '播州区',

    mapParentId: 520300
  },
  {
    id: 520322,
    mapName: '桐梓县',

    mapParentId: 520300
  },
  {
    id: 520323,
    mapName: '绥阳县',

    mapParentId: 520300
  },
  {
    id: 520324,
    mapName: '正安县',

    mapParentId: 520300
  },
  {
    id: 520325,
    mapName: '道真仡佬族苗族自治县',

    mapParentId: 520300
  },
  {
    id: 520326,
    mapName: '务川仡佬族苗族自治县',

    mapParentId: 520300
  },
  {
    id: 520327,
    mapName: '凤冈县',

    mapParentId: 520300
  },
  {
    id: 520328,
    mapName: '湄潭县',

    mapParentId: 520300
  },
  {
    id: 520329,
    mapName: '余庆县',

    mapParentId: 520300
  },
  {
    id: 520330,
    mapName: '习水县',

    mapParentId: 520300
  },
  {
    id: 520381,
    mapName: '赤水市',

    mapParentId: 520300
  },
  {
    id: 520382,
    mapName: '仁怀市',

    mapParentId: 520300
  },
  {
    id: 520402,
    mapName: '西秀区',

    mapParentId: 520400
  },
  {
    id: 520403,
    mapName: '平坝区',

    mapParentId: 520400
  },
  {
    id: 520422,
    mapName: '普定县',

    mapParentId: 520400
  },
  {
    id: 520423,
    mapName: '镇宁布依族苗族自治县',

    mapParentId: 520400
  },
  {
    id: 520424,
    mapName: '关岭布依族苗族自治县',

    mapParentId: 520400
  },
  {
    id: 520425,
    mapName: '紫云苗族布依族自治县',

    mapParentId: 520400
  },
  {
    id: 520502,
    mapName: '七星关区',

    mapParentId: 520500
  },
  {
    id: 520521,
    mapName: '大方县',

    mapParentId: 520500
  },
  {
    id: 520522,
    mapName: '黔西县',

    mapParentId: 520500
  },
  {
    id: 520523,
    mapName: '金沙县',

    mapParentId: 520500
  },
  {
    id: 520524,
    mapName: '织金县',

    mapParentId: 520500
  },
  {
    id: 520525,
    mapName: '纳雍县',

    mapParentId: 520500
  },
  {
    id: 520526,
    mapName: '威宁彝族回族苗族自治县',

    mapParentId: 520500
  },
  {
    id: 520527,
    mapName: '赫章县',

    mapParentId: 520500
  },
  {
    id: 520602,
    mapName: '碧江区',

    mapParentId: 520600
  },
  {
    id: 520603,
    mapName: '万山区',

    mapParentId: 520600
  },
  {
    id: 520621,
    mapName: '江口县',

    mapParentId: 520600
  },
  {
    id: 520622,
    mapName: '玉屏侗族自治县',

    mapParentId: 520600
  },
  {
    id: 520623,
    mapName: '石阡县',

    mapParentId: 520600
  },
  {
    id: 520624,
    mapName: '思南县',

    mapParentId: 520600
  },
  {
    id: 520625,
    mapName: '印江土家族苗族自治县',

    mapParentId: 520600
  },
  {
    id: 520626,
    mapName: '德江县',

    mapParentId: 520600
  },
  {
    id: 520627,
    mapName: '沿河土家族自治县',

    mapParentId: 520600
  },
  {
    id: 520628,
    mapName: '松桃苗族自治县',

    mapParentId: 520600
  },
  {
    id: 522301,
    mapName: '兴义市',

    mapParentId: 522300
  },
  {
    id: 522302,
    mapName: '兴仁市',

    mapParentId: 522300
  },
  {
    id: 522323,
    mapName: '普安县',

    mapParentId: 522300
  },
  {
    id: 522324,
    mapName: '晴隆县',

    mapParentId: 522300
  },
  {
    id: 522325,
    mapName: '贞丰县',

    mapParentId: 522300
  },
  {
    id: 522326,
    mapName: '望谟县',

    mapParentId: 522300
  },
  {
    id: 522327,
    mapName: '册亨县',

    mapParentId: 522300
  },
  {
    id: 522328,
    mapName: '安龙县',

    mapParentId: 522300
  },
  {
    id: 522601,
    mapName: '凯里市',

    mapParentId: 522600
  },
  {
    id: 522622,
    mapName: '黄平县',

    mapParentId: 522600
  },
  {
    id: 522623,
    mapName: '施秉县',

    mapParentId: 522600
  },
  {
    id: 522624,
    mapName: '三穗县',

    mapParentId: 522600
  },
  {
    id: 522625,
    mapName: '镇远县',

    mapParentId: 522600
  },
  {
    id: 522626,
    mapName: '岑巩县',

    mapParentId: 522600
  },
  {
    id: 522627,
    mapName: '天柱县',

    mapParentId: 522600
  },
  {
    id: 522628,
    mapName: '锦屏县',

    mapParentId: 522600
  },
  {
    id: 522629,
    mapName: '剑河县',

    mapParentId: 522600
  },
  {
    id: 522630,
    mapName: '台江县',

    mapParentId: 522600
  },
  {
    id: 522631,
    mapName: '黎平县',

    mapParentId: 522600
  },
  {
    id: 522632,
    mapName: '榕江县',

    mapParentId: 522600
  },
  {
    id: 522633,
    mapName: '从江县',

    mapParentId: 522600
  },
  {
    id: 522634,
    mapName: '雷山县',

    mapParentId: 522600
  },
  {
    id: 522635,
    mapName: '麻江县',

    mapParentId: 522600
  },
  {
    id: 522636,
    mapName: '丹寨县',

    mapParentId: 522600
  },
  {
    id: 522701,
    mapName: '都匀市',

    mapParentId: 522700
  },
  {
    id: 522702,
    mapName: '福泉市',

    mapParentId: 522700
  },
  {
    id: 522722,
    mapName: '荔波县',

    mapParentId: 522700
  },
  {
    id: 522723,
    mapName: '贵定县',

    mapParentId: 522700
  },
  {
    id: 522725,
    mapName: '瓮安县',

    mapParentId: 522700
  },
  {
    id: 522726,
    mapName: '独山县',

    mapParentId: 522700
  },
  {
    id: 522727,
    mapName: '平塘县',

    mapParentId: 522700
  },
  {
    id: 522728,
    mapName: '罗甸县',

    mapParentId: 522700
  },
  {
    id: 522729,
    mapName: '长顺县',

    mapParentId: 522700
  },
  {
    id: 522730,
    mapName: '龙里县',

    mapParentId: 522700
  },
  {
    id: 522731,
    mapName: '惠水县',

    mapParentId: 522700
  },
  {
    id: 522732,
    mapName: '三都水族自治县',

    mapParentId: 522700
  },
  {
    id: 530102,
    mapName: '五华区',

    mapParentId: 530100
  },
  {
    id: 530103,
    mapName: '盘龙区',

    mapParentId: 530100
  },
  {
    id: 530111,
    mapName: '官渡区',

    mapParentId: 530100
  },
  {
    id: 530112,
    mapName: '西山区',

    mapParentId: 530100
  },
  {
    id: 530113,
    mapName: '东川区',

    mapParentId: 530100
  },
  {
    id: 530114,
    mapName: '呈贡区',

    mapParentId: 530100
  },
  {
    id: 530115,
    mapName: '晋宁区',

    mapParentId: 530100
  },
  {
    id: 530124,
    mapName: '富民县',

    mapParentId: 530100
  },
  {
    id: 530125,
    mapName: '宜良县',

    mapParentId: 530100
  },
  {
    id: 530126,
    mapName: '石林彝族自治县',

    mapParentId: 530100
  },
  {
    id: 530127,
    mapName: '嵩明县',

    mapParentId: 530100
  },
  {
    id: 530128,
    mapName: '禄劝彝族苗族自治县',

    mapParentId: 530100
  },
  {
    id: 530129,
    mapName: '寻甸回族彝族自治县',

    mapParentId: 530100
  },
  {
    id: 530181,
    mapName: '安宁市',

    mapParentId: 530100
  },
  {
    id: 530302,
    mapName: '麒麟区',

    mapParentId: 530300
  },
  {
    id: 530303,
    mapName: '沾益区',

    mapParentId: 530300
  },
  {
    id: 530304,
    mapName: '马龙区',

    mapParentId: 530300
  },
  {
    id: 530322,
    mapName: '陆良县',

    mapParentId: 530300
  },
  {
    id: 530323,
    mapName: '师宗县',

    mapParentId: 530300
  },
  {
    id: 530324,
    mapName: '罗平县',

    mapParentId: 530300
  },
  {
    id: 530325,
    mapName: '富源县',

    mapParentId: 530300
  },
  {
    id: 530326,
    mapName: '会泽县',

    mapParentId: 530300
  },
  {
    id: 530381,
    mapName: '宣威市',

    mapParentId: 530300
  },
  {
    id: 530402,
    mapName: '红塔区',

    mapParentId: 530400
  },
  {
    id: 530403,
    mapName: '江川区',

    mapParentId: 530400
  },
  {
    id: 530422,
    mapName: '澄江县',

    mapParentId: 530400
  },
  {
    id: 530423,
    mapName: '通海县',

    mapParentId: 530400
  },
  {
    id: 530424,
    mapName: '华宁县',

    mapParentId: 530400
  },
  {
    id: 530425,
    mapName: '易门县',

    mapParentId: 530400
  },
  {
    id: 530426,
    mapName: '峨山彝族自治县',

    mapParentId: 530400
  },
  {
    id: 530427,
    mapName: '新平彝族傣族自治县',

    mapParentId: 530400
  },
  {
    id: 530428,
    mapName: '元江哈尼族彝族傣族自治县',

    mapParentId: 530400
  },
  {
    id: 530502,
    mapName: '隆阳区',

    mapParentId: 530500
  },
  {
    id: 530521,
    mapName: '施甸县',

    mapParentId: 530500
  },
  {
    id: 530523,
    mapName: '龙陵县',

    mapParentId: 530500
  },
  {
    id: 530524,
    mapName: '昌宁县',

    mapParentId: 530500
  },
  {
    id: 530581,
    mapName: '腾冲市',

    mapParentId: 530500
  },
  {
    id: 530602,
    mapName: '昭阳区',

    mapParentId: 530600
  },
  {
    id: 530621,
    mapName: '鲁甸县',

    mapParentId: 530600
  },
  {
    id: 530622,
    mapName: '巧家县',

    mapParentId: 530600
  },
  {
    id: 530623,
    mapName: '盐津县',

    mapParentId: 530600
  },
  {
    id: 530624,
    mapName: '大关县',

    mapParentId: 530600
  },
  {
    id: 530625,
    mapName: '永善县',

    mapParentId: 530600
  },
  {
    id: 530626,
    mapName: '绥江县',

    mapParentId: 530600
  },
  {
    id: 530627,
    mapName: '镇雄县',

    mapParentId: 530600
  },
  {
    id: 530628,
    mapName: '彝良县',

    mapParentId: 530600
  },
  {
    id: 530629,
    mapName: '威信县',

    mapParentId: 530600
  },
  {
    id: 530681,
    mapName: '水富市',

    mapParentId: 530600
  },
  {
    id: 530702,
    mapName: '古城区',

    mapParentId: 530700
  },
  {
    id: 530721,
    mapName: '玉龙纳西族自治县',

    mapParentId: 530700
  },
  {
    id: 530722,
    mapName: '永胜县',

    mapParentId: 530700
  },
  {
    id: 530723,
    mapName: '华坪县',

    mapParentId: 530700
  },
  {
    id: 530724,
    mapName: '宁蒗彝族自治县',

    mapParentId: 530700
  },
  {
    id: 530802,
    mapName: '思茅区',

    mapParentId: 530800
  },
  {
    id: 530821,
    mapName: '宁洱哈尼族彝族自治县',

    mapParentId: 530800
  },
  {
    id: 530822,
    mapName: '墨江哈尼族自治县',

    mapParentId: 530800
  },
  {
    id: 530823,
    mapName: '景东彝族自治县',

    mapParentId: 530800
  },
  {
    id: 530824,
    mapName: '景谷傣族彝族自治县',

    mapParentId: 530800
  },
  {
    id: 530825,
    mapName: '镇沅彝族哈尼族拉祜族自治县',

    mapParentId: 530800
  },
  {
    id: 530826,
    mapName: '江城哈尼族彝族自治县',

    mapParentId: 530800
  },
  {
    id: 530827,
    mapName: '孟连傣族拉祜族佤族自治县',

    mapParentId: 530800
  },
  {
    id: 530828,
    mapName: '澜沧拉祜族自治县',

    mapParentId: 530800
  },
  {
    id: 530829,
    mapName: '西盟佤族自治县',

    mapParentId: 530800
  },
  {
    id: 530902,
    mapName: '临翔区',

    mapParentId: 530900
  },
  {
    id: 530921,
    mapName: '凤庆县',

    mapParentId: 530900
  },
  {
    id: 530922,
    mapName: '云县',

    mapParentId: 530900
  },
  {
    id: 530923,
    mapName: '永德县',

    mapParentId: 530900
  },
  {
    id: 530924,
    mapName: '镇康县',

    mapParentId: 530900
  },
  {
    id: 530925,
    mapName: '双江拉祜族佤族布朗族傣族自治县',

    mapParentId: 530900
  },
  {
    id: 530926,
    mapName: '耿马傣族佤族自治县',

    mapParentId: 530900
  },
  {
    id: 530927,
    mapName: '沧源佤族自治县',

    mapParentId: 530900
  },
  {
    id: 532301,
    mapName: '楚雄市',

    mapParentId: 532300
  },
  {
    id: 532322,
    mapName: '双柏县',

    mapParentId: 532300
  },
  {
    id: 532323,
    mapName: '牟定县',

    mapParentId: 532300
  },
  {
    id: 532324,
    mapName: '南华县',

    mapParentId: 532300
  },
  {
    id: 532325,
    mapName: '姚安县',

    mapParentId: 532300
  },
  {
    id: 532326,
    mapName: '大姚县',

    mapParentId: 532300
  },
  {
    id: 532327,
    mapName: '永仁县',

    mapParentId: 532300
  },
  {
    id: 532328,
    mapName: '元谋县',

    mapParentId: 532300
  },
  {
    id: 532329,
    mapName: '武定县',

    mapParentId: 532300
  },
  {
    id: 532331,
    mapName: '禄丰县',

    mapParentId: 532300
  },
  {
    id: 532501,
    mapName: '个旧市',

    mapParentId: 532500
  },
  {
    id: 532502,
    mapName: '开远市',

    mapParentId: 532500
  },
  {
    id: 532503,
    mapName: '蒙自市',

    mapParentId: 532500
  },
  {
    id: 532504,
    mapName: '弥勒市',

    mapParentId: 532500
  },
  {
    id: 532523,
    mapName: '屏边苗族自治县',

    mapParentId: 532500
  },
  {
    id: 532524,
    mapName: '建水县',

    mapParentId: 532500
  },
  {
    id: 532525,
    mapName: '石屏县',

    mapParentId: 532500
  },
  {
    id: 532527,
    mapName: '泸西县',

    mapParentId: 532500
  },
  {
    id: 532528,
    mapName: '元阳县',

    mapParentId: 532500
  },
  {
    id: 532529,
    mapName: '红河县',

    mapParentId: 532500
  },
  {
    id: 532530,
    mapName: '金平苗族瑶族傣族自治县',

    mapParentId: 532500
  },
  {
    id: 532531,
    mapName: '绿春县',

    mapParentId: 532500
  },
  {
    id: 532532,
    mapName: '河口瑶族自治县',

    mapParentId: 532500
  },
  {
    id: 532601,
    mapName: '文山市',

    mapParentId: 532600
  },
  {
    id: 532622,
    mapName: '砚山县',

    mapParentId: 532600
  },
  {
    id: 532623,
    mapName: '西畴县',

    mapParentId: 532600
  },
  {
    id: 532624,
    mapName: '麻栗坡县',

    mapParentId: 532600
  },
  {
    id: 532625,
    mapName: '马关县',

    mapParentId: 532600
  },
  {
    id: 532626,
    mapName: '丘北县',

    mapParentId: 532600
  },
  {
    id: 532627,
    mapName: '广南县',

    mapParentId: 532600
  },
  {
    id: 532628,
    mapName: '富宁县',

    mapParentId: 532600
  },
  {
    id: 532801,
    mapName: '景洪市',

    mapParentId: 532800
  },
  {
    id: 532822,
    mapName: '勐海县',

    mapParentId: 532800
  },
  {
    id: 532823,
    mapName: '勐腊县',

    mapParentId: 532800
  },
  {
    id: 532901,
    mapName: '大理市',

    mapParentId: 532900
  },
  {
    id: 532922,
    mapName: '漾濞彝族自治县',

    mapParentId: 532900
  },
  {
    id: 532923,
    mapName: '祥云县',

    mapParentId: 532900
  },
  {
    id: 532924,
    mapName: '宾川县',

    mapParentId: 532900
  },
  {
    id: 532925,
    mapName: '弥渡县',

    mapParentId: 532900
  },
  {
    id: 532926,
    mapName: '南涧彝族自治县',

    mapParentId: 532900
  },
  {
    id: 532927,
    mapName: '巍山彝族回族自治县',

    mapParentId: 532900
  },
  {
    id: 532928,
    mapName: '永平县',

    mapParentId: 532900
  },
  {
    id: 532929,
    mapName: '云龙县',

    mapParentId: 532900
  },
  {
    id: 532930,
    mapName: '洱源县',

    mapParentId: 532900
  },
  {
    id: 532931,
    mapName: '剑川县',

    mapParentId: 532900
  },
  {
    id: 532932,
    mapName: '鹤庆县',

    mapParentId: 532900
  },
  {
    id: 533102,
    mapName: '瑞丽市',

    mapParentId: 533100
  },
  {
    id: 533103,
    mapName: '芒市',

    mapParentId: 533100
  },
  {
    id: 533122,
    mapName: '梁河县',

    mapParentId: 533100
  },
  {
    id: 533123,
    mapName: '盈江县',

    mapParentId: 533100
  },
  {
    id: 533124,
    mapName: '陇川县',

    mapParentId: 533100
  },
  {
    id: 533301,
    mapName: '泸水市',

    mapParentId: 533300
  },
  {
    id: 533323,
    mapName: '福贡县',

    mapParentId: 533300
  },
  {
    id: 533324,
    mapName: '贡山独龙族怒族自治县',

    mapParentId: 533300
  },
  {
    id: 533325,
    mapName: '兰坪白族普米族自治县',

    mapParentId: 533300
  },
  {
    id: 533401,
    mapName: '香格里拉市',

    mapParentId: 533400
  },
  {
    id: 533422,
    mapName: '德钦县',

    mapParentId: 533400
  },
  {
    id: 533423,
    mapName: '维西傈僳族自治县',

    mapParentId: 533400
  },
  {
    id: 540102,
    mapName: '城关区',

    mapParentId: 540100
  },
  {
    id: 540103,
    mapName: '堆龙德庆区',

    mapParentId: 540100
  },
  {
    id: 540104,
    mapName: '达孜区',

    mapParentId: 540100
  },
  {
    id: 540121,
    mapName: '林周县',

    mapParentId: 540100
  },
  {
    id: 540122,
    mapName: '当雄县',

    mapParentId: 540100
  },
  {
    id: 540123,
    mapName: '尼木县',

    mapParentId: 540100
  },
  {
    id: 540124,
    mapName: '曲水县',

    mapParentId: 540100
  },
  {
    id: 540127,
    mapName: '墨竹工卡县',

    mapParentId: 540100
  },
  {
    id: 540202,
    mapName: '桑珠孜区',

    mapParentId: 540200
  },
  {
    id: 540221,
    mapName: '南木林县',

    mapParentId: 540200
  },
  {
    id: 540222,
    mapName: '江孜县',

    mapParentId: 540200
  },
  {
    id: 540223,
    mapName: '定日县',

    mapParentId: 540200
  },
  {
    id: 540224,
    mapName: '萨迦县',

    mapParentId: 540200
  },
  {
    id: 540225,
    mapName: '拉孜县',

    mapParentId: 540200
  },
  {
    id: 540226,
    mapName: '昂仁县',

    mapParentId: 540200
  },
  {
    id: 540227,
    mapName: '谢通门县',

    mapParentId: 540200
  },
  {
    id: 540228,
    mapName: '白朗县',

    mapParentId: 540200
  },
  {
    id: 540229,
    mapName: '仁布县',

    mapParentId: 540200
  },
  {
    id: 540230,
    mapName: '康马县',

    mapParentId: 540200
  },
  {
    id: 540231,
    mapName: '定结县',

    mapParentId: 540200
  },
  {
    id: 540232,
    mapName: '仲巴县',

    mapParentId: 540200
  },
  {
    id: 540233,
    mapName: '亚东县',

    mapParentId: 540200
  },
  {
    id: 540234,
    mapName: '吉隆县',

    mapParentId: 540200
  },
  {
    id: 540235,
    mapName: '聂拉木县',

    mapParentId: 540200
  },
  {
    id: 540236,
    mapName: '萨嘎县',

    mapParentId: 540200
  },
  {
    id: 540237,
    mapName: '岗巴县',

    mapParentId: 540200
  },
  {
    id: 540302,
    mapName: '卡若区',

    mapParentId: 540300
  },
  {
    id: 540321,
    mapName: '江达县',

    mapParentId: 540300
  },
  {
    id: 540322,
    mapName: '贡觉县',

    mapParentId: 540300
  },
  {
    id: 540323,
    mapName: '类乌齐县',

    mapParentId: 540300
  },
  {
    id: 540324,
    mapName: '丁青县',

    mapParentId: 540300
  },
  {
    id: 540325,
    mapName: '察雅县',

    mapParentId: 540300
  },
  {
    id: 540326,
    mapName: '八宿县',

    mapParentId: 540300
  },
  {
    id: 540327,
    mapName: '左贡县',

    mapParentId: 540300
  },
  {
    id: 540328,
    mapName: '芒康县',

    mapParentId: 540300
  },
  {
    id: 540329,
    mapName: '洛隆县',

    mapParentId: 540300
  },
  {
    id: 540330,
    mapName: '边坝县',

    mapParentId: 540300
  },
  {
    id: 540402,
    mapName: '巴宜区',

    mapParentId: 540400
  },
  {
    id: 540421,
    mapName: '工布江达县',

    mapParentId: 540400
  },
  {
    id: 540422,
    mapName: '米林县',

    mapParentId: 540400
  },
  {
    id: 540423,
    mapName: '墨脱县',

    mapParentId: 540400
  },
  {
    id: 540424,
    mapName: '波密县',

    mapParentId: 540400
  },
  {
    id: 540425,
    mapName: '察隅县',

    mapParentId: 540400
  },
  {
    id: 540426,
    mapName: '朗县',

    mapParentId: 540400
  },
  {
    id: 540502,
    mapName: '乃东区',

    mapParentId: 540500
  },
  {
    id: 540521,
    mapName: '扎囊县',

    mapParentId: 540500
  },
  {
    id: 540522,
    mapName: '贡嘎县',

    mapParentId: 540500
  },
  {
    id: 540523,
    mapName: '桑日县',

    mapParentId: 540500
  },
  {
    id: 540524,
    mapName: '琼结县',

    mapParentId: 540500
  },
  {
    id: 540525,
    mapName: '曲松县',

    mapParentId: 540500
  },
  {
    id: 540526,
    mapName: '措美县',

    mapParentId: 540500
  },
  {
    id: 540527,
    mapName: '洛扎县',

    mapParentId: 540500
  },
  {
    id: 540528,
    mapName: '加查县',

    mapParentId: 540500
  },
  {
    id: 540529,
    mapName: '隆子县',

    mapParentId: 540500
  },
  {
    id: 540530,
    mapName: '错那县',

    mapParentId: 540500
  },
  {
    id: 540531,
    mapName: '浪卡子县',

    mapParentId: 540500
  },
  {
    id: 540602,
    mapName: '色尼区',

    mapParentId: 540600
  },
  {
    id: 540621,
    mapName: '嘉黎县',

    mapParentId: 540600
  },
  {
    id: 540622,
    mapName: '比如县',

    mapParentId: 540600
  },
  {
    id: 540623,
    mapName: '聂荣县',

    mapParentId: 540600
  },
  {
    id: 540624,
    mapName: '安多县',

    mapParentId: 540600
  },
  {
    id: 540625,
    mapName: '申扎县',

    mapParentId: 540600
  },
  {
    id: 540626,
    mapName: '索县',

    mapParentId: 540600
  },
  {
    id: 540627,
    mapName: '班戈县',

    mapParentId: 540600
  },
  {
    id: 540628,
    mapName: '巴青县',

    mapParentId: 540600
  },
  {
    id: 540629,
    mapName: '尼玛县',

    mapParentId: 540600
  },
  {
    id: 540630,
    mapName: '双湖县',

    mapParentId: 540600
  },
  {
    id: 542521,
    mapName: '普兰县',

    mapParentId: 542500
  },
  {
    id: 542522,
    mapName: '札达县',

    mapParentId: 542500
  },
  {
    id: 542523,
    mapName: '噶尔县',

    mapParentId: 542500
  },
  {
    id: 542524,
    mapName: '日土县',

    mapParentId: 542500
  },
  {
    id: 542525,
    mapName: '革吉县',

    mapParentId: 542500
  },
  {
    id: 542526,
    mapName: '改则县',

    mapParentId: 542500
  },
  {
    id: 542527,
    mapName: '措勤县',

    mapParentId: 542500
  },
  {
    id: 610102,
    mapName: '新城区',

    mapParentId: 610100
  },
  {
    id: 610103,
    mapName: '碑林区',

    mapParentId: 610100
  },
  {
    id: 610104,
    mapName: '莲湖区',

    mapParentId: 610100
  },
  {
    id: 610111,
    mapName: '灞桥区',

    mapParentId: 610100
  },
  {
    id: 610112,
    mapName: '未央区',

    mapParentId: 610100
  },
  {
    id: 610113,
    mapName: '雁塔区',

    mapParentId: 610100
  },
  {
    id: 610114,
    mapName: '阎良区',

    mapParentId: 610100
  },
  {
    id: 610115,
    mapName: '临潼区',

    mapParentId: 610100
  },
  {
    id: 610116,
    mapName: '长安区',

    mapParentId: 610100
  },
  {
    id: 610117,
    mapName: '高陵区',

    mapParentId: 610100
  },
  {
    id: 610118,
    mapName: '鄠邑区',

    mapParentId: 610100
  },
  {
    id: 610122,
    mapName: '蓝田县',

    mapParentId: 610100
  },
  {
    id: 610124,
    mapName: '周至县',

    mapParentId: 610100
  },
  {
    id: 610202,
    mapName: '王益区',

    mapParentId: 610200
  },
  {
    id: 610203,
    mapName: '印台区',

    mapParentId: 610200
  },
  {
    id: 610204,
    mapName: '耀州区',

    mapParentId: 610200
  },
  {
    id: 610222,
    mapName: '宜君县',

    mapParentId: 610200
  },
  {
    id: 610302,
    mapName: '渭滨区',

    mapParentId: 610300
  },
  {
    id: 610303,
    mapName: '金台区',

    mapParentId: 610300
  },
  {
    id: 610304,
    mapName: '陈仓区',

    mapParentId: 610300
  },
  {
    id: 610322,
    mapName: '凤翔县',

    mapParentId: 610300
  },
  {
    id: 610323,
    mapName: '岐山县',

    mapParentId: 610300
  },
  {
    id: 610324,
    mapName: '扶风县',

    mapParentId: 610300
  },
  {
    id: 610326,
    mapName: '眉县',

    mapParentId: 610300
  },
  {
    id: 610327,
    mapName: '陇县',

    mapParentId: 610300
  },
  {
    id: 610328,
    mapName: '千阳县',

    mapParentId: 610300
  },
  {
    id: 610329,
    mapName: '麟游县',

    mapParentId: 610300
  },
  {
    id: 610330,
    mapName: '凤县',

    mapParentId: 610300
  },
  {
    id: 610331,
    mapName: '太白县',

    mapParentId: 610300
  },
  {
    id: 610402,
    mapName: '秦都区',

    mapParentId: 610400
  },
  {
    id: 610403,
    mapName: '杨陵区',

    mapParentId: 610400
  },
  {
    id: 610404,
    mapName: '渭城区',

    mapParentId: 610400
  },
  {
    id: 610422,
    mapName: '三原县',

    mapParentId: 610400
  },
  {
    id: 610423,
    mapName: '泾阳县',

    mapParentId: 610400
  },
  {
    id: 610424,
    mapName: '乾县',

    mapParentId: 610400
  },
  {
    id: 610425,
    mapName: '礼泉县',

    mapParentId: 610400
  },
  {
    id: 610426,
    mapName: '永寿县',

    mapParentId: 610400
  },
  {
    id: 610428,
    mapName: '长武县',

    mapParentId: 610400
  },
  {
    id: 610429,
    mapName: '旬邑县',

    mapParentId: 610400
  },
  {
    id: 610430,
    mapName: '淳化县',

    mapParentId: 610400
  },
  {
    id: 610431,
    mapName: '武功县',

    mapParentId: 610400
  },
  {
    id: 610481,
    mapName: '兴平市',

    mapParentId: 610400
  },
  {
    id: 610482,
    mapName: '彬州市',

    mapParentId: 610400
  },
  {
    id: 610502,
    mapName: '临渭区',

    mapParentId: 610500
  },
  {
    id: 610503,
    mapName: '华州区',

    mapParentId: 610500
  },
  {
    id: 610522,
    mapName: '潼关县',

    mapParentId: 610500
  },
  {
    id: 610523,
    mapName: '大荔县',

    mapParentId: 610500
  },
  {
    id: 610524,
    mapName: '合阳县',

    mapParentId: 610500
  },
  {
    id: 610525,
    mapName: '澄城县',

    mapParentId: 610500
  },
  {
    id: 610526,
    mapName: '蒲城县',

    mapParentId: 610500
  },
  {
    id: 610527,
    mapName: '白水县',

    mapParentId: 610500
  },
  {
    id: 610528,
    mapName: '富平县',

    mapParentId: 610500
  },
  {
    id: 610581,
    mapName: '韩城市',

    mapParentId: 610500
  },
  {
    id: 610582,
    mapName: '华阴市',

    mapParentId: 610500
  },
  {
    id: 610602,
    mapName: '宝塔区',

    mapParentId: 610600
  },
  {
    id: 610603,
    mapName: '安塞区',

    mapParentId: 610600
  },
  {
    id: 610621,
    mapName: '延长县',

    mapParentId: 610600
  },
  {
    id: 610622,
    mapName: '延川县',

    mapParentId: 610600
  },
  {
    id: 610623,
    mapName: '子长县',

    mapParentId: 610600
  },
  {
    id: 610625,
    mapName: '志丹县',

    mapParentId: 610600
  },
  {
    id: 610626,
    mapName: '吴起县',

    mapParentId: 610600
  },
  {
    id: 610627,
    mapName: '甘泉县',

    mapParentId: 610600
  },
  {
    id: 610628,
    mapName: '富县',

    mapParentId: 610600
  },
  {
    id: 610629,
    mapName: '洛川县',

    mapParentId: 610600
  },
  {
    id: 610630,
    mapName: '宜川县',

    mapParentId: 610600
  },
  {
    id: 610631,
    mapName: '黄龙县',

    mapParentId: 610600
  },
  {
    id: 610632,
    mapName: '黄陵县',

    mapParentId: 610600
  },
  {
    id: 610702,
    mapName: '汉台区',

    mapParentId: 610700
  },
  {
    id: 610703,
    mapName: '南郑区',

    mapParentId: 610700
  },
  {
    id: 610722,
    mapName: '城固县',

    mapParentId: 610700
  },
  {
    id: 610723,
    mapName: '洋县',

    mapParentId: 610700
  },
  {
    id: 610724,
    mapName: '西乡县',

    mapParentId: 610700
  },
  {
    id: 610725,
    mapName: '勉县',

    mapParentId: 610700
  },
  {
    id: 610726,
    mapName: '宁强县',

    mapParentId: 610700
  },
  {
    id: 610727,
    mapName: '略阳县',

    mapParentId: 610700
  },
  {
    id: 610728,
    mapName: '镇巴县',

    mapParentId: 610700
  },
  {
    id: 610729,
    mapName: '留坝县',

    mapParentId: 610700
  },
  {
    id: 610730,
    mapName: '佛坪县',

    mapParentId: 610700
  },
  {
    id: 610802,
    mapName: '榆阳区',

    mapParentId: 610800
  },
  {
    id: 610803,
    mapName: '横山区',

    mapParentId: 610800
  },
  {
    id: 610822,
    mapName: '府谷县',

    mapParentId: 610800
  },
  {
    id: 610824,
    mapName: '靖边县',

    mapParentId: 610800
  },
  {
    id: 610825,
    mapName: '定边县',

    mapParentId: 610800
  },
  {
    id: 610826,
    mapName: '绥德县',

    mapParentId: 610800
  },
  {
    id: 610827,
    mapName: '米脂县',

    mapParentId: 610800
  },
  {
    id: 610828,
    mapName: '佳县',

    mapParentId: 610800
  },
  {
    id: 610829,
    mapName: '吴堡县',

    mapParentId: 610800
  },
  {
    id: 610830,
    mapName: '清涧县',

    mapParentId: 610800
  },
  {
    id: 610831,
    mapName: '子洲县',

    mapParentId: 610800
  },
  {
    id: 610881,
    mapName: '神木市',

    mapParentId: 610800
  },
  {
    id: 610902,
    mapName: '汉滨区',

    mapParentId: 610900
  },
  {
    id: 610921,
    mapName: '汉阴县',

    mapParentId: 610900
  },
  {
    id: 610922,
    mapName: '石泉县',

    mapParentId: 610900
  },
  {
    id: 610923,
    mapName: '宁陕县',

    mapParentId: 610900
  },
  {
    id: 610924,
    mapName: '紫阳县',

    mapParentId: 610900
  },
  {
    id: 610925,
    mapName: '岚皋县',

    mapParentId: 610900
  },
  {
    id: 610926,
    mapName: '平利县',

    mapParentId: 610900
  },
  {
    id: 610927,
    mapName: '镇坪县',

    mapParentId: 610900
  },
  {
    id: 610928,
    mapName: '旬阳县',

    mapParentId: 610900
  },
  {
    id: 610929,
    mapName: '白河县',

    mapParentId: 610900
  },
  {
    id: 611002,
    mapName: '商州区',

    mapParentId: 611000
  },
  {
    id: 611021,
    mapName: '洛南县',

    mapParentId: 611000
  },
  {
    id: 611022,
    mapName: '丹凤县',

    mapParentId: 611000
  },
  {
    id: 611023,
    mapName: '商南县',

    mapParentId: 611000
  },
  {
    id: 611024,
    mapName: '山阳县',

    mapParentId: 611000
  },
  {
    id: 611025,
    mapName: '镇安县',

    mapParentId: 611000
  },
  {
    id: 611026,
    mapName: '柞水县',

    mapParentId: 611000
  },
  {
    id: 620102,
    mapName: '城关区',

    mapParentId: 620100
  },
  {
    id: 620103,
    mapName: '七里河区',

    mapParentId: 620100
  },
  {
    id: 620104,
    mapName: '西固区',

    mapParentId: 620100
  },
  {
    id: 620105,
    mapName: '安宁区',

    mapParentId: 620100
  },
  {
    id: 620111,
    mapName: '红古区',

    mapParentId: 620100
  },
  {
    id: 620121,
    mapName: '永登县',

    mapParentId: 620100
  },
  {
    id: 620122,
    mapName: '皋兰县',

    mapParentId: 620100
  },
  {
    id: 620123,
    mapName: '榆中县',

    mapParentId: 620100
  },
  {
    id: 620302,
    mapName: '金川区',

    mapParentId: 620300
  },
  {
    id: 620321,
    mapName: '永昌县',

    mapParentId: 620300
  },
  {
    id: 620402,
    mapName: '白银区',

    mapParentId: 620400
  },
  {
    id: 620403,
    mapName: '平川区',

    mapParentId: 620400
  },
  {
    id: 620421,
    mapName: '靖远县',

    mapParentId: 620400
  },
  {
    id: 620422,
    mapName: '会宁县',

    mapParentId: 620400
  },
  {
    id: 620423,
    mapName: '景泰县',

    mapParentId: 620400
  },
  {
    id: 620502,
    mapName: '秦州区',

    mapParentId: 620500
  },
  {
    id: 620503,
    mapName: '麦积区',

    mapParentId: 620500
  },
  {
    id: 620521,
    mapName: '清水县',

    mapParentId: 620500
  },
  {
    id: 620522,
    mapName: '秦安县',

    mapParentId: 620500
  },
  {
    id: 620523,
    mapName: '甘谷县',

    mapParentId: 620500
  },
  {
    id: 620524,
    mapName: '武山县',

    mapParentId: 620500
  },
  {
    id: 620525,
    mapName: '张家川回族自治县',

    mapParentId: 620500
  },
  {
    id: 620602,
    mapName: '凉州区',

    mapParentId: 620600
  },
  {
    id: 620621,
    mapName: '民勤县',

    mapParentId: 620600
  },
  {
    id: 620622,
    mapName: '古浪县',

    mapParentId: 620600
  },
  {
    id: 620623,
    mapName: '天祝藏族自治县',

    mapParentId: 620600
  },
  {
    id: 620702,
    mapName: '甘州区',

    mapParentId: 620700
  },
  {
    id: 620721,
    mapName: '肃南裕固族自治县',

    mapParentId: 620700
  },
  {
    id: 620722,
    mapName: '民乐县',

    mapParentId: 620700
  },
  {
    id: 620723,
    mapName: '临泽县',

    mapParentId: 620700
  },
  {
    id: 620724,
    mapName: '高台县',

    mapParentId: 620700
  },
  {
    id: 620725,
    mapName: '山丹县',

    mapParentId: 620700
  },
  {
    id: 620802,
    mapName: '崆峒区',

    mapParentId: 620800
  },
  {
    id: 620821,
    mapName: '泾川县',

    mapParentId: 620800
  },
  {
    id: 620822,
    mapName: '灵台县',

    mapParentId: 620800
  },
  {
    id: 620823,
    mapName: '崇信县',

    mapParentId: 620800
  },
  {
    id: 620825,
    mapName: '庄浪县',

    mapParentId: 620800
  },
  {
    id: 620826,
    mapName: '静宁县',

    mapParentId: 620800
  },
  {
    id: 620881,
    mapName: '华亭市',

    mapParentId: 620800
  },
  {
    id: 620902,
    mapName: '肃州区',

    mapParentId: 620900
  },
  {
    id: 620921,
    mapName: '金塔县',

    mapParentId: 620900
  },
  {
    id: 620922,
    mapName: '瓜州县',

    mapParentId: 620900
  },
  {
    id: 620923,
    mapName: '肃北蒙古族自治县',

    mapParentId: 620900
  },
  {
    id: 620924,
    mapName: '阿克塞哈萨克族自治县',

    mapParentId: 620900
  },
  {
    id: 620981,
    mapName: '玉门市',

    mapParentId: 620900
  },
  {
    id: 620982,
    mapName: '敦煌市',

    mapParentId: 620900
  },
  {
    id: 621002,
    mapName: '西峰区',

    mapParentId: 621000
  },
  {
    id: 621021,
    mapName: '庆城县',

    mapParentId: 621000
  },
  {
    id: 621022,
    mapName: '环县',

    mapParentId: 621000
  },
  {
    id: 621023,
    mapName: '华池县',

    mapParentId: 621000
  },
  {
    id: 621024,
    mapName: '合水县',

    mapParentId: 621000
  },
  {
    id: 621025,
    mapName: '正宁县',

    mapParentId: 621000
  },
  {
    id: 621026,
    mapName: '宁县',

    mapParentId: 621000
  },
  {
    id: 621027,
    mapName: '镇原县',

    mapParentId: 621000
  },
  {
    id: 621102,
    mapName: '安定区',

    mapParentId: 621100
  },
  {
    id: 621121,
    mapName: '通渭县',

    mapParentId: 621100
  },
  {
    id: 621122,
    mapName: '陇西县',

    mapParentId: 621100
  },
  {
    id: 621123,
    mapName: '渭源县',

    mapParentId: 621100
  },
  {
    id: 621124,
    mapName: '临洮县',

    mapParentId: 621100
  },
  {
    id: 621125,
    mapName: '漳县',

    mapParentId: 621100
  },
  {
    id: 621126,
    mapName: '岷县',

    mapParentId: 621100
  },
  {
    id: 621202,
    mapName: '武都区',

    mapParentId: 621200
  },
  {
    id: 621221,
    mapName: '成县',

    mapParentId: 621200
  },
  {
    id: 621222,
    mapName: '文县',

    mapParentId: 621200
  },
  {
    id: 621223,
    mapName: '宕昌县',

    mapParentId: 621200
  },
  {
    id: 621224,
    mapName: '康县',

    mapParentId: 621200
  },
  {
    id: 621225,
    mapName: '西和县',

    mapParentId: 621200
  },
  {
    id: 621226,
    mapName: '礼县',

    mapParentId: 621200
  },
  {
    id: 621227,
    mapName: '徽县',

    mapParentId: 621200
  },
  {
    id: 621228,
    mapName: '两当县',

    mapParentId: 621200
  },
  {
    id: 622901,
    mapName: '临夏市',

    mapParentId: 622900
  },
  {
    id: 622921,
    mapName: '临夏县',

    mapParentId: 622900
  },
  {
    id: 622922,
    mapName: '康乐县',

    mapParentId: 622900
  },
  {
    id: 622923,
    mapName: '永靖县',

    mapParentId: 622900
  },
  {
    id: 622924,
    mapName: '广河县',

    mapParentId: 622900
  },
  {
    id: 622925,
    mapName: '和政县',

    mapParentId: 622900
  },
  {
    id: 622926,
    mapName: '东乡族自治县',

    mapParentId: 622900
  },
  {
    id: 622927,
    mapName: '积石山保安族东乡族撒拉族自治县',

    mapParentId: 622900
  },
  {
    id: 623001,
    mapName: '合作市',

    mapParentId: 623000
  },
  {
    id: 623021,
    mapName: '临潭县',

    mapParentId: 623000
  },
  {
    id: 623022,
    mapName: '卓尼县',

    mapParentId: 623000
  },
  {
    id: 623023,
    mapName: '舟曲县',

    mapParentId: 623000
  },
  {
    id: 623024,
    mapName: '迭部县',

    mapParentId: 623000
  },
  {
    id: 623025,
    mapName: '玛曲县',

    mapParentId: 623000
  },
  {
    id: 623026,
    mapName: '碌曲县',

    mapParentId: 623000
  },
  {
    id: 623027,
    mapName: '夏河县',

    mapParentId: 623000
  },
  {
    id: 630102,
    mapName: '城东区',

    mapParentId: 630100
  },
  {
    id: 630103,
    mapName: '城中区',

    mapParentId: 630100
  },
  {
    id: 630104,
    mapName: '城西区',

    mapParentId: 630100
  },
  {
    id: 630105,
    mapName: '城北区',

    mapParentId: 630100
  },
  {
    id: 630121,
    mapName: '大通回族土族自治县',

    mapParentId: 630100
  },
  {
    id: 630122,
    mapName: '湟中县',

    mapParentId: 630100
  },
  {
    id: 630123,
    mapName: '湟源县',

    mapParentId: 630100
  },
  {
    id: 630202,
    mapName: '乐都区',

    mapParentId: 630200
  },
  {
    id: 630203,
    mapName: '平安区',

    mapParentId: 630200
  },
  {
    id: 630222,
    mapName: '民和回族土族自治县',

    mapParentId: 630200
  },
  {
    id: 630223,
    mapName: '互助土族自治县',

    mapParentId: 630200
  },
  {
    id: 630224,
    mapName: '化隆回族自治县',

    mapParentId: 630200
  },
  {
    id: 630225,
    mapName: '循化撒拉族自治县',

    mapParentId: 630200
  },
  {
    id: 632221,
    mapName: '门源回族自治县',

    mapParentId: 632200
  },
  {
    id: 632222,
    mapName: '祁连县',

    mapParentId: 632200
  },
  {
    id: 632223,
    mapName: '海晏县',

    mapParentId: 632200
  },
  {
    id: 632224,
    mapName: '刚察县',

    mapParentId: 632200
  },
  {
    id: 632321,
    mapName: '同仁县',

    mapParentId: 632300
  },
  {
    id: 632322,
    mapName: '尖扎县',

    mapParentId: 632300
  },
  {
    id: 632323,
    mapName: '泽库县',

    mapParentId: 632300
  },
  {
    id: 632324,
    mapName: '河南蒙古族自治县',

    mapParentId: 632300
  },
  {
    id: 632521,
    mapName: '共和县',

    mapParentId: 632500
  },
  {
    id: 632522,
    mapName: '同德县',

    mapParentId: 632500
  },
  {
    id: 632523,
    mapName: '贵德县',

    mapParentId: 632500
  },
  {
    id: 632524,
    mapName: '兴海县',

    mapParentId: 632500
  },
  {
    id: 632525,
    mapName: '贵南县',

    mapParentId: 632500
  },
  {
    id: 632621,
    mapName: '玛沁县',

    mapParentId: 632600
  },
  {
    id: 632622,
    mapName: '班玛县',

    mapParentId: 632600
  },
  {
    id: 632623,
    mapName: '甘德县',

    mapParentId: 632600
  },
  {
    id: 632624,
    mapName: '达日县',

    mapParentId: 632600
  },
  {
    id: 632625,
    mapName: '久治县',

    mapParentId: 632600
  },
  {
    id: 632626,
    mapName: '玛多县',

    mapParentId: 632600
  },
  {
    id: 632701,
    mapName: '玉树市',

    mapParentId: 632700
  },
  {
    id: 632722,
    mapName: '杂多县',

    mapParentId: 632700
  },
  {
    id: 632723,
    mapName: '称多县',

    mapParentId: 632700
  },
  {
    id: 632724,
    mapName: '治多县',

    mapParentId: 632700
  },
  {
    id: 632725,
    mapName: '囊谦县',

    mapParentId: 632700
  },
  {
    id: 632726,
    mapName: '曲麻莱县',

    mapParentId: 632700
  },
  {
    id: 632801,
    mapName: '格尔木市',

    mapParentId: 632800
  },
  {
    id: 632802,
    mapName: '德令哈市',

    mapParentId: 632800
  },
  {
    id: 632803,
    mapName: '茫崖市',

    mapParentId: 632800
  },
  {
    id: 632821,
    mapName: '乌兰县',

    mapParentId: 632800
  },
  {
    id: 632822,
    mapName: '都兰县',

    mapParentId: 632800
  },
  {
    id: 632823,
    mapName: '天峻县',

    mapParentId: 632800
  },
  {
    id: 632825,
    mapName: '海西蒙古族藏族自治州直辖',

    mapParentId: 632800
  },
  {
    id: 640104,
    mapName: '兴庆区',

    mapParentId: 640100
  },
  {
    id: 640105,
    mapName: '西夏区',

    mapParentId: 640100
  },
  {
    id: 640106,
    mapName: '金凤区',

    mapParentId: 640100
  },
  {
    id: 640121,
    mapName: '永宁县',

    mapParentId: 640100
  },
  {
    id: 640122,
    mapName: '贺兰县',

    mapParentId: 640100
  },
  {
    id: 640181,
    mapName: '灵武市',

    mapParentId: 640100
  },
  {
    id: 640202,
    mapName: '大武口区',

    mapParentId: 640200
  },
  {
    id: 640205,
    mapName: '惠农区',

    mapParentId: 640200
  },
  {
    id: 640221,
    mapName: '平罗县',

    mapParentId: 640200
  },
  {
    id: 640302,
    mapName: '利通区',

    mapParentId: 640300
  },
  {
    id: 640303,
    mapName: '红寺堡区',

    mapParentId: 640300
  },
  {
    id: 640323,
    mapName: '盐池县',

    mapParentId: 640300
  },
  {
    id: 640324,
    mapName: '同心县',

    mapParentId: 640300
  },
  {
    id: 640381,
    mapName: '青铜峡市',

    mapParentId: 640300
  },
  {
    id: 640402,
    mapName: '原州区',

    mapParentId: 640400
  },
  {
    id: 640422,
    mapName: '西吉县',

    mapParentId: 640400
  },
  {
    id: 640423,
    mapName: '隆德县',

    mapParentId: 640400
  },
  {
    id: 640424,
    mapName: '泾源县',

    mapParentId: 640400
  },
  {
    id: 640425,
    mapName: '彭阳县',

    mapParentId: 640400
  },
  {
    id: 640502,
    mapName: '沙坡头区',

    mapParentId: 640500
  },
  {
    id: 640521,
    mapName: '中宁县',

    mapParentId: 640500
  },
  {
    id: 640522,
    mapName: '海原县',

    mapParentId: 640500
  },
  {
    id: 650102,
    mapName: '天山区',

    mapParentId: 650100
  },
  {
    id: 650103,
    mapName: '沙依巴克区',

    mapParentId: 650100
  },
  {
    id: 650104,
    mapName: '新市区',

    mapParentId: 650100
  },
  {
    id: 650105,
    mapName: '水磨沟区',

    mapParentId: 650100
  },
  {
    id: 650106,
    mapName: '头屯河区',

    mapParentId: 650100
  },
  {
    id: 650107,
    mapName: '达坂城区',

    mapParentId: 650100
  },
  {
    id: 650109,
    mapName: '米东区',

    mapParentId: 650100
  },
  {
    id: 650121,
    mapName: '乌鲁木齐县',

    mapParentId: 650100
  },
  {
    id: 650202,
    mapName: '独山子区',

    mapParentId: 650200
  },
  {
    id: 650203,
    mapName: '克拉玛依区',

    mapParentId: 650200
  },
  {
    id: 650204,
    mapName: '白碱滩区',

    mapParentId: 650200
  },
  {
    id: 650205,
    mapName: '乌尔禾区',

    mapParentId: 650200
  },
  {
    id: 650402,
    mapName: '高昌区',

    mapParentId: 650400
  },
  {
    id: 650421,
    mapName: '鄯善县',

    mapParentId: 650400
  },
  {
    id: 650422,
    mapName: '托克逊县',

    mapParentId: 650400
  },
  {
    id: 650502,
    mapName: '伊州区',

    mapParentId: 650500
  },
  {
    id: 650521,
    mapName: '巴里坤哈萨克自治县',

    mapParentId: 650500
  },
  {
    id: 650522,
    mapName: '伊吾县',

    mapParentId: 650500
  },
  {
    id: 652301,
    mapName: '昌吉市',

    mapParentId: 652300
  },
  {
    id: 652302,
    mapName: '阜康市',

    mapParentId: 652300
  },
  {
    id: 652323,
    mapName: '呼图壁县',

    mapParentId: 652300
  },
  {
    id: 652324,
    mapName: '玛纳斯县',

    mapParentId: 652300
  },
  {
    id: 652325,
    mapName: '奇台县',

    mapParentId: 652300
  },
  {
    id: 652327,
    mapName: '吉木萨尔县',

    mapParentId: 652300
  },
  {
    id: 652328,
    mapName: '木垒哈萨克自治县',

    mapParentId: 652300
  },
  {
    id: 652701,
    mapName: '博乐市',

    mapParentId: 652700
  },
  {
    id: 652702,
    mapName: '阿拉山口市',

    mapParentId: 652700
  },
  {
    id: 652722,
    mapName: '精河县',

    mapParentId: 652700
  },
  {
    id: 652723,
    mapName: '温泉县',

    mapParentId: 652700
  },
  {
    id: 652801,
    mapName: '库尔勒市',

    mapParentId: 652800
  },
  {
    id: 652822,
    mapName: '轮台县',

    mapParentId: 652800
  },
  {
    id: 652823,
    mapName: '尉犁县',

    mapParentId: 652800
  },
  {
    id: 652824,
    mapName: '若羌县',

    mapParentId: 652800
  },
  {
    id: 652825,
    mapName: '且末县',

    mapParentId: 652800
  },
  {
    id: 652826,
    mapName: '焉耆回族自治县',

    mapParentId: 652800
  },
  {
    id: 652827,
    mapName: '和静县',

    mapParentId: 652800
  },
  {
    id: 652828,
    mapName: '和硕县',

    mapParentId: 652800
  },
  {
    id: 652829,
    mapName: '博湖县',

    mapParentId: 652800
  },
  {
    id: 652901,
    mapName: '阿克苏市',

    mapParentId: 652900
  },
  {
    id: 652922,
    mapName: '温宿县',

    mapParentId: 652900
  },
  {
    id: 652923,
    mapName: '库车县',

    mapParentId: 652900
  },
  {
    id: 652924,
    mapName: '沙雅县',

    mapParentId: 652900
  },
  {
    id: 652925,
    mapName: '新和县',

    mapParentId: 652900
  },
  {
    id: 652926,
    mapName: '拜城县',

    mapParentId: 652900
  },
  {
    id: 652927,
    mapName: '乌什县',

    mapParentId: 652900
  },
  {
    id: 652928,
    mapName: '阿瓦提县',

    mapParentId: 652900
  },
  {
    id: 652929,
    mapName: '柯坪县',

    mapParentId: 652900
  },
  {
    id: 653001,
    mapName: '阿图什市',

    mapParentId: 653000
  },
  {
    id: 653022,
    mapName: '阿克陶县',

    mapParentId: 653000
  },
  {
    id: 653023,
    mapName: '阿合奇县',

    mapParentId: 653000
  },
  {
    id: 653024,
    mapName: '乌恰县',

    mapParentId: 653000
  },
  {
    id: 653101,
    mapName: '喀什市',

    mapParentId: 653100
  },
  {
    id: 653121,
    mapName: '疏附县',

    mapParentId: 653100
  },
  {
    id: 653122,
    mapName: '疏勒县',

    mapParentId: 653100
  },
  {
    id: 653123,
    mapName: '英吉沙县',

    mapParentId: 653100
  },
  {
    id: 653124,
    mapName: '泽普县',

    mapParentId: 653100
  },
  {
    id: 653125,
    mapName: '莎车县',

    mapParentId: 653100
  },
  {
    id: 653126,
    mapName: '叶城县',

    mapParentId: 653100
  },
  {
    id: 653127,
    mapName: '麦盖提县',

    mapParentId: 653100
  },
  {
    id: 653128,
    mapName: '岳普湖县',

    mapParentId: 653100
  },
  {
    id: 653129,
    mapName: '伽师县',

    mapParentId: 653100
  },
  {
    id: 653130,
    mapName: '巴楚县',

    mapParentId: 653100
  },
  {
    id: 653131,
    mapName: '塔什库尔干塔吉克自治县',

    mapParentId: 653100
  },
  {
    id: 653201,
    mapName: '和田市',

    mapParentId: 653200
  },
  {
    id: 653221,
    mapName: '和田县',

    mapParentId: 653200
  },
  {
    id: 653222,
    mapName: '墨玉县',

    mapParentId: 653200
  },
  {
    id: 653223,
    mapName: '皮山县',

    mapParentId: 653200
  },
  {
    id: 653224,
    mapName: '洛浦县',

    mapParentId: 653200
  },
  {
    id: 653225,
    mapName: '策勒县',

    mapParentId: 653200
  },
  {
    id: 653226,
    mapName: '于田县',

    mapParentId: 653200
  },
  {
    id: 653227,
    mapName: '民丰县',

    mapParentId: 653200
  },
  {
    id: 654002,
    mapName: '伊宁市',

    mapParentId: 654000
  },
  {
    id: 654003,
    mapName: '奎屯市',

    mapParentId: 654000
  },
  {
    id: 654004,
    mapName: '霍尔果斯市',

    mapParentId: 654000
  },
  {
    id: 654021,
    mapName: '伊宁县',

    mapParentId: 654000
  },
  {
    id: 654022,
    mapName: '察布查尔锡伯自治县',

    mapParentId: 654000
  },
  {
    id: 654023,
    mapName: '霍城县',

    mapParentId: 654000
  },
  {
    id: 654024,
    mapName: '巩留县',

    mapParentId: 654000
  },
  {
    id: 654025,
    mapName: '新源县',

    mapParentId: 654000
  },
  {
    id: 654026,
    mapName: '昭苏县',

    mapParentId: 654000
  },
  {
    id: 654027,
    mapName: '特克斯县',

    mapParentId: 654000
  },
  {
    id: 654028,
    mapName: '尼勒克县',

    mapParentId: 654000
  },
  {
    id: 654201,
    mapName: '塔城市',

    mapParentId: 654200
  },
  {
    id: 654202,
    mapName: '乌苏市',

    mapParentId: 654200
  },
  {
    id: 654221,
    mapName: '额敏县',

    mapParentId: 654200
  },
  {
    id: 654223,
    mapName: '沙湾县',

    mapParentId: 654200
  },
  {
    id: 654224,
    mapName: '托里县',

    mapParentId: 654200
  },
  {
    id: 654225,
    mapName: '裕民县',

    mapParentId: 654200
  },
  {
    id: 654226,
    mapName: '和布克赛尔蒙古自治县',

    mapParentId: 654200
  },
  {
    id: 654301,
    mapName: '阿勒泰市',

    mapParentId: 654300
  },
  {
    id: 654321,
    mapName: '布尔津县',

    mapParentId: 654300
  },
  {
    id: 654322,
    mapName: '富蕴县',

    mapParentId: 654300
  },
  {
    id: 654323,
    mapName: '福海县',

    mapParentId: 654300
  },
  {
    id: 654324,
    mapName: '哈巴河县',

    mapParentId: 654300
  },
  {
    id: 654325,
    mapName: '青河县',

    mapParentId: 654300
  },
  {
    id: 654326,
    mapName: '吉木乃县',

    mapParentId: 654300
  },
  {
    id: 810001,
    mapName: '中西区',

    mapParentId: 81000001
  },
  {
    id: 810002,
    mapName: '湾仔区',

    mapParentId: 81000001
  },
  {
    id: 810003,
    mapName: '东区',

    mapParentId: 81000001
  },
  {
    id: 810004,
    mapName: '南区',

    mapParentId: 81000001
  },
  {
    id: 810005,
    mapName: '油尖旺区',

    mapParentId: 81000001
  },
  {
    id: 810006,
    mapName: '深水埗区',

    mapParentId: 81000001
  },
  {
    id: 810007,
    mapName: '九龙城区',

    mapParentId: 81000001
  },
  {
    id: 810008,
    mapName: '黄大仙区',

    mapParentId: 81000001
  },
  {
    id: 810009,
    mapName: '观塘区',

    mapParentId: 81000001
  },
  {
    id: 810010,
    mapName: '荃湾区',

    mapParentId: 81000001
  },
  {
    id: 810011,
    mapName: '屯门区',

    mapParentId: 81000001
  },
  {
    id: 810012,
    mapName: '元朗区',

    mapParentId: 81000001
  },
  {
    id: 810013,
    mapName: '北区',

    mapParentId: 81000001
  },
  {
    id: 810014,
    mapName: '大埔区',

    mapParentId: 81000001
  },
  {
    id: 810015,
    mapName: '西贡区',

    mapParentId: 81000001
  },
  {
    id: 810016,
    mapName: '沙田区',

    mapParentId: 81000001
  },
  {
    id: 810017,
    mapName: '葵青区',

    mapParentId: 81000001
  },
  {
    id: 810018,
    mapName: '离岛区',

    mapParentId: 81000001
  },
  {
    id: 820001,
    mapName: '花地玛堂区',

    mapParentId: 82000001
  },
  {
    id: 820002,
    mapName: '花王堂区',

    mapParentId: 82000001
  },
  {
    id: 820003,
    mapName: '望德堂区',

    mapParentId: 82000001
  },
  {
    id: 820004,
    mapName: '大堂区',

    mapParentId: 82000001
  },
  {
    id: 820005,
    mapName: '风顺堂区',

    mapParentId: 82000001
  },
  {
    id: 820006,
    mapName: '嘉模堂区',

    mapParentId: 82000001
  },
  {
    id: 820007,
    mapName: '路凼填海区',

    mapParentId: 82000001
  },
  {
    id: 820008,
    mapName: '圣方济各堂区',

    mapParentId: 82000001
  },
  {
    id: 41900101,
    mapName: '济源市坡头镇',

    mapParentId: 419001
  },
  {
    id: 41900102,
    mapName: '济源市梨林镇',

    mapParentId: 419001
  },
  {
    id: 41900103,
    mapName: '济源市思礼镇',

    mapParentId: 419001
  },
  {
    id: 41900104,
    mapName: '济源市大峪镇',

    mapParentId: 419001
  },
  {
    id: 41900105,
    mapName: '济源市五龙口镇',

    mapParentId: 419001
  },
  {
    id: 41900106,
    mapName: '济源市王屋镇',

    mapParentId: 419001
  },
  {
    id: 41900107,
    mapName: '济源市玉泉街道',

    mapParentId: 419001
  },
  {
    id: 41900108,
    mapName: '济源市轵城镇',

    mapParentId: 419001
  },
  {
    id: 41900109,
    mapName: '济源市济水街道',

    mapParentId: 419001
  },
  {
    id: 41900110,
    mapName: '济源市沁园街道',

    mapParentId: 419001
  },
  {
    id: 41900111,
    mapName: '济源市下冶镇',

    mapParentId: 419001
  },
  {
    id: 41900112,
    mapName: '济源市克井镇',

    mapParentId: 419001
  },
  {
    id: 41900113,
    mapName: '济源市天坛街道',

    mapParentId: 419001
  },
  {
    id: 41900114,
    mapName: '济源市邵原镇',

    mapParentId: 419001
  },
  {
    id: 41900115,
    mapName: '济源市北海街道',

    mapParentId: 419001
  },
  {
    id: 41900116,
    mapName: '济源市承留镇',

    mapParentId: 419001
  },
  {
    id: 42900401,
    mapName: '畜禽良种场',

    mapParentId: 429004
  },
  {
    id: 42900402,
    mapName: '工业园区',

    mapParentId: 429004
  },
  {
    id: 42900403,
    mapName: '豆河镇',

    mapParentId: 429004
  },
  {
    id: 42900404,
    mapName: '沙湖镇',

    mapParentId: 429004
  },
  {
    id: 42900405,
    mapName: '通海口镇',

    mapParentId: 429004
  },
  {
    id: 42900406,
    mapName: '胡场镇',

    mapParentId: 429004
  },
  {
    id: 42900407,
    mapName: '长倘口镇',

    mapParentId: 429004
  },
  {
    id: 42900408,
    mapName: '五湖渔场',

    mapParentId: 429004
  },
  {
    id: 42900409,
    mapName: '干河街道',

    mapParentId: 429004
  },
  {
    id: 42900410,
    mapName: '杨林尾镇',

    mapParentId: 429004
  },
  {
    id: 42900411,
    mapName: '西流河镇',

    mapParentId: 429004
  },
  {
    id: 42900412,
    mapName: '赵西垸林场',

    mapParentId: 429004
  },
  {
    id: 42900413,
    mapName: '九合垸原种场',

    mapParentId: 429004
  },
  {
    id: 42900414,
    mapName: '彭场镇',

    mapParentId: 429004
  },
  {
    id: 42900415,
    mapName: '沔城回族镇',

    mapParentId: 429004
  },
  {
    id: 42900416,
    mapName: '龙华山街道',

    mapParentId: 429004
  },
  {
    id: 42900417,
    mapName: '沙湖原种场',

    mapParentId: 429004
  },
  {
    id: 42900418,
    mapName: '陈场镇',

    mapParentId: 429004
  },
  {
    id: 42900419,
    mapName: '郑场镇',

    mapParentId: 429004
  },
  {
    id: 42900420,
    mapName: '郭河镇',

    mapParentId: 429004
  },
  {
    id: 42900421,
    mapName: '排湖风景区',

    mapParentId: 429004
  },
  {
    id: 42900422,
    mapName: '沙嘴街道',

    mapParentId: 429004
  },
  {
    id: 42900423,
    mapName: '毛嘴镇',

    mapParentId: 429004
  },
  {
    id: 42900424,
    mapName: '张沟镇',

    mapParentId: 429004
  },
  {
    id: 42900425,
    mapName: '三伏潭镇',

    mapParentId: 429004
  },
  {
    id: 42900501,
    mapName: '积玉口镇',

    mapParentId: 429005
  },
  {
    id: 42900502,
    mapName: '泰丰街道',

    mapParentId: 429005
  },
  {
    id: 42900503,
    mapName: '广华街道',

    mapParentId: 429005
  },
  {
    id: 42900504,
    mapName: '周矶管理区',

    mapParentId: 429005
  },
  {
    id: 42900505,
    mapName: '潜江经济开发区',

    mapParentId: 429005
  },
  {
    id: 42900506,
    mapName: '高场街道',

    mapParentId: 429005
  },
  {
    id: 42900507,
    mapName: '周矶街道',

    mapParentId: 429005
  },
  {
    id: 42900508,
    mapName: '总口管理区',

    mapParentId: 429005
  },
  {
    id: 42900509,
    mapName: '运粮湖管理区',

    mapParentId: 429005
  },
  {
    id: 42900510,
    mapName: '王场镇',

    mapParentId: 429005
  },
  {
    id: 42900511,
    mapName: '园林街道',

    mapParentId: 429005
  },
  {
    id: 42900512,
    mapName: '白鹭湖管理区',

    mapParentId: 429005
  },
  {
    id: 42900513,
    mapName: '竹根滩镇',

    mapParentId: 429005
  },
  {
    id: 42900514,
    mapName: '渔洋镇',

    mapParentId: 429005
  },
  {
    id: 42900515,
    mapName: '熊口镇',

    mapParentId: 429005
  },
  {
    id: 42900516,
    mapName: '熊口管理区',

    mapParentId: 429005
  },
  {
    id: 42900517,
    mapName: '后湖管理区',

    mapParentId: 429005
  },
  {
    id: 42900518,
    mapName: '江汉石油管理局',

    mapParentId: 429005
  },
  {
    id: 42900519,
    mapName: '张金镇',

    mapParentId: 429005
  },
  {
    id: 42900520,
    mapName: '杨市街道',

    mapParentId: 429005
  },
  {
    id: 42900521,
    mapName: '老新镇',

    mapParentId: 429005
  },
  {
    id: 42900522,
    mapName: '龙湾镇',

    mapParentId: 429005
  },
  {
    id: 42900523,
    mapName: '浩口原种场',

    mapParentId: 429005
  },
  {
    id: 42900524,
    mapName: '浩口镇',

    mapParentId: 429005
  },
  {
    id: 42900525,
    mapName: '高石碑镇',

    mapParentId: 429005
  },
  {
    id: 42900601,
    mapName: '胡市镇',

    mapParentId: 429006
  },
  {
    id: 42900602,
    mapName: '黄潭镇',

    mapParentId: 429006
  },
  {
    id: 42900603,
    mapName: '多祥镇',

    mapParentId: 429006
  },
  {
    id: 42900604,
    mapName: '沉湖管委会',

    mapParentId: 429006
  },
  {
    id: 42900605,
    mapName: '干驿镇',

    mapParentId: 429006
  },
  {
    id: 42900606,
    mapName: '横林镇',

    mapParentId: 429006
  },
  {
    id: 42900607,
    mapName: '马湾镇',

    mapParentId: 429006
  },
  {
    id: 42900608,
    mapName: '蒋湖农场',

    mapParentId: 429006
  },
  {
    id: 42900609,
    mapName: '小板镇',

    mapParentId: 429006
  },
  {
    id: 42900610,
    mapName: '岳口镇',

    mapParentId: 429006
  },
  {
    id: 42900611,
    mapName: '多宝镇',

    mapParentId: 429006
  },
  {
    id: 42900612,
    mapName: '蒋场镇',

    mapParentId: 429006
  },
  {
    id: 42900613,
    mapName: '石家河镇',

    mapParentId: 429006
  },
  {
    id: 42900614,
    mapName: '彭市镇',

    mapParentId: 429006
  },
  {
    id: 42900615,
    mapName: '佛子山镇',

    mapParentId: 429006
  },
  {
    id: 42900616,
    mapName: '九真镇',

    mapParentId: 429006
  },
  {
    id: 42900617,
    mapName: '竟陵街道',

    mapParentId: 429006
  },
  {
    id: 42900618,
    mapName: '侨乡街道开发区',

    mapParentId: 429006
  },
  {
    id: 42900619,
    mapName: '麻洋镇',

    mapParentId: 429006
  },
  {
    id: 42900620,
    mapName: '杨林街道',

    mapParentId: 429006
  },
  {
    id: 42900621,
    mapName: '汪场镇',

    mapParentId: 429006
  },
  {
    id: 42900622,
    mapName: '白茅湖农场',

    mapParentId: 429006
  },
  {
    id: 42900623,
    mapName: '张港镇',

    mapParentId: 429006
  },
  {
    id: 42900624,
    mapName: '渔薪镇',

    mapParentId: 429006
  },
  {
    id: 42900625,
    mapName: '皂市镇',

    mapParentId: 429006
  },
  {
    id: 42900626,
    mapName: '拖市镇',

    mapParentId: 429006
  },
  {
    id: 42900627,
    mapName: '净潭乡',

    mapParentId: 429006
  },
  {
    id: 42900628,
    mapName: '卢市镇',

    mapParentId: 429006
  },
  {
    id: 42902101,
    mapName: '木鱼镇',

    mapParentId: 429021
  },
  {
    id: 42902102,
    mapName: '下谷坪土家族乡',

    mapParentId: 429021
  },
  {
    id: 42902103,
    mapName: '新华镇',

    mapParentId: 429021
  },
  {
    id: 42902104,
    mapName: '九湖镇',

    mapParentId: 429021
  },
  {
    id: 42902105,
    mapName: '宋洛乡',

    mapParentId: 429021
  },
  {
    id: 42902106,
    mapName: '松柏镇',

    mapParentId: 429021
  },
  {
    id: 42902107,
    mapName: '红坪镇',

    mapParentId: 429021
  },
  {
    id: 42902108,
    mapName: '阳日镇',

    mapParentId: 429021
  },
  {
    id: 44190001,
    mapName: '莞城街道',

    mapParentId: 441900
  },
  {
    id: 44190002,
    mapName: '常平镇',

    mapParentId: 441900
  },
  {
    id: 44190003,
    mapName: '望牛墩镇',

    mapParentId: 441900
  },
  {
    id: 44190004,
    mapName: '大朗镇',

    mapParentId: 441900
  },
  {
    id: 44190005,
    mapName: '麻涌镇',

    mapParentId: 441900
  },
  {
    id: 44190006,
    mapName: '黄江镇',

    mapParentId: 441900
  },
  {
    id: 44190007,
    mapName: '桥头镇',

    mapParentId: 441900
  },
  {
    id: 44190008,
    mapName: '凤岗镇',

    mapParentId: 441900
  },
  {
    id: 44190009,
    mapName: '东莞生态园',

    mapParentId: 441900
  },
  {
    id: 44190010,
    mapName: '松山湖管委会',

    mapParentId: 441900
  },
  {
    id: 44190011,
    mapName: '樟木头镇',

    mapParentId: 441900
  },
  {
    id: 44190012,
    mapName: '石龙镇',

    mapParentId: 441900
  },
  {
    id: 44190013,
    mapName: '高埗镇',

    mapParentId: 441900
  },
  {
    id: 44190014,
    mapName: '塘厦镇',

    mapParentId: 441900
  },
  {
    id: 44190015,
    mapName: '寮步镇',

    mapParentId: 441900
  },
  {
    id: 44190016,
    mapName: '谢岗镇',

    mapParentId: 441900
  },
  {
    id: 44190017,
    mapName: '厚街镇',

    mapParentId: 441900
  },
  {
    id: 44190018,
    mapName: '虎门镇',

    mapParentId: 441900
  },
  {
    id: 44190019,
    mapName: '南城街道',

    mapParentId: 441900
  },
  {
    id: 44190020,
    mapName: '虎门港管委会',

    mapParentId: 441900
  },
  {
    id: 44190021,
    mapName: '横沥镇',

    mapParentId: 441900
  },
  {
    id: 44190022,
    mapName: '企石镇',

    mapParentId: 441900
  },
  {
    id: 44190023,
    mapName: '东坑镇',

    mapParentId: 441900
  },
  {
    id: 44190024,
    mapName: '东城街道',

    mapParentId: 441900
  },
  {
    id: 44190025,
    mapName: '石排镇',

    mapParentId: 441900
  },
  {
    id: 44190026,
    mapName: '洪梅镇',

    mapParentId: 441900
  },
  {
    id: 44190027,
    mapName: '长安镇',

    mapParentId: 441900
  },
  {
    id: 44190028,
    mapName: '沙田镇',

    mapParentId: 441900
  },
  {
    id: 44190029,
    mapName: '大岭山镇',

    mapParentId: 441900
  },
  {
    id: 44190030,
    mapName: '道滘镇',

    mapParentId: 441900
  },
  {
    id: 44190031,
    mapName: '茶山镇',

    mapParentId: 441900
  },
  {
    id: 44190032,
    mapName: '清溪镇',

    mapParentId: 441900
  },
  {
    id: 44190033,
    mapName: '中堂镇',

    mapParentId: 441900
  },
  {
    id: 44190034,
    mapName: '万江街道',

    mapParentId: 441900
  },
  {
    id: 44190035,
    mapName: '石碣镇',

    mapParentId: 441900
  },
  {
    id: 44200001,
    mapName: '三角镇',

    mapParentId: 442000
  },
  {
    id: 44200002,
    mapName: '横栏镇',

    mapParentId: 442000
  },
  {
    id: 44200003,
    mapName: '五桂山街道',

    mapParentId: 442000
  },
  {
    id: 44200004,
    mapName: '东升镇',

    mapParentId: 442000
  },
  {
    id: 44200005,
    mapName: '神湾镇',

    mapParentId: 442000
  },
  {
    id: 44200006,
    mapName: '火炬开发区街道',

    mapParentId: 442000
  },
  {
    id: 44200007,
    mapName: '小榄镇',

    mapParentId: 442000
  },
  {
    id: 44200008,
    mapName: '南朗镇',

    mapParentId: 442000
  },
  {
    id: 44200009,
    mapName: '古镇镇',

    mapParentId: 442000
  },
  {
    id: 44200010,
    mapName: '民众镇',

    mapParentId: 442000
  },
  {
    id: 44200011,
    mapName: '港口镇',

    mapParentId: 442000
  },
  {
    id: 44200012,
    mapName: '三乡镇',

    mapParentId: 442000
  },
  {
    id: 44200013,
    mapName: '石岐区街道',

    mapParentId: 442000
  },
  {
    id: 44200014,
    mapName: '大涌镇',

    mapParentId: 442000
  },
  {
    id: 44200015,
    mapName: '南头镇',

    mapParentId: 442000
  },
  {
    id: 44200016,
    mapName: '黄圃镇',

    mapParentId: 442000
  },
  {
    id: 44200017,
    mapName: '东区街道',

    mapParentId: 442000
  },
  {
    id: 44200018,
    mapName: '阜沙镇',

    mapParentId: 442000
  },
  {
    id: 44200019,
    mapName: '坦洲镇',

    mapParentId: 442000
  },
  {
    id: 44200020,
    mapName: '西区街道',

    mapParentId: 442000
  },
  {
    id: 44200021,
    mapName: '板芙镇',

    mapParentId: 442000
  },
  {
    id: 44200022,
    mapName: '南区街道',

    mapParentId: 442000
  },
  {
    id: 44200023,
    mapName: '沙溪镇',

    mapParentId: 442000
  },
  {
    id: 44200024,
    mapName: '东凤镇',

    mapParentId: 442000
  },
  {
    id: 46040001,
    mapName: '洋浦经济开发区',

    mapParentId: 460400
  },
  {
    id: 46040002,
    mapName: '光村镇',

    mapParentId: 460400
  },
  {
    id: 46040003,
    mapName: '兰洋镇',

    mapParentId: 460400
  },
  {
    id: 46040004,
    mapName: '东成镇',

    mapParentId: 460400
  },
  {
    id: 46040005,
    mapName: '和庆镇',

    mapParentId: 460400
  },
  {
    id: 46040006,
    mapName: '国营蓝洋农场',

    mapParentId: 460400
  },
  {
    id: 46040007,
    mapName: '海头镇',

    mapParentId: 460400
  },
  {
    id: 46040008,
    mapName: '王五镇',

    mapParentId: 460400
  },
  {
    id: 46040009,
    mapName: '华南热作学院',

    mapParentId: 460400
  },
  {
    id: 46040010,
    mapName: '木棠镇',

    mapParentId: 460400
  },
  {
    id: 46040011,
    mapName: '中和镇',

    mapParentId: 460400
  },
  {
    id: 46040012,
    mapName: '新州镇',

    mapParentId: 460400
  },
  {
    id: 46040013,
    mapName: '排浦镇',

    mapParentId: 460400
  },
  {
    id: 46040014,
    mapName: '雅星镇',

    mapParentId: 460400
  },
  {
    id: 46040015,
    mapName: '国营西联农场',

    mapParentId: 460400
  },
  {
    id: 46040016,
    mapName: '国营八一农场',

    mapParentId: 460400
  },
  {
    id: 46040017,
    mapName: '南丰镇',

    mapParentId: 460400
  },
  {
    id: 46040018,
    mapName: '国营西培农场',

    mapParentId: 460400
  },
  {
    id: 46040019,
    mapName: '白马井镇',

    mapParentId: 460400
  },
  {
    id: 46040020,
    mapName: '那大镇',

    mapParentId: 460400
  },
  {
    id: 46040021,
    mapName: '大成镇',

    mapParentId: 460400
  },
  {
    id: 46040022,
    mapName: '峨蔓镇',

    mapParentId: 460400
  },
  {
    id: 46040023,
    mapName: '三都镇',

    mapParentId: 460400
  },
  {
    id: 46900101,
    mapName: '南圣镇',

    mapParentId: 469001
  },
  {
    id: 46900102,
    mapName: '国营畅好农场',

    mapParentId: 469001
  },
  {
    id: 46900103,
    mapName: '毛阳镇',

    mapParentId: 469001
  },
  {
    id: 46900104,
    mapName: '通什镇',

    mapParentId: 469001
  },
  {
    id: 46900105,
    mapName: '水满乡',

    mapParentId: 469001
  },
  {
    id: 46900106,
    mapName: '番阳镇',

    mapParentId: 469001
  },
  {
    id: 46900107,
    mapName: '畅好乡',

    mapParentId: 469001
  },
  {
    id: 46900108,
    mapName: '毛道乡',

    mapParentId: 469001
  },
  {
    id: 46900201,
    mapName: '嘉积镇',

    mapParentId: 469002
  },
  {
    id: 46900202,
    mapName: '会山镇',

    mapParentId: 469002
  },
  {
    id: 46900203,
    mapName: '国营东升农场',

    mapParentId: 469002
  },
  {
    id: 46900204,
    mapName: '国营东太农场',

    mapParentId: 469002
  },
  {
    id: 46900205,
    mapName: '万泉镇',

    mapParentId: 469002
  },
  {
    id: 46900206,
    mapName: '国营东红农场',

    mapParentId: 469002
  },
  {
    id: 46900207,
    mapName: '彬村山华侨农场',

    mapParentId: 469002
  },
  {
    id: 46900208,
    mapName: '大路镇',

    mapParentId: 469002
  },
  {
    id: 46900209,
    mapName: '塔洋镇',

    mapParentId: 469002
  },
  {
    id: 46900210,
    mapName: '潭门镇',

    mapParentId: 469002
  },
  {
    id: 46900211,
    mapName: '龙江镇',

    mapParentId: 469002
  },
  {
    id: 46900212,
    mapName: '中原镇',

    mapParentId: 469002
  },
  {
    id: 46900213,
    mapName: '博鳌镇',

    mapParentId: 469002
  },
  {
    id: 46900214,
    mapName: '阳江镇',

    mapParentId: 469002
  },
  {
    id: 46900215,
    mapName: '石壁镇',

    mapParentId: 469002
  },
  {
    id: 46900216,
    mapName: '长坡镇',

    mapParentId: 469002
  },
  {
    id: 46900501,
    mapName: '东阁镇',

    mapParentId: 469005
  },
  {
    id: 46900502,
    mapName: '国营罗豆农场',

    mapParentId: 469005
  },
  {
    id: 46900503,
    mapName: '文教镇',

    mapParentId: 469005
  },
  {
    id: 46900504,
    mapName: '会文镇',

    mapParentId: 469005
  },
  {
    id: 46900505,
    mapName: '国营东路农场',

    mapParentId: 469005
  },
  {
    id: 46900506,
    mapName: '铺前镇',

    mapParentId: 469005
  },
  {
    id: 46900507,
    mapName: '锦山镇',

    mapParentId: 469005
  },
  {
    id: 46900508,
    mapName: '东郊镇',

    mapParentId: 469005
  },
  {
    id: 46900509,
    mapName: '翁田镇',

    mapParentId: 469005
  },
  {
    id: 46900510,
    mapName: '龙楼镇',

    mapParentId: 469005
  },
  {
    id: 46900511,
    mapName: '冯坡镇',

    mapParentId: 469005
  },
  {
    id: 46900512,
    mapName: '国营南阳农场',

    mapParentId: 469005
  },
  {
    id: 46900513,
    mapName: '昌洒镇',

    mapParentId: 469005
  },
  {
    id: 46900514,
    mapName: '公坡镇',

    mapParentId: 469005
  },
  {
    id: 46900515,
    mapName: '抱罗镇',

    mapParentId: 469005
  },
  {
    id: 46900516,
    mapName: '东路镇',

    mapParentId: 469005
  },
  {
    id: 46900517,
    mapName: '潭牛镇',

    mapParentId: 469005
  },
  {
    id: 46900518,
    mapName: '文城镇',

    mapParentId: 469005
  },
  {
    id: 46900519,
    mapName: '蓬莱镇',

    mapParentId: 469005
  },
  {
    id: 46900520,
    mapName: '重兴镇',

    mapParentId: 469005
  },
  {
    id: 46900601,
    mapName: '礼纪镇',

    mapParentId: 469006
  },
  {
    id: 46900602,
    mapName: '国营东和农场',

    mapParentId: 469006
  },
  {
    id: 46900603,
    mapName: '后安镇',

    mapParentId: 469006
  },
  {
    id: 46900604,
    mapName: '万城镇',

    mapParentId: 469006
  },
  {
    id: 46900605,
    mapName: '国营东兴农场',

    mapParentId: 469006
  },
  {
    id: 46900606,
    mapName: '山根镇',

    mapParentId: 469006
  },
  {
    id: 46900607,
    mapName: '大茂镇',

    mapParentId: 469006
  },
  {
    id: 46900608,
    mapName: '龙滚镇',

    mapParentId: 469006
  },
  {
    id: 46900609,
    mapName: '和乐镇',

    mapParentId: 469006
  },
  {
    id: 46900610,
    mapName: '兴隆华侨农场',

    mapParentId: 469006
  },
  {
    id: 46900611,
    mapName: '三更罗镇',

    mapParentId: 469006
  },
  {
    id: 46900612,
    mapName: '长丰镇',

    mapParentId: 469006
  },
  {
    id: 46900613,
    mapName: '国营新中农场',

    mapParentId: 469006
  },
  {
    id: 46900614,
    mapName: '地方国营六连林场',

    mapParentId: 469006
  },
  {
    id: 46900615,
    mapName: '北大镇',

    mapParentId: 469006
  },
  {
    id: 46900616,
    mapName: '南桥镇',

    mapParentId: 469006
  },
  {
    id: 46900617,
    mapName: '东澳镇',

    mapParentId: 469006
  },
  {
    id: 46900701,
    mapName: '东方华侨农场',

    mapParentId: 469007
  },
  {
    id: 46900702,
    mapName: '江边乡',

    mapParentId: 469007
  },
  {
    id: 46900703,
    mapName: '东河镇',

    mapParentId: 469007
  },
  {
    id: 46900704,
    mapName: '新龙镇',

    mapParentId: 469007
  },
  {
    id: 46900705,
    mapName: '天安乡',

    mapParentId: 469007
  },
  {
    id: 46900706,
    mapName: '国营广坝农场',

    mapParentId: 469007
  },
  {
    id: 46900707,
    mapName: '感城镇',

    mapParentId: 469007
  },
  {
    id: 46900708,
    mapName: '三家镇',

    mapParentId: 469007
  },
  {
    id: 46900709,
    mapName: '四更镇',

    mapParentId: 469007
  },
  {
    id: 46900710,
    mapName: '板桥镇',

    mapParentId: 469007
  },
  {
    id: 46900711,
    mapName: '八所镇',

    mapParentId: 469007
  },
  {
    id: 46900712,
    mapName: '大田镇',

    mapParentId: 469007
  },
  {
    id: 46902101,
    mapName: '黄竹镇',

    mapParentId: 469021
  },
  {
    id: 46902102,
    mapName: '新竹镇',

    mapParentId: 469021
  },
  {
    id: 46902103,
    mapName: '国营中瑞农场',

    mapParentId: 469021
  },
  {
    id: 46902104,
    mapName: '富文镇',

    mapParentId: 469021
  },
  {
    id: 46902105,
    mapName: '定城镇',

    mapParentId: 469021
  },
  {
    id: 46902106,
    mapName: '岭口镇',

    mapParentId: 469021
  },
  {
    id: 46902107,
    mapName: '雷鸣镇',

    mapParentId: 469021
  },
  {
    id: 46902108,
    mapName: '国营南海农场',

    mapParentId: 469021
  },
  {
    id: 46902109,
    mapName: '翰林镇',

    mapParentId: 469021
  },
  {
    id: 46902110,
    mapName: '龙门镇',

    mapParentId: 469021
  },
  {
    id: 46902111,
    mapName: '国营金鸡岭农场',

    mapParentId: 469021
  },
  {
    id: 46902112,
    mapName: '龙河镇',

    mapParentId: 469021
  },
  {
    id: 46902113,
    mapName: '龙湖镇',

    mapParentId: 469021
  },
  {
    id: 46902201,
    mapName: '国营中建农场',

    mapParentId: 469022
  },
  {
    id: 46902202,
    mapName: '屯城镇',

    mapParentId: 469022
  },
  {
    id: 46902203,
    mapName: '新兴镇',

    mapParentId: 469022
  },
  {
    id: 46902204,
    mapName: '南吕镇',

    mapParentId: 469022
  },
  {
    id: 46902205,
    mapName: '坡心镇',

    mapParentId: 469022
  },
  {
    id: 46902206,
    mapName: '西昌镇',

    mapParentId: 469022
  },
  {
    id: 46902207,
    mapName: '国营中坤农场',

    mapParentId: 469022
  },
  {
    id: 46902208,
    mapName: '枫木镇',

    mapParentId: 469022
  },
  {
    id: 46902209,
    mapName: '南坤镇',

    mapParentId: 469022
  },
  {
    id: 46902210,
    mapName: '乌坡镇',

    mapParentId: 469022
  },
  {
    id: 46902301,
    mapName: '福山镇',

    mapParentId: 469023
  },
  {
    id: 46902302,
    mapName: '永发镇',

    mapParentId: 469023
  },
  {
    id: 46902303,
    mapName: '桥头镇',

    mapParentId: 469023
  },
  {
    id: 46902304,
    mapName: '金江镇',

    mapParentId: 469023
  },
  {
    id: 46902305,
    mapName: '中兴镇',

    mapParentId: 469023
  },
  {
    id: 46902306,
    mapName: '文儒镇',

    mapParentId: 469023
  },
  {
    id: 46902307,
    mapName: '老城镇',

    mapParentId: 469023
  },
  {
    id: 46902308,
    mapName: '国营红岗农场',

    mapParentId: 469023
  },
  {
    id: 46902309,
    mapName: '瑞溪镇',

    mapParentId: 469023
  },
  {
    id: 46902310,
    mapName: '国营红光农场',

    mapParentId: 469023
  },
  {
    id: 46902311,
    mapName: '大丰镇',

    mapParentId: 469023
  },
  {
    id: 46902312,
    mapName: '加乐镇',

    mapParentId: 469023
  },
  {
    id: 46902313,
    mapName: '仁兴镇',

    mapParentId: 469023
  },
  {
    id: 46902314,
    mapName: '国营金安农场',

    mapParentId: 469023
  },
  {
    id: 46902315,
    mapName: '国营西达农场',

    mapParentId: 469023
  },
  {
    id: 46902316,
    mapName: '国营昆仑农场',

    mapParentId: 469023
  },
  {
    id: 46902317,
    mapName: '国营和岭农场',

    mapParentId: 469023
  },
  {
    id: 46902401,
    mapName: '博厚镇',

    mapParentId: 469024
  },
  {
    id: 46902402,
    mapName: '南宝镇',

    mapParentId: 469024
  },
  {
    id: 46902403,
    mapName: '和舍镇',

    mapParentId: 469024
  },
  {
    id: 46902404,
    mapName: '调楼镇',

    mapParentId: 469024
  },
  {
    id: 46902405,
    mapName: '东英镇',

    mapParentId: 469024
  },
  {
    id: 46902406,
    mapName: '多文镇',

    mapParentId: 469024
  },
  {
    id: 46902407,
    mapName: '波莲镇',

    mapParentId: 469024
  },
  {
    id: 46902408,
    mapName: '国营加来农场',

    mapParentId: 469024
  },
  {
    id: 46902409,
    mapName: '新盈镇',

    mapParentId: 469024
  },
  {
    id: 46902410,
    mapName: '临城镇',

    mapParentId: 469024
  },
  {
    id: 46902411,
    mapName: '国营红华农场',

    mapParentId: 469024
  },
  {
    id: 46902412,
    mapName: '皇桐镇',

    mapParentId: 469024
  },
  {
    id: 46902501,
    mapName: '七坊镇',

    mapParentId: 469025
  },
  {
    id: 46902502,
    mapName: '金波乡',

    mapParentId: 469025
  },
  {
    id: 46902503,
    mapName: '南开乡',

    mapParentId: 469025
  },
  {
    id: 46902504,
    mapName: '荣邦乡',

    mapParentId: 469025
  },
  {
    id: 46902505,
    mapName: '青松乡',

    mapParentId: 469025
  },
  {
    id: 46902506,
    mapName: '邦溪镇',

    mapParentId: 469025
  },
  {
    id: 46902507,
    mapName: '国营龙江农场',

    mapParentId: 469025
  },
  {
    id: 46902508,
    mapName: '元门乡',

    mapParentId: 469025
  },
  {
    id: 46902509,
    mapName: '细水乡',

    mapParentId: 469025
  },
  {
    id: 46902510,
    mapName: '牙叉镇',

    mapParentId: 469025
  },
  {
    id: 46902511,
    mapName: '国营白沙农场',

    mapParentId: 469025
  },
  {
    id: 46902512,
    mapName: '打安镇',

    mapParentId: 469025
  },
  {
    id: 46902513,
    mapName: '阜龙乡',

    mapParentId: 469025
  },
  {
    id: 46902514,
    mapName: '国营邦溪农场',

    mapParentId: 469025
  },
  {
    id: 46902601,
    mapName: '十月田镇',

    mapParentId: 469026
  },
  {
    id: 46902602,
    mapName: '国营霸王岭林场',

    mapParentId: 469026
  },
  {
    id: 46902603,
    mapName: '乌烈镇',

    mapParentId: 469026
  },
  {
    id: 46902604,
    mapName: '七叉镇',

    mapParentId: 469026
  },
  {
    id: 46902605,
    mapName: '海南矿业联合有限公司',

    mapParentId: 469026
  },
  {
    id: 46902606,
    mapName: '叉河镇',

    mapParentId: 469026
  },
  {
    id: 46902607,
    mapName: '石碌镇',

    mapParentId: 469026
  },
  {
    id: 46902608,
    mapName: '海尾镇',

    mapParentId: 469026
  },
  {
    id: 46902609,
    mapName: '王下乡',

    mapParentId: 469026
  },
  {
    id: 46902610,
    mapName: '昌化镇',

    mapParentId: 469026
  },
  {
    id: 46902611,
    mapName: '国营红林农场',

    mapParentId: 469026
  },
  {
    id: 46902701,
    mapName: '国营山荣农场',

    mapParentId: 469027
  },
  {
    id: 46902702,
    mapName: '莺歌海镇',

    mapParentId: 469027
  },
  {
    id: 46902703,
    mapName: '国营保国农场',

    mapParentId: 469027
  },
  {
    id: 46902704,
    mapName: '万冲镇',

    mapParentId: 469027
  },
  {
    id: 46902705,
    mapName: '利国镇',

    mapParentId: 469027
  },
  {
    id: 46902706,
    mapName: '抱由镇',

    mapParentId: 469027
  },
  {
    id: 46902707,
    mapName: '国营乐光农场',

    mapParentId: 469027
  },
  {
    id: 46902708,
    mapName: '大安镇',

    mapParentId: 469027
  },
  {
    id: 46902709,
    mapName: '九所镇',

    mapParentId: 469027
  },
  {
    id: 46902710,
    mapName: '佛罗镇',

    mapParentId: 469027
  },
  {
    id: 46902711,
    mapName: '国营莺歌海盐场',

    mapParentId: 469027
  },
  {
    id: 46902712,
    mapName: '黄流镇',

    mapParentId: 469027
  },
  {
    id: 46902713,
    mapName: '国营尖峰岭林业公司',

    mapParentId: 469027
  },
  {
    id: 46902714,
    mapName: '志仲镇',

    mapParentId: 469027
  },
  {
    id: 46902715,
    mapName: '尖峰镇',

    mapParentId: 469027
  },
  {
    id: 46902716,
    mapName: '千家镇',

    mapParentId: 469027
  },
  {
    id: 46902801,
    mapName: '椰林镇',

    mapParentId: 469028
  },
  {
    id: 46902802,
    mapName: '黎安镇',

    mapParentId: 469028
  },
  {
    id: 46902803,
    mapName: '新村镇',

    mapParentId: 469028
  },
  {
    id: 46902804,
    mapName: '文罗镇',

    mapParentId: 469028
  },
  {
    id: 46902805,
    mapName: '国营吊罗山林业公司',

    mapParentId: 469028
  },
  {
    id: 46902806,
    mapName: '国营南平农场',

    mapParentId: 469028
  },
  {
    id: 46902807,
    mapName: '本号镇',

    mapParentId: 469028
  },
  {
    id: 46902808,
    mapName: '光坡镇',

    mapParentId: 469028
  },
  {
    id: 46902809,
    mapName: '群英乡',

    mapParentId: 469028
  },
  {
    id: 46902810,
    mapName: '提蒙乡',

    mapParentId: 469028
  },
  {
    id: 46902811,
    mapName: '三才镇',

    mapParentId: 469028
  },
  {
    id: 46902812,
    mapName: '隆广镇',

    mapParentId: 469028
  },
  {
    id: 46902813,
    mapName: '国营岭门农场',

    mapParentId: 469028
  },
  {
    id: 46902814,
    mapName: '英州镇',

    mapParentId: 469028
  },
  {
    id: 46902901,
    mapName: '海南保亭热带作物研究所',

    mapParentId: 469029
  },
  {
    id: 46902902,
    mapName: '新政镇',

    mapParentId: 469029
  },
  {
    id: 46902903,
    mapName: '加茂镇',

    mapParentId: 469029
  },
  {
    id: 46902904,
    mapName: '国营金江农场',

    mapParentId: 469029
  },
  {
    id: 46902905,
    mapName: '国营新星农场',

    mapParentId: 469029
  },
  {
    id: 46902906,
    mapName: '保城镇',

    mapParentId: 469029
  },
  {
    id: 46902907,
    mapName: '南林乡',

    mapParentId: 469029
  },
  {
    id: 46902908,
    mapName: '国营三道农场',

    mapParentId: 469029
  },
  {
    id: 46902909,
    mapName: '毛感乡',

    mapParentId: 469029
  },
  {
    id: 46902910,
    mapName: '六弓乡',

    mapParentId: 469029
  },
  {
    id: 46902911,
    mapName: '什玲镇',

    mapParentId: 469029
  },
  {
    id: 46902912,
    mapName: '三道镇',

    mapParentId: 469029
  },
  {
    id: 46902913,
    mapName: '响水镇',

    mapParentId: 469029
  },
  {
    id: 46903001,
    mapName: '吊罗山乡',

    mapParentId: 469030
  },
  {
    id: 46903002,
    mapName: '什运乡',

    mapParentId: 469030
  },
  {
    id: 46903003,
    mapName: '和平镇',

    mapParentId: 469030
  },
  {
    id: 46903004,
    mapName: '湾岭镇',

    mapParentId: 469030
  },
  {
    id: 46903005,
    mapName: '国营加钗农场',

    mapParentId: 469030
  },
  {
    id: 46903006,
    mapName: '国营乌石农场',

    mapParentId: 469030
  },
  {
    id: 46903007,
    mapName: '国营阳江农场',

    mapParentId: 469030
  },
  {
    id: 46903008,
    mapName: '营根镇',

    mapParentId: 469030
  },
  {
    id: 46903009,
    mapName: '上安乡',

    mapParentId: 469030
  },
  {
    id: 46903010,
    mapName: '国营黎母山林业公司',

    mapParentId: 469030
  },
  {
    id: 46903011,
    mapName: '中平镇',

    mapParentId: 469030
  },
  {
    id: 46903012,
    mapName: '国营长征农场',

    mapParentId: 469030
  },
  {
    id: 46903013,
    mapName: '黎母山镇',

    mapParentId: 469030
  },
  {
    id: 46903014,
    mapName: '红毛镇',

    mapParentId: 469030
  },
  {
    id: 46903015,
    mapName: '长征镇',

    mapParentId: 469030
  },
  {
    id: 62020001,
    mapName: '峪泉镇',

    mapParentId: 620200
  },
  {
    id: 62020002,
    mapName: '新城镇',

    mapParentId: 620200
  },
  {
    id: 62020003,
    mapName: '文殊镇',

    mapParentId: 620200
  },
  {
    id: 62020004,
    mapName: '雄关区',

    mapParentId: 620200
  },
  {
    id: 62020005,
    mapName: '镜铁区',

    mapParentId: 620200
  },
  {
    id: 62020006,
    mapName: '长城区',

    mapParentId: 620200
  },
  {
    id: 65900101,
    mapName: '兵团一五二团',

    mapParentId: 659001
  },
  {
    id: 65900102,
    mapName: '向阳街道',

    mapParentId: 659001
  },
  {
    id: 65900103,
    mapName: '红山街道',

    mapParentId: 659001
  },
  {
    id: 65900104,
    mapName: '东城街道',

    mapParentId: 659001
  },
  {
    id: 65900105,
    mapName: '石河子乡',

    mapParentId: 659001
  },
  {
    id: 65900106,
    mapName: '老街街道',

    mapParentId: 659001
  },
  {
    id: 65900107,
    mapName: '新城街道',

    mapParentId: 659001
  },
  {
    id: 65900108,
    mapName: '北泉镇',

    mapParentId: 659001
  },
  {
    id: 65900201,
    mapName: '幸福路街道',

    mapParentId: 659002
  },
  {
    id: 65900202,
    mapName: '阿拉尔农场',

    mapParentId: 659002
  },
  {
    id: 65900203,
    mapName: '兵团第一师幸福农场',

    mapParentId: 659002
  },
  {
    id: 65900204,
    mapName: '工业园区',

    mapParentId: 659002
  },
  {
    id: 65900205,
    mapName: '兵团七团',

    mapParentId: 659002
  },
  {
    id: 65900206,
    mapName: '兵团十一团',

    mapParentId: 659002
  },
  {
    id: 65900207,
    mapName: '托喀依乡',

    mapParentId: 659002
  },
  {
    id: 65900208,
    mapName: '青松路街道',

    mapParentId: 659002
  },
  {
    id: 65900209,
    mapName: '兵团第一师水利水电工程处',

    mapParentId: 659002
  },
  {
    id: 65900210,
    mapName: '兵团八团',

    mapParentId: 659002
  },
  {
    id: 65900211,
    mapName: '中心监狱',

    mapParentId: 659002
  },
  {
    id: 65900212,
    mapName: '兵团第一师塔里木灌区水利管理处',

    mapParentId: 659002
  },
  {
    id: 65900213,
    mapName: '兵团十四团',

    mapParentId: 659002
  },
  {
    id: 65900214,
    mapName: '兵团十二团',

    mapParentId: 659002
  },
  {
    id: 65900215,
    mapName: '金银川路街道',

    mapParentId: 659002
  },
  {
    id: 65900216,
    mapName: '兵团十三团',

    mapParentId: 659002
  },
  {
    id: 65900217,
    mapName: '兵团十团',

    mapParentId: 659002
  },
  {
    id: 65900218,
    mapName: '兵团十六团',

    mapParentId: 659002
  },
  {
    id: 65900219,
    mapName: '南口街道',

    mapParentId: 659002
  },
  {
    id: 65900301,
    mapName: '兵团四十九团',

    mapParentId: 659003
  },
  {
    id: 65900302,
    mapName: '兵团图木舒克市永安坝',

    mapParentId: 659003
  },
  {
    id: 65900303,
    mapName: '兵团五十一团',

    mapParentId: 659003
  },
  {
    id: 65900304,
    mapName: '前海街道',

    mapParentId: 659003
  },
  {
    id: 65900305,
    mapName: '兵团图木舒克市喀拉拜勒镇',

    mapParentId: 659003
  },
  {
    id: 65900306,
    mapName: '永安坝街道',

    mapParentId: 659003
  },
  {
    id: 65900307,
    mapName: '齐干却勒街道',

    mapParentId: 659003
  },
  {
    id: 65900308,
    mapName: '兵团五十三团',

    mapParentId: 659003
  },
  {
    id: 65900309,
    mapName: '兵团五十团',

    mapParentId: 659003
  },
  {
    id: 65900310,
    mapName: '兵团四十四团',

    mapParentId: 659003
  },
  {
    id: 65900401,
    mapName: '兵团一零二团',

    mapParentId: 659004
  },
  {
    id: 65900402,
    mapName: '军垦路街道',

    mapParentId: 659004
  },
  {
    id: 65900403,
    mapName: '人民路街道',

    mapParentId: 659004
  },
  {
    id: 65900404,
    mapName: '兵团一零一团',

    mapParentId: 659004
  },
  {
    id: 65900405,
    mapName: '兵团一零三团',

    mapParentId: 659004
  },
  {
    id: 65900406,
    mapName: '青湖路街道',

    mapParentId: 659004
  },
  {
    id: 65900501,
    mapName: '兵团一八七团',

    mapParentId: 659005
  },
  {
    id: 65900502,
    mapName: '北屯镇',

    mapParentId: 659005
  },
  {
    id: 65900503,
    mapName: '兵团一八八团',

    mapParentId: 659005
  },
  {
    id: 65900504,
    mapName: '兵团一八三团',

    mapParentId: 659005
  },
  {
    id: 65900601,
    mapName: '农二师三十团',

    mapParentId: 659006
  },
  {
    id: 65900602,
    mapName: '兵团二十九团',

    mapParentId: 659006
  },
  {
    id: 65900701,
    mapName: '兵团八十九团',

    mapParentId: 659007
  },
  {
    id: 65900702,
    mapName: '兵团八十六团',

    mapParentId: 659007
  },
  {
    id: 65900703,
    mapName: '兵团八十四团',

    mapParentId: 659007
  },
  {
    id: 65900704,
    mapName: '兵团九十团',

    mapParentId: 659007
  },
  {
    id: 65900705,
    mapName: '兵团八十一团',

    mapParentId: 659007
  },
  {
    id: 65900801,
    mapName: '兵团六十八团',

    mapParentId: 659008
  },
  {
    id: 65900802,
    mapName: '都拉塔口岸',

    mapParentId: 659008
  },
  {
    id: 65900803,
    mapName: '兵团六十七团',

    mapParentId: 659008
  },
  {
    id: 65900804,
    mapName: '兵团六十六团',

    mapParentId: 659008
  },
  {
    id: 65900805,
    mapName: '兵团六十三团',

    mapParentId: 659008
  },
  {
    id: 65900806,
    mapName: '兵团六十四团',

    mapParentId: 659008
  },
  {
    id: 65900901,
    mapName: '阔依其乡',

    mapParentId: 659009
  },
  {
    id: 65900902,
    mapName: '兵团一牧场',

    mapParentId: 659009
  },
  {
    id: 65900903,
    mapName: '兵团二二四团',

    mapParentId: 659009
  },
  {
    id: 65900904,
    mapName: '乌尔其乡',

    mapParentId: 659009
  },
  {
    id: 65900905,
    mapName: '兵团四十七团',

    mapParentId: 659009
  },
  {
    id: 65900906,
    mapName: '博斯坦乡',

    mapParentId: 659009
  },
  {
    id: 65900907,
    mapName: '普恰克其乡',

    mapParentId: 659009
  },
  {
    id: 65900908,
    mapName: '奴尔乡',

    mapParentId: 659009
  },
  {
    id: 65900909,
    mapName: '兵团皮山农场',

    mapParentId: 659009
  },
  {
    id: 65900910,
    mapName: '喀拉喀什镇',

    mapParentId: 659009
  },
  {
    id: 65900911,
    mapName: '乌鲁克萨依乡',

    mapParentId: 659009
  },
  {
    id: 7100000101,
    mapName: '台湾',

    mapParentId: 71000001
  }
]

export { province, city, area }
