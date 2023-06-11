<template>
  <div class="journey">
    <!-- journey banner -->
    <journey-banner></journey-banner>
    <!-- journey跑馬燈 -->
    <journey-nextticker></journey-nextticker>
    <!-- journey lightbox -->
    <journey-lightbox
      :sectionData="sectionData"
      @openBox="openLightbox"
    ></journey-lightbox>
    <!-- 燈箱 -->
    <Lightbox
      v-if="lightboxIsOpen"
      :lightboxData="lightboxData"
      @closeBox="closeLightbox"
    ></Lightbox>
    <!-- RWD手風琴 -->
    <Acoordion :accordionData="lightboxData1"></Acoordion>
  </div>
  <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
import { onMounted, reactive, ref } from "vue";
import JourneyBanner from "/src/components/Journey/JourneyBanner.vue";
import JourneyNextticker from "/src/components/Journey/JourneyNextticker.vue";
import JourneyLightbox from "/src/components/Journey/JourneyLightbox.vue";
import Lightbox from "/src/components/FloorCommon/Lightbox.vue";
import Acoordion from "/src/components/FloorCommon/Accordion.vue";
import axios from "axios";

const sectionData = reactive([
  // {
  //   id: "journey1",
  //   src: "/img/journey_intro1.jpg",
  //   title: "夜宿海生館-兩天一夜",
  //   content: "夜宿海生館是一個兩天一夜的活動，將帶您前往探索台灣水域區的豐富生態和文化。進行夜間探索、聆聽海洋生物的聲音，更有機會觀察到燈籠魚、海蜇等特殊生物，兩天一夜的行程充滿探索和學習的樂趣，讓您深入了解台灣水域區的獨特之處。",
  //   time: "兩天一夜",
  //   location: "台北海生館",
  //   price: "$2680/人",
  //   to: "/ticket",
  // },
  // {
  //   id: "journey2",
  //   src: "/img/journey_intro2.jpg",
  //   title: "水中留影",
  //   content: "水中拍照是一種非常有趣的活動，可以在游泳池或海灘等水域進行。通過使用專業的防水相機或手機殼，您可以在水中自由拍攝照片和影片，捕捉美麗的海底風景、游泳的動作以及快樂的時刻技巧，如水滴拍攝、水面倒影等，以獲得令人驚嘆的效果。",
  //   time: "25分鐘",
  //   location: "台北海生館",
  //   price: "$300/人",
  //   to: "/ticket",
  // },
  // {
  //   id: "journey3",
  //   src: "/img/journey_banner1.jpg",
  //   title: "海生館專人導覽(預約制)",
  //   content: "海生館專人導覽，讓你更深入了解海洋生物的奧秘！透過預約專人導覽，你可以在專業的生物解說帶領下，深入了解各種海洋生物的特性及生態，更進一步瞭解大自然的神奇。",
  //   time: "120分鐘",
  //   location: "台北海生館",
  //   price: "$1200/時",
  //   to: "/ticket",
  // },
  // {
  //   id: "journey4",
  //   src: "/img/journey_intro4.jpg",
  //   title: "海洋跳躍者：海豚秀",
  //   content: "來到海生館，別錯過與海豚互動的機會！海豚秀是海生館最受歡迎的活動之一，每天都有多場表演，讓你可以近距離觀察這些聰明、可愛的海洋哺乳動物。",
  //   time: "30分鐘",
  //   location: "台北海生館",
  //   price: "$450/人",
  //   to: "/ticket",
  // },
  // {
  //   id: "journey5",
  //   src: "/img/journey_intro5.jpg",
  //   title: "磷蝦小管家：餵魚體驗活動",
  //   content: "將穿上特殊的衣物，跟隨專業的飼養員進入水族館中的觀賞魚缸，親手投放食物給魚群。",
  //   time: "30分鐘",
  //   location: "台北海生館",
  //   price: "$500/人",
  //   to: "/ticket",
  // },
]);

