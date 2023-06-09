<template>
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css" />
  <link
    href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;700&family=Noto+Serif+TC:wght@400;700&display=swap"
    rel="stylesheet" />

  <header>
    <div class="content" :class="{ '-light_color2': waveColor2 === 'DeepSkyBlue' }">
      <RouterLink to="/" class="logo" href=""><img src="@/img/logo-white.svg" alt="" /></RouterLink>
      <nav>
        <ul class="icon">
          <i class="bi bi-list"></i>
          <li>
            <p>
              <span class="rain">{{ rainWeatherState }}</span>
            </p>
          </li>
          <li>
            <p>
              <span class="temp">{{ tempWeather }}</span>
            </p>
          </li>
          <li><img :src="get_weather_img" alt="" class="weather_img" /></li>
          <li>
            <button type="button" ref="circle" class="switch" @click="switchColor">
              <i class="bi bi-moon-stars-fill"></i>
            </button>
          </li>
          <li @click="logIn()"><img class="icons" src="src/img/header_member.svg" alt="" /></li>
          <li>
            <RouterLink to="/cart"><img class="icons cart-icon" src="src/img/header_cart.svg" alt="" />
              <div class="cart-count" v-if="cart"></div>
            </RouterLink>
          </li>
        </ul>
        <!-- <ul class="menu" :class="{'active': is_open === true}"> -->
        <ul class="menu">
          <li v-for="item in navItems">
            <RouterLink :to="item.link">
              <p>{{ item.name }}</p>
            </RouterLink>
          </li>
        </ul>
      </nav>
    </div>

    <div class="ocean">
      <div class="wave" :class="{ '-light_color': waveColor === 'DeepSkyBlue' }"></div>
      <div class="wave" :class="{ '-light_color': waveColor === 'DeepSkyBlue' }"></div>
      <div class="wave" :class="{ '-light_color': waveColor === 'DeepSkyBlue' }"></div>
    </div>
  </header>
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
import { ref, onMounted, computed, watch } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
import { transform } from "@vue/compiler-core";
const emit = defineEmits(["openLogin", "color"]);
import { useCookies } from "vue3-cookies";
const router = useRouter();
const cart=ref(false);
const { cookies } = useCookies();

//取得localStorge中加入購物車的資料(key開頭為cart)
const keys = Object.keys(localStorage);
const cartKeys = keys.filter(key => key.startsWith("cart"));
if (cartKeys.length > 0) {
  cart.value=true;
  cartKeys.forEach(cartKey => {
    const cartValue = JSON.parse(localStorage.getItem(cartKey));
  });
}

const logIn = () => {
  if (cookies.isKey("id")) {
    router.push({ path: '/member/profile' });
  } else {
    emit("openLogin", true);
  }


};

const loginCheck = () => {
  axios.post('http://localhost/PHP/loginCheck.php',)
    .then((res) => {
      if (res.data !== "") {
        isLogin.value = true;
      }

      console.log(res.data);

    }).catch(err => console.log(err))
}

const navItems = [
  { name: "最新消息", link: "/news" },
  { name: "園區介紹", link: "/floor_Introduction" },
  { name: "購票資訊", link: "/ticket" },
  { name: "行程預約", link: "/journey" },
  { name: "關於我們", link: "/about" },
  { name: "網路商城", link: "/stores" },
  { name: "小遊戲", link: "/game_index" },
];
// $(function () {
//   let is_open = false;
//   $("header .content nav i").click(function () {
//     if (is_open == false) {
//       $("header .content .menu").animate({ right: "0px" }, 1000).show();
//       is_open = true;
//     } else {
//       $("header .content .menu").animate(
//         { right: "-100%", display: "none" },
//         1000
//       );
//       is_open = false;
//     }
//   });
// });
const is_open = ref(false);

