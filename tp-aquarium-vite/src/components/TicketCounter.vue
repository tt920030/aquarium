<template>
    <div class="counter">
        <div class="choice" v-for="choice in choices">
            <h4>{{ choice.name }}</h4>
            <h4 class="price">NT ${{ choice.price }}</h4>
            <div class="amount">
                <button @click="choice.amount>0&&choice.amount--">-</button>
                <p>{{ choice.amount }}張</p>
                <button @click="choice.amount<10&&choice.amount++">+</button>
            </div>
        </div>
        
    </div>
</template>

<script setup>
import { ref, reactive } from "vue";
const choices = reactive([{ name: "大人", price: 1080, id: 1,amount:0 }, { name: "學生", price: 760, id: 2,amount:0 }, { name: "兒童", price: 520, id: 3,amount:0 }, { name: "博愛票", price: 520, id: 4,amount:0 }]);

</script>

<style lang="scss" scoped>
.counter {
    max-width: 900px;
    border: 1px solid rgb(218, 218, 218);
    padding: 3rem 8rem;
}

.choice {
    margin: 5rem 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;

    .price {
        position: absolute;
        left: 40%;
        transform: translateX(-5rem);
    }

    .amount {
        display: flex;
        align-items: center;
        gap: 2rem;
        p{
            width:4rem;
            text-align: center;
        }
        button{
            background-color: map-get($color, bgc2 );
            border: none;
            width:3rem;
            height: 3rem;
            border-radius: 50%;
            cursor: pointer;
            &:hover{
                background-color: darken(map-get($color, bgc2 ),20%);
            }
        }
    }

}

@include mobile {
    .counter {
        padding: 3rem 2rem;
    }

}
</style>