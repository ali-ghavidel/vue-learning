<template>
  <ul class="todos">
    <TodoItem></TodoItem>
    <TodoItem></TodoItem>
    <TodoItem></TodoItem>
  </ul>
</template>

<script>
import TodoItem from './TodoItem.vue'
export default {
  components: {
    TodoItem
  }
}
</script>

<style></style>
