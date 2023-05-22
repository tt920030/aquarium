<template>
  <div id="particles-js"></div>

  <!-- 回首頁按鈕 -->
  <button class="back_to_home">
    <img src="../../img/logosvg.svg" alt="LOGO SVG" />
    <a href="#">回首頁</a>
  </button>

  <!-- 拼圖框框 -->
  <div class="puzzle_frame"></div>


  <div id="forPuzzle"></div>


  <button class="open-lightbox" style="display: none;">獲得折價券</button>

  <!-- style="display: block;" -->
  <div class="lightbox_out">
    <div class="lightbox">
      <div class="lightbox-content">
        <span class="close">&times;</span>
        <img src="../../img/crownshark.png" alt="Image">
        <h2>完成挑戰！</h2>
        <div class="puzzle_line"></div>
        <p>恭喜獲得商城購物折價券300元！<br>
          結帳時，點選使用即可享有優惠
        </p>
        <div class="puzzle_coupon">
          <div class="puzzle_number">TAIPEI2023</div>
          <button class="save_coupon">
            <a href="#">儲存折價券</a>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script  setup>
// import particlesJS from "vue3-particles";
import Puzzle from "/src/js/puzzle.js";
import particlesJS_Start from '/src/js/particle.js'
import { onMounted, ref } from "vue";

// import { onMounted, reactive, ref } from "vue";
onMounted(() => {
  particlesJS_Start()




  Puzzle()
  // 選擇圖片
  // let img = '/img/puzzle_seahorse.png';

  // // autoStart = isMiniature(); // used for nice miniature in CodePen

  // // 拼圖出現的大小

  // let x = new Puzzle({
  //   img: img,
  //   width: window.innerWidth - 150,
  //   height: window.innerHeight - 150,
  //   idiv: "forPuzzle"
  // });



})
</script>
<style>
/* 拼圖框框 */
.puzzle_frame {
  position: absolute;
  width: 350px;
  height: 450px;
  left: 85px;
  top: 90px;

  background-image: linear-gradient(to top, #a8edea 0%, #fed6e3 100%);
}

#forPuzzle {
  border: none;
  left: 100px;
  top: 100px;
}

#divmenu {
  position: absolute;
  top: -70px;
  left: 60px;
  width: 0px;
  height: 0px;
  cursor: default;
  z-index: 50001;

  border-radius: 10px;
}

/* 選單 */
#divmenu.open {
  width: 180px;
  padding: 10px;
  height: 100px;
  background-color: rgba(255, 255, 255, 0.7);
  border: 3px solid #16355A;

}

/* 選擇拼圖片數的標題 */

#divmenu .title {
  font-family: Verdana, "Bitstream Vera Sans", "Lucida Sans", sans-serif;
  font-weight: bold;
  font-size: 24px;
  position: absolute;
  top: -3px;
  left: -3px;
  color: #16355A;
  background-color: rgba(255, 255, 255, 0.7);
  padding: 10px;
  text-align: center;
  border: 3px solid #16355A;

  border-radius: 10px;

  width: 180px;
  cursor: pointer;
}

#divmenu .title:hover {
  color: #fff;
  background-color: #16355A;

}

#divmenu .line {
  font-family: Verdana, "Bitstream Vera Sans", "Lucida Sans", sans-serif;
  font-weight: bold;
  font-size: 20px;
  text-align: center;
  position: absolute;
  width: 180px;
  left: 5px;
  color: black;
  padding: 5px;
  display: none;
  border-radius: 10px;
}

#divmenu.open .line {
  display: block;
}

#divmenu.open .line:hover {
  background-color: #CCF1F5;
  cursor: pointer;
}
</style>

<style scoped>
/* ---- 拼圖背景 ---- */

#particles-js {

  width: 100%;
  height: 100%;
  background-color: #97CBE0;
  background-size: cover;
  background-position: 50% 50%;
  background-repeat: no-repeat;

  position: fixed;
  background-position: center;
  background-size: cover;
}

/* 回首頁按鈕 */
.back_to_home {
  position: absolute;
  top: 25px;
  left: 1060px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 125px;
  height: 45px;
  border: none;
  border-radius: 10px;
  background: #FFF;
  margin: auto;
  /* border: 2px solid black; */

}

.back_to_home img {
  width: 50px;
}

.back_to_home a {
  color: #000;
  text-decoration: none;
  font-size: 18px;
}



/* 燈箱 */

.lightbox_out {
  width: 100%;
  height: 100%;
}


.lightbox {
  display: none;
  position: absolute;
  transform: translate(-50%, -50%);

  margin: 50px;
  top: 45%;
  left: 48%;
  width: 350px;
  height: 350px;
  background-color: #FFFEEE;
  z-index: 99999;

  border: 1px solid #000;
  border-radius: 20px;
}

.lightbox-content {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  flex-direction: column;
}

.lightbox-content img {
  max-width: 50%;
  /* max-height: 50%; */
}

.lightbox-content h1 {
  margin: 10px;
}

.close {
  position: absolute;
  top: 20px;
  right: 30px;
  color: #000;
  font-size: 40px;
  font-weight: bold;
  cursor: pointer;
}

.puzzle_line {
  width: 70%;
  height: 1px;
  border-top: solid #000 1px;
}

.puzzle_coupon {
  width: 270px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}

.puzzle_number {

  width: 120px;
  height: 50px;
  background-color: #FFF;
  border: 2px solid #000;
  text-align: center;
  line-height: 50px;
}

.save_coupon {

  width: 100px;
  height: 40px;
  border: none;
  border-radius: 20px;
  background: #FFF61C;
  margin: auto;

}

.save_coupon a {
  color: #000;
  text-decoration: none
}

.open-lightbox {
  margin-top: 20px;
}
</style>

