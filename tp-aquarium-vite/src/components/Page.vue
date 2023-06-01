<template>
    <ul class="page">
        <li @click="previous()" :class="{'-gray' : currentPage === 1}">
            <img src="@/img/news_left.svg" alt="" >
            <p id="PREV" >PREV</p>
        </li>
        <li class="num" v-for="n in totalPages" :key="n" :class="{ '-on': n == currentPage }" @click="now($event)" >
            <p :id="n">{{ n }}</p>
        </li>
        <li @click="next()" :class="{'-gray' : currentPage === totalPages}">
            <p id="NEXT">NEXT</p>
            <img src="@/img/news_right.svg" alt="">

        </li>

    </ul>
</template>

<script setup>

import { computed, defineProps, defineEmits, ref, watch ,watchEffect} from 'vue';


const props = defineProps(["totalItems", "itemsPerPage", "currentPage", "current"]);

const emit = defineEmits(["current"]);


// 計算總頁數
const totalPages = computed(() => {
    return Math.ceil(props.totalItems / props.itemsPerPage);
});



// 下一頁
const next = () => {
    if (props.currentPage < totalPages.value) {

        emit("current", props.currentPage + 1);

    }

}

// 點擊
const now = (e) => {
    
    const n = Number(e.target.closest("p").getAttribute("id"));
    emit("current", n); 

}

// 上一頁
const previous = () => {
    if (props.currentPage != 1) {

        emit("current", props.currentPage - 1);

    }
}




</script>

<style lang="scss" scoped>
.page {
    display: flex;
    justify-content: center;

    li {
        cursor: pointer;

        &.-gray{
            opacity: 0.3
        }

        img {
            margin: 0px 10px;
            color: red;

            
        
        }

   

        display: flex;
        margin: 0px 10px;
        justify-content: center;
        align-items: center;
    }

    .num {
        width: 35px;
        height: 35px;

    }

    .-on {
        border: 1px solid black;
        border-radius: 50%;
    }

    margin-bottom: 360px;
}
</style>