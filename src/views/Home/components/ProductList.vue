<template>
  <div class="container">
    <div class="row" >
      <div class="d-flex col-6 col-lg-3 " v-for="(item, index) in items" :key="index">
        <div class="card border-light mb-3" style="">
          <img :src="item.image" class="card-img-top _product-img" alt="...">
          <div class="card-body">
            <h5 class="card-title">{{ item.name }}</h5>
            <p class="card-text">Price: {{ item.price }}</p>
            <a class="btn btn-primary" @click="addBookToCart(item)">Add to cart</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import { mapActions, mapState } from 'vuex'
// import store from '@/store'

export default {
  name: 'ProductCard',
  components: {},
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
  // computed: {
  //   ...mapState ('Cart', ['cart']),
  // },
  // async created() {
  //   await this.fetchCart()
  //   console.log(this.cart)
  // },
  methods: {
    addBookToCart (data) {
      this.$emit('addBookToCart', data)
    }
  }
}
</script>
<style>
._product-img {
  max-width: 250px;
}
</style>