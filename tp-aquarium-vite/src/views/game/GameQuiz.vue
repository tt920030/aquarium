<template>
  <LogIn v-if="!hide" @close="openLogin"></LogIn>

  <body class="quiz">
    <div id="particles-js"></div>

    <!-- 返回小遊戲首頁按鈕 -->
    <button class="back_to_home">
      <img src="../../img/logosvg.svg" alt="LOGO SVG" />
      <RouterLink to="/game_index">
      <h5>回小遊戲</h5>
    </RouterLink>
    </button>
    <!-- start Quiz button -->
    <div class="start_btn"><button>開始答題</button></div>

    <!-- Info Box -->
    <div class="info_box">
      <div class="info-title"><span>遊戲規則</span></div>
      <div class="info-list">
        <div class="info">1. 問答關卡共有五題，皆為選擇題。</div>
        <div class="info">2. 每一題只有 <span>15 秒</span> 進行作答。</div>
        <div class="info">3. 選擇答案後無法更改。</div>
        <div class="info">4. 作答途中無法暫停，退出後將無法保留進度。</div>
        <div class="info">5. 答對三題以上可獲得<span>商品折價券！</span></div>
      </div>
      <div class="buttons">
        <button class="quit" style="display: none;">離開遊戲</button>
        <button class="restart">開始挑戰</button>
      </div>
    </div>

    <!-- Quiz Box -->
    <div class="quiz_box">
      <div class=quiz_header>
        <div class="title">海洋知識問答</div>
        <div class="timer">
          <div class="time_left_txt">時間剩下</div>
          <div class="timer_sec">15</div>
        </div>
        <div class="time_line"></div>
      </div>
      <div class=quiz_section>
        <div class="que_text">
          <!--JavaScript -->
        </div>
        <div class="option_list">
          <!--JavaScript -->
        </div>
      </div>

      <!-- footer of Quiz Box -->
      <div class=quiz_footer>
        <div class="total_que">
          <!--JavaScript -->
        </div>
        <button class="next_btn">下一題</button>
      </div>
    </div>

    <!-- Result Box -->
    <div class="result_box">
      <div class="winner">
        <img src="../../img/crownshark.png" alt="Image">
      </div>
      <div class="complete_text">完成挑戰！</div>
      <div class="score_text">
        <!--JavaScript -->
      </div>
      <div class="buttons">
        <button @click="get()" class="restart">立即領取</button>
        <button class="quit">再玩一次</button>
      </div>
    </div>


  </body>


  <!-- <RouterView></RouterView> -->
</template>

<script  setup>
import axios from 'axios';
//vue3-cookies
import { useCookies } from "vue3-cookies";
const { cookies } = useCookies();
const id = cookies.get("id");

import { reactive } from 'vue';
// 問答js
import Puzzle from "/src/js/game_quiz.js";

import { onMounted, ref } from "vue";
import particlesJS_Start from '/src/js/particle.js';

const hide = ref(true);
const openLogin = function () {
  hide.value = true;
}
const openLogIn = function () {
  hide.value = false;
}
//領取折價券
const get = function () {
  let cookieArr = document.cookie.split(";");
  for (var i = 0; i < cookieArr.length; i++) {
    let cookiePair = cookieArr[i].split("=");
    let name = cookiePair[0].trim();

    if (name === 'id') {         //判斷cookies裡面有沒有id
      let value = cookiePair[1];
      
      let params = new URLSearchParams();
      params.append('id',value);    //有id就把會員id傳到php

      axios.post('http://localhost/G6/saveCoupon.php', params)
        .then((res) => {
          if(res.data==='exists'){
            alert("您已經領取過囉");
          }else{
            alert("領取成功，請於結帳時使用");
          }
        }).catch(err => console.log(err))
      return;
    }


  }
  openLogIn();
}

