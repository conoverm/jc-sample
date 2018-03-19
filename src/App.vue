<template>
  <div id="app">
    <h1>JC ToDo</h1>
    <TodoList/>
  </div>
</template>

<script>
import TodoList from '@/components/TodoList'

export default {
  components: {
    TodoList
  }
}
</script>

<style>
a {
  color: #42b983;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  lost-center: 600px;
}

#app h1 {
  font-size: 2.5rem;
  text-align: center;
  margin: 40px 0;
}

input[type='text'] {
  font-size: 20px;
  line-height: 1;

  padding: 5px 0 5px 0;
  margin-top: 2px;
  height: 25px;

  border-top:0; border-right: 0; border-left: 0;
  border-bottom: 1px solid rgba(107, 107, 107, 0.25);
}

input[type='text']:focus {
  background-color: rgba(107, 107, 107, 0.1);
}
</style>
