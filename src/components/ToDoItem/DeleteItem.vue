<template>
  <button @click="handleDeleteTodo">Delete</button>
</template>

<script>
import Delete from '@/resources/DeleteTodo.js'

export default {
  props: {
    todo: {
      type: Object,
      required: true
    }
  },
  methods: {

    handleDeleteTodo: function () {
      let todo = this.todo

      Delete(this.todo)
        .then(res => this.$emit('deleteSingleTodo', { todo: todo }))
    }
  }
}
</script>

<style scoped>
button {
  padding: 5px 10px;
  float:right;
  border: 1px solid rgba(107, 107, 107, 0.25);
}
</style>
