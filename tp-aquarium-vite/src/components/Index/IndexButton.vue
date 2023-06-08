<template>
    <div class="index_park_button_all">
        <ul>
        <li v-for="button in park_buttons" :key="button.eName">
            <RouterLink to="/floor_Introduction" ref="">
            <div class="house_icon">
                <img :src="button.src1" alt="" />
                <img :class="button.class" :src="button.src2" alt="" />
                <p>{{ button.cName }}</p>
                <p>{{ button.eName }}</p>
            </div>
            <img :src="button.src3" alt="" />
            </RouterLink>
        </li>
        </ul>
    </div>
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
import { reactive } from "vue";

const park_buttons = reactive([
  {
    a: "",
    src1: "/src/img/index_penguin.svg",
    class: "penguin_blue",
    src2: "/src/img/index_penguin_blue-01.svg",
    cName: "企鵝館",
    eName: "Penguin House",
    src3: "/src/img/index_button1.jpg",
  },
  {
    a: "",
    src1: "/src/img/index_jellyfish.svg",
    class: "jellyfish_blue",
    src2: "/src/img/index_jellyfish_blue-01.svg",
    cName: "水母館",
    eName: "JellyFish House",
    src3: "/src/img/index_button2.jpg",
  },
  {
    a: "",
    src1: "/src/img/index_dolphin.svg",
    class: "dolphin_blue",
    src2: "/src/img/index_dolphin_blue-01.svg",
    cName: "海豚館",
    eName: "Dolphin House",
    src3: "/src/img/index_button3.jpg",
  },
  {
    a: "",
    src1: "/src/img/index_sealion.svg",
    class: "sealion_blue",
    src2: "/src/img/index_sealion_blue-01.svg",
    cName: "海獅館",
    eName: "Sea Lion House",
    src3: "/src/img/index_button4.jpg",
  },
]);

</script>

<style lang="scss" scoped>

/* 連結到園區介紹按鈕 */
.index_park_button_all {
    ul {
      margin-top: 100px;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 20px;

      li {
        width: 45%;
        position: relative;
        overflow: hidden;
        border-radius: 10px;

        &::before {
          position: absolute;
          content: "";
          background-image: linear-gradient(
            0deg,
            rgb(4, 12, 44) 70%,
            rgba(4, 12, 44, 0.848) 100%
          );
          width: 100%;
          height: 100%;
          z-index: 0;
        }

        a {
          display: flex;
          /* 做一次垂直對齊消除空隙 */
          transition: all 0.5s ease;

          .house_icon {
            position: absolute;
            color: white;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 9999;

            &::after {
              opacity: 0;
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              content: "";
              width: 250px;
              height: 250px;
              background-color: white;
              border-radius: 50%;
              transition: all 0.5s ease;
              z-index: -5;

              @include mobile() {
                width: 200px;
                height: 200px;
              }
            }

            img {
              width: 100px;
              margin-bottom: 10px;
              opacity: 1;
            }

            .penguin_blue,
            .jellyfish_blue,
            .dolphin_blue,
            .sealion_blue {
              display: none;
            }

            p {
              text-align: center;
              margin-left: -10px;
            }
          }

          img {
            width: 100%;
            transform: scale(1, 1);
            opacity: 0.8;
          }

          &:hover {
            transform: scale(1.1, 1.1);
          }

          &:hover img {
            opacity: 0.7;
          }

          &:hover .house_icon::after {
            opacity: 1;
          }

          &:hover .house_icon img {
            display: none;
          }

          &:hover .house_icon .penguin_blue {
            display: block;
            opacity: 1;
          }

          &:hover .house_icon .jellyfish_blue {
            display: block;
            opacity: 1;
          }

          &:hover .house_icon .dolphin_blue {
            display: block;
            opacity: 1;
          }

          &:hover .house_icon .sealion_blue {
            display: block;
            opacity: 1;
          }

          &:hover .house_icon p {
            color: map-get($color, text);
          }
        }
      }
    }

    /* RWD */
    @include mobile() {
      ul {
        li {
          width: 90%;

          a {
            width: 100%;
          }
        }
      }
    }
  }


</style>
