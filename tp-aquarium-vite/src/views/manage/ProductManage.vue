<template>
  <ManageTemplate
    :title="title"
    :forms="forms"
    :pageNow="pageNow"
    :resData="resData"
  ></ManageTemplate>
</template>

<script setup>
import { onMounted, reactive, ref } from "vue";
import axios from "axios";
import ManageTemplate from "/src/components/ManageTemplate2.vue";
const title = reactive([
  "商品編號",
  "商品名稱",
  "動物分類",
  "種類分類",
  "價格",
  "庫存數量",
  "修改",
  "刪除",
]);
const forms = reactive([]);
const resData = reactive([]);
const pageNow = "商品";
const news = () => {
  axios
    .post(`${import.meta.env.VITE_API_URL}productManage.php`)
    .then((res) => {
      const transformedData = res.data.map((element) => {
        const type = typeTrans(element["TYPE_ID"]);
        const animal = animalTrans(element["ANIMAL_ID"]);
        return [
          element["NAME"],
          animal,
          type,
          element["PRICE"],
          element["INVENTORY"],
          element["ID"],
        ];
      });
      forms.push(...transformedData);
      resData.push(...res.data);
      console.log(resData);
    })
    .catch((err) => console.log(err));
};

// 資料處理
const typeTrans = (data) => {
  switch (data) {
    case 1:
      return "玩偶";
    case 2:
      return "文具";
    case 3:
      return "吊飾";
    case 4:
      return "食品";
    case 5:
      return "其他";
    default:
      return "";
  }
};

const animalTrans = (data) => {
  switch (data) {
    case 1:
      return "企鵝";
    case 2:
      return "海豚";
    case 3:
      return "魚類";
    case 4:
      return "水母";
    case 5:
      return "其他";
    default:
      return "";
  }
};

onMounted(() => {
  news();
});
</script>
<style lang="scss" scoped></style>
