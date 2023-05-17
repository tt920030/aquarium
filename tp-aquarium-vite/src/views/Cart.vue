<template>
    <Header></Header>
    <div class="cart">
    <main>
        <div class="wrapper">
            <div class="cart-product-information">

                <h2>商品資訊</h2>
                <!-- 門票 -->
                <div class="cart-group cart-tickets">
                    <h3>門票</h3>
                    <div class="cart-product-content">
                        <input type="checkbox">
                        <div class="cart-product-content-r">
                            <img src="../img/cart_ticket.png" alt="">
                            <div>
                                <div>
                                    <h4>入場門票(日間票)-大人</h4>
                                    <p>2023/4/19</p>
                                    <h3>$520</h3>
                                    <div>
                                        <button>-</button>
                                        <p>1</p>
                                        <button>+</button>
                                    </div>
                                </div>
                                <div>
                                    <h4>數量</h4>
                                    <h3>1</h3>
                                    <h4>金額</h4>
                                    <h3>NT $520</h3>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="cart-product-content">
                        <input type="checkbox">
                        <div class="cart-product-content-r">
                            <img src="" alt="">
                            <div>
                                <div>
                                    <h4>入場門票(日間票)-大人</h4>
                                    <p>2023/4/19</p>
                                    <h3>$520</h3>
                                    <div>
                                        <button>-</button>
                                        <p>1</p>
                                        <button>+</button>
                                    </div>
                                </div>
                                <div>
                                    <h4>數量</h4>
                                    <h3>1</h3>
                                    <h4>金額</h4>
                                    <h3>NT $520</h3>
                                </div>
                            </div>

                        </div>
                    </div>
                    <button>
                        <h4>展開查看全部</h4>
                    </button>
                </div>
                <!-- 行程 -->
                <div class="cart-group cart-journeys">
                    <h3>行程</h3>
                    <div class="cart-product-content">
                        <input type="checkbox">
                        <div class="cart-product-content-r">
                            <img src="../img/cart_journey.png" alt="">
                            <div>
                                <div>
                                    <h4>入場門票(日間票)-大人</h4>
                                    <p>2023/4/19</p>
                                    <h3>$520</h3>
                                    <div>
                                        <button>-</button>
                                        <p>1</p>
                                        <button>+</button>
                                    </div>
                                </div>
                                <div>
                                    <h4>數量</h4>
                                    <h3>1</h3>
                                    <h4>金額</h4>
                                    <h3>NT $520</h3>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="cart-product-content">
                        <input type="checkbox">
                        <div class="cart-product-content-r">
                            <img src="../img/cart_journey.png" alt="">
                            <div>
                                <div>
                                    <h4>入場門票(日間票)-大人</h4>
                                    <p>2023/4/19</p>
                                    <h3>$520</h3>
                                    <div>
                                        <button>-</button>
                                        <p>1</p>
                                        <button>+</button>
                                    </div>
                                </div>
                                <div>
                                    <h4>數量</h4>
                                    <h3>1</h3>
                                    <h4>金額</h4>
                                    <h3>NT $520</h3>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="cart-product-content">
                        <input type="checkbox">
                        <div class="cart-product-content-r">
                            <img src="../img/cart_journey.png" alt="">
                            <div>
                                <div>
                                    <h4>入場門票(日間票)-大人</h4>
                                    <p>2023/4/19</p>
                                    <h3>$520</h3>
                                    <div>
                                        <button>-</button>
                                        <p>1</p>
                                        <button>+</button>
                                    </div>
                                </div>
                                <div>
                                    <h4>數量</h4>
                                    <h3>1</h3>
                                    <h4>金額</h4>
                                    <h3>NT $520</h3>
                                </div>
                            </div>

                        </div>
                    </div>
                    <button>
                        <h4>展開查看全部</h4>
                    </button>
                </div>
                <!-- 商品 -->
                <div class="cart-group cart-products">
                    <h3>商品</h3>
                    <div class="cart-product-content">
                        <input type="checkbox">
                        <div class="cart-product-content-r">
                            <img src="../img/cart_product.png" alt="">
                            <div>
                                <div>
                                    <h4>入場門票(日間票)-大人</h4>
                                    <p>2023/4/19</p>
                                    <h3>$520</h3>
                                    <div>
                                        <button>-</button>
                                        <p>1</p>
                                        <button>+</button>
                                    </div>
                                </div>
                                <div>
                                    <h4>數量</h4>
                                    <h3>1</h3>
                                    <h4>金額</h4>
                                    <h3>NT $520</h3>
                                </div>
                            </div>

                        </div>
                    </div>
                    <button>
                        <h4>展開查看全部</h4>
                    </button>
                </div>
                <!-- 初步總計 -->
                <div class="cart-total">
                    <h3>共計金額</h3>
                    <h3>NT $</h3>
                    <h3>1360</h3>
                </div>
            </div>
            <!-- 運送地址 -->
            <div class="cart-delivery">
                <h2>運送資訊</h2>
                <div>
                    <h4>宅配地址: 100台北市中正區濟南路一段321號</h4>
                    <button class="cart-button">
                        <p>變更收貨地址</p>
                    </button>
                </div>
            </div>
            <!-- 運費、折扣及最終付款金額計算 -->
            <div class="cart-order">
                <h2>訂單資訊</h2>
                <div>
                    <div class="origin">
                        <h4>商品金額</h4>
                        <h4>NT $1360</h4>
                    </div>
                    <div class="discount">
                        <h4>折扣金額 <span>(使用折價券: 1D52593)</span></h4>
                        <h4>-NT $100</h4>
                        
                    </div>
                    
                    <button class="cart-button">
                        <p>查看可用優惠券</p>
                    </button>
                    <div class="shipping">
                        <h4>商品運費</h4>
                        <h4>NT $60</h4>
                    </div>
                    <div class="hr"></div>
                    <div>
                        <h3>付款金額</h3>
                        <h3>NT $1320</h3>
                    </div>
                    <a class="btn" href="">立即付款</a>
                </div>
            </div>
        </div>
    </main>
    <RouterLink to="/ticket">12234</RouterLink>
</div>
    <Footer></Footer>
    
    <RouterView></RouterView>
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
import { onMounted, reactive, ref } from "vue";

import Header from '/src/components/Header.vue';
import Footer from '/src/components/Footer.vue';
</script>
<style lang="scss">
@import "/src/assets/sass/page/_cart.scss";
</style>