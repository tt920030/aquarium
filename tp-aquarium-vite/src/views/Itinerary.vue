<template>
  <div class="banner">
    <h1>購票資訊<br />TICKET INFORMATION</h1>
  </div>
  <div class="wrapper">
    <div class="top">
      <ItineraryChooser
        class="chooser"
        @itinerary-selected="getItinerary"
      ></ItineraryChooser>
      <div class="top-right">
        <h3>選擇來館日期</h3>
        <Calendar class="calendar" @date-selected="getDate"></Calendar>
      </div>
    </div>
    <div class="bottom">
      <h3>選擇購買張數</h3>
      <TicketCounter
        @count="count"
        @total="total"
        @types="types"
        :add="add"
        :itinerary="itinerarySelected"
      >
      </TicketCounter>
      <div class="final">
        <h4 style="color: red" v-if="!dateSelected">尚未選擇日期</h4>
        <h4>{{ dateSelected }}</h4>
        <h4 class="iti">{{ itinerarySelected }}</h4>
        <div class="inside">
          <h4>共計張數</h4>
          <h3>{{ finalCount }}</h3>
          <h4>張</h4>
        </div>

        <h3>共計金額 NT ${{ finalTotal }}</h3>
      </div>
      <a
        @click.prevent="addCart"
        :class="['btn', 'goCart', finalTotal && dateSelected ? '' : 'disable']"
        >加入購物車</a
      >
    </div>
  </div>
  <RouterView></RouterView>
</template>

<script setup>
import { RouterView, RouterLink } from "vue-router";
import Header from "/src/components/Header.vue";
import Footer from "/src/components/Footer.vue";
import Calendar from "../components/Calendar.vue";
import ItineraryChooser from "../components/ItineraryChooser.vue";
import TicketCounter from "../components/TicketCounter.vue";
import { onMounted, ref, reactive } from "vue";
const dateSelected = ref();
const itinerarySelected = ref();
const finalTotal = ref();
const finalCount = ref();
const daySearch = ref();
const finalTypes = ref();
const add = ref(0);
const options = reactive({
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
});
const getDate = function (e) {
  dateSelected.value = e.toLocaleDateString("zh-TW", options);
  daySearch.value = e.toLocaleDateString();
};
const getItinerary = function (e) {
  itinerarySelected.value = e.value;
};
const total = function (e) {
  finalTotal.value = e;
};
const count = function (e) {
  finalCount.value = e;
};
const types = function (e) {
  finalTypes.value = e;
};
//放入購物車
const addCart = function () {
  const dataKey = "cart" + itinerarySelected.value + daySearch.value;
  const data = {
    ...{ name: itinerarySelected.value },
    ...finalTypes.value.value,
    ...{ date: daySearch.value },
  };
  if (finalTotal.value.value > 0) {
    const list = JSON.parse(localStorage.getItem(dataKey)) || [];
    list.push(data);
    localStorage.setItem(dataKey, JSON.stringify(list));
    alert("加入成功，請至購物車查看!");
    add.value += 1;
  } else {
    alert("尚未選取任何票券");
  }
};
</script>

<style lang="scss" scoped>
@include wrapper;
.banner {
  background-image: url(/src/img/ticket_banner.png);
  height: 660px;
  background-size: cover;
  @include mobile {
    height: 268px;
    background-repeat: no-repeat;
    background-position: center;
  }
  h1 {
    padding-top: 35rem;
    padding-left: 40px;
    @include mobile {
      padding-left: 0;
      padding-top: 100px;
      font-size: 2.8rem;
      line-height: 5rem;
    }
  }
}
.wrapper {
  padding: 5rem 3rem 25rem;

  h4 {
    margin: 2rem 0;
  }

  h3 {
    margin-bottom: 2rem;
  }

  .less {
    color: red;
  }

  .top {
    display: flex;
    justify-content: center;
    gap: 12rem;
    flex-wrap: wrap;

    .top-right {
      width: 100%;
      max-width: 35rem;
      text-align: center;
    }
  }

  .bottom {
    text-align: center;
    margin: 10rem 0;

    .final {
      display: flex;
      align-items: center;
      justify-content: space-between;

      .iti {
        width: 15%;
        font-weight: bold;
      }

      h3 {
        margin: 2rem 0;
      }

      .inside {
        display: flex;
        align-items: center;
        gap: 1rem;
      }
    }
  }

  .goCart {
    float: right;
    padding: 2rem 5rem;
    font-weight: bold;

    &:hover {
      transform: scale(1.2);
    }

    &.disable {
      cursor: not-allowed;
      pointer-events: none;
      background-color: rgba(229, 229, 229, 0.8);
      color: rgba(174, 174, 174, 0.8);
    }
  }

  @include mobile {
    .final {
      margin: 2rem 0;
      flex-direction: column;
      gap: 1.5rem;

      .iti {
        width: 100% !important;
      }

      h3,
      h4 {
        margin: 0 !important;
      }
    }

    .goCart {
      float: none;
    }
  }
}
</style>
