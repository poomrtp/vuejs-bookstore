import axios from 'axios'
let apiURL = 'http://localhost:3000/api'
class CartProvider {
  fetchCart() {
    return axios.get(`${apiURL}/cart`).then(res => {
      console.log(res.data)
      return res.data
    })
  }
  addToCart(data) {
    return axios.post(`${apiURL}/add-to-cart`, data)
  }
}

export default CartProvider