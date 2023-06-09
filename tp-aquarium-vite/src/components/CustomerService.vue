<template>
    <div class="customer_service">

        <!-- 客服圖示 -->
        <img class="customer_service_photo" :src="photoSrc" @click="closeContent"  alt="" ref="servicePhoto">
        <!-- 客服對話框 -->
        <div class="customer_service_content" v-if="isVisible" >
            <div class="close" @click="closeContent">
                <img  src="../img/customer_service_close.svg" alt="">    
            </div>

            <div class="title">
                <h4>智能客服</h4>
            </div>
            <div class="messageList" ref="messageContainer">
                <!-- 客服回覆 -->
                <div class="answerDefault">
                    <img src="public/img/customer_service1.png" alt="">
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
                                <li @click="questionNum = 1; submitCommonQuestion()"><p>營業時間</p></li>
                                <li @click="questionNum = 2;  submitCommonQuestion()"><p>場館資訊</p></li>
                                <li @click="questionNum = 3;  submitCommonQuestion()"><p>交通資訊</p></li>
                                <li @click="questionNum = 4;  submitCommonQuestion()"><p>票價資訊</p></li>
                                <li @click="questionNum = 5;  submitCommonQuestion()"><p>相關行程</p></li>
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
                <DialogBox
                    v-for="message in sortedMessages"
                    :key="message.id"
                    :text="message.text"
                    :isReply="message.isReply"
                >
                </DialogBox>
            </div>
            <!-- 用戶提問輸入框 -->
            <div class="questionInput">
                <form action="">
                    <input 
                    type="text" 
                    placeholder="請於此輸入您的問題" 
                    v-model.trim="questionText"
                    >
                    <button class="send" @click.stop="submitQuestion"></button>
                    <!-- <img src="../img/customer_service_send.svg" alt=""> -->
                </form>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>
<script setup>
    import 'vue3-carousel/dist/carousel.css'
    import { ref, reactive, watch, computed,nextTick } from 'vue';
    import { Carousel, Slide, Navigation } from 'vue3-carousel'; 
    import  DialogBox from '/src/components/DialogBox.vue';
    import axios from 'axios';

    // 對話框關閉或開啟
    const isVisible = ref(false);
    // 客服圖案
    const photoSrc = ref('public/img/customer_service_2.svg');
    //對話框內容
    const questionText = ref('');
    //問題及回覆
    const messages = reactive([]);
    //常見文題回覆
    const commonQuestions = [
        '營業時間: 平日：9:00~17:00,假日：8:30~18:00',
        '場館資訊: 請參考場館資訊頁面。',
        '交通資訊: 本館提供停車場給來參訪的旅客，也歡迎多多利用大眾運輸工具。',
        '票價資訊: 本館分有日間票及星光票，另外提供團體票及年度通行方案，請參考購票資訊頁面。',
        '相關行程: 請參考行程推薦頁面。',
    ];
    //常見問題代碼
    const questionNum = ref(null)

    const messageContainer = ref(null);

    // 關閉&開啟對話框 ＆ 更換客服圖案 
    function closeContent(){
        isVisible.value = !isVisible.value;
        if(isVisible.value == true){
            if(window.innerWidth > 414 ){
                photoSrc.value = 'public/img/customer_service1.png'
            }else{
                photoSrc.value = ''
            }
        }else{
            photoSrc.value = 'public/img/customer_service_2.svg';
            localStorage.clear();
        }
    }    

    const reply = ref('');
    //用戶提問送出
    const submitQuestion = (e) => {
        const data = {
            question: questionText.value
        };
        e.preventDefault();
        if (questionText.value.trim() !== '') {
            const message = { id: Date.now(), text: questionText.value, isReply: false };
            messages.push(message);
            // scrollToBottom();
            questionText.value = '';
            axios.post('http://localhost/PHP/costumerRes.php', data)
            .then(response => {
                // 处理响应
                reply.value = response.data;
                const message = { id: Date.now(), text: reply.value, isReply: true };
                messages.push(message);
                nextTick(()=>{
                    const list = this.$refs.messageContainer;
                    list.scroll({
                        top: list.scrollHeight,
                        behavior: "smooth",
                    });
                })
            })
            .catch(error => {
                console.error(error);
            });
        }
    };
    //常見問題點選
    const submitCommonQuestion = () => {
        const question = commonQuestions[questionNum.value-1];

        if (question) {
            const message = { id: Date.now(), text: question, isReply: true };
            messages.push(message);
            scrollToBottom();
        }
    };

    const scrollToBottom = () => {
        if (messageContainer.value) {
            messageContainer.value.scrollTop = messageContainer.value.scrollHeight ;
        }
    };


    watch(messages, () => {
        scrollToBottom();
    });
  
    const sortedMessages = computed(() => {
        return messages.sort((a, b) => a.id - b.id);
    });



</script>
<style lang="scss" scoped>
    @import "../assets/sass/page/customer_service";
</style>