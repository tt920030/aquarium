<script setup>
import { reactive, ref } from "vue";
const props = defineProps({
  sectionData: {
    type: Array,
    required: true,
  },
});
const sectionData = reactive(props.sectionData);

const emits = defineEmits(["openBox"]);
// 燈箱點擊處理函式
const lightboxClickHandler = (e) => {
  e.preventDefault();
  let parentId = e.currentTarget.parentNode.getAttribute("id");
  emits("openBox", parentId);
};
</script>

<template>
  <section class="wrapper">
    <!-- journey information -->
    <h3 class="journey_info">台北海生館活動</h3>

    <div class="journey_intro">
      <ul>
        <li :id="item.id" v-for="item in sectionData">
          <a href="" class="lightbox" @click="lightboxClickHandler">
            <img class="intro_img" :src="item.src" alt="" />
          </a>
          <div class="journey_intro_content">
            <div class="journey_intro_main">
              <img src="/src/img/journey_intro_icon.svg" alt="" />
              <h4>{{ item.h4 }}</h4>
              <p>
                {{ item.p }}
              </p>
            </div>
            <div class="journey_intor_icon">
              <i class="bi bi-clock" v-if="item.iShow"
                ><p>{{ item.ip1 }}</p></i
              >
              <i class="bi bi-geo-alt-fill" v-if="item.iShow"
                ><p>{{ item.ip2 }}</p></i
              >
              <i class="bi bi-coin" v-if="item.iShow"
                ><p>{{ item.ip3 }}</p></i
              >
              <RouterLink class="btn" :to="item.to">了解更多</RouterLink>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>
<style lang="scss" scoped>
@include wrapper {
  .journey_info {
    margin-bottom: 20px;

    @include mobile() {
      padding-left: 20px;
      margin: 0;
    }
  }

  .journey_intro {
    margin-bottom: 100px;

    ul {
      li {
        position: relative;
        display: flex;

        &::before {
          position: absolute;
          content: "";
          width: 100%;
          height: 2%;
          background-color: map-get($color, bgc2);
        }

        &:last-child::after {
          position: absolute;
          content: "";
          width: 100%;
          height: 2%;
          background-color: map-get($color, bgc2);
          bottom: 0;
        }

        .intro_img {
          padding: 30px 30px 30px 0;
          // width: 20%;
        }

        .journey_intro_content {
          align-self: center;

          .journey_intro_main {
            position: relative;
            display: flex;
            flex-wrap: wrap;
            gap: 15px;

            &::after {
              position: absolute;
              content: "";
              width: 100%;
              bottom: 70%;
              border: 1px dashed map-get($color, text);
            }

            p {
              margin-top: 40px;
            }
          }

          .journey_intor_icon {
            display: flex;
            margin-top: 40px;
            gap: 30px;
            align-items: center;

            i {
              display: flex;
              font-size: 20px;
              gap: 8px;

              p {
                line-height: 1;
              }
            }
            .btn {
              margin-left: auto;

              i {
                font-size: 15px;
                display: inline-block;
              }
            }
          }
        }

        @include mobile() {
          flex-direction: column;
          padding: 20px;

          &::before {
            height: 1%;
            width: 90%;
          }

          &:last-child::after {
            height: 1%;
            width: 90%;
          }

          .lightbox {
            //   margin: 20px 0 0 100px;
            .intro_img {
              display: none;
            }
          }
          .journey_intro_content {
            order: 0;
            margin-top: 40px;

            .journey_intor_icon {
              justify-content: flex-end;
            }
          }
        }
      }
    }
  }
}
</style>
