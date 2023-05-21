<template>
  <div class="floor_introduction">
    <Header></Header>
    <!-- 開場介紹圖 -->
    <div class="banner">
      <h1>
        樓層指南<br />
        GUIDED TOUR
      </h1>
    </div>
    <!-- 樓層指南選單 -->
    <ul class="floor_nav">
      <li>
        <a href=""><img src="../img/floor_p1_active.jpg" alt="" /> </a>
        <h4 class="h4_active">樓層介紹</h4>
      </li>
      <li>
        <a href=""><img src="../img/floor_p2.jpg" alt="" /> </a>
        <h4>館內活動</h4>
      </li>
      <li>
        <a href=""><img src="../img/floor_p3.jpg" alt="" /> </a>
        <h4>常見問題</h4>
      </li>
      <li>
        <a href=""><img src="../img/floor_p4.jpg" alt="" /> </a>
        <h4>參觀資訊</h4>
      </li>
    </ul>
    <main>
      <section class="wrapper">
        <!-- 標題 -->
        <div class="title">
          <h2>館內人氣王</h2>
        </div>
        <!-- 中間區塊 -->
        <ul>
          <li>
            <img src="../img/floor_introduction_penguin.png" alt="企鵝圖" />
            <h4>企鵝</h4>
            <p>
              企鵝是一種生活在南極洲及其周邊地區的特殊鳥類。<br />牠們具有黑白分明的羽毛和笨拙的外表
            </p>
          </li>
          <li>
            <img src="../img/floor_introduction_jellyfish.png" alt="水母圖" />
            <h4>水母</h4>
            <p>
              水母是一種生活在海洋中的奇特生物，其形態各異，<br />
              有些像雨傘，有些像口袋
            </p>
          </li>
          <li>
            <img src="../img/floor_introduction_dolphin.png" alt="海豚圖" />
            <h4>海豚</h4>
            <p>
              海豚是在海洋中的智慧動物，被譽為“海洋天使”<br />有著美麗外表、漂亮的圓形鰭狀肢
            </p>
          </li>
          <li>
            <img src="../img/floor_introduction_seal.png" alt="海獅圖" />
            <h4>海獅</h4>
            <p>
              海獅是一種生活在海洋中的哺乳動物，<br />
              有著厚實的身體和尖銳的鬃毛
            </p>
          </li>
        </ul>
      </section>
    </main>
    <!--各樓層指南  -->
    <section class="floor">
      <div class="wrapper">
        <h2>樓層指南</h2>
        <div class="floor_white">
          <!-- 1樓 -->
          <div class="floor_img">
            <p>1<span>F</span></p>
            <img src="../img/floor_introduction_floor1.svg" alt="樓層圖" />
            <div class="p1 fp" id="dolphin">
              <a href="" class="lightbox"
                ><img src="../img/floor_introduction_p1.jpg" alt=""
              /></a>
            </div>
            <div class="p2 fp" id="shark">
              <a href="" class="lightbox"
                ><img src="../img/floor_introduction_p2.jpg" alt=""
              /></a>
            </div>
            <div class="p3 fp" id="coral">
              <a href="" class="lightbox"
                ><img src="../img/floor_introduction_p3.jpg" alt=""
              /></a>
            </div>
          </div>

          <!-- 2樓 -->
          <div class="floor_img">
            <p>2<span>F</span></p>
            <img src="../img/floor_introduction_floor2.svg" alt="樓層圖" />
            <div class="p1 fp" id="penguin">
              <a href="" class="lightbox"
                ><img src="../img/floor_introduction_p4.jpg" alt=""
              /></a>
            </div>
            <div class="p2 fp" id="jellyfish">
              <a href="" class="lightbox"
                ><img src="../img/floor_introduction_p5.jpg" alt=""
              /></a>
            </div>
            <div class="p3 fp" id="seal">
              <a href="" class="lightbox"
                ><img src="../img/floor_introduction_p6.jpg" alt=""
              /></a>
            </div>
          </div>

          <!-- 3樓 -->
          <div class="floor_img">
            <p>3<span>F</span></p>
            <img src="../img/floor_introduction_floor3.svg" alt="樓層圖" />
            <div class="p4 fp" id="turtle">
              <a href="" class="lightbox"
                ><img src="../img/floor_introduction_p7.jpg" alt=""
              /></a>
            </div>
            <div class="p5 fp" id="starfish">
              <a href="" class="lightbox"
                ><img src="../img/floor_introduction_p8.jpg" alt=""
              /></a>
            </div>
            <div class="p6 fp" id="otter">
              <a href="" class="lightbox"
                ><img src="../img/floor_introduction_p9.jpg" alt=""
              /></a>
            </div>
          </div>
        </div>
        <!-- 圖像說明 -->
        <div class="floor_white1">
          <ul>
            <li class="barrier">無障礙休息室</li>
            <li class="scope">水族範圍</li>
            <li class="lift">電梯</li>
            <li class="baby">親子空間</li>
            <li class="shop">海洋商城</li>
            <li class="toilet">洗手間</li>
            <li class="academy">海洋學院</li>
            <li class="cafe">咖啡館</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- 燈箱 -->
    <section class="light_box">
      <!-- 海豚 -->
      <div class="lightbox_overlay dolphin">
        <div class="wrapper">
          <div class="lightbox_content">
            <!-- 區塊1 -->
            <div class="lightbox_block">
              <h4 class="accordion_header">海豚</h4>
              <ul>
                <li><img src="../img/floor_introduction_p1.jpg" alt="" /></li>
                <li>
                  <h4>海豚是一種生活在海洋中的智慧動物，被譽為“海洋天使”</h4>
                  <p>
                    海豚非常聰明，有高度的社交性。<br />能夠用複雜的聲音和肢體語言進行交流。海豚是海洋生態系統中的重要成員之一，牠們有助於維持海洋生態平衡，並能夠幫助漁民捕捉魚類。此外，海豚還是人類的好朋友，是很受人類喜愛的動物之一。
                  </p>
                </li>
              </ul>
            </div>
            <!-- 區塊2 -->
            <div class="lightbox_block">
              <h4 class="accordion_header">海豚秀</h4>
              <ul>
                <li>
                  <img
                    style="width: 360px"
                    class="intro_img"
                    src="../img/journey_intro4.jpg"
                    alt=""
                  />
                </li>
                <li>
                  <p>
                    來到海生館，別錯過與海豚互動的機會！海豚秀是海生館最受歡迎的活動之一，每天都有多場表演，讓你可以近距離觀察這些聰明、可愛的海洋哺乳動物。
                  </p>
                  <a href="journey.html" class="btn">了解更多</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!-- 關閉按鈕 -->
        <div class="lightbox_close">x</div>
      </div>

      <!-- 鯨鯊 -->
      <div class="lightbox_overlay shark">
        <div class="wrapper">
          <div class="lightbox_content">
            <!-- 區塊1 -->
            <div class="lightbox_block">
              <h4 class="accordion_header">鯨鯊</h4>
              <ul>
                <li><img src="../img/floor_introduction_p2.jpg" alt="" /></li>
                <li>
                  <h4>鯨鯊是一種生活在海洋中的巨型動物，體型驚人</h4>
                  <p>
                    進入鯨鯊區，你將能夠看到鯨鯊的真實大小，為他們感到震驚，並且了解牠們的生態習性、行為模式和生命故事。我們的專業飼育員也會在這裡與你分享他們的知識和經驗，讓你更深入地了解這些驚人的生物。
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!-- 關閉按鈕 -->
        <div class="lightbox_close">x</div>
      </div>

      <!-- 珊瑚礁 -->
      <div class="lightbox_overlay coral">
        <div class="wrapper">
          <div class="lightbox_content">
            <!-- 區塊1 -->
            <div class="lightbox_block">
              <h4 class="accordion_header">珊瑚礁</h4>
              <ul>
                <li><img src="../img/floor_introduction_p3.jpg" alt="" /></li>
                <li>
                  <h4>海生館內的珊瑚礁區是一個令人驚嘆的世界</h4>
                  <p>
                    在這裡您能夠親身體驗大海的神秘與美麗。進入珊瑚礁區，您會立刻感受到這裡的氛圍，到處都是色彩斑斕的珊瑚和各種奇妙的海洋生物。您可以欣賞到各種形狀和顏色的珊瑚，並且近距離觀察到如海星、海膽、海龜等令人驚嘆的生物。
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!-- 關閉按鈕 -->
        <div class="lightbox_close">x</div>
      </div>

      <!-- 企鵝 -->
      <div class="lightbox_overlay penguin">
        <div class="wrapper">
          <div class="lightbox_content">
            <!-- 區塊1 -->
            <div class="lightbox_block">
              <h4 class="accordion_header">企鵝</h4>
              <ul>
                <li><img src="../img/floor_introduction_p4.jpg" alt="" /></li>
                <li>
                  <h4>國王企鵝，霸道威武 、 雪花企鵝，小巧玲瓏</h4>
                  <p>
                    在這裡，您可以欣賞到各種不同品種的企鵝，從小巧可愛的雪花企鵝到高大威武的帝王企鵝，此外我們的企鵝區還設有豐富多彩的互動體驗，讓您可以更深入地了解這些生物，例如可以和企鵝一起玩耍、拍照和學習如何照顧牠們。如果您想放鬆心情、感受一下可愛企鵝的活潑與愉悅。
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!-- 關閉按鈕 -->
        <div class="lightbox_close">x</div>
      </div>

      <!-- 水母 -->
      <div class="lightbox_overlay jellyfish">
        <div class="wrapper">
          <div class="lightbox_content">
            <!-- 區塊1 -->
            <div class="lightbox_block">
              <h4 class="accordion_header">水母</h4>
              <ul>
                <li><img src="../img/floor_introduction_p5.jpg" alt="" /></li>
                <li>
                  <h4>優雅的月亮水母與奇異的炸彈水母</h4>
                  <p>
                    進入這個區域，您會立即被這些優美、透明的生物所吸引，並且感受到一種神秘和靜謐的氛圍。在這裡，您可以觀察到各種形狀、大小和顏色的水母，從優雅的月亮水母到奇異的炸彈水母，每種水母都展現了其獨特的魅力。我們特別設計了燈光和音樂效果，讓這個區域更加生動、富有趣味和互動性。
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!-- 關閉按鈕 -->
        <div class="lightbox_close">x</div>
      </div>

      <!-- 海獅 -->
      <div class="lightbox_overlay seal">
        <div class="wrapper">
          <div class="lightbox_content">
            <!-- 區塊1 -->
            <div class="lightbox_block">
              <h4 class="accordion_header">海獅</h4>
              <ul>
                <li><img src="../img/floor_introduction_p6.jpg" alt="" /></li>
                <li>
                  <h4>海獅是一種生活在海洋中的哺乳動物，外型親人可愛</h4>
                  <p>
                    牠們的身體結構適應了水中的環境，有著短而厚實的身體和長而尖銳的鬃毛。海獅能夠游泳和潛水，可以在水中追逐獵物。海獅也是社交性動物，能夠形成大規模的族群並進行集體繁殖。牠們在海洋生態系統中扮演著重要的角色，不僅可以控制海洋中其他生物的數量，還可以幫助維持海洋生態平衡。
                  </p>
                </li>
              </ul>
            </div>
            <!-- 區塊2 -->
            <div class="lightbox_block">
              <h4 class="accordion_header">海獅秀</h4>
              <ul>
                <li><img src="../img/floor_introduction_p6.jpg" alt="" /></li>
                <li>
                  <p>
                    在這個活動中，訓練師會訓練海獅完成各種表演，例如跳躍、翻滾、平衡、接球等，以展示海獅的智慧和技能。這種活動不僅讓觀眾欣賞到海獅的可愛和聰明，還可以提高人們對海洋動物的認識和對保護海洋環境的意識。
                  </p>
                  <a href="" class="btn">了解更多</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!-- 關閉按鈕 -->
        <div class="lightbox_close">x</div>
      </div>

      <!-- 海龜 -->
      <div class="lightbox_overlay turtle">
        <div class="wrapper">
          <div class="lightbox_content">
            <!-- 區塊1 -->
            <div class="lightbox_block">
              <h4 class="accordion_header">海龜</h4>
              <ul>
                <li><img src="../img/floor_introduction_p7.jpg" alt="" /></li>
                <li>
                  <h4 class="light_box_header">
                    小巧可愛的綠海龜和雄壯威武的鱷龜
                  </h4>
                  <p>
                    在這裡，您可以欣賞到不同種類和大小的海龜，它們都在這裡生活、游泳和休息。在這個專門為海龜打造的環境中，您可以透過透明的水族箱觀察到這些海龜的日常行為，例如食物、休息和游泳，並且了解它們的生態習性和生命故事。
                  </p>
                </li>
              </ul>
            </div>
            <!-- 區塊2 -->
            <div class="lightbox_block">
              <h4 class="accordion_header">餵食海龜</h4>
              <ul>
                <li><img src="../img/floor_introduction_p7.jpg" alt="" /></li>
                <li>
                  <a href="" class="btn">了解更多</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!-- 關閉按鈕 -->
        <div class="lightbox_close">x</div>
      </div>

      <!-- 海星 -->
      <div class="lightbox_overlay starfish">
        <div class="wrapper">
          <div class="lightbox_content">
            <!-- 區塊1 -->
            <div class="lightbox_block">
              <h4 class="accordion_header">海星</h4>
              <ul>
                <li><img src="../img/floor_introduction_p8.jpg" alt="" /></li>
                <li>
                  <h4>您可以在這裡欣賞到多種顏色和形狀的海星，</h4>
                  <p>
                    您可以透過透明的水族箱，了解海星的生態特徵、生命週期和適應能力。此外，我們的專業團隊會提供生動的導覽和互動體驗，例如觸摸池和喂食活動，讓您更深入地認識這些海洋生物，以及如何保護它們所在的生態系統。
                  </p>
                </li>
              </ul>
            </div>
            <!-- 區塊2 -->
            <div class="lightbox_block">
              <h4 class="accordion_header">海星觸摸</h4>
              <ul>
                <li><img src="../img/floor_introduction_p8.jpg" alt="" /></li>
                <li>
                  <p>
                    觸摸海星活動是一種與海洋生物近距離互動的體驗，海星是一種生活在海洋中的奇特生物，牠們的身體扁平，呈星形，有著吸盤狀的足，能夠吸附在海洋中的礁石或其他物體上。通過觸摸海星活動，人們可以近距離觀察和感受這種奇特生物的外形和觸感，以及了解更多海星的生態和習性。
                  </p>
                  <a href="" class="btn">了解更多</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!-- 關閉按鈕 -->
        <div class="lightbox_close">x</div>
      </div>

      <!-- 水獺 -->
      <div class="lightbox_overlay otter">
        <div class="wrapper">
          <div class="lightbox_content">
            <!-- 區塊1 -->
            <div class="lightbox_block">
              <h4 class="accordion_header">水獺</h4>
              <ul>
                <li><img src="../img/floor_introduction_p9.jpg" alt="" /></li>
                <li>
                  <h4>可愛又迷人的水獺，快來感受他們的呆萌吧!</h4>
                  <p>
                    在這裡，您可以看到水獺游泳、追逐和嬉戲，感受它們玩耍和探索的快樂和活力。水獺區提供了一個環境友好和舒適的生活空間，讓水獺在這裡生活得健康和快樂。此外，我們的專業團隊會提供有趣的導覽和互動體驗，例如觸摸池和喂食活動，讓您更加了解這些生物和它們在自然環境中的重要性。
                  </p>
                </li>
              </ul>
            </div>
            <!-- 區塊2 -->
            <div class="lightbox_block">
              <h4 class="accordion_header">水獺近距離接觸</h4>
              <ul>
                <li><img src="../img/floor_introduction_p9.jpg" alt="" /></li>
                <li>
                  <p>
                    您可以參加「水獺小管家」活動，與水獺近距離接觸！在活動中，您將跟隨專業的飼養員進入水獺的棲息地，親手投放食物給水獺，觀察牠們的行為與習性。當水獺靠近你時，您會感受到牠們柔軟的毛髮和溫暖的體溫，
                    與牠們互動的過程也會讓您感到愉悅和驚喜。
                  </p>
                  <a href="" class="btn">了解更多</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!-- 關閉按鈕 -->
        <div class="lightbox_close">x</div>
      </div>
    </section>
    <RouterLink to="/ticket"></RouterLink>
    <Footer></Footer>
    <RouterView></RouterView>
  </div>
