<template>
    <div class="newspage">
        <div class="banner">
            <h1>最新消息<br>NEWS</h1>
        </div>
        <main class="wrapper">
            <div class="top">
                <div class="date">
                    <p class="month">{{ news.month }}</p>
                    <p class="day">{{ news.date }}</p>
                </div>
                <div class="title">
                    <h3>{{ news.title }}</h3>
                </div>
            </div>
            <div class="border1">
                <div class="border2">
                    <div class="sub_title">
                        <img src="@/img/newspage_icon.svg" alt="">
                        <h4>{{ news.subTitle }}</h4>
                    </div>
                    <div class="picture">
                        
                        <carousel 
                            :items-to-show="1"
                            :autoplay="3000"
                            :infinite="true"
                            :snapAlign="center"
                            :variable-width="true"
                            :wrapAround="true"
                            
                            
                            >
                            <slide v-for="slide in slides" :key="slide">
                                <img :src="slide" alt="">
                            </slide>

                            <template #addons>
                            <navigation />
                            <pagination />
                            </template>
                        </carousel>
                    </div>
                    <div class="text">
                        <p>{{ news.content }}</p>
                    </div>
                </div>

            </div>
        </main>
    </div>
</template>

<script setup>
import { reactive, VueElement } from 'vue';
import { defineComponent } from 'vue'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

defineComponent({
  name: 'Basic',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
});

const slides = reactive(["../../../public/img/news_picture1-1.jpg","../../../public/img/news_picture1-2.jpg","../../../public/img/news_picture1-3.jpg"]);

const news = reactive({
    month: "Apr",
    date: "18",
    title: "企鵝館迎來新成員！小企鵝寶寶布布誕生了！",
    subTitle: "保育人員細心照顧，企鵝寶寶健康成長中！",
    content:
 `最近，企鵝館裡迎來了一位新成員！小企鵝寶寶布布在4月18日的凌晨破殼而出，讓大家都為他感到興奮不已。他的父母，國王企鵝小花和奇奇，也非常高興迎接他的到來。
    
現在，保育人員們正細心照顧著小寶寶，確保他能夠順利地成長。幾個月後，他就會成為企鵝館的明星，讓遊客們在館內欣賞他可愛的模樣。
    
這個消息也讓所有的企鵝館工作人員和愛護動物的朋友們都感到十分欣喜和興奮。我們相信，這位新成員將會成為企鵝館的驕傲，也會帶來更多的歡笑和快樂。
    
最後，我們希望大家能夠繼續關注小寶寶的成長，也期待在未來能夠與大家一同分享更多有關他的好消息。`

});
</script>

<style lang="scss" scoped>
@import '../../assets/sass/page/newspage';
</style>