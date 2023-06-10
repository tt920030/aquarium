<template>
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
</style>
