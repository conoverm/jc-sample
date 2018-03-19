<template>
  <input type="text" maxlength="100" @keyup="updateTodo" v-model="todo.description" :class="{ done: todo.done }" />
</template>

<script>
import UpdateRequest from '@/resources/UpdateTodo.js'
import throttle from 'lodash.throttle'

export default {
  props: {
    todo: {
      type: Object,
      required: true
    }
  },
  methods: {
    updateTodo: throttle(function () {
      UpdateRequest(this.todo)
    }, 999, { trailing: true })
  }
}
</script>

<style scoped>
.done {
  text-decoration: line-through;
}

input {
  width:100%;
  margin-bottom: 10px;
}
</style>
