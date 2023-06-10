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

<!-- <img src="../../../public/img/" alt=""> -->

<script setup>
import { onMounted, reactive, VueElement ,defineComponent} from 'vue';
import { useRouter,useRoute } from 'vue-router'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import axios from 'axios';


defineComponent({
  name: 'Basic',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
});

const route = useRoute();

// console.log(router);
// console.log(route.query);
const slides = reactive([]);

const news = reactive({
    month: "",
    date: "",
    title: "",
    subTitle: "",
    content: ""

});

const urlString = route.path;
const number = urlString.split("/")[2];

const newsPage = (e) => {

    let params = new URLSearchParams();
    params.append('id', number);

    axios.post(`${import.meta.env.VITE_API_URL}newspage.php`,params)	//使用get或post等取得路徑資料(php)

        .then((res) => {	//回傳後如何處理

            console.log(res.data);

            news.month = new Date(res.data[0].DATE).toLocaleString('default', { month: 'short' });
            news.date = res.data[0].DATE.split("-")[2];
            news.title = res.data[0].TITLE;
            news.subTitle = res.data[0].SUB_TITLE;
            news.content = res.data[0].CONTENT;

            slides.push('../../../public/img/' + res.data[0].PICTURE);

            if(res.data[0].SUB_PICTURE1 !== ""){
                slides.push('../../../public/img/' + res.data[0].SUB_PICTURE1);
            }

            if(res.data[0].SUB_PICTURE2 !== ""){
                slides.push('../../../public/img/' + res.data[0].SUB_PICTURE2);
            }


        }).catch(err => console.log(err))  //錯誤如何處理    

}



onMounted(() => {
    newsPage();
    
    console.log(slides);
});
</script>


<style lang="scss">

.carousel__icon{
    fill: map-get($color , bgc2 );
}

.carousel__pagination-button:hover::after, .carousel__pagination-button--active::after{
    background-color: map-get($color , bgc2 );
}

</style>

<style lang="scss" scoped>
@import '../../assets/sass/page/newspage';
</style>