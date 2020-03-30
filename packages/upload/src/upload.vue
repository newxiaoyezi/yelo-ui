<template>
  <div class="z-upload">
    <el-upload
      :disabled="disabled"
      class="avatar-uploader"
      :headers="headers"
      :action="uploadAction"
      :show-file-list="false"
      :on-error="onerror"
      :on-success="handleAvatarSuccess"
      :before-upload="beforeAvatarUpload"
    >
      <div style="display:flex;width:200px">
        <el-button v-if="buttonName!=''" type="text" @click="openPdf">{{buttonName}}</el-button>
        <el-button
          v-if="buttonName!=''&&!disabled"
          type="text"
          @click.stop="deletePdf"
          style="margin-left:30px"
          class="el-icon-circle-close-outline"
        ></el-button>
      </div>

      <img v-if="buttonName==''&&imageList.src" :src="imageList.src" class="avatar">
      <i
        style="display:inline-block"
        v-show="buttonName==''&&imageList.src&&showClose"
        @click.stop="deleteIMG"
        class="el-icon-circle-close-outline avatar-close"
      ></i>
      <i v-if="buttonName==''&&!imageList.src" class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>
  </div>
</template>

<script>
import Vue from 'vue'
import { Upload,Button } from 'element-ui'
Vue.use(Upload);
Vue.use(Button);

export default {
  name: "yeloUpload",
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
      type: Object,
      default: {
        relativePath: "",
        src: "",
        id: ""
      }
    },
    showClose: {
      type: Boolean,
      default: true
    },
    uploadAction:{
      type:String,
      default: ''
    }
  },
  data() {
    return {
      headers: { UPLOADFILENAME: "" },
      imageList: this.imageUrl,
      buttonName: ""
    };
  },
  mounted() {
    // console.log(this.imageUrl)
    // console.log(this.imageList)
    this.choosePDF(this.imageList);
  },
  watch: {
    imageUrl(val) {
      this.imageList = val;
    },
    imageList: {
      handler(val, oldVal) {
        // console.log(val)
        this.choosePDF(val);
        this.$emit("changeValue", val);
      },
      deep: true
    }
  },
  methods: {
    choosePDF(obj) {
      let types = obj.relativePath.split(".");
      let type = types[types.length - 1];
      if (type == "pdf") {
        this.buttonName = this.pdfName + ".pdf";
      } else {
        this.buttonName = "";
      }
    },
    openPdf() {
      window.open(this.imageList.src);
    },
    deletePdf() {
      this.imageList = {
        relativePath: "",
        src: "",
        id: ""
      };
    },
    onerror(v) {
      this.$notice.toast("上传图片失败");
    },
    handleAvatarSuccess(res, file) {
      if (res.errcode == 0) {
        this.$emit("on-success");

        if (this.imageUrl.id == undefined) {
          this.imageList = res.data;
        } else {
          this.imageList = {
            relativePath: res.data.relativePath,
            src: res.data.src,
            id: this.imageUrl.id
          };
        }
        // console.log(this.imageList)

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
    deleteIMG() {
      this.imageList = { src: "", relativePath: "", id: this.imageList.id };
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
.z-upload .avatar-uploader {
  display: inline-block;
  position: relative;
}

.z-upload .avatar-uploader .el-upload {
  cursor: pointer;
  position: relative;
  /*overflow: hidden;*/
}

.z-upload .avatar-uploader .el-upload:hover {
  border-color: #409eff;
}

.z-upload .avatar-uploader-icon {
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
.z-upload .avatar {
  width: 270px;
  height: 166px;
  display: block;
}

.z-upload .avatar-close {
  position: absolute;
  top: 5px;
  right: 5px;
  width: 10px;
  height: 10px;
  /* line-height:  */
}
</style>
