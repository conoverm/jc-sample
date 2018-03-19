<template>
  <li class="todo-item">
    <div>
      <UpdateDescription :todo="todo"></UpdateDescription>
    </div>
    <div class="todo-utils">
      <CompleteItem :todo="todo" />
      <DeleteItem @deleteSingleTodo="deleteTodo" :todo="todo" />
    </div>
  </li>
</template>

<script>
import DeleteItem from './DeleteItem'
import CompleteItem from './CompleteItem'
import UpdateDescription from './UpdateDescription'

export default {
  components: {
    DeleteItem, CompleteItem, UpdateDescription
  },
  props: {
    todo: {
      type: Object,
      required: true
    }
  },
  methods: {
    deleteTodo: function (payload) {
      let todo = payload.todo
      let todos = this.$parent.todos

      todos.splice(todos.indexOf(todo), 1)
    }
  }
}
</script>

<style scoped>
.todo-item {
  margin: 70px 0;
}
</style>