// 問答背景
onMounted(() => {



  var head = document.getElementsByTagName("head")[0];
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.onload = function () {
    particlesJS("particles-js", {
      "particles": {
        "number": {
          "value": 160,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": "#ffffff"
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#000000"
          },
          "polygon": {
            "nb_sides": 5
          },
          "image": {
            "src": "img/github.svg",
            "width": 100,
            "height": 100
          }
        },
        "opacity": {
          "value": 1,
          "random": true,
          "anim": {
            "enable": true,
            "speed": 0.9723133766012793,
            "opacity_min": 0.10533394913180526,
            "sync": false
          }
        },
        "size": {
          "value": 10,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 4,
            "size_min": 0.3,
            "sync": false
          }
        },
        "line_linked": {
          "enable": false,
          "distance": 150,
          "color": "#ffffff",
          "opacity": 0.4,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 1,
          "direction": "none",
          "random": true,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 600
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "bubble"
          },
          "onclick": {
            "enable": true,
            "mode": "repulse"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 400,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 250,
            "size": 0,
            "duration": 2,
            "opacity": 0,
            "speed": 3
          },
          "repulse": {
            "distance": 400,
            "duration": 0.4
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true
    }, function () {
      console.log("callback - particles.js config loaded");
    });
  };
  script.src =
    "https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js";
  head.appendChild(script);

  Puzzle();
})

</script>
<style lang="scss">
/* importing google fonts */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap');


.quiz {
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;


  }

  /* 返回小遊戲首頁按鈕 */
  .back_to_home {
    position: absolute;
    top: 25px;
    left: 1060px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    width: 150px;
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

  // background: map-get($color, bgc2);
  @include mobile {
    .info_box {
      width: 400px !important;
    }

  }

  @include mobile {
    .back_to_home {
      left: 280px;
    }
  }
}

// ::selection{
//     color: #fff;
//     background: #007bff;
// }