document.addEventListener('DOMContentLoaded', () => {
  const navIcon = document.querySelector('header .content nav i');
  const menu = document.querySelector('header .content .menu');

  navIcon.addEventListener('click', () => {
    if (!is_open.value) {
      menu.style.right = '0px';
      menu.style.display = 'block';
      is_open.value = true;
    } else {
      menu.style.right = '-100%';
      menu.style.display = 'none';
      is_open.value = false;
    }
  });
});


// switch color
const flag = ref(false);
const circle = ref(null);
const waveColor = ref(null);
const waveColor2 = ref(null);
const storedata = ref(null);

onMounted(() => {
  storedata.value = sessionStorage.getItem("changecolor");
  if (storedata.value === "true") {
    flag.value = true;
    circle.value.innerHTML = '<i class="bi bi-sun-fill"></i>';
    circle.value.style.backgroundColor = "#ccf1f5";
    waveColor.value = "DeepSkyBlue";
    waveColor2.value = "DeepSkyBlue";
  } else {
    flag.value = false;
    circle.value.innerHTML = '<i class="bi bi-moon-stars-fill"></i>';
    circle.value.style.backgroundColor = "lightgrey";
    waveColor.value = "blue";
    waveColor2.value = "blue";
  }

  // 串接天氣api
  axios
    .get(
      "https://opendata.cwb.gov.tw/api/v1/rest/datastore/O-A0003-001?Authorization=CWB-27C8451A-9958-4266-BF95-4D2E7E36A415"
    ) //使用get或post等取得路徑資料(php或json)
    .then((res) => {
      //回傳後如何處理
      // console.log(res);

      // 查找溫度資料
      let temp = res.data.records.location[14].weatherElement[3].elementValue;
      // console.log(temp);

      // 查找天氣型態資料
      let WeatherState =
        res.data.records.location[14].weatherElement[20].elementValue;
      // console.log(WeatherState);

      // 加上溫度單位
      let tempList = temp + "°C";

      tempWeather.value = tempList;
      rainWeatherState.value = WeatherState;
    })
    .catch((err) => console.log(err)); //錯誤如何處理
});

const switchColor = () => {
  flag.value = !flag.value;
  emit("color", flag.value);
  if (flag.value) {
    circle.value.innerHTML = '<i class="bi bi-sun-fill"></i>';
    circle.value.style.backgroundColor = "#ccf1f5";
    waveColor.value = "DeepSkyBlue";
    waveColor2.value = "DeepSkyBlue";
    storedata.value = sessionStorage.setItem("changecolor", "true");
  } else {
    circle.value.innerHTML = '<i class="bi bi-moon-stars-fill"></i>';
    circle.value.style.backgroundColor = "lightgrey";
    waveColor.value = "blue";
    waveColor2.value = "blue";
    storedata.value = sessionStorage.setItem("changecolor", "false");
  }
};

const tempWeather = ref(null); //溫度
const rainWeatherState = ref(""); //天氣型態

const get_weather_img = computed(() => {
  switch (true) {
    case rainWeatherState.value.match(/雨/g):
      return "./src/img/weather_elements4.png";
    case rainWeatherState.value.match(/晴/g):
      return "./src/img/weather_elements3.png";
    case rainWeatherState.value.match(/陰/g):
      return "./src/img/weather_elements2.png";
    default:
      return "./src/img/weather_elements1.png";
  }
});

</script>

