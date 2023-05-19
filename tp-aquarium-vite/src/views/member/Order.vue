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
                <tr>
                    <td rowspan='2'>
                        <p>20230325012413</p>
                    </td>
                    <td rowspan='2' class="time">
                        <p>2023/03/25 21:36:54</p>
                    </td>
                    <td rowspan='2'>
                        <p>信用卡付款</p>
                    </td>
                    <td rowspan='2'>
                        <p>640</p>
                    </td>
                    <td>
                        <p>2023/1/1</p>
                    </td>
                    <td>
                        <p>成人票</p>
                    </td>
                    <td>
                        <p>1</p>
                    </td>
                    <td class="time">
                        <p>03/27 08:30 已使用</p>
                    </td>
                </tr>

                <tr>
                    <td>
                        <p>-</p>
                    </td>
                    <td>
                        <p>企鵝筆記本</p>
                    </td>
                    <td>
                        <p>1</p>
                    </td>
                    <td class="time">
                        <p>03/27 17:21 已取貨</p>
                    </td>
                </tr>

            </table>
        </div>

    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.order {

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