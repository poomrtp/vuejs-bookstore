import { CartService } from '../resource'

const CartModule = {
  namespaced: true,
  state: {
    cart: []
  },
  mutations: {
    setCart(state, data) {
      state.cart = data
    },
    setItemToCart(state, data) {
      state.cart = data
    }
  },
  getters: {
    getCart(state) {
      return state.cart
    }
  },
  actions: {
    async fetchCart(context) {
      const result = await CartService.fetchCart()
      context.commit('setCart', result)
    },
    async addToCart(context, payload) {
      console.log(payload)
      await CartService.addToCart(payload)
    }
  },
  modules: {
  }
}
export default CartModule