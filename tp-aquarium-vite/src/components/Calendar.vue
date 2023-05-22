<template>
  <VueDatePicker ref="datepicker" v-model="today" hide-offset-dates  :min-date="new Date()" :max-date="datePlus30"
    :disabled-week-days="[3, 0]" prevent-min-max-navigation locale="zh" selectText="okay" :enable-time-picker="false"
    calendar-cell-class-name="dp-custom-cell"
    @update:model-value="handleDate"
    inline
    select-text="選擇日期" >
  </VueDatePicker>
</template>
  
<script setup>
import { ref, reactive, onMounted} from 'vue';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import { onUpdated } from 'vue';
const date = ref(new Date());
const datePlus30 = ref(new Date(date.value.setDate(date.value.getDate() + 30)));



</script>

<style lang="scss">
 :root{
  --dp-font-size :1.6rem; /*Default font-size*/
   
  } 
.dp__selection_preview{
  display: none;
}
.dp__action_buttons{
  margin: 0 auto;
}
.dp__action_button{
  background-color: map-get($color ,bgc2);
  width:20rem;
  height: 3rem;
  &:hover{
    background-color: darken(map-get($color ,bgc2),20%);
  }
}
.dp__menu{
  padding: 8px;
  box-sizing: border-box;
}
.dp__month_year_select{
  font-size: 1.8rem;
  font-weight:500;
}
.dp__flex_display{
  justify-content: center;
}
.dp__calendar_item{
  margin-left: 2px;
  margin-right:2px;
}

.dp__action_row{
  // display: none;
}
.dp__today {
  border: 1px solid map-get($color , bgc2 )
}
.dp__active_date {
  background-color: map-get($color , bgc2 );
}

.dp__cell_disabled{
  background-color:  #F2F2F2;
  
}
</style>