<template>
    <div class="counter">
        <div class="choice" v-for="choice in choices[itinerary]">
            <div class="type">
                <h4>{{ choice.name }}</h4>
                <h4 class="price">NT ${{ choice.price }}</h4>
            </div>
            <div class="amount">
                <button @click="(choice.amount > 0 && (total-=choice.price));(choice.amount > 0 && (count-=1));
                (choice.amount > 0 && (types[choice.name]-=1));((choice.amount > 0) && minus()); (choice.amount > 0 && choice.amount--);handleTotal()">-</button>
                <p>{{ choice.amount }}張</p>
                <button @click="((remaining != 0) && (total+=choice.price));((remaining != 0) && (count+=1));
                ((remaining != 0) && (types[choice.name]+=1));(remaining > 0 && choice.amount++);add();handleTotal()">+</button>
            </div>
            
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, onMounted, onUpdated, watch } from "vue";
const props = defineProps({ 'itinerary': { default: '' }, 'remain': { default: 20 }, 'add':{default:0} });
const emit = defineEmits(['total','count','types']);
const handleTotal = () => {
  emit("total",total);
  emit("count",count);
  emit("types",types);
}
const remaining = ref(props.remain);
//引入行程名稱、種類及票價資訊
const choices = reactive(
    {
        '日間票': [{ name: "大人", price: 520, id: 1, amount: 0 }, { name: "學生", price: 360, id: 2, amount: 0 }, { name: "兒童", price: 240, id: 3, amount: 0 }, { name: "博愛票", price: 240, id: 4, amount: 0 }],
        '星光票': [{ name: "大人", price: 460, id: 1, amount: 0 }, { name: "學生", price: 300, id: 2, amount: 0 }, { name: "兒童", price: 180, id: 3, amount: 0 }, { name: "博愛票", price: 180, id: 4, amount: 0 }],
        '夜宿海生館-兩天一夜1': [{ name: "遊客", price: 2680, id: 1, amount: 0 }],
        '夜宿海生館-兩天一夜': [{ name: "遊客", price: 3680, id: 1, amount: 0 }],
        '年度通行證': [{ name: "大人", price: 1080, id: 1, amount: 0 }, { name: "學生", price: 760, id: 2, amount: 0 }, { name: "兒童", price: 520, id: 3, amount: 0 }, { name: "博愛票", price: 520, id: 4, amount: 0 }],
    }
);

//emit 總金額 總購買數量 及細項購買數量(大人、小孩....)
const count=ref(0);
const total=ref(0);
const types=ref({"大人":0,"學生":0,"兒童":0,"博愛票":0,"遊客":0});

const add = function () {
    if (remaining.value > 0) {
        remaining.value -= 1;
    }else{
        alert("當日剩餘票數不足")
    }
}
const minus = function () {
    if (remaining.value < props.remain) {
        remaining.value += 1;
    }
};

watch(() => props.remain, (newVal) => {
    remaining.value = props.remain;
    for (let i = 0; i < choices[props.itinerary].length; i++) {
       choices[props.itinerary][i].amount=0;
    }
    total.value=0;
    count.value=0;
    types.value={"大人":0,"學生":0,"兒童":0,"博愛票":0,"遊客":0};
})
watch(() => props.itinerary, (newVal) => {
    remaining.value = props.remain;
    for (let i = 0; i < choices[props.itinerary].length; i++) {
       choices[props.itinerary][i].amount=0;
    }
    total.value=0;
    count.value=0;
    types.value={"大人":0,"學生":0,"兒童":0,"博愛票":0,"遊客":0};
})
watch(() => props.add, (newVal) => {
    for (let i = 0; i < choices[props.itinerary].length; i++) {
       choices[props.itinerary][i].amount=0;
    }

    total.value=0;
    count.value=0;
    types.value={"大人":0,"學生":0,"兒童":0,"博愛票":0,"遊客":0};
})
</script>

<style lang="scss" scoped>
.counter {
    margin: 0 auto;
    width:80%;
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

    .type {
        display: flex;
        justify-content: space-between;
        flex-basis: 50%
    }

    .amount {
        display: flex;
        align-items: center;
        gap: 2rem;

        p {
            width: 4rem;
            text-align: center;
        }

        button {
            background-color: map-get($color, bgc2);
            border: none;
            width: 3rem;
            height: 3rem;
            border-radius: 50%;
            cursor: pointer;

            &:hover {
                background-color: darken(map-get($color, bgc2), 20%);
            }
        }
    }

}

@include mobile {
    .counter {
        padding: 3rem 2rem;
    }

    .choice {
        flex-direction: column;
        gap: 2rem;

        .type {
            width: 80%;
        }

        .amount {
            width: 80%;
            justify-content: space-between;
        }
    }

}
</style>