const data = reactive([]);
onMounted(() => {
  let params = new URLSearchParams(); //建立PHP可接受的格式
  params.append("data", data.value); //將搜尋值傳入params物件內
  axios
    .post(`${import.meta.env.VITE_API_URL}getJourney.php`) //使用get或post等取得路徑資料(php))

    .then((res) => {
      //回傳後如何處理
      res.data.forEach((element) => {
        sectionData.push(element);
      });
      console.log(sectionData);
    })
    .catch((err) => console.log(err)); //錯誤如何處理
});

// 決定燈箱是否開啟
const lightboxIsOpen = ref(null);
const lightboxData = reactive([]);
// 這個是要放點擊的那個資料嗎？
const lightboxData1 = reactive([
  {
    class: "journey1",
    title: "夜宿海生館-兩天一夜",
    src: "/img/journey_intro1.jpg",
    h4: "探索台灣水域區的豐富生態和文化",
    p: "夜宿海生館是一個兩天一夜的活動，將帶您前往探索台灣水域區的豐富生態和文化。進行夜間探索、聆聽海洋生物的聲音，更有機會觀察到燈籠魚、海蜇等特殊生物，兩天一夜的行程充滿探索和學習的樂趣，讓您深入了解台灣水域區的獨特之處。",
  },
  {
    class: "journey2",
    title: "水中留影",
    src: "/img/journey_intro2.jpg",
    h4: "捕捉美麗的海底風景",
    p: "水中拍照是一種非常有趣的活動，可以在游泳池或海灘等水域進行。通過使用專業的防水相機或手機殼，您可以在水中自由拍攝照片和影片，捕捉美麗的海底風景、游泳的動作以及快樂的時刻技巧，如水滴拍攝、水面倒影等，以獲得令人驚嘆的效果。",
  },
  {
    class: "journey3",
    title: "海生館專人導覽(預約制)",
    src: "/img/journey_banner1.jpg",
    h4: "深入了解各種海洋生物的特性及生態",
    p: "海生館專人導覽，讓你更深入了解海洋生物的奧秘！透過預約專人導覽，你可以在專業的生物解說帶領下，深入了解各種海洋生物的特性及生態，更進一步瞭解大自然的神奇。",
  },
  {
    class: "journey4",
    title: "海洋跳躍者：海豚秀",
    src: "/img/journey_intro4.jpg",
    h4: "來到海生館，別錯過與海豚互動的機會！",
    p: "來到海生館，別錯過與海豚互動的機會！海豚秀是海生館最受歡迎的活動之一，每天都有多場表演，讓你可以近距離觀察這些聰明、可愛的海洋哺乳動物。",
  },
  {
    class: "journey5",
    title: "磷蝦小管家：餵魚體驗活動",
    src: "/img/journey_intro5.jpg",
    h4: "親手投放食物給魚群!",
    p: "將穿上特殊的衣物，跟隨專業的飼養員進入水族館中的觀賞魚缸，親手投放食物給魚群。",
  },
]);

// 決定傳甚麼值給燈箱
const openLightbox = (i) => {
  lightboxIsOpen.value = true;
  // lightboxData.value = sectionData.find(object => object.ID == i)
  lightboxData.value = sectionData.filter((item) => item.ID == i);
  lightboxData.value[0].h41 = lightboxData.value[0].NAME;
  lightboxData.value[0].p1 = lightboxData.value[0].CONTENT;
  lightboxData.value[0].src1 = lightboxData.value[0].PICTURE;
  lightboxData.value[0].section2 = true;
  lightboxData.value[0].to = "/overnight";
  const src1 = lightboxData.value[0].src1;
  lightboxData.value[0].src1 = "/img/" + src1;
  console.log(sectionData);
  // console.log(i)
  console.log(lightboxData);
};
// const openLightbox = (i) => {
//   lightboxIsOpen.value = true;
//   lightboxData.value = lightboxData1.filter((item) => item.class === i);
// };

// 關閉燈箱
const closeLightbox = () => {
  lightboxIsOpen.value = false;
};
</script>

<style lang="scss" scoped>
.journey {
  @include mobile {
    margin-bottom: 300px;
  }
}
</style>