<style lang="scss" scoped>
header {
  .content {
    width: 100%;
    height: 128px;
    background-color: #003f7cf2;
    display: flex;
    justify-content: space-between;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1000;
    overflow-x: hidden;

    @include mobile {
      height: 80px;
    }

    &.-light_color2 {
      background-color: DeepSkyBlue;
    }

    .logo {
      flex: 0 0 115px;

      @include mobile {
        flex: 0 0 75px;
      }

      img {
        width: 100%;
        margin-left: 30px;
        padding-top: 10px;

        @include mobile {
          margin-left: 10px;
          padding-top: 10px;
        }
      }
    }

    nav {
      display: flex;
      flex-direction: column;

      .icon {
        display: flex;
        flex-direction: row-reverse;
        margin-top: 20px;
        padding-right: 40px;
        align-items: center;
        gap: 20px;

        li:nth-child(5) {
          margin-right: 0;
        }

        li:nth-child(6) {
          margin-right: 0;
        }

        // @include mobile{
        //     margin-right: 5px;
        // }

        i {
          display: none;

          @include mobile {
            display: block;
            font-size: 30px;
            font-weight: bold;
            color: white;
          }
        }

        li {
          a {
            position: relative;
          }

          button {
            width: 28px;
            height: 28px;
            border-radius: 50%;
            border-style: none;
            border-color: #fff;
            background-color: #c1eafb;
            color: #16355a;

            @include mobile {
              height: 26px;
              width: 26px;
            }

            p {
              font-size: 0.1rem;
            }

          }

          .icons {
            width: 25px;

            &.cart-icon {

              ~div.cart-count {
                right: -.5rem;
                top: -.5rem;
                position: absolute;
                width: 1rem;
                height: 1rem;
                background-color: red;
                border-radius: 50%;
              }
            }
          }




          .weather_img {
            width: 35px;
            // align-self: center;
          }

          p {
            color: white;
          }

          // }

          .switch {
            background-color: lightgrey;

            i {
              display: block;

              @include mobile() {
                font-size: 10px;
                color: map-get($color, text);
              }
            }
          }

          &:nth-child(2) {
            @include mobile() {
              display: none;
            }
          }
        }

        @include mobile() {
          gap: 10px;
          padding-right: 20px;
        }
      }

      .menu {
        display: flex;
        flex-direction: row;
        margin-top: 20px;

        @include mobile {
          margin: 0;
        }

        li {
          margin-right: 40px;

          @include mobile {
            margin-right: 0px;
          }

          p {
            font-size: 1.6rem;
            color: white;
            letter-spacing: 0.6rem;
            position: relative;
            transition: 0.5s;

            @include mobile {
              line-height: 70px;
              text-align: center;
            }
          }

          p:after {
            content: "";
            position: absolute;
            left: 0;
            bottom: 0;
            width: 95%;
            height: 2px;
            background-color: #fff;
            transition: 0.3s;
            transform: scale(0);
          }

          p:hover::after {
            transform: scaleX(1);
          }
        }

        @include mobile {
          display: none;
          flex-direction: column;
          width: 100%;
          position: fixed;
          background-color: #16355a;
          /* js滑入效果 */
          right: -500px;
          top: 80px;
        }
      }
    }
  }

  .ocean {
    height: 74px;
    width: 100%;
    position: absolute;
    top: 128px;
    left: 0;
    right: 0;
    overflow-x: hidden;
    transform: scaleY(-1);
    z-index: 999;

    @include mobile {
      top: 80px;
      height: 46px;
    }

    .wave {
      background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 88.7'%3E%3Cpath d='M800 56.9c-155.5 0-204.9-50-405.5-49.9-200 0-250 49.9-394.5 49.9v31.8h800v-.2-31.6z' fill='%23003F7C'/%3E%3C/svg%3E");
      position: absolute;
      width: 200%;
      height: 100%;
      animation: wave 10s -3s linear infinite;
      transform: translate3d(0, 0, 0);
      opacity: 0.8;

      &.-light_color {
        background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 88.7'%3E%3Cpath d='M800 56.9c-155.5 0-204.9-50-405.5-49.9-200 0-250 49.9-394.5 49.9v31.8h800v-.2-31.6z' fill='DeepSkyBlue'/%3E%3C/svg%3E");
      }
    }

    .wave:nth-of-type(2) {
      bottom: 0;
      animation: wave 18s linear reverse infinite;
      opacity: 0.5;
    }

    .wave:nth-of-type(3) {
      bottom: 0;
      animation: wave 20s -1s linear infinite;
      opacity: 0.5;
    }

    @keyframes wave {
      0% {
        transform: translateX(0);
      }

      50% {
        transform: translateX(-25%);
      }

      100% {
        transform: translateX(-50%);
      }
    }
  }
}
</style>
