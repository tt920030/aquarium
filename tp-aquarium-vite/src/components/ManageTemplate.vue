<template>

    <form>
      <div
        class="mb-3 row justify-content-center"
        v-for="news in news"
        :key="news.id"
      >
        <label :for="news.id" class="col-sm-1 col-form-label">
          {{ news.title }}</label
        >

        <div class="col-sm-5">
          <input
            v-if="news.type != 'textarea'"
            :type="news.type"
            class="form-control"
            :id="news.id"
            required
          />
          <textarea
            v-if="news.type == 'textarea'"
            class="form-control"
            :id="news.id"
            rows="5"
            required
          ></textarea>
          
        </div>
      </div>
    </form>
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
import { onMounted, reactive, ref } from "vue";
import Header from "/src/components/CMSHeader.vue";
// 引入bootstrap
import "bootstrap";

const props = defineProps(['news']);

</script>
<style lang="scss" scoped>
  @import 'bootstrap/dist/css/bootstrap.min.css';
  .row {
    margin-right: 0;
  }
  .row.justify-content-center {
    margin-left: -170px;
  }
</style>
