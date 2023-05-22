<template>
    <li 
    v-for="page in totalPage" 
    :key="totalPage"
    @click="changePage(page)"
    :class="{'pageOn': page == currentPage}" >{{ page }}</li>
</template>
<script setup>
import {ref, watch, defineProps, defineEmits, onMounted} from 'vue';

const props = defineProps(['totalPage','currentPage']);
const totalPage = ref(props.totalPage);
const currentPage = ref(1)

const emits = defineEmits(['currentPage'])

watch(() => props.totalPage,(newVal) => {
    totalPage.value = newVal
})

const changePage = (page) => {
    currentPage.value = page;
    emits('currentPage',currentPage.value)
}
</script>
<style lang="scss" scoped>
    li{
        margin-right: 30px;
        width: 30px;
        height: 30px;
        font-size: 20px;
        &:hover{
            cursor: pointer;
        }
    }
    .pageOn{
        font-weight: bold;
    }

</style>