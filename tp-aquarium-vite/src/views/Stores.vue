<template>
    <Header></Header>
    <div class="stores">
        <div class="banner">
            <h1>網路商城<br>STORES</h1>
        </div>
        <main>
            <!-- 導覽 -->
            <div class="wrapper navigation">
                <p>網路商城>所有商品</p>
            </div>
            <!-- 商品區塊 -->
            <div class="wrapper product_content">
                <!-- 商品篩選區塊 -->
                <div class="product_filter">
                    <div>
                        <ul>
                            <li class="filterByAll" @click="filterNumber= 1"><h3>所有商品</h3></li>
                            <!-- <li class="filterByBest"><h3>熱門商品</h3></li> -->
                            <li class="filterByAnimal">
                                <h3>依動物</h3>
                                <ul>
                                    <li @click=hadleClick><h4>企鵝</h4></li>
                                    <li @click="filterNumber = 3"><h4>海豚</h4></li>
                                    <li @click="filterNumber = 4"><h4>魚類</h4></li>
                                    <li @click="filterNumber = 5"><h4>水母</h4></li>
                                    <li @click="filterNumber = 6"><h4>其他</h4></li>
                                </ul>
                            </li>
                            <li class="filterByType">
                                <h3>依種類</h3>
                                <ul>
                                    <li @click="filterNumber = 7"><h4>玩偶</h4></li>
                                    <li @click="filterNumber = 8"><h4>文具</h4></li>
                                    <li @click="filterNumber = 10"><h4>食品</h4></li>
                                    <li @click="filterNumber = 9"><h4>吊飾</h4></li>
                                    <li @click="filterNumber = 11"><h4>其他</h4></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                <!-- 商品列 -->
                <ul class="product_list">
                    <ProductList :filterNumber="filterNumber"></ProductList>
                    <!-- <li>
                        <a href="" class="product_info">
                            <img src="../img/product_1_1.jpg" alt="">
                            <p class="product_name">企鵝娃娃</p>
                            <p class="product_price">NTD $500</p>
                            <button href="" class="btn addToCartBtn">加入購物車  <i class="fa-solid fa-chevron-right"></i></button>
                            <img src="../img/product_1_1.jpg" alt="">
=======
                            <img src="../img/product_penguinDoll.jpg" alt="">
>>>>>>> anniesu
                            <p class="product_name">企鵝娃娃</p>
                            <p class="product_price">NTD $500</p>
                            <button href="" class="btn addToCartBtn">加入購物車  <i class="fa-solid fa-chevron-right"></i></button>
                        </a>
                    </li>
                    <li>
                        <a href="" class="product_info">
                            <img src="../img/product_1_1.jpg" alt="">
                            <p class="product_name">企鵝娃娃</p>
                            <p class="product_price">NTD $500</p>
                            <button href="" class="btn addToCartBtn">加入購物車  <i class="fa-solid fa-chevron-right"></i></button>
                        </a>
                    </li>
                    <li>
                        <a href="" class="product_info">
                            <img src="../img/product_1_1.jpg" alt="">
                            <p class="product_name">企鵝娃娃</p>
                            <p class="product_price">NTD $500</p>
                            <button href="" class="btn addToCartBtn">加入購物車  <i class="fa-solid fa-chevron-right"></i></button>
                        </a>
                    </li>
                    <li>
                        <a href="" class="product_info">
                            <img src="../img/product_1_1.jpg" alt="">
                            <p class="product_name">企鵝娃娃</p>
                            <p class="product_price">NTD $500</p>
                            <button href="" class="btn addToCartBtn">加入購物車  <i class="fa-solid fa-chevron-right"></i></button>
                        </a>
                    </li>
                    <li>
                        <a href="" class="product_info">
                            <img src="../img/product_1_1.jpg" alt="">
                            <p class="product_name">企鵝娃娃</p>
                            <p class="product_price">NTD $500</p>
                            <button href="" class="btn addToCartBtn">加入購物車  <i class="fa-solid fa-chevron-right"></i></button>
                        </a>
                    </li>
                    <li>
                        <a href="" class="product_info">
                            <img src="../img/product_1_1.jpg" alt="">
                            <p class="product_name">企鵝娃娃</p>
                            <p class="product_price">NTD $500</p>
                            <button href="" class="btn addToCartBtn">加入購物車  <i class="fa-solid fa-chevron-right"></i></button>
                        </a>
                    </li>
                    <li>
                        <a href="" class="product_info">
                            <img src="../img/product_1_1.jpg" alt="">
                            <p class="product_name">企鵝娃娃</p>
                            <p class="product_price">NTD $500</p>
                            <button href="" class="btn addToCartBtn">加入購物車  <i class="fa-solid fa-chevron-right"></i></button>
                        </a>
                    </li>
                    <li>
                        <a href="" class="product_info">
                            <img src="../img/product_1_1.jpg" alt="">
                            <p class="product_name">企鵝娃娃</p>
                            <p class="product_price">NTD $500</p>
                            <button href="" class="btn addToCartBtn">加入購物車  <i class="fa-solid fa-chevron-right"></i></button>
                        </a>
                    </li> -->
                </ul>
            </div>
            <!-- 頁碼 -->
            <div class="wrapper page_list">
                <ul>
                    <Paginator></Paginator>
                    <!-- <li><a href="">1</a></li>
                    <li><a href="">2</a></li>
                    <li><a href="">3</a></li>
                    <li><a href="">4</a></li>
                    <li><a href="">5</a></li> -->
                </ul>
            </div>
        </main>        
    </div>
    <Footer></Footer>
    <CustomerService></CustomerService>
    <router-view></router-view>
</template>
<script setup>
	import Header from '/src/components/Header.vue';
	import Footer from '/src/components/Footer.vue';
    import CustomerService from '/src/components/CustomerService.vue'; 
    import ProductList from '../components/ProductList.vue';
    // import Paginator from '../components/Paginator.vue'
    import { ref } from 'vue';
    const filterNumber = ref(1);

    function hadleClick(){
        filterNumber.value = 2;
        console.log('aa')
    }

</script>
<style lang="scss" scoped>
@import "../assets/sass/page/stores";
    
</style>