<template>
  <div class="z-uploadmultiple">
    <el-upload
      :disabled="disabled"
      class="avatar-uploader"
      :headers="headers"
      :action="uploadAction"
      :show-file-list="false"
      :on-error="onerror"
      :on-success="handleAvatarSuccess"
      :before-upload="beforeAvatarUpload"
      multiple
    >
      <i
        v-if="buttonName==''&&!imageList.src"
        class="el-icon-plus avatar-uploader-icon"
        style="float: left;"
      ></i>
      <div
        v-for="(v,i) in imageList"
        :key="i"
        style="position:relative;display:inline-block;margin-right: 15px;"
      >
        <!--   <div style="display:flex;width:200px">
          <el-button v-if="buttonName!=''" type="text" @click="openPdf">{{buttonName}}</el-button>
          <el-button
            v-if="buttonName!=''&&!disabled"
            type="text"
            @click.stop="deletePdf(i)"
            style="margin-left:30px"
            class="el-icon-circle-close-outline"
          ></el-button>
        </div>-->
        <img :src="v.src" class="avatar" v-if="buttonName==''&&v.src">
        <i
          v-show="buttonName==''&&v.src&&showClose"
          @click.stop="deleteIMG(i)"
          class="el-icon-circle-close-outline avatar-close"
        ></i>
      </div>
    </el-upload>
  </div>
</template>

<script>
import Vue from 'vue'
import { Upload,Button } from 'element-ui'
Vue.use(Upload);
Vue.use(Button);

export default {
  name: "yeloUploadMultiple",
  model: {
    prop: "imageUrl",
    event: "changeValue"
  },
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    pdfName: {
      type: String,
      default: ""
    },
    imageUrl: {
      type: Array,
      default: []
    },
    showClose: {
      type: Boolean,
      default: true
    },
    uploadAction:{
      type:String,
      default:''
    }
  },
  data() {
    return {
      headers: { UPLOADFILENAME: "" },
      //   imageList: this.imageUrl,
      imageList: [],
      buttonName: ""
    };
  },
  mounted() {
    // console.log(this.imageUrl)
    this.callPdf();
    // this.choosePDF(this.imageList);
  },
  watch: {
    imageUrl(val) {
      this.imageList = val;
    },
    imageList: {
      handler(val, oldVal) {
        // console.log(val);
        // this.choosePDF(val);
        this.callPdf();
        this.$emit("changeValue", val);
      },
      deep: true
    }
  },
  methods: {
    callPdf() {
      if (this.imageList.length > 0) {
        this.choosePDF(this.imageList);
      }
    },
    choosePDF(obj) {
      for (var i in obj) {
        let types = obj[i].relativePath.split(".");
        let type = types[types.length - 1];
        if (type == "pdf") {
          this.buttonName = this.pdfName + ".pdf";
        } else {
          this.buttonName = "";
        }
      }
    },
    openPdf() {
      window.open(this.imageList.src);
    },
    deletePdf(i) {
      this.imageList.splice(i, 1);
    },
    onerror(v) {
      this.$notice.toast("上传图片失败");
    },
    handleAvatarSuccess(res, file) {
      if (res.errcode == 0) {
        this.$emit("on-success");
        // 新增的图片放在第一个
        this.imageList.unshift({
          relativePath: res.data.relativePath,
          src: res.data.src,
          id: this.imageUrl.id
        });
        /*   this.imageList.push({
          relativePath: res.data.relativePath,
          src: res.data.src,
          id: this.imageUrl.id
        }); */

        /*  if (this.imageUrl.id == undefined) {
          this.imageList = res.data;
        } else {
          this.imageList.push = {
            relativePath: res.data.relativePath,
            src: res.data.src,
            id: this.imageUrl.id
          };
        } */
        // console.log(this.imageList);

        this.$emit("clearValidate");
      } else {
        let status = this.$util.checkReturnStatus(res.errcode);
        switch (status) {
          case -1:
            this.$notice.toast("连接超时,请重新登录!", "error");
          case 0:
            this.$notice.toast("系统繁忙,请稍后再试!", "error");
          case -2:
            this.$notice.toast(res.errmsg, "error");
        }
        // this.$notice.toast(res.errmsg, "warning");
      }
    },
    deleteIMG(i) {
      this.imageList.splice(i, 1);
    },
    beforeAvatarUpload(file) {
      this.headers.UPLOADFILENAME = file.type.split("/")[1];
      // console.dir(file);
      // console.log(file.type)
      const isJPEG = file.type === "image/jpeg";
      const isJPG = file.type === "image/jpg";
      const isPNG = file.type === "image/png";
      if (this.pdfName === "") {
        if (!isJPEG && !isJPG && !isPNG) {
          this.$message.error("上传文件只能是 JPEG,JPG,PNG 格式!");
          return false;
        }
      } else {
        const isPDF = file.type === "application/pdf";
        if (!isJPEG && !isJPG && !isPNG && !isPDF) {
          this.$message.error("上传文件只能是 JPEG,JPG,PNG,PDF 格式!");
          return false;
        }
      }
      const isLt2M = file.size / 1024 / 1024 < 2;

      // if (!isJPEG && !isJPG && !isPNG && !isPDF) {
      //   this.$message.error('上传文件只能是 JPEG,JPG,PNG,PDF 格式!')
      //   return false
      // }
      if (!isLt2M) {
        // this.$message.error("上传头像图片大小不能超过 5MB!");
        this.$notice.toast("上传文件大小不能超过 2MB!!", "warning");
        return false;
      }
      // return isLt2M;
      return true;
    }
  }
  // props:
};
</script>

<style scoped>
.z-uploadmultiple .avatar-uploader {
  display: inline-block;
  position: relative;
}

.z-uploadmultiple .avatar-uploader .el-upload {
  cursor: pointer;
  position: relative;
  /*overflow: hidden;*/
}

.z-uploadmultiple .avatar-uploader .el-upload:hover {
  border-color: #409eff;
}

.z-uploadmultiple .avatar-uploader-icon {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  font-size: 28px;
  color: #8c939d;
  width: 320px;
  height: 166px;
  line-height: 166px;
  text-align: center;
}

/* .z-upload .avatar {
    width: 100%;
    height: 100%;
    display: block;
  } */
.z-uploadmultiple .avatar {
  width: 270px;
  height: 166px;
  display: block;
}

.z-uploadmultiple .avatar-close {
  position: absolute;
  top: 5px;
  right: 5px;
  width: 10px;
  height: 10px;
  /* line-height:  */
}
</style>
<style>
.z-uploadmultiple .avatar-uploader .el-upload {
  text-align: left !important;
  /*overflow: hidden;*/
}
</style>
