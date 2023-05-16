<template>
    <div class="customer_service">

        <!-- 客服圖示 -->
        <img class="customer_service_photo" src="../img/customer_service_2.svg" @click="closeContent" :src="photoSrc" alt="" ref="servicePhoto">
        <!-- 客服對話框 -->
        <div class="customer_service_content" v-if="isVisible" >
            <div class="close" @click="closeContent">
                <img  src="../img/customer_service_close.svg" alt="">    
            </div>

            <div class="title">
                <h4>智能客服</h4>
            </div>
            <div class="messageList" >
                <!-- 客服回覆 -->
                <div class="answer">
                    <img src="../img/customer_service1.png" alt="">
                    <div class="messageWrapper">
                        <p class="messageAnswer">您好～我是智能客服，請於下方點選您的問題，或是輸入於下方對話框</p>
                    </div>
                </div>
                <!-- 問題選單 -->
                <div class="lists">
                    <Carousel :items-to-show="1"> 
                        <Slide :key="slide">
                         <div class="listBox">
                            <h4>常見問題</h4>
                            <ul>
                                <li><p>營業時間</p></li>
                                <li><p>場館資訊</p></li>
                                <li><p>交通資訊</p></li>
                                <li><p>票價資訊</p></li>
                                <li><p>相關行程</p></li>
                            </ul>
                        </div>
                        </Slide>
                        <Slide :key="slide">
                            <div class="listBox">
                                <h4>其他常見問題</h4>
                                <ul>
                                    <li><p>營業時間</p></li>
                                    <li><p>場館資訊</p></li>
                                    <li><p>交通資訊</p></li>
                                    <li><p>票價資訊</p></li>
                                    <li><p>相關行程</p></li>
                                </ul>
                            </div>
                        </Slide>
                        <template #addons>
                            <navigation />
                        </template>
                    </Carousel>
                </div> 
                <!-- 客服回覆 -->
                <div class="answer">
                    <img src="../img/customer_service1.png" alt="">
                    <div class="messageWrapper">
                        <p class="messageAnswer">您好～我是智能客服</p>
                    </div>
                </div>
                <div class="question">
                    <div class="messageWrapper">
                        <p class="messageQuestion">請問假日幾點開門？</p>
                    </div>
                </div>
            </div>
            <!-- 用戶提問輸入框 -->
            <div class="questionInput">
                <form action="">
                    <input type="text" placeholder="請於此輸入您的問題">
                </form>
                <div class="send">
                    <img src="../img/customer_service_send.svg" alt="">
                </div>
            </div>
        </div>
 
    </div>
</template>
<script setup>
    import 'vue3-carousel/dist/carousel.css'
    import { ref } from 'vue';
    import { Carousel, Slide, Navigation } from 'vue3-carousel'; 

    const isVisible = ref(false);
    const photoSrc = ref('');

    function closeContent(){
        isVisible.value = !isVisible.value;
        if(isVisible.value === false){
            photoSrc.value = '../img/customer_service1.png'
        }
    }

    

</script>
<style lang="scss" scoped>
    @import "../assets/sass/page/customer_service";

    
</style>