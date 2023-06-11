<template>
  <main class="cart">
    <div class="banner">
      <h1>購物車<br />SHOPPING CART</h1>
    </div>
    <div class="wrapper">
      <div class="cart-product-information">
        <h2>商品資訊</h2>
        <!-- 門票 -->
        <div
          v-if="tickets[0]"
          :class="['cart-group', 'cart-tickets', { close: ticketsClose }]"
        >
          <h3>門票</h3>
          <div
            v-for="ticket in transformedTickets"
            class="cart-product-content"
          >
            <div class="content-inside" v-if="ticket.amount">
              <input
                type="checkbox"
                v-model="ticket.checked"
                @change="addTotal()"
                checked
              />
              <div class="cart-product-content-r">
                <img
                  src="https://tibamef2e.com/thd101/g6/img/cart_ticket.png"
                  alt=""
                />
                <div>
                  <div>
                    <h4>{{ ticket.name }}-{{ ticket.type }}</h4>
                    <p>{{ ticket.date }}</p>
                    <h3>${{ choices[ticket.name][ticket.id]["price"] }}</h3>
                    <div>
                      <button
                        @click="
                          ticket.amount--;
                          addTotal();
                          amountChange();
                        "
                      >
                        -
                      </button>
                      <p>{{ ticket.amount }}</p>
                      <button
                        @click="
                          ticket.amount++;
                          addTotal();
                          amountChange();
                        "
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div>
                    <h4>金額</h4>
                    <h3 class="count">
                      NT ${{
                        choices[ticket.name][ticket.id]["price"] * ticket.amount
                      }}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button @click="ticketsClose = !ticketsClose">
            <h4 v-if="ticketsClose">展開查看全部</h4>
            <h4 v-if="!ticketsClose">收起</h4>
          </button>
        </div>
        <!-- 行程 -->
        <div
          v-if="journeys[0]"
          :class="['cart-group', 'cart-tickets', { close: journeysClose }]"
        >
          <h3>行程</h3>
          <div
            v-for="journey in transformedJourneys"
            class="cart-product-content"
          >
            <div class="content-inside" v-if="journey.amount">
              <input
                type="checkbox"
                v-model="journey.checked"
                @change="addTotal"
                checked
              />
              <div class="cart-product-content-r">
                <img
                  src="https://tibamef2e.com/thd101/g6/img/cart_journey.png"
                  alt=""
                />
                <div>
                  <div>
                    <h4>{{ journey.name }}</h4>
                    <p>{{ journey.date }}</p>
                    <h3>${{ choices[journey.name][journey.id]["price"] }}</h3>
                    <div>
                      <button
                        @click="
                          journey.amount--;
                          addTotal();
                          amountChange();
                        "
                      >
                        -
                      </button>
                      <p>{{ journey.amount }}</p>
                      <button
                        @click="
                          journey.amount++;
                          addTotal();
                          amountChange();
                        "
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div>
                    <h4>金額</h4>
                    <h3 class="count">
                      NT ${{
                        choices[journey.name][journey.id]["price"] *
                        journey.amount
                      }}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button @click="journeysClose = !journeysClose">
            <h4 v-if="journeysClose">展開查看全部</h4>
            <h4 v-if="!journeysClose">收起</h4>
          </button>
        </div>
        <!-- 商品 -->

        <div
          v-if="products[0]"
          :class="['cart-group', 'cart-tickets', { close: productsClose }]"
        >
          <h3>商品</h3>
          <div v-for="product in products" class="cart-product-content">
            <div class="content-inside" v-if="product.amount">
              <input
                type="checkbox"
                v-model="product.checked"
                @change="addTotal"
                checked
              />
              <div class="cart-product-content-r">
                <img :src="product.img" alt="" />
                <div>
                  <div>
                    <h4>{{ product.name }}</h4>
                    <h3>${{ product.price }}</h3>
                    <div>
                      <button
                        @click="
                          product.amount--;
                          addTotal();
                          amountChange();
                        "
                      >
                        -
                      </button>
                      <p>{{ product.amount }}</p>
                      <button
                        @click="
                          product.amount++;
                          addTotal();
                          amountChange();
                        "
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div>
                    <h4>金額</h4>
                    <h3 class="count">
                      NT ${{ product.price * product.amount }}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button @click="productsClose = !productsClose">
            <h4 v-if="productsClose">展開查看全部</h4>
            <h4 v-if="!productsClose">收起</h4>
          </button>
        </div>
        <!-- 初步總計 -->
        <div class="cart-total">
          <h3>共計金額</h3>
          <h3>NT $</h3>
          <h3>{{ total }}</h3>
        </div>
      </div>
      <!-- 運送地址 -->
      <div class="cart-delivery">
        <h2>運送資訊</h2>
        <div>
          <h4>收件人:{{ receiver }}</h4>
          <h4>電話:{{ phone }}</h4>
          <h4>電子信箱:{{ email }}</h4>
          <h4>宅配地址: {{ address }}</h4>
          <button @click="addressModify = true" class="cart-button">
            <p>變更收貨地址</p>
          </button>
        </div>
      </div>
      <!-- 運費、折扣及最終付款金額計算 -->
      <div class="cart-order">
        <h2>訂單資訊</h2>
        <div>
          <div class="origin">
            <h4>商品金額</h4>
            <h4>NT ${{ total }}</h4>
          </div>
          <div class="discount">
            <h4>
              折扣金額 <span>(使用折價券: {{ couponSelected }})</span>
            </h4>
            <h4>-NT ${{ discount }}</h4>
          </div>

          <button
            @click="
              getCoupon();
              couponCheck = true;
            "
            class="cart-button"
          >
            <p>查看可用折價券</p>
          </button>

          <div class="shipping">
            <h4>商品運費</h4>
            <h4>NT ${{ delivery }}</h4>
          </div>
          <div class="hr"></div>
          <div>
            <h3>付款金額</h3>
            <h3>
              NT ${{
                total - discount + delivery > 0
                  ? total - discount + delivery
                  : 0
              }}
            </h3>
          </div>
          <a class="btn" @click="payment()">立即付款</a>
        </div>
      </div>
    </div>
  </main>
  <div v-if="addressModify" class="address-modifier">
    <div>
      <button @click="addressModify = false" class="close">
        <img src="https://tibamef2e.com/thd101/g6/img/cart_close.svg" alt="" />
      </button>
      <h3>變更收貨地址</h3>
      <div>
        <div>
          <p>縣市</p>
          <select v-model="citySelected">
            <option v-for="city in AddressJson" :value="city.CityName">
              {{ city.CityName }}
            </option>
          </select>
        </div>
        <div>
          <p>鄉鎮市區</p>
          <select v-model="areaSelected">
            <option
              v-for="area in AddressJson.find(
                (item) => item.CityName === citySelected
              ).AreaList"
              :value="area.AreaName"
            >
              {{ area.AreaName }}
            </option>
          </select>
        </div>
        <div>
          <p>郵遞區號</p>
          <input
            type="text"
            :value="
              AddressJson.find(
                (item) => item.CityName === citySelected
              ).AreaList.find((item) => item.AreaName === areaSelected)
                ? AddressJson.find(
                    (item) => item.CityName === citySelected
                  ).AreaList.find((item) => item.AreaName === areaSelected)
                    .ZipCode
                : ''
            "
          />
        </div>
        <div>
          <p>地址</p>
          <input
            :class="{ empty: addressEmpty }"
            type="text"
            v-model="addressFilled"
          />
        </div>
      </div>
      <button @click="addressChange()" class="btn">確認變更</button>
    </div>
  </div>
  <div v-if="couponCheck" class="coupon-checker">
    <div>
      <button @click="couponCheck = false" class="close">
        <img src="https://tibamef2e.com/thd101/g6/img/cart_close.svg" alt="" />
      </button>
      <h3>選擇折價券</h3>
      <div>
        <div>
          <p>折價券:</p>
          <select v-model="couponSelected">
            <option value="" selected>請選擇折價券</option>
            <option v-for="coupon in coupons" value="TAIPEI2023">
              TAIPEI2023
            </option>
          </select>
          <button @click="clear()" v-if="couponSelected">取消使用</button>
        </div>
      </div>
      <button @click="couponCheck = false" class="btn">確定使用</button>
    </div>
  </div>

  <RouterView></RouterView>
