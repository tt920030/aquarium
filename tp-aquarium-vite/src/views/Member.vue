<template>
  <!-- 電腦版 -->
  <div class="member">
    <main>
      <div class="left">
        <div class="photo">
          <img :src="'https://tibamef2e.com/thd101/g6/img/' + photo" alt="" />
        </div>
        <p class="name">使用者姓名</p>
        <button class="btn1" @click="logOut">
          <p>登出</p>
        </button>

        <div class="manu">
          <RouterLink to="/member/Profile" @showPassword="showPassword1(n)">
            <div class="list">
              <img
                src="https://tibamef2e.com/thd101/g6/img/member_user.svg"
                alt=""
              />
              <p>我的資料</p>
            </div>
          </RouterLink>
          <RouterLink to="/member/Order">
            <div class="list">
              <img
                src="https://tibamef2e.com/thd101/g6/img/member_order.svg"
                alt=""
              />
              <p>我的訂單</p>
            </div>
          </RouterLink>
          <RouterLink to="/member/Coupon">
            <div class="list">
              <img
                src="https://tibamef2e.com/thd101/g6/img/member_coupon.svg"
                alt=""
              />
              <p>我的折價券</p>
            </div>
          </RouterLink>
          <!-- <RouterLink to="/member/Pet">
                    <div class="list">
                        <img src="@https://tibamef2e.com/thd101/g6/img/member_pet.svg" alt="">
                        <p>虛擬寵物</p>
                    </div>
                </RouterLink> -->
        </div>
      </div>
      <div class="right_view">
        <RouterView @reload="getPhotoId"></RouterView>
      </div>
    </main>
  </div>

  <Profile v-if="false" @showPassword="showPassword1"></Profile>
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
import { useCookies } from "vue3-cookies";
import Profile from "./member/Profile.vue";
import { onMounted, reactive, ref, watch } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
const router = useRouter();
const { cookies } = useCookies();

const password = ref(false);

const photo = ref("");

const button = ref(1);

const id = cookies.get("id");

const showPassword1 = (n) => {
  // console.log(n);
  password.value = n;
  // console.log(password.value);
};

const photoId = ref();
const getPhotoId = () => {
  let params = new URLSearchParams();
  params.append("id", id);

  axios
    .post(`${import.meta.env.VITE_API_URL}getPhoto.php`, params)
    .then((res) => {
      // console.log(res.data[0].PHOTO_ID);
      // profileText.email = res.data[0].EMAIL;
      photoId.value = res.data[0].PHOTO_ID;

      getPhotoName();
    })
    .catch((err) => console.log(err));
};

const getPhotoName = () => {
  let params = new URLSearchParams();
  params.append("photo_id", photoId.value);

  axios
    .post(`${import.meta.env.VITE_API_URL}photoName.php`, params)
    .then((res) => {
      // console.log(res.data[0].PHOTO);
      photo.value = res.data[0].PHOTO;
      // profileText.email = res.data[0].EMAIL;
      // photoId.value = res.data[0].PHOTO_ID;
    })
    .catch((err) => console.log(err));
};

const logOut = () => {
  cookies.remove("id");
  router.push({ path: "/" });
};

onMounted(() => {
  getPhotoId();
  // console.log(photoId.value);
});
</script>

<style lang="scss">
@import "../../src/assets/sass/page/member";
// @import "../../src/assets/sass/page/member_mobile";

.btn1 {
  display: block;
  background: #fff61c;
  border-radius: 40px;
  text-align: center;
  padding: 10px 30px;
  transition: 0.5s;
  font-family: "Noto Sans TC", sans-serif;
  color: #16355a;
  cursor: pointer;
  border: 0;
  width: fit-content;
  margin: 0 auto;
}

.input {
  display: flex;
  flex-direction: column;

  label {
    font-size: 1.6rem;
    line-height: 1.6;
    letter-spacing: 0.1rem;
    margin-bottom: 5px;
  }

  input {
    appearance: none;
    border: 0px;
    border-bottom: 1px solid black;
    border-radius: 0;
    height: 40px;
    width: 100%;
    background-repeat: no-repeat;
    background-position: left 5px center;
    padding: 0 25px;

    &:focus {
      outline: 0;
      box-shadow: none;
      border-bottom: 1px solid black;
      background-color: white;
    }
  }

  select {
    // appearance: none;
    border: 0px;
    border-bottom: 1px solid black;
    border-radius: 0;
    height: 40px;
    width: 100%;
    background-repeat: no-repeat;
    background-position: left 5px center;
    padding: 0 25px;

    &:focus {
      outline: 0;
      box-shadow: none;
      border-bottom: 1px solid black;
      background-color: white;
    }
  }

  margin-bottom: 20px;
}

.fork {
  position: absolute;
  right: 10px;
  top: 10px;
  cursor: pointer;
}
</style>
