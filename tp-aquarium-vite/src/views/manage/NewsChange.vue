<template>
   
 
      <!-- <div class="mb-3">
        <h3>消息管理</h3>
      </div> -->
      <!-- <form>
        <div
          class="mb-3 row justify-content-center"
          v-for="news in news"
          :key="news.id"
        >
          <label :for="news.id" class="col-sm-1 col-form-label">
            {{ news.title }}</label
          >
  
          <div class="col-sm-5">
            <input
              v-if="news.type != 'textarea'"
              :type="news.type"
              class="form-control"
              :id="news.id"
              required
            />
            <textarea
              v-if="news.type == 'textarea'"
              class="form-control"
              :id="news.id"
              rows="5"
              required
            ></textarea>
          </div>
        </div>
      </form> -->
      <ManageTemplate :news="news"></ManageTemplate>
      <div class="buttons">
        <button>刪除</button>
        <button>取消</button>
        <button>更改</button>
      </div>
 
  </template>
  
  <script setup>
  import { RouterLink, RouterView } from "vue-router";
  import { onMounted, reactive, ref } from "vue";

  
  import ManageTemplate from '/src/components/ManageTemplate.vue';
  const news = reactive([
    { id: "title", title: "消息標題", type: "text" },
    { id: "sub_title", title: "消息副標題", type: "text" },
    { id: "content", title: "消息內容", type: "textarea" },
    { id: "picture", title: "消息主照片", type: "file" },
    { id: "picture1", title: "消息副照片", type: "file" },
    { id: "picture2", title: "消息副照片", type: "file" },
    { id: "release_date", title: "發布日期", type: "date" },
  ]);
  </script>
  <style lang="scss" scoped>
  
  </style>
  