</template>

<script setup>
import axios from "axios";
import { RouterLink, RouterView, useRouter } from "vue-router";
import { watch, onBeforeUpdate, onMounted, reactive, ref } from "vue";
import AddressJson from "/src/json/CityCountyData.json";
const inCart = reactive([]);
const productInCart = reactive([]);
const tickets = reactive([]);
const journeys = reactive([]);
const products = reactive([]);
const ticketsClose = ref(false);
const journeysClose = ref(false);
const productsClose = ref(false);
const total = ref(0);
const discount = ref(0);
const delivery = ref(0);
const receiver = ref();
const phone = ref();
const email = ref();
const address = ref();
const citySelected = ref("臺北市");
const couponSelected = ref("");
const areaSelected = ref("中正區");
const zipSelected = ref(
  AddressJson.find(
    (item) => item.CityName === citySelected.value
  ).AreaList.find((item) => item.AreaName === areaSelected.value).ZipCode
);
const addressFilled = ref("");
const couponCheck = ref(false);
const addressModify = ref(false);
const addressEmpty = ref(false);
const router = useRouter();
const coupons = ref();
watch(
  () => couponSelected.value,
  (newVal) => {
    if (couponSelected.value != 0) {
      discount.value = 100;
    } else {
      discount.value = 0;
    }
  }
);
//引入行程名稱、種類及票價資訊

