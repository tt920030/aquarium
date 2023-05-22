<template>
  <body class="index">
    <Header @openLogin="openLogin"></Header>
    <div class="index_logo_video">
      <video src="src/img/index_videosea.mp4" id="video_sea" width="100%" autoplay muted loop></video>
      <div class="index_logo_text">
        <h4>探索海洋奧秘</h4>
        <p>in Taipei Town</p>
        <img src="src/img/index_logo.svg" alt="">
      </div>
    </div>

    <div class="wrapper">

      <!-- 海生館介紹 -->
      <div class="intro_text">
        <h4>探索海洋奧秘展開驚奇之旅</h4>
        <h1>Taipei Aquarium</h1>
        <p>
          位於台灣北部的台北海生館是一個充滿驚奇和探索的地方，讓您感受到海洋的無限魅力。這裡是一個集科學、教育和娛樂於一體的海洋主題公園，展示了豐富多彩的海洋生物和海洋文化。台北海生館是一個適合全家大小和各種興趣愛好者的地方，無論您是海洋愛好者，還是想探索科學和文化的人，都能在這裡找到樂趣和啟發。
        </p>
      </div>
    </div>

    <!-- 連結到園區介紹按鈕 -->
    <div class="index_park_button_all">
      <ul>

        <li v-for="button in park_buttons">
          <a href="">
            <div class="house_icon">
              <img :src=button.src1 alt="">
              <img :class=button.class :src=button.src2 alt="">
              <p>{{ button.cName }}</p>
              <p>{{ button.eName }}</p>
            </div>
            <img :src=button.src3 alt="">
          </a>
        </li>
      </ul>
    </div>

    <div class="index_bgc">
      <main class="wrapper">
        <!-- 活動行程 -->
        <div class="index_journey">
          <h2>活動行程</h2>
          <ul>
            <li>
              <div class="index_journey_content">
                <a href="">
                  <img src="src/img/index_journey1.jpg" alt="">
                  <div class="index_journey_content_sub">
                    <h4>海洋跳躍者：海豚秀</h4>
                    <p>看到海豚們跳躍、翻轉、灑水等技巧動作，展現出它們非凡的運動天賦。</p>
                  </div>
                </a>
              </div>
            </li>
            <li>
              <div class="index_journey_content">
                <a href="">
                  <img src="src/img/index_journey2.jpg" alt="">
                  <div class="index_journey_content_sub">
                    <h4>水中留影</h4>
                    <p>在水中自由拍攝照片和影片，捕捉美麗的海底風景、游泳的動作以及快樂的時刻。</p>
                  </div>
                </a>
              </div>
            </li>
            <li>
              <div class="index_journey_content">
                <a href="">
                  <img src="src/img/index_journey3.jpg" alt="">
                  <div class="index_journey_content_sub">
                    <h4>磷蝦小管家：<br>餵魚體驗活動</h4>
                    <p>穿上特殊的衣物，跟隨專業的飼養員進入水族館中的觀賞魚缸，親手投放食物給魚群。</p>
                  </div>
                </a>
              </div>
            </li>
            <li>
              <div class="index_journey_content">
                <a href="">
                  <img src="src/img/index_journey4.jpg" alt="">
                  <div class="index_journey_content_sub">
                    <h4>只想和你做朋友:<br>與水獺近距離接觸</h4>
                    <p>親手投放食物給水獺，觀察牠們的行為與習性。</p>
                  </div>
                </a>
              </div>
            </li>
          </ul>
        </div>

        <!-- 了解更多button -->
        <div class="index_button">
          <a class="btn">了解更多<i class="bi bi-chevron-right"></i></a>
        </div>
      </main>
    </div>


    <!-- 館內照片輪播圖 -->
    <!-- <div class="index_colorblock">
        <div class="index_path">
            <img src="src/img/index_park1.jpg" alt="">
        </div>
    </div> -->

    <main class="index_news">

      <!-- 最新消息 -->
      <div class="wrapper">
        <h2>最新消息</h2>
        <ul>
          <li>
            <img src="src/img/index_news1.jpg" alt="">
            <div class="index_news_content">
              <h3>2023/04/17</h3>
              <h4>企鵝館迎來新成員！</h4>
              <p>保育人員細心照顧，企鵝寶寶健康成長中！</p>
            </div>
          </li>
          <li>
            <img src="src/img/index_news2.jpg" alt="">
            <div class="index_news_content">
              <h3>2023/04/17</h3>
              <h4>台北水族館新開幕！</h4>
              <p>各種海洋生物都在這，還有各項活動可以參與！</p>
            </div>
          </li>
        </ul>

        <!-- 了解更多button -->
        <div class="index_button">
          <a class="btn">了解更多<i class="bi bi-chevron-right"></i></a>
        </div>

      </div>
    </main>

    <!-- 贊助商 -->

    <div class="index_ad">
      <div class="index_ad_box">
        <div class="index_ad_list">
          <img src="/src/img/index_logo1.jpg" alt="">
          <img src="/src/img/index_logo2.jpg" alt="">
          <img src="/src/img/index_logo3.jpg" alt="">
          <img src="/src/img/index_logo4.jpg" alt="">
          <img src="/src/img/index_logo5.jpg" alt="">
          <img src="/src/img/index_logo6.jpg" alt="">
        </div>
      </div>
    </div>

    <Footer/>
    <LogIn v-if="hide" @close="openLogin"></LogIn>
    
  </body>
  
