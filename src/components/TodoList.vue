<template>
  <div class="all-items">
    <CreateToDo />
    <div class="empty-todo" v-if="todos.length === 0">Nothing to do!</div>
    <ul v-else>
      <ToDoItem v-for="todo in todos" :key="todo.id" :todo="todo" />
    </ul>
  </div>
</template>

<script>
import ToDoItem from '@/components/ToDoItem/ToDoItem'
import CreateToDo from '@/components/CreateTodo'
import Get from '@/resources/GetTodo'

export default {
  name: 'TodoList',
  components: {
    ToDoItem, CreateToDo
  },
  data () {
    return {
      todos: []
    }
  },
  async created () {
    const response = await Get()
    this.todos = response
  }
}
</script>

<style scoped>
ul {
  list-style-type: none;
}

.empty-todo {
  margin: 40px auto;
  text-align: center;
}
</style>
