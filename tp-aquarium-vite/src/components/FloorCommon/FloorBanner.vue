<template>
  <div class="banner">
    <h1>
      樓層指南<br />
      GUIDED TOUR
    </h1>
  </div>
</template>
<style lang="scss" scoped>
.banner {
  background-image: url("/img/guided_tour_banner.jpg");
  width: 100%;
  height: 660px;
  background-size: cover;

  // RWD
  @include mobile {
    height: 300px;
  }

  h1 {
    padding-top: 300px;
    padding-left: 40px;

    @include mobile {
      padding-top: 105px;
    }
  }
}
</style>
