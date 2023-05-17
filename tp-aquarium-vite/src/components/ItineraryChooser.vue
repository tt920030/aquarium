<template>
    <div class="itinerary-chooser">
        <button class="top-button clicked" @click="click"><h4>票種</h4></button>
        <button class="top-button" @click="click"><h4>行程</h4></button>
        <div class="content">
        <div v-if="choose=='票種'">
            <h3>選擇購買票種</h3>
            <button class="content-button">日間票</button>
            <button class="content-button">星光票</button>
            <p>*星光票限17:00後入場使用</p>
        </div>
        <div v-if="choose=='行程'">
            <h3>選擇購買行程</h3>
            <button class="content-button" v-for="journey in journeys">{{journey}}</button>
        </div>
    </div>
    </div>
</template>

<script setup>
import { reactive,ref } from 'vue';
const choose=ref("票種");
const journeys = reactive(["夜宿海生館-兩天一夜","夜宿海生館-兩天一夜"]);
const click = function(e){
    let buttons = document.querySelectorAll(".top-button");
    buttons.forEach(button=>button.classList.remove("clicked"));
    e.target.classList.add("clicked");
    choose.value = e.target.innerText;
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
            border: 1px solid #c1c1c1;
            border-radius: 5px;
            margin-bottom: 2rem;
            &:hover{
                background-color: #c7c7c7;
            }
            &.clicked{
            background-color: map-get($color, bgc2 );

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