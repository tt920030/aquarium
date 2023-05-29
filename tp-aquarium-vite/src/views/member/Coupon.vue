<template>
    <div class="coupon wrapper">
        <select name="" id="">
            <option value="未使用">未使用</option>
            <option value="已使用">已使用</option>
        </select>

        <div class="table">
            <div class="title">
                <h3>我的折價券</h3>
            </div>
            <table>
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
                <tr>
                    <td>
                        <p>小遊戲過關禮物</p>
                    </td>
                    <td>
                        <p>#gP5BJHspm</p>
                    </td>
                    <td>
                        <p>300</p>
                    </td>
                    <td>
                        <p>-</p>
                    </td>
                    <td>
                        <p>1000</p>
                    </td>
                    <td>
                        <p>未使用</p>
                    </td>
                    <td>
                        <p>2023/04/01~2023/04/30</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p>小遊戲過關禮物</p>
                    </td>
                    <td>
                        <p>#gP5BJHspm</p>
                    </td>
                    <td>
                        <p>-</p>
                    </td>
                    <td>
                        <p>95折</p>
                    </td>
                    <td>
                        <p>-</p>
                    </td>
                    <td>
                        <p>未使用</p>
                    </td>
                    <td>
                        <p>2023/04/01~2023/04/30</p>
                    </td>
                </tr>

            </table>
        </div>
    </div>
    <div class="mobile_order">

        <select name="" id="">
            <option value="one_month">已使用</option>
            <option value="未出貨訂單">未使用</option>
        </select>

        <div class="table">
            <div class="title">
                <h3>我的折價券</h3>
            </div>
            <table>
                <tr class="top">
                    <th>
                        <p>名稱</p>
                    </th>
                    <td>
                        <p>小遊戲過關禮物</p>
                        <img src="/src/img/member_angle.svg" alt="">
                    </td>

                </tr>
                <tr>
                    <th>
                        <p>序號</p>
                    </th>
                    <td>
                        <p>#gP5BJHspm</p>
                    </td>
                </tr>
                <tr>
                    <th>
                        <p>面額</p>
                    </th>
                    <td>
                        <p>300</p>
                    </td>
                </tr>
                <tr>
                    <th>
                        <p>折數</p>
                    </th>
                    <td>
                        <p>-</p>
                    </td>
                </tr>
                <tr>
                    <th>
                        <p>抵用門檻</p>
                    </th>
                    <td>
                        <p>1000</p>
                    </td>
                </tr>
                <tr>
                    <th>
                        <p>使用狀況</p>
                    </th>
                    <td>
                        <p>未使用</p>
                    </td>
                </tr>
                <tr>
                    <th>
                        <p>有效期限</p>
                    </th>
                    <td>
                        <p>2023/04/01~2023/04/30</p>
                    </td>
                </tr>
                <tr class="top">
                    <th>
                        <p>名稱</p>
                    </th>
                    <td>
                        <p>小遊戲過關禮物</p>
                        <img src="/src/img/member_angle.svg" alt="">
                    </td>

                </tr>
                <tr>
                    <th>
                        <p>序號</p>
                    </th>
                    <td>
                        <p>#gP5BJHspm</p>
                    </td>
                </tr>
                <tr>
                    <th>
                        <p>面額</p>
                    </th>
                    <td>
                        <p>300</p>
                    </td>
                </tr>
                <tr>
                    <th>
                        <p>折數</p>
                    </th>
                    <td>
                        <p>-</p>
                    </td>
                </tr>
                <tr>
                    <th>
                        <p>抵用門檻</p>
                    </th>
                    <td>
                        <p>1000</p>
                    </td>
                </tr>
                <tr>
                    <th>
                        <p>使用狀況</p>
                    </th>
                    <td>
                        <p>未使用</p>
                    </td>
                </tr>
                <tr>
                    <th>
                        <p>有效期限</p>
                    </th>
                    <td>
                        <p>2023/04/01~2023/04/30</p>
                    </td>
                </tr>

            </table>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
@import '../../assets/sass/page/member_mobile_order';
.coupon {
    
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

                .time {
                    width: 150px;
                    word-break: break-all;
                }


            }
        }
    }
}
</style>