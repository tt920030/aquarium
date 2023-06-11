<template>
  <div class="sign reset_password">
    <main>
      <img
        src="https://tibamef2e.com/thd101/g6/img/input_fork.svg"
        alt=""
        class="fork"
        @click="closePassword"
      />
      <div class="left">
        <div class="pic1"></div>
        <div class="pic2"></div>
        <div class="pic3"></div>
        <div class="pic4"></div>
        <div class="pic5"></div>
      </div>
      <svg
        viewBox="0 0 1920 1920"
        xmlns="http://www.w3.org/2000/svg"
        width="0px"
      >
        <clipPath id="bobble1">
          <path
            d="M134.102 8.78395C148.836 32.0915 148.024 61.7438 137.735 87.34C127.751 112.178 107.337 131.509 81.6846 139.182C56.7667 146.634 29.8296 141.115 8.73765 125.922C-11.308 111.482 -20.4065 87.8417 -23.5965 63.3427C-26.9977 37.2228 -27.629 8.29767 -9.00675 -10.3509C9.9733 -29.3577 39.2883 -29.8445 65.9054 -26.2856C92.5676 -22.7206 119.734 -13.9442 134.102 8.78395Z"
          />
        </clipPath>

        <clipPath id="bobble2">
          <path
            d="M79.2808 -24.864C99.7105 -26.8753 113.579 -6.13488 128.805 7.62573C145.36 22.5873 169.48 34.8178 169.991 57.1177C170.505 79.5502 148.538 94.7618 131.127 108.93C115.991 121.246 98.7718 131.963 79.2808 130.931C60.5951 129.942 46.3364 116.47 32.6508 103.717C18.2333 90.2829 -1.28312 76.7712 0.0663627 57.1177C1.39557 37.7595 25.1521 30.461 38.6393 16.5026C52.6026 2.05154 59.2759 -22.8945 79.2808 -24.864Z"
          />
        </clipPath>

        <clipPath id="bobble3">
          <path
            d="M134.605 11.2357C143.048 35.5996 135.698 61.0752 126.813 85.3717C118.47 108.186 107.6 130.701 86.4791 142.839C64.6178 155.404 38.1151 157.685 14.1435 150.125C-9.68116 142.612 -26.072 123.479 -40.1215 102.914C-56.7399 78.5882 -78.4501 52.9 -71.9618 24.0868C-65.2198 -5.85306 -35.7295 -23.7815 -8.39492 -37.9781C18.7938 -52.099 49.6211 -63.9916 78.4946 -54.0547C106.776 -44.3215 124.838 -16.9462 134.605 11.2357Z"
          />
        </clipPath>

        <clipPath id="bobble4">
          <path
            d="M52.0785 4.75422C70.2438 5.48702 89.0072 0.321167 104.258 10.2118C122.795 22.233 142.485 40.3354 140.912 62.3644C139.361 84.0681 115.577 95.7387 97.3045 107.567C83.6722 116.391 68.0999 117.203 52.0785 119.868C30.3573 123.481 6.20999 139.083 -11.2064 125.616C-28.8152 112.001 -23.534 84.5813 -22.2885 62.3644C-21.1388 41.8575 -20.7327 18.4072 -4.49054 5.82479C11.0057 -6.17975 32.4885 3.96395 52.0785 4.75422Z"
          />
        </clipPath>

        <clipPath id="bobble5">
          <path
            d="M132.599 4.93812C156.55 9.061 176.222 21.9027 194.414 37.959C214.299 55.5093 237.484 73.1648 239.771 99.5293C242.183 127.331 225.162 152.289 206.109 172.748C186.154 194.175 161.842 212.206 132.599 214.612C101.033 217.21 69.7286 206.66 45.8492 185.935C20.2149 163.687 0.175861 133.395 0.00131277 99.5293C-0.173913 65.5324 17.2043 32.0274 44.954 12.2317C69.7313 -5.44376 102.567 -0.23136 132.599 4.93812Z"
          />
        </clipPath>
      </svg>
      <div class="right">
        <h3>重設密碼</h3>
        <div class="top">
          <form>
            <div class="input">
              <label for="password" class="form-label">密碼</label>
              <input
                :type="eye"
                id="password"
                name="password"
                placeholder="密碼長度需六至十二位"
                class="form-control"
                :class="{ 'is-invalid': !register.password }"
                v-model.trim="registerText.registerPassword"
              />
              <img :src="eyeImg" alt="" class="eye" @click="toText($event)" />
              <div class="invalid-feedback">密碼須包含大小寫英文及數字</div>
            </div>
            <div class="input">
              <label for="password2" class="form-label">密碼確認</label>
              <input
                :type="eye"
                id="password2"
                name="password2"
                placeholder="請再次輸入密碼"
                :class="{ 'is-invalid': !register.password2 }"
                class="form-control"
                v-model.trim="registerText.registerPassword2"
              />
              <img :src="eyeImg" alt="" class="eye" @click="toText($event)" />
              <div class="invalid-feedback">二次輸入與密碼不符</div>
            </div>

            <button type="button" class="btn1" @click="changePassword">
              <h4>確認</h4>
            </button>
          </form>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import "bootstrap";
import { reactive, ref, onMounted } from "vue";
import axios from "axios";
import { useCookies } from "vue3-cookies";

const { cookies } = useCookies();

const id = cookies.get("id");

const emit = defineEmits(["closePassword", "reload"]);

const eye = ref("password");

const eyeImg = ref("https://tibamef2e.com/thd101/g6/img/login_eye.svg");

const register = reactive({
  password: true,
  password2: true,
});

const registerText = reactive({
  registerPassword: "",
  registerPassword2: "",
});

const toText = (e) => {
  // console.log(eye.value);
  if (eye.value == "password") {
    eye.value = "text";
    eyeImg.value = "https://tibamef2e.com/thd101/g6/img/login_eyeopen.svg";
  } else {
    eye.value = "password";
    eyeImg.value = "https://tibamef2e.com/thd101/g6/img/login_eye.svg";
    // console.log(eye.value);
  }
};

const closePassword = () => {
  emit("closePassword");
};

const changePassword = () => {
  const send_data = ref(true);

  let passwordRule = /(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{6,12}$/;

  if (
    registerText.registerPassword === "" ||
    !passwordRule.test(registerText.registerPassword)
  ) {
    register.password = false;
    send_data.value = false;
  } else {
    register.password = true;
  }

  if (
    registerText.registerPassword2 !== registerText.registerPassword ||
    registerText.registerPassword2 === ""
  ) {
    register.password2 = false;
    send_data.value = false;
  } else {
    register.password2 = true;
  }

  if (send_data.value === true) {
    // console.log("aaa");
    changePasswordPHP();
  }
};

const changePasswordPHP = () => {
  let params = new URLSearchParams();
  params.append("id", id);
  params.append("password", registerText.registerPassword);

  axios
    .post("http://localhost/g6/changePassword.php", params) //使用get或post等取得路徑資料(php)

    .then((res) => {
      //回傳後如何處理

      // console.log(res.data);
      emit("closePassword");
      emit("reload");
    })
    .catch((err) => console.log(err)); //錯誤如何處理
};
</script>

<style lang="scss" scoped>
@import "bootstrap/dist/css/bootstrap.min.css";
@import "../assets/sass/page/sign";
</style>
