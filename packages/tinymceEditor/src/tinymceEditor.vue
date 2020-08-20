<template>
  <div class="tinymce-editor">
    <editor v-model="myValue" :init="init" :disabled="disabled"></editor>
    <el-dialog
      title="图片上传"
      :visible.sync="dialogVisible"
      width="400px"
      :lock-scroll="true"
      :close-on-click-modal="false"
    >
      <div class="image-upload-panel">
        <div class="image-item" v-for="(item,index) in imageList" :key="index">
          <img :src="item.src" />
          <span class="image-del el-icon-close" @click="delImage(index)"></span>
        </div>
        <el-upload
          v-if="imageList.length==0"
          class="upload-demo"
          drag
          :action="uploadUrl"
          :show-file-list="false"
          :on-success="imageUploadSuccess"
          :before-upload="imageBeforeUpload"
        >
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">
            将文件拖到此处，或
            <em>点击上传</em>
          </div>
        </el-upload>
      </div>
      <span slot="footer" class="dialog-footer" style="display: flex;justify-content: center;">
        <el-button @click="()=>{this.dialogVisible=false}">取 消</el-button>
        <el-button type="primary" @click="insertImage">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import Vue from "vue";
import { Dialog, Upload, Button } from "element-ui";
Vue.use(Dialog);
Vue.use(Upload);
Vue.use(Button);

