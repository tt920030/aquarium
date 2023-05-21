<template>
    <Header></Header>
    <div class="about">
    <main>
        <div class="banner">
            <h1>關於我們<br>ABOUT US</h1>
        </div>

        <div class="wrapper">
            <section class="top">
                <div class="content">      
                    <h2>關於 台北海生館</h2>
                    <h3>一個公園般的海生館 觀看海洋生物，感受生活</h3>
                    <h4>打造像公園一樣的水族館<br>
                        漫步在清涼的走廊和水族展區之間<br>
                        欣賞各種不同種類的海洋生物<br>
                        感受被水的波動圍繞<br>
                        也可以坐下來喝咖啡聊天<br>
                        像在公園一樣自在的散步參觀<br>
                        享受悠閒時光<br>
                        感受海洋的寧靜與美好<br>
                        我們打造像公園一樣的海生館，等你的到來</h4>
                       
                </div>       
                <img class="img1" data-aos="fade-right" src="@/img/about_img1.png" alt="">
                <img class="img2"  src="@/img/about_img2.png" alt="">
            </section>

            

            <section class="mid">
                <div class="content1">
                    <h3>結合娛樂、教育和環保的海生館</h3>
                    <h4>我們提供各種活動和課程<br>
                        讓你更加了解海洋生物和海洋生態環境。<br>
                        你可以參加海生館導覽,<br>
                        在專業的導覽員帶領下更深入地學習海洋生物的生態與知識;<br>
                        也可以報名與海豚、企鵝、水獺的近距離接觸,<br>
                        與這些可愛的生物近距離互動，了解它們的習性和生活方式;<br>
                        或跟隨專業飼養員體驗照顧海洋生物,<br>
                        參與飼料準備、飼養環境清潔等工作,<br>
                        了解飼養海洋生物的技巧和責任,<br>
                        體驗成為一名飼養員的喜悅和挑戰。<br>
                        各式豐富多樣的活動和課程都在台北海生館。<br>
                    </h4>
                </div>
                <img class="img3"  src="@/img/about_img3.png" alt="">
                <img class="img4" data-aos="fade-right"  src="@/img/about_img4.png" alt="">
                <ul>
                    <li>
                        <img src="@/img/about_link1.jpg" alt="">
                        <div class="link_text">
                            <h4>園區介紹</h4>
                            <p>認識我們的園區，看看感興趣的區域，規劃您的海生館行程</p>
                            <a href=""><p>more</p></a>
                        </div>
                    </li>
                    <li>
                        <img src="@/img/about_link2.jpg" alt="">
                        <div class="link_text">
                            <h4>園區介紹</h4>
                            <p>認識我們的園區，看看感興趣的區域，規劃您的海生館行程</p>
                            <a href=""><p>more</p></a>
                        </div>
                    </li>
                    <li>
                        <img src="@/img/about_link3.jpg" alt="">
                        <div class="link_text">
                            <h4>園區介紹</h4>
                            <p>認識我們的園區，看看感興趣的區域，規劃您的海生館行程</p>
                            <a href=""><p>more</p></a>
                        </div>
                    </li>
                </ul>
        
            </section>

            <img class="img5" data-aos="zoom-in" src="@/img/about_img5.png" alt="">
            <img class="img6" data-aos="zoom-in-up" data-aos-duration="4000" src="@/img/about_img6.png" alt="">

                
        </div> 
    </main> 
    </div>
    <Footer></Footer>
    <RouterView/>
</template>

<script setup>
import Header from '/src/components/Header.vue';
import Footer from '/src/components/Footer.vue';
import { onMounted, reactive, ref } from "vue";
</script>

