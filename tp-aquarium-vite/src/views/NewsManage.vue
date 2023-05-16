<template>
  <form>
    <div class="mb-3 row">
      <label for="title" class="col-sm-1 col-form-label">消息標題</label>
      <div class="col-sm-10">
        <input type="text" class="form-control" id="title" />
      </div>
    </div>
    <div class="mb-3 row">
      <label for="sub_title" class="col-sm-1 col-form-label">消息副標題</label>
      <div class="col-sm-10">
        <input type="text" class="form-control" id="sub_title" />
      </div>
    </div>
    <div class="mb-3 row">
      <label for="content" class="col-sm-1 col-form-label">消息內容</label>
      <div class="col-sm-10">
        <textarea class="form-control" id="content" rows="3"></textarea>
      </div>
    </div>
    <div class="mb-3 row">
      <label for="picture" class="col-sm-1 col-form-label">消息主照片</label>
      <div class="col-sm-10">
        <input class="form-control" type="file" id="picture" />
      </div>
    </div>
    <div class="mb-3 row">
      <label for="sub_picture1" class="col-sm-1 col-form-label"
        >消息副照片</label
      >
      <div class="col-sm-10">
        <input class="form-control" type="file" id="sub_picture1" />
      </div>
    </div>
    <div class="mb-3 row">
      <label for="sub_picture2" class="col-sm-1 col-form-label"
        >消息副照片</label
      >
      <div class="col-sm-10">
        <input class="form-control" type="file" id="sub_picture2" />
      </div>
    </div>
    <div class="mb-3 row">
      <label for="release_date" class="col-sm-1 col-form-label">發布日期</label>
      <div class="col-sm-10">
        <input type="date" class="form-control" id="release_date" />
      </div>
    </div>
    <button type="submit" class="btn btn-primary">取消</button>
    <button type="submit" class="btn btn-primary">新增</button>
  </form>
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
import { onMounted, reactive, ref } from "vue";
// 引入bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

// 引入bootstrap Icon
// import "bootstrap-icons/font/bootstrap-icons.css";
</script>
<style lang="scss" scoped>
.row {
  margin-right: 0;
}
</style>
