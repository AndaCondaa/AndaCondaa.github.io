// HTML
<template>
  <div class="menu">
    <a v-for="el in menu_name" :key="el">{{ el }}</a>
  </div>

  <Discount />

  <div v-for="(el, i) in products" :key="el">
    <img v-bind:src="el.image" class="room-img" />
    <h4
      @click="
        this.detail_state = true;
        this.detail_page = i;
      "
      :style="product_text_color"
    >
      {{ el.title }}
    </h4>
    <p>{{ el.price }} 만원</p>
    <button @click="increase(i)" class="button-report">허위매물신고</button>
    <span>신고수 :{{ el.report }}</span>
  </div>

  <div class="black-bg" v-if="detail_state == true">
    <div class="white-bg">
      <h4 style="display: inline">{{ products[detail_page].title }}</h4>
      <button
        style="display: inline; position: absolute; right: 20px"
        @click="this.detail_state = false"
      >
        닫기
      </button>
      <p>
        {{ products[detail_page].title }}의 가격은
        {{ products[detail_page].price }} 만원입니다.<br />
        {{ products[detail_page].content }} 허위매물신고 건수는
        {{ products[detail_page].report }}입니다.
      </p>
    </div>
  </div>
</template>

// JS
<script>
import data from "./assets/data.js";

export default {
  name: "App",
  data() {
    return {
      detail_page: 0,
      detail_state: false,
      menu_name: ["Home", "Shop", "About"],
      products: data,
      product_text_color: "color : blue",
    };
  },
  methods: {
    increase(i) {
      this.products[i].report++;
    },
  },
  components: {},
};
</script>

// CSS
<style>
@import "./style.css";
</style>
