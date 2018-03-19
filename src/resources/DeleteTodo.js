import axios from 'axios'

export default function DeleteRequest (todo) {
  return axios.delete(`http://localhost:8004/api/todos/${todo.id}`)
    .then((res) => {
      if (!res) {
        throw Error('Todo not deleted')
      }

      return res.data
    })
    .catch(err => {
      console.error(`Error on Delete Todo: ${err}`)
      return todo
    })
}
