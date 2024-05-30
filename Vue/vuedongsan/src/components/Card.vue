<template>
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
</template>

<script>
export default {
    name : "Card",
    props : {
        products : Array,
        product_text_color : String,
    }
}
</script>

<style>
</style>