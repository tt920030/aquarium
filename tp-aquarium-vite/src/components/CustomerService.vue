<template>
    <div class="customer_service">

        <!-- 客服圖示 -->
<<<<<<< HEAD
        <img class="customer_service_photo" :src="photoSrc" @click="closeContent"  alt="" ref="servicePhoto">
=======
        <img class="customer_service_photo" src="../img/customer_service_2.svg" @click="closeContent" :src="photoSrc" alt="" ref="servicePhoto">
>>>>>>> anniesu
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
<<<<<<< HEAD
                <!-- 用戶提問 -->
                <!-- <div class="question">
                    <div class="messageWrapper">
                        <p class="messageQuestion">請問假日幾點開門？</p>
                    </div>
                </div> -->
                <Question :questions="questions"></Question>
=======
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
>>>>>>> anniesu
            </div>
            <!-- 用戶提問輸入框 -->
            <div class="questionInput">
                <form action="">
<<<<<<< HEAD
                    <input 
                    type="text" 
                    placeholder="請於此輸入您的問題" 
                    v-model.trim="questionText"
                    >
                    <button class="send" @click.stop="addQuestion"></button>
                    <!-- <img src="../img/customer_service_send.svg" alt=""> -->
                </form>
            </div>
        </div>
        <router-view></router-view>
=======
                    <input type="text" placeholder="請於此輸入您的問題">
                </form>
                <div class="send">
                    <img src="../img/customer_service_send.svg" alt="">
                </div>
            </div>
        </div>
 
>>>>>>> anniesu
    </div>
</template>
<script setup>
    import 'vue3-carousel/dist/carousel.css'
<<<<<<< HEAD
    import { ref, reactive, onMounted } from 'vue';
    import { Carousel, Slide, Navigation } from 'vue3-carousel'; 
    import  Question  from '/src/components/Question.vue'

    // 對話框關閉或開啟
    const isVisible = ref(false);
    // 客服圖案
    const photoSrc = ref('src/img/customer_service_2.svg');
    //對話框內容
    const questionText = ref('');
    const questions = reactive([])

    // 關閉&開啟對話框 ＆ 更換客服圖案 
    function closeContent(){
        isVisible.value = !isVisible.value;
        if(isVisible.value == true){
            photoSrc.value = 'src/img/customer_service1.png'
        }else{
            photoSrc.value = 'src/img/customer_service_2.svg';
            localStorage.clear();
        }
    }

    onMounted(() => {
        let questions = JSON.parse(localStorage.getItem('questions'));
        if(questions){
            questions = questions;
        }
    })

    function addQuestion(e){
        // console.log(questionText.value);
        e.preventDefault();
        if(questionText !== ""){
            questions.push({
                id: Date.now(),
                name: questionText.value
            });
            questionText.value = '';
            localStorage.setItem("questions", JSON.stringify(questions))
        }
    }
</script>
<style lang="scss" scoped>
    @import "../assets/sass/page/customer_service";
=======
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

    
>>>>>>> anniesu
</style>