<template>
    <Header></Header>

    <main class="cart">
        <div class="wrapper">
            <div class="cart-product-information">

                <h2>商品資訊</h2>
                <!-- 門票 -->
                <div v-if="tickets[0]" class="cart-group cart-tickets">
                    <h3>門票</h3>
                    <div v-for="ticket in transformedTickets" class="cart-product-content">
                        <div class="content-inside" v-if="ticket.amount">
                            <input type="checkbox">
                            <div class="cart-product-content-r">
                                <img src="../img/cart_ticket.png" alt="">
                                <div>
                                    <div>
                                        <h4>{{ ticket.name }}</h4>
                                        <p>{{ ticket.date }}</p>
                                        <h3>${{ choices[ticket.name][ticket.id]['price'] }}</h3>
                                        <div>
                                            <button @click="ticket.amount--">-</button>
                                            <p>{{ ticket.amount }}</p>
                                            <button @click="ticket.amount++">+</button>
                                        </div>
                                    </div>
                                    <div>
                                        <h4>金額</h4>
                                        <h3>NT ${{ choices[ticket.name][ticket.id]['price']*ticket.amount}}</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button>
                        <h4>展開查看全部</h4>
                    </button>
                </div>
                <!-- 行程 -->
                <div v-if="journeys[0]" class="cart-group cart-journeys">
                    <h3>行程</h3>
                    <div v-for="journey in transformedJourneys" class="cart-product-content">
                        <div class="content-inside" v-if="journey.amount">
                            <input type="checkbox">
                            <div class="cart-product-content-r">
                                <img src="../img/cart_journey.png" alt="">
                                <div>
                                    <div>
                                        <h4>{{ journey.name }}</h4>
                                        <p>{{ journey.date }}</p>
                                        <h3>${{ choices[journey.name][journey.id]['price'] }}</h3>
                                        <div>
                                            <button @click="journey.amount--">-</button>
                                            <p>{{ journey.amount }}</p>
                                            <button @click="journey.amount++">+</button>
                                        </div>
                                    </div>
                                    <div>
                                        <h4>金額</h4>
                                        <h3>NT ${{ choices[journey.name][journey.id]['price']*journey.amount}}</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <button>
                        <h4>展開查看全部</h4>
                    </button>
                </div>
                <!-- 商品 -->

                <div v-if="products[0]" class="cart-group cart-products">
                    <h3>商品</h3>

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
                    <h4>宅配地址: {{address}}</h4>
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
        <div class="addressModifier" >
            <h3>變更收貨地址</h3>
            <div>
                <h4>縣市</h4><select v-model="citySelected"><option v-for="city in AddressJson" :value="city.CityName" >{{ city.CityName }}</option></select>
                <h4>鄉鎮市區</h4><select v-model="areaSelected"><option v-for="area in (AddressJson.find(item => item.CityName === citySelected).AreaList)" :value="area.AreaName">{{area.AreaName}}</option></select>
                <h4>郵遞區號</h4><select><option value=""></option></select>
                <h4>地址</h4><input type="text">
            </div>
            <button>確認變更</button>
        </div>
    </main>

    <Footer></Footer>

    <RouterView></RouterView>
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
import { onBeforeUpdate, onMounted, reactive, ref } from "vue";
import AddressJson from '/src/json/CityCountyData.json';
import Header from '/src/components/Header.vue';
import Footer from '/src/components/Footer.vue';
const inCart = reactive([]);
const tickets = reactive([]);
const journeys = reactive([]);
const products = reactive([]);
const address = ref('100台北市中正區濟南路一段321號');
const citySelected = ref('臺北市');
const areaSelected = ref('中正區');
const addressModifiy = ref(false);
//引入行程名稱、種類及票價資訊
const choices = reactive(
    {
        '日間票': [{ name: "大人", price: 520, id: 1, amount: 0 }, { name: "學生", price: 360, id: 2, amount: 0 }, { name: "兒童", price: 240, id: 3, amount: 0 }, { name: "博愛票", price: 240, id: 4, amount: 0 }],
        '星光票': [{ name: "大人", price: 460, id: 1, amount: 0 }, { name: "學生", price: 300, id: 2, amount: 0 }, { name: "兒童", price: 180, id: 3, amount: 0 }, { name: "博愛票", price: 180, id: 4, amount: 0 }],
        '夜宿海生館-兩天一夜1': [{ name: "遊客", price: 2680, id: 1, amount: 0 }],
        '夜宿海生館-兩天一夜': [{ name: "遊客", price: 3680, id: 1, amount: 0 }]
    }
);
//引入各行程各日期剩餘票數
const remainSearch = reactive({
    '日間票': { '2023/5/18': 40, '2023/5/19': 10, '2023/5/20': 3 },
    '星光票': { '2023/5/18': 20, '2023/5/19': 5, '2023/5/20': 1 },
    '夜宿海生館-兩天一夜1': { '2023/5/18': 40, '2023/5/19': 10, '2023/5/20': 2 },
    '夜宿海生館-兩天一夜': { '2023/5/18': 40, '2023/5/19': 10, '2023/5/20': 4 },
});
//引入所有商品名稱
const ticketsName = reactive(['日間票', '星光票']);
const journeysName = reactive(["夜宿海生館-兩天一夜1", "夜宿海生館-兩天一夜"]);
const productsName = reactive([]);
//最終轉換為購物車商品的陣列
const transformedTickets = reactive([]);
const transformedJourneys = reactive([]);
onMounted(() => {
    //取得localStorge中加入購物車的資料(key開頭為cart)
    const keys = Object.keys(localStorage);
    const cartKeys = keys.filter(key => key.startsWith("cart"));
    if (cartKeys.length > 0) {
        cartKeys.forEach(cartKey => {
            const cartValue = JSON.parse(localStorage.getItem(cartKey));
            inCart.push(cartValue);
        });
    }

    const filteredTickets = inCart.filter(item => ticketsName.includes(item.name));
    tickets.push(...filteredTickets);

    const filteredJourneys = inCart.filter(item => journeysName.includes(item.name));
    journeys.push(...filteredJourneys);
    //將日期和品名相同的商品結合
    for (let i = 0; i < tickets.length; i++) {
        for (let j = i + 1; j < tickets.length; j++) {
            if (tickets[i].name === tickets[j].name && tickets[i].date === tickets[j].date) {
                tickets[i]["大人"] += tickets[j]["大人"];
                tickets[i]["學生"] += tickets[j]["學生"];
                tickets[i]["兒童"] += tickets[j]["兒童"];
                tickets[i]["博愛票"] += tickets[j]["博愛票"];
                tickets.splice(j, 1);
                j--; // 递减内部循环的索引以保持一致性
            }
        }
    }
    for (let i = 0; i < journeys.length; i++) {
        for (let j = i + 1; j < journeys.length; j++) {
            if (journeys[i].name === journeys[j].name && journeys[i].date === journeys[j].date) {
                journeys[i]["遊客"] += journeys[j]["遊客"];
                journeys.splice(j, 1);
                j--; // 递减内部循环的索引以保持一致性
            }
        }
    }
    //將各商品細項分類出來
    transformedTickets.push(...tickets.flatMap(item => {
        const { name, date, 大人, 學生, 兒童, 博愛票 } = item;
        return [
            { name, date, "amount": 大人, "type": "大人", "id": 0 },
            { name, date, "amount": 學生, "type": "學生", "id": 1 },
            { name, date, "amount": 兒童, "type": "兒童", "id": 2 },
            { name, date, "amount": 博愛票, "type": "博愛票", "id": 3 },
        ];
    }));
    transformedJourneys.push(...journeys.flatMap(item => {
        const { name, date, 遊客 } = item;
        return [
            { name, date, "amount": 遊客, "type": "遊客", "id":0 },
        ];
    }))

    console.log(AddressJson.find(item => item.CityName === '新北市').AreaList);
});

</script>
<style lang="scss">
@import "/src/assets/sass/page/_cart.scss";
</style>