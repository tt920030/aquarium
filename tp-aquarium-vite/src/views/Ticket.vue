
<template>
    <Header />
    <h1>購票資訊</h1>
    <h1>TICKET INFORMATION</h1>
    <main class="ticket">
        <div class="wrapper">
            <h2>入館費用</h2>
            <h3>單日門票</h3>
            <table class="ticket-day">
                <thead>
                    <tr>
                        <th v-for="th in dayThs">{{ th }}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="dayType in dayTypes">
                        <td>
                            {{ dayType.type }}
                        </td>
                        <td>
                            {{ dayType.day }}
                        </td>
                        <td>
                            {{ dayType.night }}
                        </td>
                        <td>
                            {{ dayType.for }}
                        </td>
                    </tr>
                </tbody>
            </table>
            <div class="ticket-day-bottom">
                <p>*星光票限17:00後入場使用</p>
                <a class="btn" href="#">按此前往購票</a>
            </div>

            <h3>年度通行方案</h3>
            <div class="ticket-year">
                <table>
                    <thead>
                        <tr>
                            <th>
                                方案種類
                            </th>
                            <th>
                                售價
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="yearType in yearTypes">
                            <td >
                                {{yearType.type}}
                            </td>
                            <td>
                               {{yearType.price}}
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div>
                    <h4>申請年度通行方案取得各項優惠</h4>
                    <ul>
                        <li>本館地下停車費享消費享8折優惠</li>
                        <li>有效期限內不限次數暢遊本館</li>
                        <li>本館指定餐廳消費享8折優惠</li>
                        <li>紀念品店消費享9折優惠</li>
                    </ul>
                    <a class="btn" href="#">
                        <h4>前往申請年度通行方案</h4>
                    </a>
                </div>
            </div>



            <h3>團體優惠</h3>
            <table class="ticket-group">
                <thead>
                    <tr>
                        <th>

                        </th>
                        <th>
                            大人
                        </th>
                        <th>
                            學生
                        </th>
                        <th>
                            兒童/博愛票
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            20人以上
                        </td>
                        <td>
                            NT $500/張
                        </td>
                        <td>
                            NT $340/張
                        </td>
                        <td>
                            NT $220/張
                        </td>
                    </tr>
                    <tr>
                        <td>
                            50人以上
                        </td>
                        <td>
                            NT $480/張
                        </td>
                        <td>
                            NT $320/張
                        </td>
                        <td>
                            NT $200/張
                        </td>
                    </tr>
                    <tr>
                        <td>
                            100人以上
                        </td>
                        <td>
                            NT $460/張
                        </td>
                        <td>
                            NT $300/張
                        </td>
                        <td>
                            NT $180/張
                        </td>
                    </tr>
                </tbody>
            </table>
            <p>*一般團體不需預約，但是依據人數可接受事前的預約，請於平日9:00~17:00來電窗口諮詢 電話: 03-1234-567。</p>
            <div class="ticket-notice">
                <h2>重要須知</h2>
                <ul>
                    <li v-for="notice in notices">{{ notice }}</li>
                </ul>
            </div>
        </div>
    </main>
    <Footer />
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
import { onMounted, reactive, ref } from "vue";
import Header from '/src/components/Header.vue';
import Footer from '/src/components/Footer.vue';
const dayThs = reactive(["門票種類", "日間票", "星光票", "適用對象"]);
const Types = ["大人", "學生", "兒童", "博愛票"];
const Prices = [520, 360, 240, 240];
const dayTypes = reactive([{ type: Types[0], day: "NT $" + Prices[0], night: "NT $" + (Prices[0] - 60), for: "18歲(含)~64歲成人使用" },
{ type: Types[1], day: "NT $" + Prices[1], night: "NT $" + (Prices[1] - 60), for: "12歲(含)~17歲學生使用" },
{ type: Types[2], day: "NT $" + Prices[2], night: "NT $" + (Prices[2] - 60), for: "6歲(含)~11歲學童使用" },
{ type: Types[3], day: "NT $" + Prices[3], night: "NT $" + (Prices[3] - 60), for: "持有身心障礙證明者與1位陪同者、孕婦、滿65歲以上長者適用" }

]);
const yearTypes = reactive([{ type: Types[0], price: "NT $" + (Prices[0] * 2 + 40) },
{ type: Types[1], price: "NT $" + (Prices[1] * 2 + 40) },
{ type: Types[2], price: "NT $" + (Prices[2] * 2 + 40) },
{ type: Types[3], price: "NT $" + (Prices[3] * 2 + 40) }])
const notices = reactive(["我只是一條先隨便打得須知範例不要亂看一條先隨便打得須知範例不要亂看",
    '我只是一條先隨便打得須知範例不要亂看一條先隨便打得須知範例不要亂看',
    '我只是一條先隨便打得須知範例不要亂看一條先隨便打得須知範例不要亂看',
    '我只是一條先隨便打得須知範例不要亂看一條先隨便打得須知範例不要亂看']);
</script>

<style lang="scss">
main.ticket {
    @include wrapper;



    table {
        box-shadow: 0 1px 10px rgba(0, 0, 0, 0.2);
        border-collapse: separate;
        border-spacing: 0;
        margin: 2rem auto;
        background: white;
        font-size: 1.6rem;

        thead {
            background-color: map-get($color , bgc2);
            font-weight: bold;
        }

        tr td:first-child {
            background-color: map-get($color , bgc2);
            font-weight: bold;
        }


        th,
        td {
            text-align: center;
            border: 1px solid map-get($color, bgc2);
            padding: 3rem 4rem;
        }



    }




    .ticket-year {


        margin: 0 auto;
        width: 90%;
        display: flex;
        align-items: center;
        justify-content: center;

        table {
            margin: 2rem;


            td:nth-child(2) {
                padding-left: 10rem;
                padding-right: 10rem;
            }
        }


    }

    .ticket-group {
        td:not(:nth-child(1)) {
            padding-left: 8rem;
            padding-right: 8rem;
        }
    }

    .ticket-notice {
        border: 1px solid black;
        padding: 2rem;
        margin: 5rem;
    }

    .ticket-day-bottom {
        display: flex;
        justify-content: space-between;
    }

    ul {
        margin-left: 3rem;

        li {
            list-style: disc;
            font-size: 1.6rem;
            line-height: 4rem;
        }


    }

    a {
        font-weight: bold
    }

    ;
    //年度方案頁面

    .yearpass-mid {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 5rem;
        gap: 10rem;
        border-bottom: 1px solid black;

        img {
            width: 30%;
        }
    }

    @include mobile {
        text-align: center;

        table {
            width: 80%;
            box-shadow: none;

            thead {
                display: none;
            }

            th,
            td {
                padding: 1.5rem 1rem;
            }

            td:before {
                position: absolute;
                left: 1rem;
                font-weight: bold;
            }

            &.ticket-day {
                td:nth-child(2):before {
                    content: "日間票";
                }

                td:nth-child(3):before {
                    content: "星光票";
                }


            }
        }


        .ticket-year {
            flex-direction: column;
        }



        table tr,
        table td {
            display: block;
        }

        table tr {
            position: relative;
            margin-bottom: 1em;
            box-shadow: 0 1px 10px rgba(0, 0, 0, 0.2);
        }

        table td {
            border-top: none;
        }


    }
}
</style>