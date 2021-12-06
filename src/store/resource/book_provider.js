import axios from 'axios'
let apiURL = 'http://localhost:3000/api'
class BookProvider {
  fetchBooks() {
    return axios.get(apiURL).then(res => {
      console.log(res.data)
      return res.data
    })
  }
}

export default BookProvider