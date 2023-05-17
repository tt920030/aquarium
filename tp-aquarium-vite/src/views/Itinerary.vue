<template>
    <Header></Header>
    <div class="wrapper">
        <div class="top">
            <ItineraryChooser class="chooser" @itinerary-selected="getItinerary"></ItineraryChooser>
            <div class="top-right">
                <h3>選擇來館日期</h3>
                <Calendar class="calendar" @date-selected="getDate"></Calendar>
                <h4 :class="{
                    'less': (itinerarySelected ? remainSearch[itinerarySelected][daySearch] : '點選查詢') <= 10 &&
                        (itinerarySelected ? remainSearch[itinerarySelected][daySearch] : '') >= 0
                }">
                    剩餘票數:{{ itinerarySelected ? remainSearch[itinerarySelected][daySearch] : "" }}</h4>
            </div>

        </div>
        <div class="bottom">
            <h3>選擇購買張數</h3>
            <TicketCounter @count="count" @total="total" @types="types"
                :remain="itinerarySelected ? remainSearch[itinerarySelected][daySearch] : ''" :itinerary="itinerarySelected">
            </TicketCounter>
            <div class="final">
                <p>{{ dateSelected }}</p>
                <h4 class="iti">{{ itinerarySelected }}</h4>
                <div class="inside">
                    <h4>共計張數 </h4>
                    <h3>{{ finalCount }} </h3>
                    <h4>張</h4>
                </div>

                <h3>共計金額 NT ${{ finalTotal }}</h3>
                
            </div>
            <a @click.prevent="addCart" :class="['btn', 'goCart', finalTotal?'':'disable']">加入購物車</a >
        </div>

    </div>
    <Footer></Footer>
    <RouterView></RouterView>
</template>

<script setup>
import { RouterView, RouterLink } from 'vue-router';
import Header from '/src/components/Header.vue';
import Footer from '/src/components/Footer.vue';
import Calendar from '../components/Calendar.vue';
import ItineraryChooser from '../components/ItineraryChooser.vue';
import TicketCounter from '../components/TicketCounter.vue';
import { onMounted, ref, reactive } from 'vue';
const props = defineProps({ choose: String });
const dateSelected = ref();
const itinerarySelected = ref();
const finalTotal = ref();
const finalCount = ref();
const daySearch = ref();
const finalTypes = ref();
const options = reactive({ weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
const getDate = function (e) {
    dateSelected.value = e.toLocaleDateString('zh-TW', options);
    daySearch.value = e.toLocaleDateString();
};
const getItinerary = function (e) {
    itinerarySelected.value = e.value;
}
const total = function (e) {
    finalTotal.value = e;
}
const count = function (e) {
    finalCount.value = e;
}
const types = function(e){
    finalTypes.value = e;
}
//引入各行程各日期剩餘票數
const remainSearch = reactive({
    '日間票': { '2023/5/18': 40, '2023/5/19': 10, '2023/5/20': 3 },
    '星光票': { '2023/5/18': 20, '2023/5/19': 5, '2023/5/20': 1 },
    '夜宿海生館-兩天一夜1': { '2023/5/18': 40, '2023/5/19': 10, '2023/5/20': 2 },
    '夜宿海生館-兩天一夜': { '2023/5/18': 40, '2023/5/19': 10, '2023/5/20': 4 },
})

const addCart =  function(){
    if(finalTotal&&finalTotal.value.value>0){
        localStorage.setItem("cart"+(new Date().valueOf()), JSON.stringify({...{"name":itinerarySelected.value},...finalTypes.value.value,...{"date":daySearch.value}}));
        //減少資料庫裡的票券數量
        remainSearch[itinerarySelected.value][daySearch.value]-=finalCount.value.value;
        alert("加入購物車成功!")
    }
}
</script>

<style lang="scss" scoped>
@include wrapper;

.wrapper {
    padding: 5rem 3rem;

    h4 {
        margin: 2rem 0;
    }

    h3 {
        margin-bottom: 2rem;
    }

    .less {
        color: red
    }

    .top {
        display: flex;
        justify-content: center;
        gap: 12rem;
        flex-wrap: wrap;

        .top-right {
            width: 100%;
            max-width: 35rem;
            text-align: center;

        }

    }

    .bottom {
        text-align: center;
        margin: 10rem 0;

        .final {
            display: flex;
            align-items: center;
            justify-content: space-between;
            .iti{
                width: 15%;
                font-weight: bold;
            }
            h3 {
                margin: 2rem 0;
            }
            .inside{
                display: flex;
                align-items: center;
                gap: 1rem;
            }
        }

    }

    .goCart{
        float: right;
        padding: 2rem 5rem;
        font-weight: bold;
        &:hover{
            transform: scale(1.2);
        }
        &.disable{
            cursor: not-allowed;
            pointer-events: none;
            background-color: rgba(229, 229, 229, 0.8);
            color:rgba(174, 174, 174, 0.8)
        }
    }

    @include mobile{
        .final{
            margin: 2rem 0;
            flex-direction: column;
            gap: 1.5rem;
            .iti{
                width: 100% !important;
            }
            h3,h4{
                margin: 0 !important;
            }
        }
        .goCart{
            float:none;
        }
    }
}</style>