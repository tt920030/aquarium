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

<style lang="scss" scoped></style>