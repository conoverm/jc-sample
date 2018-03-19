import axios from 'axios'

export default function UpdateRequest (todo) {
  return axios.put(`http://localhost:8004/api/todos/${todo.id}`, todo)
    .then((res) => {
      if (!res) {
        throw Error('Todo not updated')
      }

      return res.data
    })
    .catch(err => {
      console.error(`Error on update Todo: ${err}`)
      return todo
    })
}
