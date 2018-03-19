<template>
  <div id="create-todo">
    <div>Create a new ToDo item:</div>
    <div><input type="text" v-model.trim="createTodoText" @keydown.enter="createTodo" /></div>
  </div>
</template>

<script>
import Create from '@/resources/CreateTodo'

export default {
  data () {
    return {
      createTodoText: ''
    }
  },
  methods: {
    async createTodo () {
      if (this.createTodoText.length === 0) {
        return
      }

      let todos = this.$parent.todos

      const newTodo = {
        description: this.createTodoText,
        done: false
      }

      const create = await Create(newTodo)

      if (create) {
        todos.push(create)
        this.createTodoText = ''
      }
    }
  }
}
</script>

<style scoped>
#create-todo {
  padding: 20px 0;
}

#create-todo > div:nth-child(1){
  width: 33%;
  float: left;
  margin: 12px 0 0 0;
}

#create-todo > div:nth-child(2) {
  float: left;
  width: 65%;
}

input {
  width: 100%;
}
</style>
