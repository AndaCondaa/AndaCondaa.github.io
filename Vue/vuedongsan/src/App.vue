// HTML
<template>
  <div class="menu">
    <a v-for="el in menu_name" :key="el">{{ el }}</a>
  </div>

  <div v-for="el in products" :key="el">
    <div class="black-bg" v-if="el.state == true">
      <div class="white-bg">
        <h4>{{ el.name }}</h4>
        <p>{{el.name}}의 가격은 {{el.price}} 만원입니다.<br> 허위매물신고 건수는 {{el.report}}입니다.</p>
        <p @click="el.state = false">끄기</p>
      </div>
    </div>
  </div>

  <div v-for="(el,i) in products" :key="el">
    <img v-bind:src="el.img" class="room-img" />
    <h4 @click="el.state = true" :style="product_text_color">
      {{el.name }}
    </h4>
    <p>{{ el.price }} 만원</p>
    <button @click="increase(i)">허위매물신고</button>
    <span>신고수 :{{ el.report }}</span>
  </div>
</template>

// JS
<script>
export default {
  name: "App",
  data() {
    return {
      menu_name: ["Home", "Shop", "About"],
      products: [
        {
          name: "A room",
          state: false,
          price: 100,
          report: 0,
          img: require("./assets/room0.jpg"),
        },
        {
          name: "B room",
          state: false,
          price: 20,
          report: 0,
          img: require("./assets/room1.jpg"),
        },
        {
          name: "C room",
          state: false,
          price: 3300,
          report: 0,
          img: require("./assets/room2.jpg"),
        },
      ],
      product_text_color: "color : blue",
      product_open: [false, false, false],
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
