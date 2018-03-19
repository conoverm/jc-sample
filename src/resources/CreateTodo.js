import axios from 'axios'

export default function CreateRequest (todo) {
  return axios.post('http://localhost:8004/api/todos/', todo)
    .then((res) => {
      if (!res) {
        throw Error('Create item failed')
      }

      return res.data
    })
    .catch(err => {
      console.error(`Create item error: ${err}`)
      return false
    })
}
