<template>
  <div>
    <label :for="todo.id">Completed</label>
    <input v-model="todo.done" @click="handleUpdateTodo" :id="todo.id" type="checkbox" />
  </div>
</template>

<script>
import UpdateRequest from '@/resources/UpdateTodo.js'

export default {
  props: {
    todo: {
      type: Object,
      required: true
    }
  },
  methods: {
    handleUpdateTodo: function () {
      UpdateRequest({...this.todo, done: !this.todo.done})
    }
  }
}
</script>

<style scoped>
div {
  width: 50%;
  float:left;
}
</style>
