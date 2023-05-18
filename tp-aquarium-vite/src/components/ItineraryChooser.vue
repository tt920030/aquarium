<template>
    <div class="itinerary-chooser">
        <button :class="['top-button',{'clicked':choose=='票種'} ]" @click="choose='票種'"><h4>票種</h4></button>
        <button :class="['top-button',{'clicked':choose=='行程'} ]" @click="choose='行程'"><h4>行程</h4></button>
        <div class="content">
        <div v-if="choose=='票種'">
            <h3>選擇購買票種</h3>
            <button :class="['content-button',{'clicked':choose2=='日間票'}]" @click="choose2='日間票';handleItinerary()">日間票</button>
            <button :class="['content-button',{'clicked':choose2=='星光票'}]" @click="choose2='星光票';handleItinerary()">星光票</button>
            <p>*星光票限17:00後入場使用</p>
        </div>
        <div v-if="choose=='行程'">
            <h3>選擇購買行程</h3>
            <button :class="['content-button',{'clicked':choose2==journey.name}]" @click="choose2=journey.name;handleItinerary()" v-for="journey in journeys">{{journey.name}}</button>
        </div>
    </div>
    </div>
</template>

<script setup>
import { reactive,ref } from 'vue';
const choose=ref("票種");
const choose2=ref();
const journeys = reactive([{name:"夜宿海生館-兩天一夜1",id:1},{name:"夜宿海生館-兩天一夜",id:2}]);
const emit = defineEmits(['itinerarySelected']);
const handleItinerary = () => {
  emit("itinerarySelected",choose2);
}

</script>

<style lang="scss" scoped>
.itinerary-chooser{
    width: 100%;
    max-width: 35rem;
    height: 35rem;
    button{
        cursor: pointer;
        &:hover{
                background-color: map-get($color, bgc2 );
            }
    }

    .content{
        border: 1px #d4d4d4 solid;
        width: 100%;
        height: 100%;
        padding: 2rem;
        box-sizing: border-box;
        &>div{
            display: flex;
            flex-direction: column;
            align-items: center;
            h3{
                margin-bottom: 3rem;
            }
            p{
                align-self: flex-start;
            }
        }
        .content-button{
            padding: 1rem;
            width:90%;
            background-color: white;
            border: 1px solid #d1d1d1;
            border-radius: 5px;
            margin-bottom: 2rem;
            font-weight: bold;
            &:hover{
                background-color: #efefef;
            }
            &.clicked{
            background-color:map-get($color,warning );

        }
            
        }
    }
    .top-button{
        background-color: white;;
        padding: 1rem 3rem;
        border: 1px solid #d4d4d4;
        &.clicked{
            background-color: map-get($color, bgc2 )
        }
    }

}
</style>