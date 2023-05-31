<template>
    <div class="coupon wrapper">
        <select v-model="used" id="coupon">
            <option :value="false">未使用</option>
            <option :value="true">已使用</option>
        </select>

        <div class="table">
            <div class="title">
                <h3>我的折價券</h3>
            </div>
            <table >
                <tr>
                    <th>
                        <p>名稱</p>
                    </th>
                    <th>
                        <p>序號</p>
                    </th>
                    <th>
                        <p>面額</p>
                    </th>
                    <th>
                        <p>折數</p>
                    </th>
                    <th>
                        <p>抵用門檻</p>
                    </th>
                    <th>
                        <p>使用狀況</p>
                    </th>
                    <th>
                        <p>有效期限</p>
                    </th>
                </tr>
                <template  v-for="item in coupon" :key="item.serial">
                    <tr v-if="item.state === used">
                        <td>
                            <p>{{ item.name }}</p>
                        </td>
                        <td>
                            <p>{{item.serial}}</p>
                        </td>
                        <td>
                            <p>{{ item.discount }}</p>
                        </td>
                        <td>
                            <p>{{ item.DENO }}</p>
                        </td>
                        <td>
                            <p>{{ item.needPrice }}</p>
                        </td>
                        <td>
                            <p>{{ item.state ? "已使用":"未使用" }}</p>
                        </td>
                        <td>
                            <p>{{item.expiry}}</p>
                        </td>
                    </tr>
                </template>
                


            </table>
        </div>

        <div class="mobile_order">
       
            <div class="table_mobile">
                    <div class="title">
                        <h3>我的折價券</h3>
                    </div>
                    <template  v-for="item in coupon" :key="item.serial" >
                        <div class="tableContainer2"  v-if="item.state === used" :class="{'-close': close}">
                            <table >
                                <tr class="top" >
                                    <th>
                                        <p>名稱</p>
                                    </th>
                                    <td>
                                        <p>{{ item.name }}</p>
                                        <img src="@/img/member_angle.svg" alt="" @click="closeOrder">
                                    </td>

                                </tr>
                                <tr>
                                    <th>
                                        <p>序號</p>
                                    </th>
                                    <td>
                                        <p>{{ item.serial }}</p>
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        <p>面額</p>
                                    </th>
                                    <td>
                                        <p>{{ item.discount }}</p>
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        <p>折數</p>
                                    </th>
                                    <td>
                                        <p>{{ item.DENO }}</p>
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        <p>抵用門檻</p>
                                    </th>
                                    <td>
                                        <p>{{ item.needPrice }}</p>
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        <p>使用狀況</p>
                                    </th>
                                    <td>
                                        <p>{{ item.state ? "已使用":"未使用" }}</p>
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        <p>有效期限</p>
                                    </th>
                                    <td>
                                        <p>{{item.expiry}}</p>
                                    </td>
                                </tr>

                            </table>
                        </div>
                    </template>
            </div>
                    
                    
        </div>
    </div>
    
</template>

<script setup>
import { onMounted, ref, defineEmits } from 'vue';
const used = ref(false);

const close = ref(true);

const coupon = [
    {
        name: "小遊戲過關禮物",
        serial: "#gP5BJHspm",
        discount: "300",
        DENO: "-",
        needPrice: "1000",
        state: false,
        expiry: "2023/04/01~2023/04/30"

    },
    {
        name: "小遊戲過關禮物",
        serial: "#gP5BJdfg",
        discount: "-",
        DENO: "95",
        needPrice: "1000",
        state: true,
        expiry: "2023/04/01~2023/04/30"

    },
];

const closeOrder = (e) => {
    close.value = !close.value;
}

// const changeState = () => {
    
//     // const value = document.getElementById("coupon").value;
//     // used.value = value;
//     console.log(value);
// }
</script>

<style lang="scss" scoped>
.coupon {
    

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

        @include mobile{
            margin-top: 30px;
            margin-bottom: 10px;
        }

        option {}

    }

    .table {
        border-radius: 20px;
        border: 1px solid map-get($color , bgc2);
        overflow: hidden;

        @include mobile{
            display: none;
        }

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

                .time {
                    width: 150px;
                    word-break: break-all;
                }


            }
        }
    }

    .mobile_order {
        display: none;
        margin-top: 40px;

        @include mobile {
            display: block;
            

            select {
                margin-bottom: 30px;
                width: 150px;
                height: 35px;
                font-family: "Noto Sans TC", sans-serif;
                font-size: 1.6rem;
                line-height: 1.6;
                letter-spacing: 0.1rem;
                border: 1px solid black;
                padding: 5px 10px;
                margin-left: 20px;
                appearance: none;
                background-image: url(../../img/member_angle.svg);
                background-repeat: no-repeat;
                background-position: right 13px center;
                outline: none;

                option {}

            }

            
                .table_mobile {
                    margin: 0 auto;
                    width: 90%;
                    border: 1px solid map-get($color, bgc2);
                    border-radius: 20px;
                    overflow: hidden;

                    .title {
                        height: 65px;
                        background-color: map-get($color, bgc2);

                        h3 {
                            line-height: 65px;
                            text-align: center;
                        }
                    }

                    .tableContainer{
                        transition: all .5s;
                        height: auto;
                        overflow: hidden;

                        table {

                            width: 100%;
        
                            .top {
                                background-color: map-get($color, bgc1);
                            }
        
                            tr {
                                width: 100%;
        
                                text-align: center;
        
                                th {
                                    box-sizing: border-box;
                                    border: 1px solid map-get($color, bgc2);
                                    padding: 15px;
                                    vertical-align: middle;
                                    width: 30%;
                                    border-left: 0px;
        
        
                                }
        
                                td {
                                    box-sizing: border-box;
                                    border: 1px solid map-get($color, bgc2);
                                    padding: 15px;
                                    vertical-align: middle;
                                    width: 70%;
                                    border-right: 0px;
                                    position: relative;
        
                                    img {
                                        position: absolute;
                                        right: 10px;
                                        top: 50%;
                                        transform: translate(0, -50%);
                                    }
                                }
        
                                &:last-child {
        
                                    th {
                                        border-bottom: 0;
                                    }
                                }
        
                                &:last-child {
                                    td {
                                        border-bottom: 0;
                                    }
        
                                }
        
                                p {}
                            }
                        }
                    }

                    .tableContainer2{
                        transition: all .5s;
                        height: 358px;
                        overflow: hidden;
                        table {

                            width: 100%;
        
                            .top {
                                background-color: map-get($color, bgc1);
                            }
        
                            tr {
                                width: 100%;
        
                                text-align: center;
        
                                th {
                                    box-sizing: border-box;
                                    border: 1px solid map-get($color, bgc2);
                                    padding: 15px;
                                    vertical-align: middle;
                                    width: 30%;
                                    border-left: 0px;
        
        
                                }
        
                                td {
                                    box-sizing: border-box;
                                    border: 1px solid map-get($color, bgc2);
                                    padding: 15px;
                                    vertical-align: middle;
                                    width: 70%;
                                    border-right: 0px;
                                    position: relative;
        
                                    img {
                                        position: absolute;
                                        right: 10px;
                                        top: 50%;
                                        transform: translate(0, -50%);
                                    }
                                }
        
                                &:last-child {
        
                                    th {
                                        border-bottom: 0;
                                    }
                                }
        
                                &:last-child {
                                    td {
                                        border-bottom: 0;
                                    }
        
                                }
        
                                p {}
                            }
                        }
                    }

                    .-close{
                        height: 50px;
                    }
                    
                }
            


        }

    }
}
</style>