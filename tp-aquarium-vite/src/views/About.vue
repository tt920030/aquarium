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
                <div class="img1"></div>
                <div class="img2"></div>
                
                <svg viewBox="0 0 1920 1920" fill="none" xmlns="http://www.w3.org/2000/svg" width="0px">
                <clipPath id="bobble1">
                <path
                    d="M196.281 6.30836C252.113 -0.412241 312.469 -9.25734 357.56 24.3449C407.502 61.5614 438.956 123.372 436.905 185.621C434.902 246.434 391.96 295.315 347.275 336.612C304.771 375.893 254.157 407.836 196.281 407.999C138.263 408.162 82.7123 381.063 44.435 337.464C8.33101 296.341 -3.89043 240.121 1.04595 185.621C5.54766 135.92 32.9023 92.7576 69.6573 59.0001C104.659 26.8525 149.096 11.9881 196.281 6.30836Z" fill="#C4C4C4"/>
                </clipPath>
                </svg>
               
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
                <div class="img3"></div>
                <div class="img4"></div>
                <svg viewBox="0 0 1920 1920" fill="none" xmlns="http://www.w3.org/2000/svg" width="0px">
                <clipPath id="bobble1">
                <path
                    d="M226.032 1.29936C291.146 7.18244 341.807 51.4574 382.498 102.606C423.094 153.637 460.465 213.936 445.715 277.444C431.011 340.752 372.291 381.399 312.061 405.884C256.951 428.287 196.734 425.148 142.498 400.707C86.2302 375.351 40.0661 332.683 20.0886 274.31C-3.05688 206.681 -13.4898 127.79 29.5618 70.7181C73.5589 12.393 153.249 -5.27673 226.032 1.29936Z" />
                </clipPath>
                </svg>
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

            <div class="img5"></div>
            <div class="img6"></div>
            <svg viewBox="0 0 1920 1920" fill="none" xmlns="http://www.w3.org/2000/svg" width="0px">
            <clipPath id="bobble1">
            <path
                d="M226.032 1.29936C291.146 7.18244 341.807 51.4574 382.498 102.606C423.094 153.637 460.465 213.936 445.715 277.444C431.011 340.752 372.291 381.399 312.061 405.884C256.951 428.287 196.734 425.148 142.498 400.707C86.2302 375.351 40.0661 332.683 20.0886 274.31C-3.05688 206.681 -13.4898 127.79 29.5618 70.7181C73.5589 12.393 153.249 -5.27673 226.032 1.29936Z" />
            </clipPath>
            </svg>

                
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
        padding-bottom: 300px;
    
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
                    width: 500px;
                    height: 500px;
                    float: left;
                    background-image: url(@/img/about_bubblebg1.png);
                    clip-path: url(#bobble1);
                    background-position-x: -130px;
                    margin-top: 40px;
                    margin-left: 33px;
                    @include mobile{
                        display: none;
                    }
                }

                
                .img2{
                    width: 500px;
                    height: 500px;
                    background-image: url(@/img/about_bubblebg2.png);
                    clip-path: url(#bobble1);
                    margin-top: -275px;
                    margin-left: 640px;
                    background-position-x: -18px;
                    background-position-y: -111px;
                    @include mobile{
                        display: none;
                    }  
                }
                @keyframes bobble1 {
                    0% {
                        d: path("M196.281 6.30836C252.113 -0.412241 312.469 -9.25734 357.56 24.3449C407.502 61.5614 438.956 123.372 436.905 185.621C434.902 246.434 391.96 295.315 347.275 336.612C304.771 375.893 254.157 407.836 196.281 407.999C138.263 408.162 82.7123 381.063 44.435 337.464C8.33101 296.341 -3.89043 240.121 1.04595 185.621C5.54766 135.92 32.9023 92.7576 69.6573 59.0001C104.659 26.8525 149.096 11.9881 196.281 6.30836Z")
                    }

                    33% {
                        d: path("M226.144 0.09229C295.905 -1.35649 372.292 13.8933 411.917 71.3117C449.608 125.928 426.418 197.347 405.797 260.417C388.165 314.341 359.915 366.455 307.957 389.265C257.846 411.265 203.678 391.898 152.921 371.434C95.5378 348.299 29.9348 327.228 9.37434 268.886C-13.2752 204.616 7.02321 131.88 49.8042 78.8319C92.3155 26.1181 158.429 1.49859 226.144 0.09229Z" fill="#C4C4C4")
                    }

                    66% {
                        d: path("M177.289 0.192935C233.83 2.31093 282.391 33.9001 323.609 72.6621C366.495 112.993 408.444 160.13 409.942 218.982C411.465 278.878 383.138 342.988 331.248 372.942C284.667 399.829 229.894 364.474 177.289 353.279C141.473 345.656 105.62 342.197 77.3601 318.911C45.7617 292.873 23.2699 258.934 14.31 218.982C2.34404 165.628 -13.0855 105.124 19.5796 61.2735C54.5894 14.2747 118.724 -2.00082 177.289 0.192935Z")
                    }

                    100% {
                        d: path("M196.281 6.30836C252.113 -0.412241 312.469 -9.25734 357.56 24.3449C407.502 61.5614 438.956 123.372 436.905 185.621C434.902 246.434 391.96 295.315 347.275 336.612C304.771 375.893 254.157 407.836 196.281 407.999C138.263 408.162 82.7123 381.063 44.435 337.464C8.33101 296.341 -3.89043 240.121 1.04595 185.621C5.54766 135.92 32.9023 92.7576 69.6573 59.0001C104.659 26.8525 149.096 11.9881 196.281 6.30836Z")
                    }
                }

                svg {
                    #bobble1 path {
                    animation: bobble1 15s linear infinite;
                 }}
            }
            .mid{
                
                .content1{
                    width: 50%;
                    margin-top: 320px;
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
                    width: 500px;
                    height: 500px;
                    background-image: url(@/img/about_bubblebg3.png);
                    clip-path: url(#bobble1);
                    float: right;
                    margin-top: -165px;
                    background-position-y: -32px;
                    @include mobile{
                        display: none;
                    }
                }
                .img4{
                    width: 500px;
                    height: 500px;
                    background-image: url(@/img/about_bubblebg4.png);
                    clip-path: url(#bobble1);
                    margin-top:100px ;
                    @include mobile{
                        display: none;
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
                width: 500px;
                height: 500px;
                background-image: url(@/img/about_bubblebg5.png);
                clip-path: url(#bobble1);
                position: absolute;
                margin-top: -385px;
                @include mobile{
                    display: none;
                }
            
            }
            .img6{
                width: 500px;
                height: 500px;
                background-image: url(@/img/about_bubblebg6.png);
                clip-path: url(#bobble1);
                margin-left: 710px;
                padding-top: 0;
                background-position-x: -70px;
                background-position-y: -50px;
                @include mobile{
                    display: none;
                }
            }

        }
    }
}

</style>