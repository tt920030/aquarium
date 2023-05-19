<template>
    <ul class="page">
        <li @click="(currentPage - 1) < 0 ? (currentPage - 1) : (currentPage = 1)">
            <img src="../img/news_left.svg" alt="">
            <p>PREV</p>
        </li>
        <li class="num" v-for="n in totalPages" :key="n" :class="{ '-on': n == currentPage }" @click="currentPage = n">
            <p :id="n">{{ n }}</p>
        </li>
        <li @click="$emit('test')" >
            <p>NEXT</p>
            <img src="../img/news_right.svg" alt="">

            <!-- (currentPage += 1)> totalPages ? (currentPage = totalPages):(currentPage += 1 ) -->

            {{ currentPage }}
        </li>


    </ul>

     
</template>

<script setup>

import { computed } from 'vue';


const props = defineProps(["totalItems", "itemsPerPage", "currentPage"]);

const emits = defineEmits(["test"]);

const totalPages = computed(

    () => {
        return Math.ceil(props.totalItems / props.itemsPerPage);
    }
    

);

const test = () => {
    if(page.currentPage + 1 > totalPages){
        console.log("yes");
    }else{
        console.log("no");
    }
}


// const changePage = (e) => {
//     e.target.getAttribute("id") = page.currentPage;
// }


</script>

<style lang="scss" scoped>
.page {
    display: flex;
    justify-content: center;

    li {
        cursor: pointer;

        img {
            margin: 0px 10px;
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

    margin-bottom: 100px;
}
</style>