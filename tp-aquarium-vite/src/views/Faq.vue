<template>
    <Header></Header>
    <div class="faq">
        <main>
            <div class="banner">
                <h1>園區介紹<br>GUIDED TOUR</h1>
            </div>

            <div class="wrapper">
                <div class="accordion">
                    <div class="topic">
                        <h4>營業相關</h4>
                    </div>
                    <div class="faq1">
                        <p class="question">Q:平假日營業時間、休館時間？</p>
                        <p class="answer">A:平日營業時間早上9:00至下午17:00，假日營業時間早上8:30至下午18:00。休館時間為每周一。</p>
                        <P class="question">Q:如何預約團體參觀？</P>
                        <P class="answer">A:如有團體購票預約需求，請來電洽詢，將有專人為您服務</P>
                        <P class="question">Q:外籍旅客館內消費是否提供退稅服務？</P>
                        <P class="answer">A:本館無提供退稅服務，敬請見諒</P>
                    </div>

                </div>

                <div class="accordion">
                    <div class="topic">
                        <h4>參觀與服務</h4>
                    </div>
                    <div class="faq1">
                        <p class="question">Q:是否能攜帶寵物入館？</p>
                        <p class="answer">A:本館不得攜帶任何寵物入館</p>
                        <P class="question">Q:館內是否提供行李寄放服務？</P>
                        <P class="answer">A:館內大廳服務台後方有提供投幣式寄物櫃可以寄放行李</P>
                        <P class="question">Q:如何預約館內導覽活動？</P>
                        <P class="answer">A:可於台北海生館官網購買預約專人導覽活動，亦可於館內大廳服務台現場報名當日尚有名額之導覽場次</P>
                        <p class="question">Q:展示館內可以使用閃光燈拍照嗎？</p>
                        <p class="answer">A:為顧及避免造成對生物的干擾及影響來賓參觀品質，凡活體生物展示前請避免使用閃光燈。</p>
                    </div>

                </div>

                <div class="accordion">
                    <div class="topic">
                        <h4>交通資訊</h4>
                    </div>
                    <div class="faq1">
                        <p class="question">Q:平假日營業時間、休館時間？</p>
                        <p class="answer">A:平日營業時間早上9:00至下午17:00，假日營業時間早上8:30至下午18:00。休館時間為每周一。</p>
                        <P class="question">Q:如何預約團體參觀？</P>
                        <P class="answer">A:如有團體購票預約需求，請來電洽詢，將有專人為您服務</P>
                        <P class="question">Q:外籍旅客館內消費是否提供退稅服務？</P>
                        <P class="answer">A:本館無提供退稅服務，敬請見諒</P>
                    </div>

                </div>


            </div>





        </main>
    </div>


    <Footer></Footer>
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
import { onMounted, reactive, ref } from "vue";
import Header from '/src/components/Header.vue';
import Footer from '/src/components/Footer.vue';
import $ from "jquery";

const abc = function(){};

onMounted();

$( function() {
        // 手風琴()
        $(".accordion").click(function () {
            $(this).toggleClass("active");
            $(this).next().slideToggle();
        });
    } 
);

</script>

<style lang="scss" scoped>
// @import "../assets/sass/page/faq" ;

.faq {
    main {
        background-image: url(../img/faq_bg2.jpg);
        height: 2200px;

        .banner {
            background-image: url(../img/guided_tour_banner.jpg);
            width: 100%;
            height: 660px;
            background-size: cover;

            h1 {
                padding-top: 300px;
                padding-left: 40px;
            };
        }

        @include wrapper {
            .accordion {
                width: 90%;
                border: 1px solid #16355a;
                margin: 0 auto;
                margin-bottom: 50px;
                background-color: white;

                .topic {
                    padding: 20px;
                    background-color: #CCF1F5;
                }

                .faq1 {
                    padding: 20px;

                    .question {
                        position: relative;

                    }

                    .question::after {
                        content: "";
                        width: 100%;
                        height: 1px;
                        background-color: #16355A;
                        position: absolute;
                        left: 0px;
                        bottom: -3px;
                    }

                    .answer {
                        margin-top: 10px;
                        margin-bottom: 30px;
                        position: relative;
                    }


                }
            }
        }
    }
}
</style>

