<template>
    <Header></Header>
    <div class="wrapper">
        <div class="top">
            <ItineraryChooser class="chooser"></ItineraryChooser>
            <div class="top-right">
                <h3>選擇來館日期</h3>
            <Calendar class="calendar" @date-selected="getDate"></Calendar>
            
        </div>
           
        </div>
        <div class="bottom">
            <h3>選擇購買張數</h3>
            <TicketCounter></TicketCounter>
            <h3>{{ dateSelected }}</h3>
        </div>
        

    </div>
    <Footer></Footer>
</template>

<script setup>
import Header from '/src/components/Header.vue';
import Footer from '/src/components/Footer.vue';
import Calendar from '../components/Calendar.vue';
import ItineraryChooser from '../components/ItineraryChooser.vue';
import TicketCounter from '../components/TicketCounter.vue';
import { onMounted, ref } from 'vue';
const props = defineProps({ choose: String });
const dateSelected = ref();
const getDate = function(e){
    dateSelected.value= e.toLocaleDateString('zh-TW',long);
}

</script>

<style lang="scss" scoped>
@include wrapper;

.wrapper {
    padding: 5rem 3rem;

    .top {
        display: flex;
        justify-content: center;
        gap: 12rem;
        flex-wrap: wrap;
        .top-right{
            width: 100%;
            max-width: 35rem;
            text-align: center;
            h3{
                margin-bottom: 2rem;
            }
        }
       
    }
    .bottom{
        text-align: center;
        margin: 10rem 0;
        h3{
            margin-bottom: 2rem;
        }
    }
}</style>