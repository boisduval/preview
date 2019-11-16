<template>
  <div class="homePage">
    <el-upload
      class="avatar-uploader"
      action="https://jsonplaceholder.typicode.com/posts/"
      :show-file-list="true"
      :limit="1"
      :on-success="handleAvatarSuccess"
      :before-upload="beforeAvatarUpload"
      :on-exceed="handleAvatareExceed"
    >
      <i class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>
    <p class="mes">只支持txt格式</p>
    <el-button type="primary" round style="width: 250px">导入</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imageUrl: ""
    };
  },
  methods: {
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      // 文件类型限制
    },
    handleAvatareExceed(files, fileList) {
      this.$message.error("只能上传一个文件");
    }
  }
};
</script>

<style>
.homePage {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.homePage .mes {
    font-size: 14px;
    color: #6C99E4;
}

.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px !important;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
