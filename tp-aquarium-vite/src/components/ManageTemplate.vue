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
// 新增
const types = reactive({
  行程管理: "InsertJourney",
  商品管理: "InsertProduct",
  消息管理: "InsertNews",
  折價券管理: "InsertCoupon",
  客服: "InsertCustomer",
});
// 修改
const types1 = reactive({
  行程管理: "updateJourney",
  商品管理: "updateProduct",
  消息管理: "updateNews",
  折價券管理: "updateCoupon",
  客服: "updateCustomer",
});
// 刪除
const types2 = reactive({
  行程管理: "deleteJourney",
  商品管理: "deleteProduct",
  消息管理: "deleteNews",
  折價券管理: "deleteCoupon",
  客服: "deleteCustomer",
});

const props = defineProps(["news", "creates", "updates", "removes"]);
const title = ref("");

// 新增
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
// 修改
function update() {
  title.value = document.getElementById("title").innerHTML;
  // console.log(title.value);
  const inputs = document.querySelectorAll(".justify-content-center");
  inputs.forEach((input) => {
    const name1 = ref("");
    const value1 = ref("");

    name1.value = input.querySelector("label").getAttribute("for");
    // console.log(input.querySelector("label").getAttribute("for"));
    if (input.querySelector("input")) {
      value1.value = input.querySelector("input").value;
      // console.log(input.querySelector("input").value);
    } else {
      value1.value = input.querySelector("textarea").value;
      // console.log(input.querySelector("textarea").value);
    }
    //  data.push({
    //   name: value,
    //  });
    data1[name1.value] = value1.value;
    // console.log(data1);
  });
  journey1();
}
// 刪除
function remove() {
  title.value = document.getElementById("title").innerHTML;
  // console.log(title.value);

  console.log(types1[title.value]);

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

    data2[name.value] = value.value;
  });
  journey2();
}

// 新增
const data = reactive({});
// 修改
const data1 = reactive({});
// 刪除
const data2 = reactive({});

// 新增
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
// 修改
const journey1 = () => {
  let params = new URLSearchParams(); //建立PHP可接受的格式
  for (var key in data1) {
    // 取得input內的值
    if (data1.hasOwnProperty(key)) {
      var value = data1[key];
      params.append(key, value); //將搜尋值傳入params物件內
    }
  }
  axios
    .post(
      `${import.meta.env.VITE_API_URL}` + types1[title.value] + `.php`,
      params
    )
    .then((res) => {
      // console.log(res.data);
      // console.log(params);
      alert("修改成功!");
    })
    .catch((err) => console.log(err)); // 錯誤如何處理
};
// 刪除
const journey2 = () => {
  let params = new URLSearchParams(); //建立PHP可接受的格式
  for (var key in data2) {
    // 取得input內的值
    if (data2.hasOwnProperty(key)) {
      var value = data2[key];
      params.append(key, value); //將搜尋值傳入params物件內
    }
  }
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

watch(
  () => props.creates,
  (newVal) => {
    create();
    // console.log(data);
  }
);
watch(
  () => props.updates,
  (newVal) => {
    update();
    // console.log(data1);
  }
);
watch(
  () => props.removes,
  (newVal) => {
    remove();
    // console.log(data1);
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
