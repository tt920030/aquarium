<template>
  <div class="success">
    <img src="/src/img/payment_success.svg" alt="" />
    <h2>
      購買成功，已寄送確認信件至您的信箱<br />
      將於3秒後回到首頁
    </h2>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
onMounted(() => {
  setTimeout(function () {
    router.push({ path: "/index" });
  }, 3000);
});
</script>

<style lang="scss" scoped>
.success {
  margin: 60vh 0 80vh;
  text-align: center;
  img {
    margin-bottom: 2rem;
  }
  h2 {
    width: 50vw;
    margin: 0 auto;
    line-height: 5rem;
  }
}
</style>
