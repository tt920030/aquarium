<template>
  <div class="floor_introduction">
    <!-- 開場介紹圖 -->
    <floor-banner></floor-banner>
    <!-- 樓層指南選單 -->
    <floor-nav :navData="navData" :pageNow="pageNow"></floor-nav>
    <!-- 樓層中間區塊 -->
    <floor-main :mainData="mainData"></floor-main>
    <!--各樓層指南  -->
    <floor-intro
      :floorIntroData="floorIntroData"
      @openBox="openLightbox"
    ></floor-intro>
    <!-- 燈箱 -->
    <Lightbox
      v-if="lightboxIsOpen"
      :lightboxData="lightboxData"
      @closeBox="closeLightbox"
    ></Lightbox>
    <!-- RWD手風琴 -->
    <Acoordion :accordionData="lightboxData1"></Acoordion>
  </div>
</template>
<script setup>
import { onMounted, reactive, ref } from "vue";
import Lightbox from "/src/components/FloorCommon/Lightbox.vue";
import FloorNav from "/src/components/FloorCommon/FloorNav.vue";
import FloorMain from "/src/components/Floor/FloorMain.vue";
import FloorIntro from "/src/components/Floor/FloorIntro.vue";
import Acoordion from "/src/components/FloorCommon/Accordion.vue";
import FloorBanner from "/src/components/FloorCommon/FloorBanner.vue";

// 傳遞屬性給FloorNav
const navData = reactive([
  {
    to: "/floor_introduction",
    src: "/src/img/floor_p1_active.svg",
    title: "樓層介紹",
  },
  { to: "/park_activity", src: "/src/img/floor_p2.svg", title: "館內活動" },
  { to: "/faq", src: "/src/img/floor_p3.svg", title: "常見問題" },
  { to: "/visit_information", src: "/src/img/floor_p4.svg", title: "參觀資訊" },
]);
const pageNow = ref("樓層介紹");

// 傳遞屬性給FloorMain
const mainData = reactive([
  {
    src: "/src/img/floor_introduction_penguin.png",
    alt: "企鵝圖",
    title: "企鵝",
    content:
      "企鵝是一種生活在南極洲及其周邊地區的特殊鳥類。<br />牠們具有黑白分明的羽毛和笨拙的外表",
  },
  {
    src: "/src/img/floor_introduction_jellyfish.png",
    alt: "水母圖",
    title: "水母",
    content:
      "水母是一種神祕的生物，晶瑩透明的樣態引人注目<br />快來一睹他的光彩",
  },
  {
    src: "/src/img/floor_introduction_dolphin.png",
    alt: "海豚圖",
    title: "海豚",
    content:
      " 海豚是在海洋中的智慧動物，被譽為“海洋天使”<br />有著美麗外表、漂亮的圓形鰭狀肢",
  },
  {
    src: "/src/img/floor_introduction_seal.png",
    alt: "海獅圖",
    title: "海獅",
    content:
      "海獅是一種生活在海洋中的哺乳動物，<br />有著厚實的身體和尖銳的鬃毛",
  },
]);

// 傳遞屬性給FloorIntro
const floorIntroData = reactive([
  {
    src: "/src/img/floor_introduction_floor1.svg",
    animals: [
      { class: "p1", id: "dolphin", src: "/src/img/floor_introduction_p1.jpg" },
      { class: "p2", id: "shark", src: "/src/img/floor_introduction_p2.jpg" },
      { class: "p3", id: "coral", src: "/src/img/floor_introduction_p3.jpg" },
    ],
  },
  {
    src: "/src/img/floor_introduction_floor2.svg",
    animals: [
      { class: "p1", id: "penguin", src: "/src/img/floor_introduction_p4.jpg" },
      {
        class: "p2",
        id: "jellyfish",
        src: "/src/img/floor_introduction_p5.jpg",
      },
      { class: "p3", id: "seal", src: "/src/img/floor_introduction_p6.jpg" },
    ],
  },
  {
    src: "/src/img/floor_introduction_floor3.svg",
    animals: [
      { class: "p4", id: "turtle", src: "/src/img/floor_introduction_p7.jpg" },
      {
        class: "p5",
        id: "starfish",
        src: "/src/img/floor_introduction_p8.jpg",
      },
      { class: "p6", id: "otter", src: "/src/img/floor_introduction_p9.jpg" },
    ],
  },
]);

