// HTML
<template>
  <div class="menu">
    <a v-for="el in menu_name" :key="el">{{ el }}</a>
  </div>

  <div v-for="el in products" :key="el">
    <div class="black-bg" v-if="el.state == true">
      <div class="white-bg">
        <h4>{{ el.name }}</h4>
        <p>{{el.name}}의 가격은 {{el.price}} 만원입니다.<br>{{el.content}} <br>허위매물신고 건수는 {{el.report}}입니다.</p>
        <button @click="el.state = false">닫기</button>
      </div>
    </div>
  </div>

  <div v-for="(el,i) in products" :key="el">
    <img  v-bind:src="el.image" class="room-img" />
    <h4 @click="el.state = true" :style="product_text_color">
      {{el.title }}
    </h4>
    <p>{{ el.price }} 만원</p>
    <button @click="increase(i)" class="button-report">허위매물신고</button>
    <span>신고수 :{{ el.report }}</span>
  </div>
</template>

// JS
<script>

import data from './assets/data.js'



export default {
  name: "App",
  data() {
    return {
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
