import { BookService } from '../resource'

const BookModule = {
  namespaced: true,
  state: {
    books: []
  },
  mutations: {
    setBooks(state, data) {
      state.books = data
    }
  },
  getters: {
    getCart(state) {
      return state.books
    }
  },
  actions: {
    async fetchBooks({ commit }) {
      const result = await BookService.fetchBooks()
      // const { data } = result
      console.log('result', result)
      commit('setBooks', result)
    }
  },
  modules: {
  }
}
export default BookModule