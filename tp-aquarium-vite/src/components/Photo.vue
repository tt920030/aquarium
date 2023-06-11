<template>
  <div class="container1">
    <img src="/img/input_fork.svg" alt="" class="fork" @click="emitClose" />
    <h4>請選擇頭貼</h4>
    <form method="post" action="" class="photo">
      <div class="list" v-for="(photo, index) in photos" :key="photo">
        <input
          type="radio"
          name="chose_photo"
          :id="index + 1"
          :value="index + 1"
          v-model="photo_id"
        />
        <label :for="index + 1" :class="photo_id == index + 1 ? '-on' : ''">
          <img :src="photo" alt="" />
        </label>
      </div>
      <div class="button">
        <button type="button" class="btn1" @click="photo">
          <p>確認</p>
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
import { useCookies } from "vue3-cookies";
const emit = defineEmits(["closePhoto", "emitPhotoId", "reload"]);
const emitClose = () => {
  emit("closePhoto", "");
};

const emitPhoto = () => {
  emit("emitPhotoId", photo_id.value);
};

const emitreload = () => {
  emit("reload");
};
const props = defineProps(["id"]);

const photos = ref([
  "/img/member_photo1.png",
  "/img/member_photo2.png",
  "/img/member_photo3.png",
  "/img/member_photo4.png",
  "/img/member_photo5.png",
  "/img/member_photo6.png",
  "/img/member_photo7.png",
  "/img/member_photo8.png",
  "/img/member_photo9.png",
]);

const currentIndex = ref(1);

const photo_id = ref(props.id);

const { cookies } = useCookies();

const id = cookies.get("id");

const photo = () => {
  let params = new URLSearchParams();
  params.append("photo_id", photo_id.value);
  params.append("id", id);

  // console.log(profileText.photo_id);

  axios
    .post("http://localhost/g6/changePhoto.php", params)
    .then((res) => {
      emitPhoto();
      emitreload();
      emitClose();
    })
    .catch((err) => console.log(err));
};
</script>

<style lang="scss" scoped>
.container1 {
  width: 720px;
  border: 5px solid map-get($color, bgc2);
  border-radius: 15px;
  background-color: #fff;
  position: absolute;
  left: 50%;
  top: 100px;
  transform: translateX(-50%);
  z-index: 2;

  @include mobile {
    width: 100%;
  }

  h4 {
    text-align: center;
    padding-top: 30px;
  }

  .photo {
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    padding: 20px;
    justify-content: center;
    align-items: center;

    // @include mobile{
    //     justify-content: start;
    // }

    .list {
      width: 150px;
      height: 150px;
      padding: 10px;
      // border: 1px solid red;

      display: flex;
      justify-content: center;
      align-items: center;

      @include mobile {
        width: 50%;
        height: 50%;
        box-sizing: border-box;
      }

      input {
        appearance: none;
        display: none;
      }

      label {
        // border: 1px solid blue;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          cursor: pointer;
        }
      }

      .-on {
        img {
          border: 4px solid map-get($color, warning);
          border-radius: 50%;
        }
      }
    }

    .button {
      display: block;
      width: 100%;
      .btn1 {
        margin-top: 40px;
        @include mobile {
          display: block;
        }

        p {
          margin: 0;
        }
      }
    }
  }
}
</style>