const choices = reactive({
  日間票: [
    { name: "大人", price: 520, id: 1, amount: 0 },
    { name: "學生", price: 360, id: 2, amount: 0 },
    { name: "兒童", price: 240, id: 3, amount: 0 },
    { name: "博愛票", price: 240, id: 4, amount: 0 },
  ],
  星光票: [
    { name: "大人", price: 460, id: 1, amount: 0 },
    { name: "學生", price: 300, id: 2, amount: 0 },
    { name: "兒童", price: 180, id: 3, amount: 0 },
    { name: "博愛票", price: 180, id: 4, amount: 0 },
  ],
  "夜宿海生館-兩天一夜1": [{ name: "遊客", price: 2680, id: 1, amount: 0 }],
  "夜宿海生館-兩天一夜": [{ name: "遊客", price: 3680, id: 1, amount: 0 }],
});
//引入所有商品名稱
const ticketsName = reactive(["日間票", "星光票"]);
const journeysName = reactive(["夜宿海生館-兩天一夜1", "夜宿海生館-兩天一夜"]);
const productsName = reactive([]);
//最終轉換為購物車商品的陣列
const transformedTickets = reactive([]);
const transformedJourneys = reactive([]);
//登入會員資訊
const profileText = reactive({});
const transformedProducts = reactive([]);

