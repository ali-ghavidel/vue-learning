<template>
  <div>
    <AppHeader></AppHeader>
    <main>
      <AddTodo @addTodoItem="addTodoItem"></AddTodo>
      <todo-list :sorted="sorted" @deleteTodo="deleteTodoItem" @changeDone="changeDoneItem" @dragStart="dragStart" @dragEnd="dragEnd"></todo-list>
      <filter-todo @deleteCompleted="deleteCompletedItems" :notCompleteCounter="notCompleteCounter" @getFilter="sortTodos" :filter="filter"></filter-todo>
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
      todos: [],
      dragging: -1,
      filter: 'active',
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
  computed: {
    notCompleteCounter(){
      return this.todos.filter((item)=>item.done === false).length;
    },
    sorted(){
      switch (this.filter) {
        case 'all':
          return this.todos;
        case 'active':
          return this.todos.filter((item)=>item.done === false);
        case 'completed':
          return this.todos.filter((item)=>item.done === true);
      
        default:
          return this.todos;
      }
    }
  },
  methods: {
    sortTodos(filter){
      this.filter = filter;
      // console.log(this.filter);
    },
    addTodoItem(title) {
      const newTodo = {
        id: this.todos.length + 1,
        done: false,
        title: title
      }
      this.todos.push(newTodo)
    },
    deleteTodoItem(id) {
      this.todos = this.todos.filter((item) => item.id != id)
    },
    changeDoneItem(id,done){
      const newTodos = [...this.todos];
      const selected = newTodos.find((item)=>item.id === id);
      selected.done = done;
      this.todos = newTodos;
    },
    deleteCompletedItems(){
      let newTodos = [...this.todos];
      newTodos = newTodos.filter((item)=>item.done !== true)
      this.todos = newTodos;
    },
    dragStart(index){
      this.dragging = index;
    },
    dragEnd(index){
      let newTodo = this.todos.splice(this.dragging,1)[0];
      this.todos.splice(index,0,newTodo);
    },
  }
}
</script>
<style></style>
