<template>
    <!-- index_video -->
    <div class="index_logo_video">
    <video src="../../../public/img/index_videosea.mp4" id="video_sea" width="100%" autoplay muted loop></video>
    <div class="index_logo_text">
      <h4>探索海洋奧秘</h4>
      <p>in Taipei Town</p>
      <img src="@/img/index_logo.svg" alt=""/>
    </div>
    </div>

    <div class="wrapper">
    <!-- index_intro -->
    <div class="intro_text">
      <h4>探索海洋奧秘展開驚奇之旅</h4>
      <h1>Taipei Aquarium</h1>
      <p>
      位於台灣北部的台北海生館是一個充滿驚奇和探索的地方，讓您感受到海洋的無限魅力。這裡是一個集科學、教育和娛樂於一體的海洋主題公園，展示了豐富多彩的海洋生物和海洋文化。台北海生館是一個適合全家大小和各種興趣愛好者的地方，無論您是海洋愛好者，還是想探索科學和文化的人，都能在這裡找到樂趣和啟發。
      </p>
    </div>
    </div>
</template>

<script setup>
import { onMounted } from "vue";

onMounted(()=> {
    videoNoStop();
});

// index video
const videoNoStop = function () {
  let video_sea = document.getElementById("video_sea");

  // video_sea.addEventListener("timeupdate", function () {
  //   if (video_sea.currentTime >= video_sea.duration - 0.15) {
  //     video_sea.currentTime = 0.15;
  //   }
  // });
};
</script>

<style lang="scss" scoped>
.index_logo_video {
    position: relative;

    .index_logo_text {
      h4 {
        position: absolute;
        z-index: 999;
        top: 35%;
        left: 50.3%;
        transform: translate(-50%, -50%);
        color: white;
        letter-spacing: 7px;
        font-size: 14px;
      }

      p {
        position: absolute;
        z-index: 999;
        top: 61%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: white;
        letter-spacing: 3px;
      }

      &::after {
        position: absolute;
        z-index: 999;
        content: "";
        top: 64%;
        left: 44.5%;
        width: 11%;
        height: 0.3%;
        background-color: white;
      }

      img {
        z-index: 999;
        position: absolute;
        top: 50%;
        left: 50%;
        width: 180px;
        transform: translate(-50%, -50%);
      }

      @include mobile() {
        &::after {
          left: 35%;
          width: 30%;
        }

        img {
          width: 150px;
        }
      }
    }

    @include mobile() {
      overflow-x: hidden;

      #video_sea {
        width: 1200px;
      }
    }
  }

  @include wrapper {
    // 海生館介紹
    .intro_text {
      text-align: center;
      margin-top: 100px;

      h4 {
        margin-bottom: 30px;
        letter-spacing: 10px;
      }

      h1 {
        font-family: Noto Sans TC;
        color: map-get($color, text);
        font-weight: 400;
        margin-bottom: 30px;
        letter-spacing: 12px;
      }

      p {
        margin: 0 auto;
        max-width: 600px;
        width: 50%;
      }

      @include mobile() {
        h4 {
          letter-spacing: 5px;
        }

        p {
          width: 70%;
        }
      }
    }
  }







</style>