//計算商品總金額
const addTotal = function () {
  let totalCount = 0;
  transformedTickets.forEach((ticket) => {
    if (ticket.checked && ticket.amount) {
      totalCount += choices[ticket.name][ticket.id].price * ticket.amount;
    }
  });
  transformedJourneys.forEach((journey) => {
    if (journey.checked && journey.amount) {
      totalCount += choices[journey.name][journey.id].price * journey.amount;
    }
  });
  transformedProducts.forEach((product) => {
    if (product.checked && product.amount) {
      totalCount += product.price * product.amount;
    }
  });
  total.value = totalCount;
};
watch(
  () => total.value,
  (newVal) => {
    if (total.value === 0) {
      for (const key in localStorage) {
        if (key.startsWith("cart") || key.startsWith("cartProduct")) {
          localStorage.removeItem(key);
        }
      }
    }
  }
);
//改變商品數量要修改localstorage
const amountChange = function () {
  tickets.splice(0, tickets.length, ...transformedTickets);
  journeys.splice(0, journeys.length, ...transformedJourneys);
  products.splice(0, products.length, ...transformedProducts);
  Object.keys(localStorage).forEach((key) => {
    if (key.startsWith("cart") || key.startsWith("cartProduct")) {
      localStorage.removeItem(key);
    }
  });
  tickets.forEach((ticket) => {
    const dataKey = "cart" + ticket.name + ticket.date;
    const data = {
      ...{ name: ticket.name },
      ...{ [ticket.type]: ticket.amount },
      ...{ date: ticket.date },
    };
    let list = JSON.parse(localStorage.getItem(dataKey)) || [];
    list.push(data);
    localStorage.setItem(dataKey, JSON.stringify(list));
  });
  journeys.forEach((journey) => {
    const dataKey = "cart" + journey.name + journey.date;
    const data = {
      ...{ name: journey.name },
      ...{ [journey.type]: journey.amount },
      ...{ date: journey.date },
    };
    let list = JSON.parse(localStorage.getItem(dataKey)) || [];
    list.push(data);
    localStorage.setItem(dataKey, JSON.stringify(list));
  });
  products.forEach((product) => {
    const dataKey = "cartProduct";
    const data = {
      name: product.name,
      price: product.price,
      amount: product.amount,
      img: product.img,
    };
    let list = JSON.parse(localStorage.getItem(dataKey)) || [];
    list.push(data);
    localStorage.setItem(dataKey, JSON.stringify(list));
  });
};
//更改地址判斷是否有填地址
const addressChange = function () {
  console.log(addressFilled.value);
  if (addressFilled.value) {
    addressEmpty.value = false;
    addressModify.value = false;
    address.value =
      zipSelected.value +
      citySelected.value +
      areaSelected.value +
      addressFilled.value;
  } else {
    addressEmpty.value = true;
  }
};

const getCoupon = function () {
  let params = new URLSearchParams();

  let cookieArr = document.cookie.split(";");
  for (var i = 0; i < cookieArr.length; i++) {
    let cookiePair = cookieArr[i].split("=");
    let name = cookiePair[0].trim();

    if (name === "id") {
      let value = cookiePair[1];
      params.append("id", value);
    }
  }

  axios
    .post("http://localhost/G6/getCoupon.php", params)
    .then((res) => {
      console.log(res.data);
      if (typeof res.data == "object") {
        coupons.value = res.data;
      }
    })
    .catch((err) => console.log(err));
};

const clear = function () {
  couponSelected.value = "";
};
//如為登入狀態，取得會員資料
const getProfile = () => {
  let params = new URLSearchParams();

  let cookieArr = document.cookie.split(";");
  for (var i = 0; i < cookieArr.length; i++) {
    let cookiePair = cookieArr[i].split("=");
    let name = cookiePair[0].trim();

    if (name === "id") {
      let value = cookiePair[1];
      params.append("id", value);
    }
  }

  axios
    .post(`${import.meta.env.VITE_API_URL}profile.php`, params)
    .then((res) => {
      email.value = res.data[0].EMAIL;
      receiver.value = res.data[0].NAME;
      phone.value = res.data[0].PHONE;
      address.value = res.data[0].ADDRESS;
    })
    .catch((err) => console.log(err));
};
//結帳付款，判斷是否登入
const payment = function () {
  if (total.value == 0) {
    alert("您尚未放入任何商品");
    return;
  }
  let cookieArr = document.cookie.split(";");
  for (var i = 0; i < cookieArr.length; i++) {
    let cookiePair = cookieArr[i].split("=");
    let name = cookiePair[0].trim();

    if (name === "id") {
      let value = cookiePair[1];
      router.push({ path: "/payment_success" });
      return;
    }
  }
  alert("請登入會員");
  document.querySelectorAll(".icon li")[4].click();
};