</template>
<script setup>
import { RouterLink, RouterView } from "vue-router";
import { onMounted, reactive, ref } from "vue";
import Header from "/src/components/Header.vue";
import Footer from "/src/components/Footer.vue";
import $ from "jquery";

$(function () {
  // 燈箱()
  // 找到該元素
  $(".lightbox").click(function (e) {
    // 防止點擊時跳轉
    e.preventDefault();
    // 找到父元素的ID
    let parentId = $(this).parent().attr("id");
    $("." + parentId).fadeIn();
    // 停掉body的滾輪
    $("body").css("overflow", "hidden");
  });

  //點擊x關閉
  $(".lightbox_close").click(function () {
    $(this).parent().fadeOut();
    $("body").css("overflow", "visible");
  });
  // 點擊旁邊關閉
  $(".lightbox_content").click(function (e) {
    e.stopPropagation();
  });
  $(".lightbox_overlay").click(function (e) {
    $(this).fadeOut();
    $("body").css("overflow", "visible");
  });

  // 手風琴()
  $(".accordion_header").click(function () {
    $(this).toggleClass("active");
    $(this).next().slideToggle();
  });
  // $(".accordion_header").first().click();
});
</script>

<style lang="scss" scoped>
.floor_introduction {
  ::-webkit-scrollbar {
    background-color: transparent;
    width: 7px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: black;
  }

  // 開場介紹圖
  .banner {
    background-image: url("../../../../src/img/guided_tour_banner.jpg");
    width: 100%;
    height: 660px;
    background-size: cover;
    // RWD
    @include mobile {
      height: 300px;
    }
    h1 {
      padding-top: 300px;
      padding-left: 40px;
      @include mobile {
        padding-top: 105px;
      }
    }
  }

  // 樓層nav
  .floor_nav {
    display: flex;
    justify-content: center;
    li {
      margin: 20px 30px;
      text-align: center;
      // RWD
      @include mobile() {
        margin: 15px 0;
        padding: 0 10px;
      }
      &:first-child::after {
        content: "";
        background-image: url("../../../../src/img/floor_nav_index.jpg");
        background-repeat: no-repeat;
        display: block;
        width: 30px;
        height: 27px;
        position: relative;
        top: 9px;
        left: 36%;
      }
      a {
        // width: 100px;
        height: 82px;
        @include mobile() {
          height: 60px;
        }
        img {
          width: 70%;
          display: block;
          margin: auto;
        }
      }
      h4 {
        color: #97cbe0;
      }
      .h4_active {
        color: #16355a;
      }
    }
  }

  // 主內容
  main {
    background-image: url("../../../../src/img/floor_introduction_bgi.jpg");
    @include wrapper {
      max-width: 1100px;
      // 標題
      .title {
        width: 410px;
        height: 191px;
        margin: 0 auto;
        background-image: url("../../../../src/img/floor_introduction_title.svg");
        overflow: hidden;
        h2 {
          position: relative;
          top: 104px;
          left: 129px;
          color: #26450c;
          font-weight: bold;
        }
      }

      // 圖片排列
      ul {
        display: flex;
        flex-wrap: wrap;
        padding: 0 0 200px;
        // RWD
        @include mobile {
          flex-direction: column;
          padding: 0 0 70px;
        }

        li {
          flex: 0 0 50%;
          margin-top: 25px;

          img {
            display: block;
            width: 70%;
            margin: auto;
          }

          h4 {
            text-align: center;
            margin-top: -20px;
          }

          p {
            text-align: center;
            margin-top: 10px;
          }
        }
      }
    }
  }
}

