// HTML
<template>
  ㄴ어라ㅣ먼ㅇ라ㅣㅓㅁ나ㅣㅇㄹ
  <div class="menu">
    <a v-for="el in menu_name" :key="el">{{ el }}</a>
  </div>

  <DiscountComponent />

  <Modal
    @closeModal="detail_state = false;"
    :products="products"
    :detail_page="detail_page"
    :detail_state="detail_state"
  />

  <Card
    @openModal="detail_state = true; detail_page = $event"
    :product="element"
    :product_text_color="product_text_color"
    v-for="element in products"
    :key="element"
  />
</template>

// JS
<script>
import data from "./assets/data.js";
import DiscountComponent from "./components/DiscountComponent.vue";
import Modal from "./components/Modal.vue";
import Card from "./components/Card.vue";

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
  components: {
    DiscountComponent: DiscountComponent,
    Modal,
    Card,
  },
};
</script>

// CSS
<style>
@import "./style.css";
</style>
