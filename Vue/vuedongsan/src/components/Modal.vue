<template>
  <div class="black-bg" v-if="detail_state == true">
    <div class="white-bg">
      <h4 style="display: inline">{{ products[detail_page].title }}</h4>
      <button
        style="display: inline; position: absolute; right: 20px"
        @click="$emit('closeModal')"
      >
        닫기
      </button>
      <p>
        {{ products[detail_page].title }}의 가격은
        {{ products[detail_page].price }} 만원입니다.<br />
        {{ products[detail_page].content }} 허위매물신고 건수는
        {{ products[detail_page].report }}입니다.
      </p>
      <!-- <input @input="month = $event.target.value" /> -->
      <input v-model.number="month" />
      <p>{{ month }}개월 : {{ products[detail_page].price * month }} 만원</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  data() {
    return {
      month: 12,
    };
  },
  watch : {
    month(input, predata){
      if (input > 12) {
        alert("12개월 이상 입력 금지.");
        this.month = predata;
      } else if (isNaN(input) == true) {
        if (input != " ") {
          alert("문자 입력 금지.");
          this.month = predata;
        }
      }
    }
  },
  props: {
    products: Array,
    detail_page: Number,
    detail_state: Boolean,
  },
};
</script>

<style>
</style>