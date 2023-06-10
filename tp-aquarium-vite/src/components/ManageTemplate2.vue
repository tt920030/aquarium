<template>
  <table class="table table-bordered border-dark">
    <thead class="table-primary border-dark">
      <tr>
        <th scope="col" v-for="(title, index) in title" :key="index">
          {{ title }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="form in forms" :key="form.a">
        <td v-for="item in form">{{ item }}</td>
        <td><button @click="goChange">修改</button></td>
        <td><button @click="goRemove">刪除</button></td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import { RouterLink, RouterView, useRouter } from "vue-router";
import { onMounted, reactive, ref } from "vue";
import axios from "axios";
// 引入bootstrap
import "bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
const props = defineProps(["title", "forms", "pageNow", "resData"]);
const changePage = ref("");

const title = ref("");
const types2 = reactive({
  行程管理: "deleteJourney",
  商品管理: "deleteProduct",
  消息管理: "deleteNews",
  折價券管理: "deleteCoupon",
  客服: "deleteCustomer",
});

// 決定跳轉到哪一頁
const router = useRouter();
switch (props.pageNow) {
  case "消息":
    changePage.value = "/cms/news_change";
    break;
  case "行程":
    changePage.value = "/cms/journey_change";
    break;
  case "商品":
    changePage.value = "/cms/product_change";
    break;
  case "客服":
    changePage.value = "/cms/customer_change";
    break;
  case "折價券":
    changePage.value = "/cms/coupon_change";
    break;
}
// 修改跳轉
const goChange = (e) => {
  // 抓出ID
  const pageNow = e.target.parentElement.previousElementSibling.innerHTML;
  const changeData = props.resData.find((item) => item.ID == pageNow);
  // console.log(changeData);
  router.push({
    path: changePage.value,
    query: { changeData: JSON.stringify(changeData) },
  });
};
</script>
<style lang="scss" scoped>
@import "bootstrap/dist/css/bootstrap.min.css";
.row {
  margin-right: 0;
}
.row.justify-content-center {
  margin-left: -170px;
}
</style>

<!-- <template>
  <table class="table table-bordered border-dark">
    <thead class="table-primary border-dark">
      <tr>
        <th scope="col" v-for="(title, index) in title" :key="index">
          {{ title }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="form in forms" :key="form.a">
        <td v-for="item in form">{{ item }}</td>
        <td><button @click="goChange">修改</button></td>
        <td><button>刪除</button></td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import { RouterLink, RouterView, useRouter } from "vue-router";
import { onMounted, reactive, ref } from "vue";

// 引入bootstrap
import "bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";

const props = defineProps(["title", "forms", "pageNow", "resData"]);
const changePage = ref("");

// 決定跳轉到哪一頁
const router = useRouter();
switch (props.pageNow) {
  case "消息":
    changePage.value = "/cms/news_change";
    break;
  case "行程":
    changePage.value = "/cms/journey_change";
    break;
  case "商品":
    changePage.value = "/cms/product_change";
    break;
  case "客服":
    changePage.value = "/cms/customer_change";
    break;
  case "折價券":
    changePage.value = "/cms/coupon_change";
    break;
}
// 修改跳轉
const goChange = (e) => {
  // 抓出ID
  const pageNow = e.target.parentElement.previousElementSibling.innerHTML;
  const changeData = props.resData.find((item) => item.ID == pageNow);
  // console.log(changeData);
  router.push({
    path: changePage.value,
    query: { changeData: JSON.stringify(changeData) },
  });
};
</script>
<style lang="scss" scoped>
@import "bootstrap/dist/css/bootstrap.min.css";
.row {
  margin-right: 0;
}
.row.justify-content-center {
  margin-left: -170px;
}
</style> -->

<!-- <template>
  <table class="table table-bordered border-dark">
    <thead class="table-primary border-dark">
      <tr>
        <th scope="col" v-for="(title, index) in title" :key="index">
          {{ title }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="form in forms" :key="form.a">
        <td v-for="item in form">{{ item }}</td>
        <td><button @click="goChange">修改</button></td>
        <td><button>刪除</button></td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import { RouterLink, RouterView, useRouter } from "vue-router";
import { onMounted, reactive, ref } from "vue";

// 引入bootstrap
import "bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";

const props = defineProps(["title", "forms", "pageNow", "resData"]);
const changePage = ref("");

// 決定跳轉到哪一頁
const router = useRouter();
switch (props.pageNow) {
  case "消息":
    changePage.value = "/cms/news_change";
    break;
  case "行程":
    changePage.value = "/cms/journey_change";
    break;
  case "商品":
    changePage.value = "/cms/product_change";
    break;
  case "客服":
    changePage.value = "/cms/customer_change";
    break;
  case "折價券":
    changePage.value = "/cms/coupon_change";
    break;
}
// 修改跳轉
const goChange = (e) => {
  // 抓出ID
  const pageNow = e.target.parentElement.previousElementSibling.innerHTML;
  const changeData = props.resData.find((item) => item.ID == pageNow);
  router.push({
    path: changePage.value,
    query: { changeData: JSON.stringify(changeData) },
  });
};
// 刪除
const goRemove = (e) => {
  // 抓出ID
  const pageNow =
    e.target.parentElement.previousElementSibling.previousElementSibling
      .innerHTML;
  // 抓出在哪一頁
  title.value = document.getElementById("title").innerHTML;
  console.log(title.value);
  let params = new URLSearchParams(); //建立PHP可接受的格式
  params.append("ID", pageNow); //將搜尋值傳入params物件內

  axios
    .post(
      `${import.meta.env.VITE_API_URL}` + types2[title.value] + `.php`,
      params
    )
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => console.log(err)); // 錯誤如何處理
};

console.log(props.resData);
</script>
<style lang="scss" scoped>
@import "bootstrap/dist/css/bootstrap.min.css";
.row {
  margin-right: 0;
}
.row.justify-content-center {
  margin-left: -170px;
}
</style> -->
