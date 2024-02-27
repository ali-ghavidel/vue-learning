<template>
  <ul class="todos">
    <TodoItem v-for="todo in todos" :key="todo.item" :todo="todo" @deleteTodo="deleteTodo" @changeDone="changeDone" />
  </ul>
</template>

<script>
import TodoItem from './TodoItem.vue'
export default {
  components: {
    TodoItem
  }, 
  props: {
    todos: Array,
  },
  methods: {
    deleteTodo(id){
      this.$emit("deleteTodo",id)
    },
    changeDone(id,done){
      this.$emit("changeDone",id,done)
    }
  }
}
</script>

<style></style>