// 各樓層指南
.floor {
  background: #f4f5f7;
  @include mobile() {
    display: none;
  }
  @include wrapper {
    padding: 60px 0;
    h2 {
      margin: 0 0 35px;
      padding: 0 0 25px;
      width: 250px;
      font-size: 24px;
      line-height: 1.6;
      font-weight: bold;
      background: url("../../../../src/img/floor_introduction_h2_line.svg")
        no-repeat left bottom;
      background-size: 250px 10px;
    }

    // 白色區塊
    .floor_white {
      padding: 140px 85px 55px;
      margin: 0 0 30px;
      background: #fff;
      border-radius: 28px;

      //   樓層對齊
      .floor_img {
        position: relative;
        margin: 0 0 125px;
        &:last-child {
          margin-bottom: 40px;
        }
        //   樓層文字
        p {
          position: absolute;
          left: -10px;
          top: -60px;
          font-size: 8.6rem;
        }
        span {
          font-size: 6rem;
        }

        // 樓層圖
        img {
          width: 100%;
          border-radius: 10px;
        }

        // 區塊共用
        .fp {
          position: absolute;
          width: 112px;
          height: 72px;
          animation: animalMove 3s infinite;
          a {
            &:hover {
              animation: shake 0.2s infinite linear alternate;
            }
            img {
              width: 112px;
              height: 72px;
            }
          }
        }
        // 區塊1
        .p1 {
          left: -29px;
          top: 142px;
        }

        // 區塊2
        .p2 {
          left: 131px;
          top: -100px;
        }

        // 區塊3
        .p3 {
          right: 285px;
          top: -100px;
        }

        // 區塊4
        .p4 {
          left: 322px;
          top: -100px;
        }

        // 區塊5
        .p5 {
          left: 406px;
          top: 95px;
        }

        // 區塊6
        .p6 {
          left: 552px;
          top: -10px;
        }
      }
    }

    // 圖像說明
    .floor_white1 {
      padding: 70px 50px 40px 142px;
      margin: 0 0 30px;
      background: #fff;
      border-radius: 28px;
      ul {
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        li {
          width: 135px;
          margin-right: 20px;
          padding-left: 40px;
          margin-bottom: 30px;
          font-size: $p;
          line-height: 2;
        }
        // 各區塊設定
        .barrier {
          background: url("/img/floor_introduction_barrier_free_icon.svg")
            no-repeat 2px 50%;
          background-size: 25px 25px;
        }
        .scope {
          background: url("/img/floor_introduction_fish_icon.svg") no-repeat 2px
            50%;
          background-size: 25px 25px;
        }
        .lift {
          background: url("/img/floor_introduction_lift_icon.svg") no-repeat 2px
            50%;
          background-size: 25px 25px;
        }
        .baby {
          background: url("/img/floor_introduction_baby_icon.svg") no-repeat 2px
            50%;
          background-size: 30px 25px;
        }
        .shop {
          background: url("/img/floor_introduction_shop_icon.svg") no-repeat 2px
            50%;
          background-size: 25px 25px;
        }
        .toilet {
          background: url("/img/floor_introduction_toilet_icon.svg") no-repeat
            2px 50%;
          background-size: 25px 25px;
        }
        .academy {
          background: url("/img/floor_introduction_school_icon.svg") no-repeat
            2px 50%;
          background-size: 25px 25px;
        }
        .cafe {
          background: url("/img/floor_introduction_coffee_icon.svg") no-repeat
            2px 50%;
          background-size: 25px 25px;
        }
      }
    }
  }
}

