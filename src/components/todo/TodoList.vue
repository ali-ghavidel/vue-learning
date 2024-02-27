<template>
  <ul class="todos">
    <TodoItem
    v-for="(todo,index) in sorted"
    :key="index"
    :todo="todo"
    @deleteTodo="deleteTodo"
    @changeDone="changeDone"
    @dragover.prevent
    @dragstart="dragStart(index)"
    @drop="dragged(index)"
    />
  </ul>
</template>

<script>
import TodoItem from './TodoItem.vue'
export default {
  components: {
    TodoItem
  }, 
  props: {
    sorted: Array,
  },
  methods: {
    deleteTodo(id){
      this.$emit("deleteTodo",id)
    },
    changeDone(id,done){
      this.$emit("changeDone",id,done)
    },
    dragStart(index){
      this.$emit('dragStart', index)
    },
    dragged(index){
      this.$emit('dragEnd',index)
    }
  }
}
</script>

<style></style>
