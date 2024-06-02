<template>
  <img v-bind:src="product.image" class="room-img" />
  <h4 @click="sendModal" :style="product_text_color">
    {{ product.title }}
  </h4>
  <p>{{ product.price }} 만원</p>
  <span>신고수 :{{ product.report }}</span>
</template>

<script>
export default {
  name: "Card",
  props: {
    product: Object,
    product_text_color: String,
  },
  methods: {
    sendModal() {
      this.$emit('openModal', this.product.id);
    },
  },
};
</script>

<style>
</style>