//燈箱
.light_box {
  @include mobile() {
    padding-top: 50px;
    background: #f4f5f7;
  }
  .lightbox_overlay {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    // RWD
    @include mobile() {
      display: block;
      position: static;
      background-color: transparent;
    }

    @include wrapper {
      overflow-y: scroll;
      overflow-x: hidden;
      height: 630px;

      @include mobile() {
        height: auto;
        overflow: initial;
      }

      // 內容設定
      .lightbox_content {
        padding: 70px 85px 55px;
        margin: 50px 0;
        background: #fff;
        border-radius: 28px;
        position: relative;
        // RWD
        @include mobile() {
          padding: 0;
          margin: 0;
          position: static;
          background: #f4f5f7;
        }

        // 區塊
        .lightbox_block {
          // RWD
          @include mobile() {
            border: 1px solid #ddd;
            border-radius: 10px;
            box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2);
            margin-bottom: 15px;
          }

          h4 {
            margin-bottom: 25px;
            font-weight: bold;
            line-height: 1.6;
            // RWD
            @include mobile() {
              margin: 0;
              padding: 10px;
              display: flex;
              justify-content: space-between;
              align-items: center;
              &.accordion_header::after {
                content: "\002B";
                font-size: 24px;
                font-weight: bold;
                color: #666;
                transition: transform 0.3s ease;
              }
              &.active {
                background-color: lightseagreen;
              }
              &.active::after {
                transform: rotate(45deg);
              }
            }
          }

          // 內文主排版
          ul {
            display: flex;
            // RWD
            @include mobile() {
              flex-direction: column;
            }

            li {
              padding: 0 0 50px 0;
              // RWD
              @include mobile() {
                padding: 0;
              }
              &:last-child {
                margin: 30px 0 0 45px;
                // RWD
                @include mobile() {
                  margin: 20px;
                }
                p {
                  font-size: 1.4rem;
                  line-height: 1.8;
                  // RWD
                  @include mobile() {
                    margin: 10px;
                  }
                }
              }
              img {
                // RWD
                @include mobile() {
                  margin: auto;
                  display: block;
                }
              }
            }

            // 內文二
            &:last-child {
              padding-top: 60px;
              border-top: 1px solid #546a88;
              // RWD
              @include mobile() {
                padding-top: 40px;
                display: none;
              }

              a {
                margin: 71px 0 0 287px;
                // RWD
                @include mobile() {
                  margin: 0;
                  margin-left: auto;
                  display: block;
                  width: fit-content;
                }
              }
            }
          }
        }
      }
    }

    // 關閉按鈕
    .lightbox_close {
      position: fixed;
      top: 27px;
      right: 133px;
      font-size: 3.6rem;
      color: #003366;
      width: 60px;
      height: 60px;
      line-height: 53px;
      display: block;
      text-align: center;
      border-radius: 50%;
      background: #fff;
      box-shadow: 0px 0px 5px #000;
      cursor: pointer;
      @include mobile() {
        display: none;
      }
    }
  }
}
// 各別區塊調整
.seal .wrapper .lightbox_content .lightbox_block ul:last-child p {
  margin: 60px 0 0 0;
}

// 動畫
@keyframes animalMove {
  0% {
    transform: translate(0, 0);
    opacity: 1;
  }
  50% {
    transform: translate(0, 20px);
    opacity: 1;
  }

  100% {
    transform: translate(0, 0);
    opacity: 1;
  }
}

@keyframes shake {
  0% {
    transform: translate(0, 0);
  }

  50% {
    transform: translate(4px, 0);
  }

  100% {
    transform: translate(0, 0);
  }
}
</style>
