<template>
  <LogIn v-if="!hide" @close="openLogin"></LogIn>
  <div id="particles-js"></div>

  <!-- 回首頁按鈕 -->
  <button class="back_to_home">
    <img src="../../img/logosvg.svg" alt="LOGO SVG" />
    <RouterLink to="/game_index">
      <h5>回小遊戲</h5>
    </RouterLink>
  </button>

  <!-- 拼圖框框 -->
  <div class="puzzle_frame"></div>


  <div id="forPuzzle"></div> 


  <button class="open-lightbox" style="display: none;">獲得折價券</button>

  <!-- style="display: block;" -->
  <div class="lightbox_out">
    <div class="lightbox" style="display: none;">
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

    <!-- 儲存折扣碼是否前往登入 -->
    <div class="game_savecoupon hide">
      <h4>登入會員即可儲存折價券！<br>是否確定前往登入頁面？</h4>
      
      <button @click="openLogIn();close()" class="game_savecoupon_sure_btn"><p>確定</p></button>
      <button @click="allClose()" class="game_savecoupon_cancel_btn"><p>取消</p></button>
    </div>

  </div>

</template>

<script  setup>

//vue3-cookies
import { useCookies } from "vue3-cookies";
const { cookies } = useCookies();
const id = cookies.get("id");
const hide = ref(true);
import Puzzle from "/src/js/puzzle.js";
// import Puzzle from "/src/js/save_coupon.js";


import { onMounted, ref } from "vue";


const bg = function () {



}
const openLogin = function(){
  hide.value = true;
}
const close = function(){
  document.querySelector(".game_savecoupon").classList.add("hide");
}
const allClose = function(){
  document.querySelector(".game_savecoupon").classList.add("hide");
  document.querySelector(".lightbox").style.display="none";
}
const openLogIn = function(){
  hide.value = false;
}
// 拼圖背景
onMounted(() => {
    

  
  // particlesJS_Start()



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

<style lang="scss" scoped>
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

@include mobile {
  .back_to_home {
    left: 370px;
  }
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
  left: 46%;
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

.lightbox-content h2 {
  margin: 15px;
}

.lightbox-content p {
  margin: 15px;
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

//前往儲存折價券

.game_savecoupon {
    border: 5px solid #16355A;
    width: 350px;
    height: 400px;
    border-radius: 10px;
    background-color: #CCF1F5;
    padding: 15px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 999999;
    margin: auto;
    display: flex;
    // display: none;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &.hide{
      display: none;
    }
}

.game_savecoupon button {
    margin-top: 40px;
    width: 120px;
    height: 40px;
    color: white;
    background-color: #16355A;
    border: none;
    border-radius: 20px;
    cursor: pointer;
}
</style>

