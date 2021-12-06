<template>
  <div>
    <h1>CART</h1> CART
    <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Type</th>
          <th scope="col">Price</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody v-for="(item, index) in cart" :key="index">
        <tr>
          <td>{{ index+1 }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.bookType }}</td>
          <td>{{ item.price }}</td>
          <td> Button </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions, mapState } from 'vuex'

export default {
  name: 'Cart',
  components: {
    
  },
  computed: {
    ...mapState ('Cart', ['cart']),
    
  },
  created() {
    this.fetchCart()
    console.log('cart', this.cart)
  },
  methods: {
    ...mapActions ({
      fetchCart: 'Cart/fetchCart',
      updateToCart: 'Cart/updateToCart'
    }),
  }
}
</script>