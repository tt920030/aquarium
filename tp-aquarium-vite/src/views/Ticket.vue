
<template>
    <Header />
    <main class="ticket">
        <div class="banner">
            <h1>購票資訊<br>TICKET INFORMATION</h1>
        </div>
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
                <RouterLink to="/itinerary" class="btn">點選前往購票</RouterLink>
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
                            <td>
                                {{ yearType.type }}
                            </td>
                            <td>
                                {{ yearType.price }}
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div class="ticket-year-right">
                    <h4>申請年度通行方案取得各項優惠</h4>
                    <ul>
                        <li>本館地下停車費享消費享8折優惠</li>
                        <li>有效期限內不限次數暢遊本館</li>
                        <li>本館指定餐廳消費享8折優惠</li>
                        <li>紀念品店消費享9折優惠</li>
                    </ul>
                    <RouterLink class="btn" to="/yearpass">前往申請年度通行方案</RouterLink>
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
    <RouterView></RouterView>
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
import { onMounted, reactive, ref } from "vue";

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
const notices = reactive(["購票時請主動出示相關證件供售票處工作人員驗證，且於進場前請攜帶相關證件以備查驗，若無法提供有效證件者需以成人票身份重新購票；符合優惠身份者持票入場後，不可要求部分退款或貼補門票差額。相關證件說明如下：學生票：本人有效學生證正本(若為應屆畢業生則提供當年度正式入學通知單或註冊單及攜帶身分證)；孩童票、博愛票：身心障礙證明、孕婦健康手冊、國民身分證或政府核發附有照片、身分證字號及出生年、月、日等足以證明身分證件",
    '未滿4歲且有家長陪同的幼童可免費入場。',
    '館內部分展區及活動為需額外付費之範圍，欲了解相關內容請見官網說明或洽現場工作人員。',
    '請勿於任何非主辦單位正式授權售票之通路、網站購買票劵，以免自身權益受損，若透過上述管道購票發生無法入場或其他交易糾紛問題，主辦單位及相關售票平台概不負責。']);
</script>

<style lang="scss">
main.ticket {
    .banner{
            background-image: url(/src/img/ticket_banner.png);
            height: 660px;
            background-size: cover;
            @include mobile{
                height: 268px;
                background-repeat: no-repeat;
                background-position: center;
            }
            h1{padding-top: 35rem;
                padding-left: 40px;
                @include mobile{
                    padding-left:0;
                    padding-top: 100px;
                    font-size: 2.8rem;
                    line-height: 5rem;
                }
            };
        }

    @include wrapper{
        padding: 5rem 0 25rem;
    }


    h3{
        margin-top: 3rem;
    }
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
    .ticket-year-right{
        margin-left: 1.5rem;
        a{
            width:80%;
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
        margin: 0 auto;
        width: 90%;
        align-items: center;
        display: flex;
        justify-content: space-between;
    }
    
    ul {
        margin: 2rem 3rem;

        li {
            list-style: disc;
            font-size: 1.6rem;
            line-height: 5rem;
        }


    }

    a {
        font-weight: bold;
        padding: 1rem 3rem;
        &:hover{
            transform: scale(1.1)
        }
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
        .ticket-day-bottom {
        flex-direction: column;
        gap: 2rem;

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
        .ticket-notice {
        padding: 2rem 2rem 0;
        margin: 5rem;
        ul{
            text-align: left;
            margin: 0;
            li{ margin: 1rem;
                line-height: 3rem;
            }
        }
    }
       

    }
}
</style>