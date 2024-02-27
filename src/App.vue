<template>
  <div>
    <AppHeader></AppHeader>
    <main>
      <AddTodo @addTodoItem="addTodoItem"></AddTodo>
      <todo-list :todos="todos" @deleteTodo="deleteTodoItem" @changeDone="changeDoneItem"></todo-list>
      <FilterTodo></FilterTodo>
    </main>
    <AppFooter></AppFooter>
  </div>
</template>

<script>
import AddTodo from './components/todo/AddTodo.vue'
import AppFooter from './components/AppFooter.vue'
import AppHeader from './components/AppHeader.vue'
import TodoList from './components/todo/TodoList.vue'
import FilterTodo from './components/todo/FilterTodo.vue'
import TodoItem from './components/todo/TodoItem.vue'

export default {
  data() {
    return {
      todos: []
    }
  },
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
    AddTodo,
    TodoList,
    FilterTodo,
    TodoItem
  },
  methods: {
    addTodoItem(title) {
      const newTodo = {
        id: this.todos.length + 1,
        done: false,
        title: title
      }
      this.todos.push(newTodo)
      console.log(this.todos)
    },
    deleteTodoItem(id) {
      console.log(id)
      this.todos = this.todos.filter((item) => item.id != id)
    },
    changeDoneItem(id,done){
      const newTodos = [...this.todos];
      const selected = newTodos.find((item)=>item.id === id);
      selected.done = done;
      this.todos = newTodos;
    }
  },
  watch: {}
}
</script>
<style></style>
