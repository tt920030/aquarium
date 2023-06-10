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
  <ManageTemplate :news="news" :changeData="changeData"></ManageTemplate>
  <div class="buttons">
    <button @click="deleteNews()">刪除</button>
    <button >取消</button>
    <button @click="updateNews()">更改</button>
  </div>
</template>

<script setup>
import { RouterLink, RouterView, useRoute} from "vue-router";
import { computed, onMounted, reactive, ref } from "vue";
import axios from 'axios';

import ManageTemplate from "/src/components/ManageTemplate.vue";

// 接受模板2傳來的值
// const $route = useRoute();
// const changeData = reactive(JSON.parse($route.query.changeData));
const route = useRoute();
const urlString = route.path;
const number = urlString.split("/")[3];
// console.log(changeData);
// 傳值給模板1
const data = reactive([])
const title = ref('');
const subTitle = ref('');
const content = ref('');
const date = ref();
const picture = ref();
const subPicture1 = ref();
const subPicture2 = ref();



const getNews = () => {
  let params = new URLSearchParams();
  params.append('id', number);

  axios
    .post(`${import.meta.env.VITE_API_URL}getNews.php`,params) //使用get或post等取得路徑資料(php)

    .then((res) => {

      console.log(res.data[0].TITLE);
      data.push(res.data[0]);
      title.value = data[0].TITLE
      subTitle.value = data[0].SUB_TITLE
      content.value = data[0].CONTENT
      date.value = data[0].DATE
      // picture.value = data[0].PICTURE
      // subPicture1.value = data[0].SUB_PICTURE1
      // subPicture2.value = data[0].SUB_PICTURE2
      console.log(data[0].DATE)
      //回傳後如何處理

      // res.data.forEach((element) => {
      //   forms.push([
      //     element["TITLE"],
      //     element["SUB_TITLE"],
      //     element["DATE"],
      //     element["ID"],
      //   ]);
      // });

      // resData.push(...res.data);
    })
    .catch((err) => console.log(err)); //錯誤如何處理
};

onMounted(() => {
  console.log(number);
  getNews();
});


let news = computed(()=> [
        { id: "title", title: "消息標題", type: "text", data: title.value },
        {
          id: "sub_title",
          title: "消息副標題",
          type: "text",
          data: subTitle.value ,
        },
        {
          id: "content",
          title: "消息內容",
          type: "textarea",
          data: content.value,
        },
        {
          id: "picture",
          title: "消息主照片",
          type: "file",
        },
        { id: "picture1", title: "消息副照片", type: "file" },
        { id: "picture2", title: "消息副照片", type: "file" },
        {
          id: "release_date",
          title: "發布日期",
          type: "date",
          data: date.value,
        },
      ]
)

const deleteNews = function(){
  alert("Delete");
  let params = new URLSearchParams();
  params.append('id', number);

  axios
    .post(`${import.meta.env.VITE_API_URL}getNews.php`,params) //使用get或post等取得路徑資料(php)

}
</script>
<style lang="scss" scoped>
main {
  box-sizing: border-box;
  padding: 50px 0 0 200px;
  h3 {
    padding-bottom: 10px;
    margin-bottom: 30px;
    border-bottom: 1px solid black;
  }
  .row {
    margin-right: 0;
  }
  .row.justify-content-center {
    margin-left: -170px;
  }
  .buttons {
    display: flex;
    margin-left: 305px;
    margin-top: 30px;
    button {
      width: 129px;
      height: 42px;
      border: none;
      background-color: map-get($color, bgc1);
      margin-right: 20px;
    }
  }
}
</style>