// 決定燈箱是否開啟
const lightboxIsOpen = ref(null);
const lightboxData = reactive([]);
const lightboxData1 = reactive([
  {
    class: "dolphin",
    title: "海豚",
    src: "/src/img/floor_introduction_p1.jpg",
    h4: "海豚是一種生活在海洋中的智慧動物，被譽為'海洋天使'",
    p: "海豚非常聰明，有高度的社交性。<br />能夠用複雜的聲音和肢體語言進行交流。海豚是海洋生態系統中的重要成員之一，牠們有助於維持海洋生態平衡，並能夠幫助漁民捕捉魚類。此外，海豚還是人類的好朋友，是很受人類喜愛的動物之一。",
    section2: true,
    h41: "海豚秀",
    src1: "/src/img/journey_intro4.jpg",
    p1: "來到海生館，別錯過與海豚互動的機會！海豚秀是海生館最受歡迎的活動之一，每天都有多場表演，讓你可以近距離觀察這些聰明、可愛的海洋哺乳動物。",
    to: "/visit_information",
    section: true,
  },
  {
    class: "shark",
    title: "鯨鯊",
    src: "/src/img/floor_introduction_p2.jpg",
    h4: "鯨鯊是一種生活在海洋中的巨型動物，體型驚人",
    p: "進入鯨鯊區，你將能夠看到鯨鯊的真實大小，為他們感到震驚，並且了解牠們的生態習性、行為模式和生命故事。我們的專業飼育員也會在這裡與你分享他們的知識和經驗，讓你更深入地了解這些驚人的生物。",
    section: true,
  },
  {
    class: "coral",
    title: "珊瑚礁",
    src: "/src/img/floor_introduction_p3.jpg",
    h4: "海生館內的珊瑚礁區是一個令人驚嘆的世界",
    p: "在這裡您能夠親身體驗大海的神秘與美麗。進入珊瑚礁區，您會立刻感受到這裡的氛圍，到處都是色彩斑斕的珊瑚和各種奇妙的海洋生物。您可以欣賞到各種形狀和顏色的珊瑚，並且近距離觀察到如海星、海膽、海龜等令人驚嘆的生物。",
    section: true,
  },
  {
    class: "penguin",
    title: "企鵝",
    src: "/src/img/floor_introduction_p4.jpg",
    h4: "國王企鵝，霸道威武 、 雪花企鵝，小巧玲瓏",
    p: "在這裡，您可以欣賞到各種不同品種的企鵝，從小巧可愛的雪花企鵝到高大威武的帝王企鵝，此外我們的企鵝區還設有豐富多彩的互動體驗，讓您可以更深入地了解這些生物，例如可以和企鵝一起玩耍、拍照和學習如何照顧牠們。如果您想放鬆心情、感受一下可愛企鵝的活潑與愉悅。",
    section: true,
  },
  {
    class: "jellyfish",
    title: "水母",
    src: "/src/img/floor_introduction_p5.jpg",
    h4: "優雅的月亮水母與奇異的炸彈水母",
    p: "進入這個區域，您會立即被這些優美、透明的生物所吸引，並且感受到一種神秘和靜謐的氛圍。在這裡，您可以觀察到各種形狀、大小和顏色的水母，從優雅的月亮水母到奇異的炸彈水母，每種水母都展現了其獨特的魅力。我們特別設計了燈光和音樂效果，讓這個區域更加生動、富有趣味和互動性。",
    section: true,
  },
  {
    class: "seal",
    title: "海獅",
    src: "/src/img/floor_introduction_p6.jpg",
    h4: "海獅是一種生活在海洋中的哺乳動物，外型親人可愛",
    p: "牠們的身體結構適應了水中的環境，有著短而厚實的身體和長而尖銳的鬃毛。海獅能夠游泳和潛水，可以在水中追逐獵物。海獅也是社交性動物，能夠形成大規模的族群並進行集體繁殖。牠們在海洋生態系統中扮演著重要的角色，不僅可以控制海洋中其他生物的數量，還可以幫助維持海洋生態平衡。",
    section2: true,
    h41: "海獅秀",
    src1: "/src/img/floor_introduction_p6.jpg",
    p1: "在這個活動中，訓練師會訓練海獅完成各種表演，例如跳躍、翻滾、平衡、接球等，以展示海獅的智慧和技能。這種活動不僅讓觀眾欣賞到海獅的可愛和聰明，還可以提高人們對海洋動物的認識和對保護海洋環境的意識。",
    to: "/visit_information",
    section: true,
  },
  {
    class: "turtle",
    title: "海龜",
    src: "/src/img/floor_introduction_p7.jpg",
    h4: "小巧可愛的綠海龜和雄壯威武的鱷龜",
    p: "在這裡，您可以欣賞到不同種類和大小的海龜，它們都在這裡生活、游泳和休息。在這個專門為海龜打造的環境中，您可以透過透明的水族箱觀察到這些海龜的日常行為，例如食物、休息和游泳，並且了解它們的生態習性和生命故事。",
    section2: true,
    h41: "餵食海龜",
    src1: "/src/img/floor_introduction_p7.jpg",
    p1: "在這個活動中，訓練師會訓練海獅完成各種表演，例如跳躍、翻滾、平衡、接球等，以展示海獅的智慧和技能。這種活動不僅讓觀眾欣賞到海獅的可愛和聰明，還可以提高人們對海洋動物的認識和對保護海洋環境的意識。",
    to: "/visit_information",
    section: true,
  },
  {
    class: "starfish",
    title: "海星",
    src: "/src/img/floor_introduction_p8.jpg",
    h4: "您可以在這裡欣賞到多種顏色和形狀的海星",
    p: "您可以透過透明的水族箱，了解海星的生態特徵、生命週期和適應能力。此外，我們的專業團隊會提供生動的導覽和互動體驗，例如觸摸池和喂食活動，讓您更深入地認識這些海洋生物，以及如何保護它們所在的生態系統。",
    section2: true,
    h41: "海星觸摸",
    src1: "/src/img/floor_introduction_p8.jpg",
    p1: "觸摸海星活動是一種與海洋生物近距離互動的體驗，海星是一種生活在海洋中的奇特生物，牠們的身體扁平，呈星形，有著吸盤狀的足，能夠吸附在海洋中的礁石或其他物體上。通過觸摸海星活動，人們可以近距離觀察和感受這種奇特生物的外形和觸感，以及了解更多海星的生態和習性。",
    to: "/visit_information",
    section: true,
  },
  {
    class: "otter",
    title: "水獺",
    src: "/src/img/floor_introduction_p9.jpg",
    h4: "可愛又迷人的水獺，快來感受他們的呆萌吧!",
    p: "在這裡，您可以看到水獺游泳、追逐和嬉戲，感受它們玩耍和探索的快樂和活力。水獺區提供了一個環境友好和舒適的生活空間，讓水獺在這裡生活得健康和快樂。此外，我們的專業團隊會提供有趣的導覽和互動體驗，例如觸摸池和喂食活動，讓您更加了解這些生物和它們在自然環境中的重要性。",
    section2: true,
    h41: "水獺近距離接觸",
    src1: "/src/img/floor_introduction_p9.jpg",
    p1: " 您可以參加「水獺小管家」活動，與水獺近距離接觸！在活動中，您將跟隨專業的飼養員進入水獺的棲息地，親手投放食物給水獺，觀察牠們的行為與習性。當水獺靠近你時，您會感受到牠們柔軟的毛髮和溫暖的體溫，與牠們互動的過程也會讓您感到愉悅和驚喜。",
    to: "/visit_information",
    section: true,
  },
]);

// 決定傳甚麼值給燈箱
const openLightbox = (i) => {
  lightboxIsOpen.value = true;
  lightboxData.value = lightboxData1.filter((item) => item.class === i);
  console.log(lightboxData);
};

// 關閉燈箱
const closeLightbox = () => {
  lightboxIsOpen.value = false;
};
</script>

<style lang="scss" scoped>
.floor_introduction {
  // 開場介紹圖
  ::-webkit-scrollbar {
    background-color: transparent;
    width: 7px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: black;
  }
}
</style>