.start_btn,
.info_box,
.quiz_box,
.result_box {

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
    0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.info_box.activeInfo,
.quiz_box.activeQuiz,
.result_box.activeResult {



  opacity: 1;
  z-index: 5;
  pointer-events: auto;
  transform: translate(-50%, -50%) scale(1);
}

.start_btn button {
  font-size: 25px;
  font-weight: 500;
  color: #007bff;
  padding: 15px 30px;
  outline: none;
  border: none;
  border-radius: 5px;
  background: #fff;
  cursor: pointer;
}

.info_box {


  width: 540px;
  background: #fff;
  border-radius: 5px;
  transform: translate(-50%, -50%) scale(0.9);
  opacity: 0;
  pointer-events: none;
  transition: all 0.3s ease;
}

.info_box .info-title {
  height: 60px;
  width: 100%;
  border-bottom: 1px solid lightgrey;
  display: flex;
  align-items: center;
  padding: 0 30px;
  border-radius: 5px 5px 0 0;
  font-size: 20px;
  font-weight: 600;
}

.info_box .info-list {
  padding: 15px 30px;
}

.info_box .info-list .info {
  margin: 5px 0;
  font-size: 17px;
}

.info_box .info-list .info span {
  font-weight: 600;
  color: #007bff;
}

.info_box .buttons {
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 30px;
  border-top: 1px solid lightgrey;
}

.info_box .buttons button {
  margin: 0 5px;
  height: 40px;
  width: 100px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  border: none;
  outline: none;
  border-radius: 5px;
  border: 1px solid #007bff;
  transition: all 0.3s ease;
}

.quiz_box {

  @include mobile {
    width: 90%;
  }

  width: 550px;
  background: #fff;
  border-radius: 5px;
  transform: translate(-50%, -50%) scale(0.9);
  opacity: 0;
  pointer-events: none;
  transition: all 0.3s ease;
}

.quiz_box .quiz_header {
  position: relative;
  z-index: 2;
  height: 70px;
  padding: 0 30px;
  background: #fff;
  border-radius: 5px 5px 0 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 3px 5px 1px rgba(0, 0, 0, 0.1);
}

.quiz_box .quiz_header .title {
  font-size: 20px;
  font-weight: 600;
}

.quiz_box .quiz_header .timer {
  color: #004085;
  background: #cce5ff;
  border: 1px solid #b8daff;
  height: 45px;
  padding: 0 8px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 145px;
}

.quiz_box .quiz_header .timer .time_left_txt {
  font-weight: 400;
  font-size: 17px;
  user-select: none;
}

.quiz_box .quiz_header .timer .timer_sec {
  font-size: 18px;
  font-weight: 500;
  height: 30px;
  width: 45px;
  color: #fff;
  border-radius: 5px;
  line-height: 30px;
  text-align: center;
  background: #343a40;
  border: 1px solid #343a40;
  user-select: none;
}

.quiz_box .quiz_header .time_line {

  position: absolute;
  bottom: 0px;
  left: 0px;
  height: 3px;
  background: #007bff;
}

.quiz_section {
  padding: 25px 30px 20px 30px;
  background: #fff;
}

.quiz_section .que_text {
  font-size: 25px;
  font-weight: 600;
}

.quiz_section .option_list {
  padding: 20px 0px;
  display: block;
}

.quiz_section .option_list .option {
  background: aliceblue;
  border: 1px solid #84c5fe;
  border-radius: 5px;
  padding: 8px 15px;
  font-size: 17px;
  margin-bottom: 15px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.quiz_section .option_list .option:last-child {
  margin-bottom: 0px;
}

.quiz_section .option_list .option:hover {
  color: #004085;
  background: #cce5ff;
  border: 1px solid #b8daff;
}

.quiz_section .option_list .option.correct {
  color: #155724;
  background: #d4edda;
  border: 1px solid #c3e6cb;
}

.quiz_section .option_list .option.incorrect {
  color: #721c24;
  background: #f8d7da;
  border: 1px solid #f5c6cb;
}

.quiz_section .option_list .option.disabled {
  pointer-events: none;
}

.quiz_section .option_list .option .icon {
  height: 26px;
  width: 26px;
  border: 2px solid transparent;
  border-radius: 50%;
  text-align: center;
  font-size: 13px;
  pointer-events: none;
  transition: all 0.3s ease;
  line-height: 24px;
}

.option_list .option .icon.tick {
  color: #23903c;
  border-color: #23903c;
  background: #d4edda;
  font-weight: bold;
}

.option_list .option .icon.cross {
  color: #a42834;
  background: #f8d7da;
  border-color: #a42834;
}

.quiz_footer {
  height: 60px;
  padding: 0 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid lightgrey;
}

.quiz_footer .total_que span {
  // display: flex;
  user-select: none;
}

.quiz_footer .total_que span .abc {
  font-weight: 500;
  padding: 0 5px;
}

.quiz_footer .total_que span p:first-child {
  padding-left: 0px;
}

.quiz_footer button {
  height: 40px;
  padding: 0 13px;
  font-size: 18px;
  font-weight: 400;
  cursor: pointer;
  border: none;
  outline: none;
  color: #fff;
  border-radius: 5px;
  background: #007bff;
  border: 1px solid #007bff;
  line-height: 10px;
  opacity: 0;
  pointer-events: none;
  transform: scale(0.95);
  transition: all 0.3s ease;
}

.quiz_footer button:hover {
  background: #0263ca;
}

.quiz_footer button.show {
  opacity: 1;
  pointer-events: auto;
  transform: scale(1);
}

.result_box {
  @include mobile {
    width: 90%;
  }

  background: #fff;
  border-radius: 5px;
  display: flex;
  padding: 25px 30px;
  width: 450px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  transform: translate(-50%, -50%) scale(0.9);
  opacity: 0;
  pointer-events: none;
  transition: all 0.3s ease;
}

.result_box .icon {
  font-size: 100px;
  color: #007bff;
  margin-bottom: 10px;
}

.result_box .complete_text {
  font-size: 20px;
  font-weight: 600;
}

.result_box .score_text span {
  // display: flex;
  margin: 10px 0;
  font-size: 18px;
  font-weight: 600;
}

.result_box .score_text span .abc {
  padding: 0 4px;
  font-weight: 600;
}

.result_box .buttons {
  display: flex;
  margin: 20px 0;
}

.result_box .buttons button {
  margin: 0 10px;
  height: 45px;
  padding: 0 20px;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  border: none;
  outline: none;
  border-radius: 5px;
  border: 1px solid #007bff;
  transition: all 0.3s ease;
}

.result_box .winner img {
  width: 90%;
}

.buttons button.restart {
  color: #fff;
  background: #007bff;
}

.buttons button.restart:hover {
  background: #0263ca;
}

.buttons button.quit {
  color: #007bff;
  background: #fff;
}

.buttons button.quit:hover {
  color: #fff;
  background: #007bff;
}

/* ---- 問答背景 ---- */

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
</style>