</template>

<script setup>


import Header from '/src/components/Header.vue';
import Footer from '/src/components/Footer.vue';




import { onMounted, reactive, ref } from "vue";

const hide = ref(false);

const openLogin = (n) => {
  // console.log(n );
  hide.value = n;
  // console.log(hide.value);
};




const park_buttons = reactive([
  { a: "", src1: "/src/img/index_penguin.svg", class: "peguin_blue", src2: "/src/img/index_penguin_blue-01.svg", cName: "企鵝館", eName: "Penguin House", src3: "/src/img/index_button1.jpg" },
  { a: "", src1: "/src/img/index_jellyfish.svg", class: "jellyfish_blue", src2: "/src/img/index_jellyfish_blue-01.svg", cName: "水母館", eName: "JellyFish House", src3: "/src/img/index_button2.jpg" },
  { a: "", src1: "/src/img/index_dolphin.svg", class: "dolphin_blue", src2: "/src/img/index_dolphin_blue-01.svg", cName: "海豚館", eName: "Dolphin House", src3: "/src/img/index_button3.jpg" },
  { a: "", src1: "/src/img/index_sealion.svg", class: "sealion_blue", src2: "/src/img/index_sealion_blue-01.svg", cName: "海獅館", eName: "Sea Lion House", src3: "/src/img/index_button4.jpg" }
]);



// index video
const videoNoStop = function () {
  let video_sea = document.getElementById("video_sea");

  video_sea.addEventListener("timeupdate", function () {
    if (video_sea.currentTime >= video_sea.duration - 0.15) {
      video_sea.currentTime = 0.15;
    };

  });
};

onMounted(()=>{
  videoNoStop();
});



// index_ad 跑馬燈
window.onload = function() {

    let box = document.querySelector('.index_ad_box');
    let list = document.querySelector('.index_ad_list');

    // 複製一份讓中間不間斷
    list.innerHTML += list.innerHTML;

    let left = 0;
    let time;
    
    function move(){
        clearInterval(time);
        time = setInterval(() => {
        left -= 2;

            if( left === -(6 * 200 + 6 * 20)){
                left = 0;
            }

        list.style.left = left + "px"
        }, 20)
    };

    move();

    box.addEventListener('mouseenter', () => {
        clearInterval(time);
    });

    box.addEventListener('mouseleave', () => {
        move();
    });
};

</script>

