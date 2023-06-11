<template>
  <div class="overnight_notice">
    <div class="overnight_notice_left">
      <h1>注意事項</h1>
      <img
        src="https://tibamef2e.com/thd101/g6/img/overnight_notice.jpg"
        alt=""
      />
    </div>

    <section class="wrapper">
      <div class="overnight_notice_right">
        <ul>
          <li v-for="notice in noticePage" :key="notice.id">
            <h4>{{ notice.title }}</h4>
            <p>{{ notice.content }}</p>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script setup>
import { reactive } from "vue";

// overnight notice
const noticePage = reactive([
  {
    id: 1,
    title: "注意事項",
    content:
      "夜宿海生館是一個獨特的體驗，但在您前往之前，請注意以下事項：建議提前預訂，確保有足夠的床位；夜間導覽時請保持安靜，不要打擾其他旅客和海洋生物；請勿攜帶食物進入海生館，以免影響生物的食物鏈和健康；在遊覽期間請注意安全，不要靠近海洋生物，並遵守工作人員的規定和指示。最後，請務必帶備個人用品和衣物，以便您度過一個愉快舒適的夜晚。",
  },
  {
    id: 2,
    title: "注意事項",
    content:
      "夜宿海生館是一個獨特的體驗，但在您前往之前，請注意以下事項：建議提前預訂，確保有足夠的床位；夜間導覽時請保持安靜，不要打擾其他旅客和海洋生物；請勿攜帶食物進入海生館，以免影響生物的食物鏈和健康；在遊覽期間請注意安全，不要靠近海洋生物，並遵守工作人員的規定和指示。最後，請務必帶備個人用品和衣物，以便您度過一個愉快舒適的夜晚。",
  },
  {
    id: 3,
    title: "注意事項",
    content:
      "夜宿海生館是一個獨特的體驗，但在您前往之前，請注意以下事項：建議提前預訂，確保有足夠的床位；夜間導覽時請保持安靜，不要打擾其他旅客和海洋生物；請勿攜帶食物進入海生館，以免影響生物的食物鏈和健康；在遊覽期間請注意安全，不要靠近海洋生物，並遵守工作人員的規定和指示。最後，請務必帶備個人用品和衣物，以便您度過一個愉快舒適的夜晚。",
  },
  {
    id: 4,
    title: "注意事項",
    content:
      "夜宿海生館是一個獨特的體驗，但在您前往之前，請注意以下事項：建議提前預訂，確保有足夠的床位；夜間導覽時請保持安靜，不要打擾其他旅客和海洋生物；請勿攜帶食物進入海生館，以免影響生物的食物鏈和健康；在遊覽期間請注意安全，不要靠近海洋生物，並遵守工作人員的規定和指示。最後，請務必帶備個人用品和衣物，以便您度過一個愉快舒適的夜晚。",
  },
  {
    id: 5,
    title: "注意事項",
    content:
      "夜宿海生館是一個獨特的體驗，但在您前往之前，請注意以下事項：建議提前預訂，確保有足夠的床位；夜間導覽時請保持安靜，不要打擾其他旅客和海洋生物；請勿攜帶食物進入海生館，以免影響生物的食物鏈和健康；在遊覽期間請注意安全，不要靠近海洋生物，並遵守工作人員的規定和指示。最後，請務必帶備個人用品和衣物，以便您度過一個愉快舒適的夜晚。",
  },
]);
</script>

<style lang="scss" scoped>
.overnight_notice {
  display: flex;
  justify-content: space-between;
  margin: 200px 0 420px;

  .overnight_notice_left {
    background-color: map-get($color, text);
    width: 100%;
    height: 600px;
    border-radius: 0 50px 50px 0;
    position: sticky;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @include mobile() {
      display: none;
    }

    h1 {
      margin-bottom: 30px;
    }

    img {
      width: 70%;
    }
  }

  @include wrapper {
    .overnight_notice_right {
      padding-left: 100px;
      height: 50%;
      overflow-y: auto;
      position: sticky;
      top: 0;
      left: 0;

      ul {
        display: flex;
        flex-direction: column;

        li {
          margin-bottom: 50px;

          p {
            width: 75%;
            margin-top: 20px;
          }
        }
      }

      @include mobile() {
        position: static;
        overflow: visible;
        padding-left: 0;

        ul {
          li {
            display: flex;
            flex-direction: column;
            align-items: center;

            p {
              width: 80%;
            }
          }
        }
      }
    }
  }
  @include mobile() {
    justify-content: center;
  }
}
</style>