import tinymce from "tinymce/tinymce";
import Editor from "@tinymce/tinymce-vue";
import "tinymce/themes/silver/theme";
import "tinymce/plugins/image";
import "tinymce/plugins/media";
import "tinymce/plugins/table";
import "tinymce/plugins/lists";
import "tinymce/plugins/colorpicker";
// import "tinymce/plugins/ax_wordlimit";
import "tinymce/plugins/wordcount";
import "tinymce/icons/default";
export default {
  name: "yeloTinyEditor",
  components: {
    Editor,
  },
  props: {
    value: {
      type: String,
      default: "",
    },
    uploadUrl: {
      type: String,
      default: "",
    },
    // limitNumber: {
    //   type: Number,
    //   default: 0,
    // },
    // wordlimit_callback: {
    //   type: Function,
    //   default: () => {}
    // },
    disabled: {
      type: Boolean,
      default: false,
    },
    plugins: {
      type: [String, Array],
      default: "lists image media table wordcount",
    },
    pdfName: {
      type: String,
      default: "",
    },
    toolbar: {
      type: [String, Array],
      default: `code undo redo restoredraft | cut copy paste pastetext 
      | forecolor backcolor bold italic underline strikethrough link anchor | alignleft aligncenter alignright alignjustify
      | fontselect fontsizeselect | bullist numlist  | table imageUpload`,
    },
    wordCountNum: {
      type: Function,
      default: () => {},
    },
    defaultColor: {
      type: String,
      default: "#000",
    },
    height: {
      type: Number,
      default: 500,
    },
  },
  data() {
    return {
      loading: undefined,
      imageList: [],
      dialogVisible: false,
      headers: { UPLOADFILENAME: "" },
      editor: null,
      init: {
        language_url: "/tinymce/zh_CN.js",
        language: "zh_CN",
        skin_url: "/tinymce/skins/ui/oxide",
        height: this.height,
        plugins: this.plugins,
        toolbar: this.toolbar,
        branding: false,
        menubar: false,
        fontsize_formats: "11px 12px 14px 16px 18px 24px 36px 48px",
        content_style: `p {color: ${this.defaultColor}}`,
        // 此处为图片上传处理函数，这个直接用了base64的图片形式上传图片，
        // 如需ajax上传可参考https://www.tiny.cloud/docs/configure/file-image-upload/#images_upload_handler
        images_upload_handler: (blobInfo, success, failure) => {
          const img = "data:image/jpeg;base64," + blobInfo.base64();
          success(img);
        },
        elementpath: false,
        toolbar_drawer: false,
        resize: false,
        statusbar: false,
        font_formats:
          "微软雅黑=Microsoft YaHei,Helvetica Neue,PingFang SC,sans-serif;苹果苹方=PingFang SC,Microsoft YaHei,sans-serif;宋体=simsun,serif,Andale Mono=andale mono,times;Arial=arial,helvetica,sans-serif;Arial Black=arial black,avant garde;Book Antiqua=book antiqua,palatino;Comic Sans MS=comic sans ms,sans-serif;Courier New=courier new,courier;Georgia=georgia,palatino;Helvetica=helvetica;Impact=impact,chicago;Symbol=symbol;Tahoma=tahoma,arial,helvetica,sans-serif;Terminal=terminal,monaco;Times New Roman=times new roman,times;Trebuchet MS=trebuchet ms,geneva;Verdana=verdana,geneva;Webdings=webdings;Wingdings=wingdings,zapf dingbats",
        setup: (editor) => {
          // 设置自定义功能的按钮
          editor.ui.registry.addButton("imageUpload", {
            // 单个按钮，此处的uploading是该按钮的名称
            tooltip: "上传图片", // 鼠标放上去后现在是内容.
            icon: "image",
            onAction: () => {
              this.dialogVisible = true;
              this.editor = editor;
              this.imageList = [];
            },
          });
        },
        // ax_wordlimit_num: this.limitNumber === 0 ? false : this.limitNumber,
        // ax_wordlimit_callback: (editor, txt, num) => {
        //   this.wordlimit_callback(editor, txt, num);
        // }
      },
      myValue: this.value,
    };
  },
  mounted() {
    tinymce.init({});
  },
  methods: {
    // 删除图片
    delImage(index) {
      const imageList = this.imageList;
      imageList.splice(index, 1);
    },
    // 图片开始上传
    imageBeforeUpload(file) {
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

      if (!isLt2M) {
        this.$notice.toast("上传文件大小不能超过 2MB!!", "warning");
        return false;
      }
      // return isLt2M;
      return true;
    },
    // 图片上传成功
    imageUploadSuccess(response, file) {
      if (response.errcode === 0) {
        if (this.loading !== undefined) {
          this.loading.close();
        }
        const imageList = this.imageList;
        const item = response.data;
        imageList.push(item);
        this.imageList = imageList;
      } else {
        const status = this.$util.checkReturnStatus(response.errcode);
        switch (status) {
          case -1:
            this.$notice.toast("连接超时,请重新登录!", "error");
            break;
          case 0:
            this.$notice.toast("系统繁忙,请稍后再试!", "error");
            break;
          case -2:
            this.$notice.toast(response.errmsg, "error");
            break;
        }
      }
    },
    insertImage() {
      const imageList = this.imageList;
      this.dialogVisible = false;
      if (imageList.length === 0) {
        return;
      }
      let insertHtml = "";
      (imageList || []).map((item, index) => {
        insertHtml = insertHtml + "<p><img src=" + item.src + "><p>";
        return insertHtml;
      });
      this.editor.execCommand("mceInsertContent", false, insertHtml);
    },
    getWordCount() {
      // 获取当前编辑器内字符长度
      const wordcount = tinymce.activeEditor.plugins.wordcount;
      const countNum = wordcount.body.getCharacterCountWithoutSpaces();
      this.wordCountNum(countNum);

      // console.log(wordcount.body.getWordCount());// 单词长度
      // console.log(wordcount.body.getCharacterCount());// 字符长度
      // console.log(wordcount.body.getCharacterCountWithoutSpaces());// 字符长度（不包括空格）

      // console.log(wordcount.selection.getWordCount());
      // console.log(wordcount.selection.getCharacterCount());
      // console.log(wordcount.selection.getCharacterCountWithoutSpaces());

      // 编辑器中图片数组
      // const imgReg = /<img.*?(?:>|\/>)/gi;
      // const arr = this.myValue.match(imgReg);
    },
  },
  watch: {
    value(newValue) {
      this.myValue = newValue;
    },
    myValue(newValue) {
      this.$emit("input", newValue);
      this.getWordCount();
    },
  },
};
</script>
<style scoped>
.image-upload-panel {
  overflow: hidden;
}
.image-upload-btn {
  float: left;
  width: 150px;
  height: 150px;
  border: 1px dashed #c0ccda;
  border-radius: 6px;
  line-height: 150px;
  text-align: center;
}

.image-upload-btn div {
  width: 150px;
}

.image-upload-btn i {
  font-size: 30px;
  font-weight: 400;
}
.image-item {
  float: left;
  width: 360px;
  height: 180px;
  background: #ddd;
  margin-right: 10px;
  border-radius: 6px;
  position: relative;
}
.image-item img {
  width: 360px;
  height: 180px;
  border-radius: 6px;
}
.image-del {
  position: absolute;
  top: 0px;
  right: 0px;
  color: red;
  font-weight: bold;
  font-size: 20px;
  cursor: pointer;
}
</style>
