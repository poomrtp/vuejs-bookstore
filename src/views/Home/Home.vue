<template>
  <div class="container">
    <carousel-banner :items="banner" class="my-2"></carousel-banner>
    <product-list
      :items="books"
      class="pt-4"
      @addBookToCart="addBookToCart">
    </product-list>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions, mapState } from 'vuex'
import ProductList from './components/ProductList.vue'
import CarouselBanner from './components/CarouselBanner.vue'

export default {
  name: 'Home',
  components: {
    ProductList,
    CarouselBanner
  },
  data() {
    return {
      banner: [
        { img: 'https://cdn3.mangaqube.com/9gzCwzbCbjQoBs5G' },
        { img: 'https://cdn3.mangaqube.com/7aylNgn60YNeSeKB' },
        { img: 'https://cdn3.mangaqube.com/9gzCwzbCbjQoBs5G' },
        { img: 'https://cdn3.mangaqube.com/7aylNgn60YNeSeKB' },
        { img: 'https://cdn3.mangaqube.com/9gzCwzbCbjQoBs5G' },
        { img: 'https://cdn3.mangaqube.com/7aylNgn60YNeSeKB' },
      ],
      cartItemClone : []
    }
  },
  computed: {
    ...mapState ('Cart', ['cart']),
    ...mapState ('Book', ['books']),
  },
  async created() {
    await this.fetchBooks()
    console.log(this.books)
    // this.cartItemClone = this.cart
    // this.cartItemClone = this.cart
    // console.log('created', this.cartItemClone)
  },
  methods: {
    ...mapActions ({
      fetchBooks: 'Book/fetchBooks',
      fetchCart: 'Cart/fetchCart',
      addToCart: 'Cart/addToCart'
    }),
    async addBookToCart (item) {
      console.log('item', item)
      const bookData = {
        id: item.id,
        name: item.name,
        image: item.image,
        bookType: item.bookType,
        price: item.price
      }
      await this.addToCart(bookData)
    }
  }
}
</script>