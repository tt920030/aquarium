<template>
    <Header></Header>
    <div class="visit_information">
        <main>
            <div class="banner">
                <h1>園區介紹<br>GUIDED TOUR</h1>
            </div>

            <!-- 樓層指南選單 -->
            <ul class="floor_nav">
      <li>
        <RouterLink to="/floor_introduction"><img src="@/img/floor_p1.svg" alt="" /></RouterLink>
        <h4 >樓層介紹</h4>
      </li>
      <li>
        <RouterLink to="/park_activity"><img src="@/img/floor_p2.svg" alt="" /> </RouterLink>

        <h4>館內活動</h4>
      </li>
      <li>
        <RouterLink to="/faq"><img src="@/img/floor_p3.svg" alt="" />  </RouterLink>
        <h4>常見問題</h4>
      </li>
      <li>
        <RouterLink to="/visit_information"><img src="@/img/floor_p4_active.svg" alt="" /> </RouterLink>
        <h4 class="h4_active">參觀資訊</h4>
      </li>
    </ul>

            <div class="wrapper">
                <div class="visit_top">
                    <h2>營業資訊</h2>
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <p>平日(周二~周五)</p>
                                </td>
                                <td>
                                    <p>9:00-17:00</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>假日(周六~周日)</p>
                                </td>
                                <td>
                                    <p>8:30-18:00</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <p>公休日：每個星期一公休</p>

                    <h2>交通方式</h2>
                    <p>地址：台北市中正區杭州南路2023號</p>
                    <iframe class="gmap"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.7363885430764!2d121.52225777416575!3d25.04301863793058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a9708f9d0e77%3A0xde4dfc6bbe7f2dac!2z5ZyL56uL5Y-w5YyX5ZWG5qWt5aSn5a245om_5pum5qiT!5e0!3m2!1szh-TW!2stw!4v1683353426450!5m2!1szh-TW!2stw"
                        width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>


                <div class="wrapper">
                    <div class="visit_top">
                        <h2>營業資訊</h2>
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                        <p>平日(周二~周五)</p>
                                    </td>
                                    <td>
                                        <p>9:00-17:00</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p>假日(周六~周日)</p>
                                    </td>
                                    <td>
                                        <p>8:30-18:00</p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <p>公休日：每個星期一公休</p>

                        <h2>交通方式</h2>
                        <p>地址：台北市中正區杭州南路2023號</p>
                        <iframe class="gmap"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.7363885430764!2d121.52225777416575!3d25.04301863793058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a9708f9d0e77%3A0xde4dfc6bbe7f2dac!2z5ZyL56uL5Y-w5YyX5ZWG5qWt5aSn5a245om_5pum5qiT!5e0!3m2!1szh-TW!2stw!4v1683353426450!5m2!1szh-TW!2stw"
                            width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>


                    <div class="visit_mid">
                        <h3>搭乘捷運</h3>
                        <div class="info">
                            <h4>捷運善導寺站10號出口步行3分鐘</h4>
                            <div class="info_detail">
                                <span class="left">
                                    <p>捷運善導寺站10號出口</p>
                                </span>
                                <div class="mid_icon">
                                    <img class="person" src="src/img/visitinfo1.svg" alt="">
                                    <p>出站直行150公尺後向右轉</p>
                                </div>
                                <span class="right">
                                    <p>台北海生館</p>
                                </span>
                            </div>
                        </div>

                        <h3>搭乘公車</h3>
                        <div class="info">
                            <h4>搭乘第10005號公車往海生館方向</h4>
                            <div class="info_detail">
                                <span class="left">
                                    <p>於台北海生館站下車</p>
                                </span>
                                <div class="mid_icon">
                                    <img class="bus" src="src/img/visitinfo2.png" alt="">
                                    <p>下車後向右轉直行100公尺</p>
                                </div>
                                <span class="right">
                                    <p>台北海生館</p>
                                </span>
                            </div>
                        </div>

                        <h3>自行開車</h3>
                        <div class="info">
                            <h4>國道100號海生館出口下交流道</h4>
                            <div class="info_detail">
                                <span class="left">
                                    <p>海生館出口下交流道</p>
                                </span>
                                <div class="mid_icon">
                                    <img class="car" src="src/img/visitinfo3.png" alt="">
                                    <p>往海生館路直行600公尺</p>
                                </div>
                                <span class="right">
                                    <p>台北海生館</p>
                                </span>
                            </div>
                        </div>


                        <div class="park">
                            <h3>停車場資訊</h3>
                            <p class="opentime">開放時間：<br>平日(二~五)：8:30~17:30<br />周末(六~日)：8:00~18:30<br>周一休館日不開放</p>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>
                                            <p>汽車</p>
                                        </td>
                                        <td>
                                            <p>每小時20元，館內消費200元可折抵一小時</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p>機車</p>
                                        </td>
                                        <td>
                                            <p>每小時10元，館內消費100元可折抵一小時</p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>

                </div>
            </div>
        </main>

    </div>

    <Footer></Footer>
</template>

<script setup>
    // import { RouterLink, RouterView } from "vue-router";
    // import { onMounted, reactive, ref } from "vue";
    // import Header from '/src/components/Header.vue';
    // import Footer from '/src/components/Footer.vue';
    // import $ from "jquery";

    // const abc = function(){};

    // onMounted();

</script>