watch(
  () => areaSelected.value,
  (newVal) => {
    zipSelected.value = AddressJson.find(
      (item) => item.CityName === citySelected.value
    ).AreaList.find((item) => item.AreaName === areaSelected.value).ZipCode;
  }
);
onMounted(() => {
  //取得localStorge中加入購物車的資料(key開頭為cart/cartProduct)
  const keys = Object.keys(localStorage);
  const cartKeys = keys.filter((key) => key.startsWith("cart"));
  const productCartKeys = keys.filter((key) => key.startsWith("cartProduct"));

  if (cartKeys.length > 0) {
    cartKeys.forEach((cartKey) => {
      const cartValue = JSON.parse(localStorage.getItem(cartKey));
      inCart.push(cartValue);
    });
    productCartKeys.forEach((productCartKeys) => {
      const productCartValue = JSON.parse(
        localStorage.getItem(productCartKeys)
      );
      products.push(...productCartValue);
    });
  }
  if (inCart.length > 0) {
    for (let i = 0; i < inCart.length; i++) {
      let filteredTickets = inCart[i].filter((item) =>
        ticketsName.includes(item.name)
      );
      tickets.push(...filteredTickets);

      let filteredJourneys = inCart[i].filter((item) =>
        journeysName.includes(item.name)
      );
      journeys.push(...filteredJourneys);
    }
  }

  //將日期和品名相同的商品結合
  for (let i = 0; i < tickets.length; i++) {
    for (let j = i + 1; j < tickets.length; j++) {
      if (
        tickets[i].name === tickets[j].name &&
        tickets[i].date === tickets[j].date
      ) {
        if (!tickets[i]["大人"]) {
          tickets[i]["大人"] = 0;
        }
        if (!tickets[i]["學生"]) {
          tickets[i]["學生"] = 0;
        }
        if (!tickets[i]["兒童"]) {
          tickets[i]["兒童"] = 0;
        }
        if (!tickets[i]["博愛票"]) {
          tickets[i]["博愛票"] = 0;
        }
        tickets[i]["大人"] += tickets[j]["大人"];
        tickets[i]["學生"] += tickets[j]["學生"];
        tickets[i]["兒童"] += tickets[j]["兒童"];
        tickets[i]["博愛票"] += tickets[j]["博愛票"];
        tickets.splice(j, 1);
        j--; // 递减内部循环的索引以保持一致性
      }
    }
  }
  for (let i = 0; i < journeys.length; i++) {
    for (let j = i + 1; j < journeys.length; j++) {
      if (
        journeys[i].name === journeys[j].name &&
        journeys[i].date === journeys[j].date
      ) {
        journeys[i]["遊客"] += journeys[j]["遊客"];
        journeys.splice(j, 1);
        j--; // 递减内部循环的索引以保持一致性
      }
    }
  }
  console.log(journeys);
  for (let i = 0; i < products.length; i++) {
    for (let j = i + 1; j < products.length; j++) {
      if (products[i].name === products[j].name) {
        products[i].amount += products[j].amount;
        products.splice(j, 1);
        j--; // 递减内部循环的索引以保持一致性
      }
    }
  }
  console.log(products);

  //將各商品細項分類出來
  transformedTickets.push(
    ...tickets.flatMap((item) => {
      const { name, date, 大人, 學生, 兒童, 博愛票 } = item;
      return [
        { name, date, amount: 大人, type: "大人", id: 0, checked: true },
        { name, date, amount: 學生, type: "學生", id: 1, checked: true },
        { name, date, amount: 兒童, type: "兒童", id: 2, checked: true },
        { name, date, amount: 博愛票, type: "博愛票", id: 3, checked: true },
      ];
    })
  );
  transformedJourneys.push(
    ...journeys.flatMap((item) => {
      const { name, date, 遊客 } = item;
      return [{ name, date, amount: 遊客, type: "遊客", id: 0, checked: true }];
    })
  );

  getProfile();
  transformedProducts.push(
    ...products.flatMap((item) => {
      const { name, price, amount, img } = item;
      return [{ name, price, amount, img, checked: true }];
    })
  );

  // console.log(transformedTickets);
  // console.log(transformedJourneys)
  // console.log(products)
  // console.log(transformedProducts)

  addTotal();
});
</script>
<style lang="scss">
@import "/src/assets/sass/page/_cart.scss";
</style>
