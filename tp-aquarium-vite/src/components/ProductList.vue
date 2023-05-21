<template>
    <li v-for="product in productToShow">
        <a href="" class="product_info">
            <div class="imgWrapper">
                <img :src=product.img alt="">                
            </div>
            <p class="product_name">{{ product.name }}</p>
            <p class="product_price">NTD ${{ product.price }}</p>
            <button href="" class="btn addToCartBtn">加入購物車  <i class="fa-solid fa-chevron-right"></i></button>
        </a>
    </li>
</template>
<script setup>
    import { reactive, defineEmits, defineProps, watch, onMounted, onBeforeMount } from 'vue';
    const products = reactive([
        {
            id:1,
            name: '企鵝娃娃',
            price: 500,
            intro: '企鵝絨毛娃娃的外觀可愛，經典的設計包括黑白相間的身體和圓滾滾的身材，令人難以抗拒。面料使用高品質的絨毛製成，手感柔軟舒適。',
            img: 'src/img/product_1_1.jpg',
            animal: 1,
            type: 1

        },
        {
            id:2,
            name: '海豹絨毛娃娃',
            price: 400,
            intro: '可愛的海豹絨毛娃娃為館內的人氣熱賣款！喜歡海豹的你千萬不要錯過了',
            img: 'src/img/product_2_1.jpg',
            animal: 5,
            type: 1
        },
        {
            id:3,
            name: '鯨魚娃娃',
            price: 500,
            intro: '此款鯨魚娃娃為特殊涼感材質所製成，最適合炎熱的夏天抱著玩耍',
            img: 'src/img/product_3_1.png',
            animal: 3,
            type: 1
        },
        {
            id: 4,
            name: '海洋生物文具組',
            price: 300,
            intro: '內有鯊魚筆記本及魚類圖案的3色原字筆',
            img: 'src/img/product_4_1.png',
            animal: 5,
            type: 2
        },
        {
            id: 5,
            name: '企鵝筆記本',
            price: 120,
            intro: '可愛的企鵝筆記本，有空白和格線內頁，不同的使用情境都能完美符合！',
            img: 'src/img/product_5_1.jpg',
            animal: 1,
            type: 2
        },
        {
            id: 6,
            name: '海洋圖案資料夾',
            price: 200,
            intro: 'A4大小的海洋圖案資料夾，為海生館款獨家款！不要錯過！',
            img: 'src/img/product_6_1.jpg',
            animal: 5,
            type: 2
        },
        {
            id: 7,
            name: '水母鑰匙圈',
            price: 150,
            intro: '特殊材質的水母鑰匙圈在晚上會發光！完美重現水族館內的人氣水母缸',
            img: 'src/img/product_7_1.jpg',
            animal: 4,
            type: 3
        },
        {
            id: 8,
            name: '海豚鑰匙圈',
            price: 150,
            intro: '此款鑰匙圈為陶瓷材質',
            img: 'src/img/product_8_1.jpg',
            animal: 2,
            type: 3
        },
        {
            id: 9,
            name: '魟魚絨毛吊飾',
            price: 180,
            intro: 'Ｑ版魟魚造型絨毛吊飾為館內的人氣商品之一！',
            img: 'src/img/product_9_1.jpg',
            animal: 3,
            type: 3
        },
        {
            id: 10,
            name: '海洋生物造型餅乾',
            price: 300,
            intro: '款造型餅乾為牛奶口味，主打健康無負擔的餅乾，適合所有小朋友食用！',
            img: 'src/img/product_10_1.jpg',
            animal: 5,
            type: 4
        },
        {
            id: 11,
            name: '海洋圖案滑鼠墊',
            price: 200,
            intro: '繽紛的海洋圖案滑鼠墊為海生館獨家款！',
            img: 'src/img/product_11_1.jpg',
            animal: 5,
            type: 5
        },
    ])
    let productToShow = reactive(products);
    const props = defineProps({
        filterNumber: Number,
    });
    const emits = defineEmits({
        productToShow: Number,
    })

    onBeforeMount(()=>{
        productToShow = products;
    })

    onMounted(()=>{
        productToShow = products;
    })

    watch(()=>{
        switch(props.filterNumber){
        case 1:
            productToShow = products;
            break;
        case 2:
            productToShow = products.filter(product => product.animal == 1);
            break;
        case 3:
            productToShow = products.filter(product => product.animal == 2);
            break;
        case 4:
            productToShow = products.filter(product => product.animal == 3);
            break;
        case 5:
            productToShow = products.filter(product => product.animal == 4);
            break;
        case 6:
            productToShow = products.filter(product => product.animal == 5);
            break;
        case 7:
            productToShow = products.filter(product => product.type == 1);
            break;
        case 8:
            productToShow = products.filter(product => product.type == 2);
            break;
        case 9:
            productToShow = products.filter(product => product.type == 3);
            break;
        case 10:
            productToShow = products.filter(product => product.type == 4);
            break;
        case 11:
            productToShow = products.filter(product => product.type == 5);
            break;
        }
        emits('productToShow', productToShow.length);

    })
</script>
<style lang="scss" scoped>
    li{
                        width: 272px;
                        height: 369px;
                        background-color: map-get($color, bgc1 );
                        margin-bottom: 85px;
                        margin-right: 28px;
                        @include mobile{
                            width: 312px;
                            margin: 0 calc(50% - 156px);
                            margin-bottom: 50px;
                        }
                    .product_info{
                            box-sizing: border-box;
                            width: 100%;
                            height: 369px;
                            
                            .imgWrapper{
                                width: 240px;
                                height: 210px;
                                margin-left: 16px;
                                margin-top: 16px;
                                @include mobile{
                                    margin-left: 36px;
                                    margin-right: 36px;
                                }
                                img{
                                    width: 100%;
                                    height: 100%;
                                    object-fit: cover;
                                }
                            }
                            p{
                                margin-left: 18px;
                                @include mobile{
                                    margin-left: 36px;
                                }
                            };
                            .product_name{
                                margin-top: 20px;
                            }
                        
                            .addToCartBtn{
                                margin: 10px 64px 0;
                                @include mobile{
                                    margin-left: 90px;
                                }
                            }
                        }
    }
    
</style>