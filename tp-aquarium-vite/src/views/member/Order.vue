<template>
    <div class="order wrapper">
        <select name="" id="">
            <option value="one_month">一個月內訂單</option>
            <option value="未出貨訂單">未出貨訂單</option>
            <option value="six_month">六個月內訂單</option>
        </select>

        <div class="table">
            <div class="title">
                <h3>一個月內訂單</h3>
            </div>

            <table>
                
                <tr>
                    <th>
                        <p>訂單編號</p>
                    </th>
                    <th class="time">
                        <p>訂購時間</p>
                    </th>
                    <th>
                        <p>付款方式</p>
                    </th>
                    <th>
                        <p>訂單金額</p>
                    </th>
                    <th>
                        <p>使用時間</p>
                    </th>
                    <th>
                        <p>商品名稱</p>
                    </th>
                    <th>
                        <p>數量</p>
                    </th>
                    <th>
                        <p>處理狀態</p>
                    </th>
                </tr>
                <template v-for="item in order" :key="item.id">
                    <tr>
                        <td :rowspan='item.products.length'>
                            <p>{{ item.id }}</p>
                        </td>
                        <td :rowspan='item.products.length' class="time">
                            <p>{{ item.buyTime }}</p>
                        </td>
                        <td :rowspan='item.products.length'>
                            <p>{{ item.pay }}</p>
                        </td>
                        <td :rowspan='item.products.length'>
                            <p>{{ item.total }}</p>
                        </td>
                        <td>
                            <p>{{ item.products[0].usedTime }}</p>
                        </td>
                        <td>
                            <p>{{ item.products[0].name }}</p>
                        </td>
                        <td>
                            <p>{{ item.products[0].number }}</p>
                        </td>
                        <td class="time">
                            <p>{{ item.products[0].state }}</p>
                        </td>
                    </tr>
                    <template v-for="(product, index) in item.products" :key="product.name">
                        <tr v-if="index !== 0">
                            <td>
                                <p>{{ product.usedTime }}</p>
                            </td>
                            <td>
                                <p>{{ product.name }}</p>
                            </td>
                            <td>
                                <p>{{ product.number }}</p>
                            </td>
                            <td class="time">
                                <p>{{ product.state }}</p>
                            </td>
                        </tr>
                    </template>
                </template>
                

                

            </table>
        </div>

    </div>
    <div class="mobile_order">
        <select name="" id="">
            <option value="one_month">一個月內訂單</option>
            <option value="未出貨訂單">未出貨訂單</option>
            <option value="six_month">六個月內訂單</option>
        </select>

        <div class="table">
            <div class="title">
                <h3>我的訂單</h3>
            </div>
            <div class="tableContainer" v-for="item in order" :key="item.id">
                <table>
                    <tr class="top">
                        <th>
                            <p>訂單編號</p>
                        </th>
                        <td>
                            <p>{{ item.id }}</p>
                            <img src="@/img/member_angle.svg" alt="" @click="closeOrder($event)">
                        </td>
                        
                    </tr>
                    <tr class="text">
                        <th>
                            <p>訂購時間</p>
                        </th>
                        <td>
                            <p>{{ item.buyTime }}</p>
                        </td>
                    </tr>
                    <tr  class="text">
                        <th>
                            <p>付款方式</p>
                        </th>
                        <td>
                            <p>{{ item.pay }}</p>
                        </td>
                    </tr>
                    <tr class="text">
                        <th>
                            <p>訂單金額</p>
                        </th>
                        <td>
                            <p>{{ item.total }}</p>
                        </td>
                    </tr>
                    <template v-for="product in item.products" :key="product.name">
                        <tr class="text">
                            <th>
                                <p>商品名稱</p>
                            </th>
                            <td>
                                <p>{{ product.name }}</p>
                            </td>
                        </tr>
                        <tr class="text">
                            <th>
                                <p>使用時間</p>
                            </th>
                            <td>
                                <p>{{ product.usedTime }}</p>
                            </td>
                        </tr>
                        <tr class="text">
                            <th>
                                <p>數量</p>
                            </th>
                            <td>
                                <p>{{ product.number }}</p>
                            </td>
                        </tr>
                        <tr class="text">
                            <th>
                                <p>處理狀態</p>
                            </th>
                            <td>
                                <p>{{ product.state }}</p>
                            </td>
                        </tr>
                    </template>
                </table>
            </div>
            
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref, defineEmits } from 'vue';
const order = [
    {
        id:"3",
        buyTime: "2023/03/25 21:36:54",
        pay: "信用卡付款",
        total: "640",
        products: [{
            usedTime: "2023/1/1",
            name: "成人票",
            number: "1",
            state: "03/27 17:21 已使用"
        },
        {
            usedTime: "-",
            name: "企鵝筆記本",
            number: "1",
            state: "03/27 17:21 已取貨"
        },
        {
            usedTime: "-",
            name: "企鵝筆記本",
            number: "1",
            state: "03/27 17:21 已取貨"
        }
    ]

        
    }
];

const closeOrder = (e) => {
    e.target.closest(".tableContainer").classList.toggle("-close");
}
</script>

<style lang="scss" scoped>
@import '../../assets/sass/page/member_mobile_order';
.order {
    @include mobile{
        display: none;
    }
    select {
        margin-bottom: 60px;
        width: 150px;
        height: 50px;
        font-family: "Noto Sans TC", sans-serif;
        font-size: 1.6rem;
        line-height: 1.6;
        letter-spacing: 0.1rem;
        border: 1px solid black;
        padding: 5px 10px;
        margin-left: 10px;
        appearance: none;
        background-image: url(@/img/member_angle.svg);
        background-repeat: no-repeat;
        background-position: right 13px center;
        outline: none;

        option {}

    }

    .table {
        border-radius: 20px;
        border: 1px solid map-get($color , bgc2);
        overflow: hidden;

        .title {
            height: 100px;
            background-color: map-get($color , bgc2);

            h3 {
                text-align: center;
                font-size: 2rem;
                letter-spacing: 0.2rem;
                font-family: "Noto Sans TC", sans-serif;
                margin: 0;
                line-height: 100px;
            }
        }

        table {
            width: 100%;

            text-align: center;

            tr {

                th,
                td {
                    border: 1px solid map-get($color , bgc2);
                    padding: 15px;
                    vertical-align: middle;

                    p {
                        font-family: "Noto Sans TC", sans-serif;
                        margin: 0;
                        font-size: 1.6rem;
                        line-height: 1.6;
                        letter-spacing: 0.1rem;
                    }
                }


            }
        }
    }
}</style>