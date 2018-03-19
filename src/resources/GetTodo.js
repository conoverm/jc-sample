import axios from 'axios'

export default function GetRequest (todo) {
  return axios.get(`http://localhost:8004/api/todos/${todo && todo.id ? todo.id : ''}`)
    .then((res) => {
      if (!res) {
        throw Error('Get items failed')
      }

      return res.data
    })
    .catch(err => {
      console.error(`Get items error: ${err}`)
      return []
    })
}