<style lang="scss" scoped>
.about {
    main{
        background-color: #97cbe0;
    
        .banner{
            background-image: url(../img/about_banner.jpg);
            height: 660px;
            background-size: cover;
            @include mobile{
                height: 268px;
                background-repeat: no-repeat;
                background-position: center;
            }
            h1{padding-top: 300px;
                padding-left: 40px;
                @include mobile{
                    padding-top: 124px;
                    font-size: 2.8rem;
                    line-height: 5rem;
                }
            };
            
           
        }
    
        .wrapper{
         
            .top{
           
                background-image: url(../img/about_bg2.png);
                background-size: 100%;
                background-repeat: no-repeat;
                margin-top: -5px;
                .content{
                    width: 50%;
                    margin-left: 150px;
                    @include mobile{
                        width: 82%;
                        margin-left: 30px;
                    }
                    
                    h2{
                        padding-top: 100px;
                        margin-bottom: 30px;
                        font-weight: bold;
                    }
                    h3{
                        font-family: Noto Serif TC;
                        font-size: 22px;
                        margin-bottom: 40px;
                        font-weight: bold;
                        line-height: 4rem;
                        position: relative;
                    }
                    h3::after{
                        content: "";
                        width: 100%;
                        height: 2px;
                        background-color: #16355A;
                        position: absolute;
                        left: 0px;
                        bottom: -15px;
                    }
                    h4{
                        line-height: 4.5rem;
                    }
                }
                .img1{
                    width: 35%;
                    float: left;
                    @include mobile{
                        width: 50%;
                    }
                }
                .img2{
                    width: 53%;
                    margin-top: -275px;
                    margin-left: 590px;
                    @include mobile{
                        width: 60%;
                        margin-top: -108px;
                        margin-left: 140px;
                    }
                    
                    
                }
            }
            .mid{
                
                .content1{
                    width: 50%;
                    margin-left: 250px;
                    @include mobile{
                        width: 62%;
                        margin-left: 30px;
                    }
                    h3{
                        font-family: Noto Serif TC;
                        margin-bottom: 40px;
                        font-weight: bold;
                        position: relative;
                    @include mobile{
                        line-height: 4rem;
                    }
                    }
                    h3::after{
                        content: "";
                        width: 100%;
                        height: 2px;
                        background-color: #16355A;
                        position: absolute;
                        left: 0px;
                        bottom: -15px;
                    }
                    h4{
                        line-height: 4.5rem;
                    }

                }
                .img3{
                    width:43%;
                    float: right;
                    margin-top: -165px;
                    @include mobile{
                        width: 54%;
                        margin-top: -75px;
                    }
                }
                .img4{
                    width: 32%;
                    margin-top:100px ;
                    @include mobile{
                        width: 44%;
                    }
                }
                ul{
                    display: flex;
                    width: 75%;
                    margin: 0 auto;
                    margin-top: 100px;
                    margin-bottom: 500px;
                    @include mobile{
                        flex-direction: column;
                    }
                
                    li{
                        width: 33%;
                        display: flex;
                        flex-direction: column;
                        margin: 0 15px;
                        position: relative;
                        background-repeat: no-repeat;
                        background-position-y: bottom;
                        @include mobile{
                            width: 100%;
                            margin: 0 auto;
                            margin: 60px 0px;
                        }
                        .link_text{
                            background-image: url(../img/about_link_bg.png);
                            padding: 12px;
                            padding-top: 60px;
                            position: absolute;
                            bottom: -80px;
                            left: 0;
                            right: 0;
                            h4{
                                margin-bottom: 10px;
                            }
                            a{
                                width: 60px;
                                height: 60px;
                                border-radius: 50%;
                                background-color:#fff61c;
                                position: absolute;
                                top: -6px;
                                right: 16px;
                                display: flex;
                                justify-content: center;
                                align-items: center;
                                p{
                                    color:#16355a ;
                                }
                            }
                        }
                        img{
                            width: 100%;
                        }
                        
                    }

                }
            }
            .img5{
                width: 45%;
                position: absolute;
                margin-top: -300px;
                @include mobile{
                    width: 60%;
                }
            
            }
            .img6{
                width: 35%;
                padding-top: 247px;
                padding-left: 710px;
                @include mobile{
                    width: 56%;
                    padding-top: 180px;
                    padding-left: 175px;
                }
            }

        }
    }
}

</style>