<style lang="scss" scoped>
.visit_information {
    main {
        background-image: url(../img/visit_information_bg.png);
        background-size: cover;

        @include mobile {
            background-size: contain;
        }

        .banner {
            background-image: url(../img/guided_tour_banner.jpg);
            width: 100%;
            height: 660px;
            background-size: cover;

            @include mobile {
                height: 270px;
            }

            ;

            h1 {
                padding-top: 300px;
                padding-left: 40px;

                @include mobile {
                    font-size: 2.8rem;
                    line-height: 5rem;
                    padding-top: 110px;
                }
            }

            ;


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

                &:nth-child(4)::after {
                    content: "";
                    background-image: url("@/img/floor_nav_index.svg");
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


        @include wrapper {

            padding-bottom: 350px;

            .visit_top {

                width: 80%;
                margin: 0 auto;

                h2 {
                    font-size: 2.8rem;
                    margin-top: 200px;
                    margin-bottom: 40px;
                    position: relative;

                    @include mobile {
                        font-size: 2.5rem;
                    }
                }

                h2::after {
                    content: "";
                    width: 100%;
                    height: 2px;
                    background-color: #16355A;
                    position: absolute;
                    left: 0px;
                    bottom: -15px;
                }



                table {
                    width: 90%;
                    box-shadow: 0 1px 10px rgba(0, 0, 0, 0.2);
                    border-collapse: separate;
                    border-spacing: 0;
                    margin: 2rem auto;
                    background: white;

                    th,
                    td {
                        text-align: center;
                        border: 1px solid map-get($color, bgc2);
                        padding: 3rem 4rem;

                        @include mobile {
                            padding: 3rem 0rem;
                        }
                    }

                    td:last-child {
                        padding: 3rem 18rem;

                        @include mobile {
                            padding: 3rem 3rem;
                        }
                    }
                }

                .gmap {
                    display: block;
                    margin: 0 auto;
                    margin-top: 10px;

                    @include mobile {
                        width: 340px;
                        height: 220px;
                    }
                }
            }




            h3 {
                text-align: center;
                position: relative;
                margin-top: 180px;
                margin-bottom: 30px;
            }

            .info {
                width: 70%;
                margin: 0 auto;
                padding: 20px;
                background-color: white;
                border: 2px solid #16355A;

                h4 {
                    font-size: 1.8rem;
                    margin-bottom: 20px;
                    position: relative;
                }

                h4::after {
                    content: "";
                    width: 90%;
                    height: 2px;
                    background-color: #16355A;
                    position: absolute;
                    left: 0px;
                    bottom: -15px;
                }

                .info_detail {
                    display: flex;
                    justify-content: center;
                    padding: 50px 0px 20px 0px;

                    @include mobile {
                        padding: 20px 0px 20px 0px;
                        flex-direction: column;
                    }

                    .left {
                        padding: 10px 30px;
                        background-color: #CCF1F5;
                        border-radius: 15px;

                        @include mobile {
                            margin-bottom: 16px;
                        }

                        p {
                            @include mobile {
                                text-align: center;
                            }
                        }

                    }

                    .mid_icon {
                        margin: 30px 20px 0px 20px;
                        position: relative;

                        p {
                            position: relative;

                            @include mobile {
                                padding-bottom: 37px;
                                padding-left: 30px;
                            }
                        }

                        p::before {
                            content: "";
                            width: 100%;
                            height: 2px;
                            background-color: #16355A;
                            position: absolute;
                            left: 0px;
                            bottom: 25px;

                            @include mobile {
                                width: 1%;
                                height: 100px;
                                bottom: 2px;
                            }
                        }

                        .person {
                            width: 16%;
                            position: absolute;
                            bottom: 35px;
                            left: 77px;

                            @include mobile {
                                width: 10%;
                                bottom: 28px;
                                left: 38px;
                            }
                        }

                        .bus {
                            width: 20%;
                            position: absolute;
                            bottom: 35px;
                            left: 77px;

                            @include mobile {
                                width: 14%;
                                bottom: 28px;
                                left: 28px;
                            }
                        }

                        .car {
                            width: 22%;
                            position: absolute;
                            bottom: 35px;
                            left: 69px;

                            @include mobile {
                                width: 15%;
                                bottom: 29px;
                                left: 27px;
                            }
                        }




                    }


                    .right {
                        padding: 10px 48px;
                        border: 3px solid #CCF1F5;
                        border-radius: 15px;

                        p {
                            @include mobile {
                                text-align: center;
                            }
                        }
                    }

                }
            }

            .park {
                margin: 0 auto;
                width: 75%;
                background-color: #CCF1F5;
                padding-bottom: 30px;

                h3 {
                    position: relative;
                    padding-top: 30px;
                }

                h3::after {
                    content: "";
                    width: 90%;
                    height: 2px;
                    background-color: #16355A;
                    position: absolute;
                    left: 38px;
                    bottom: -15px;

                    @include mobile {
                        width: 80%;
                        left: 30px;
                    }
                }

                .opentime {
                    margin-left: 40px;
                }


                table {
                    width: 90%;
                    box-shadow: 0 1px 10px rgba(0, 0, 0, 0.2);
                    border-collapse: separate;
                    border-spacing: 0;
                    margin: 2rem auto;
                    background: white;

                    th,
                    td {
                        text-align: center;
                        border: 1px solid map-get($color, bgc2);
                        padding: 3rem 4rem;
                    }

                    td:last-child {
                        padding: 3rem;
                    }
                }

            }

        }


    }


}</style>