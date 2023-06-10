<template>
  <form>
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
          v-model="news.data"
          @change="showaa"
        />

        <textarea
          v-if="news.type == 'textarea'"
          class="form-control"
          :id="news.id"
          rows="5"
          v-model="news.data"
          required
        ></textarea>
      </div>
    </div>
  </form>
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
import { onMounted, reactive, ref } from "vue";
import Header from "/src/components/CMSHeader.vue";
import axios from "axios";

// 引入bootstrap
import "bootstrap";
import { watch } from "vue";

const types = reactive({
  行程管理: "InsertJourney",
  商品管理: "InsertProduct",
  消息管理: "InsertNews",
  折價券管理: "InsertCoupon",
  客服: "InsertCustomer",
});
const props = defineProps(["news", "creates", "changeData"]);
const title = ref("");

function create() {
  title.value = document.getElementById("title").innerHTML;
  // console.log(title.value);

  console.log(types[title.value]);

  const inputs = document.querySelectorAll(".justify-content-center");
  inputs.forEach((input) => {
    const name = ref("");
    const value = ref("");

    name.value = input.querySelector("label").getAttribute("for");
    // console.log(input.querySelector("label").getAttribute("for"));
    if (input.querySelector("input")) {
      value.value = input.querySelector("input").value;
      // console.log(input.querySelector("input").value);
    } else {
      value.value = input.querySelector("textarea").value;
      // console.log(input.querySelector("textarea").value);
    }
    //  data.push({
    //   name: value,
    //  });

    data[name.value] = value.value;
  });
  journey();
}

const data = reactive({});
const journey = () => {
  let params = new URLSearchParams(); //建立PHP可接受的格式
  for (var key in data) {
    // 取得input內的值
    if (data.hasOwnProperty(key)) {
      var value = data[key];
      params.append(key, value); //將搜尋值傳入params物件內
    }
  }
  axios
    .post(
      `${import.meta.env.VITE_API_URL}` + types[title.value] + `.php`,
      params
    )
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => console.log(err)); // 錯誤如何處理
};

watch(
  () => props.creates,
  (newVal) => {
    create();
    console.log(data);
  }
);
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
