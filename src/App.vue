<template>
  <div>
    <AppHeader></AppHeader>
    <main>
      <AddTodo @addTodoItem="addTodoItem"></AddTodo>
      <todo-list
        :sorted="sorted"
        @deleteTodo="deleteTodoItem"
        @changeDone="changeDoneItem"
        @dragStart="dragStart"
        @dragEnd="dragEnd"
      ></todo-list>
      <filter-todo
        @deleteCompleted="deleteCompletedItems"
        :notCompleteCounter="notCompleteCounter"
        @getFilter="sortTodos"
        :filter="filter"
      ></filter-todo>
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
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'
import swal from 'sweetalert'

export default {
  data() {
    return {
      todos: [],
      dragging: -1,
      filter: 'active',
      toast,
      swal
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
    notCompleteCounter() {
      return this.todos.filter((item) => item.done === false).length
    },
    sorted() {
      switch (this.filter) {
        case 'all':
          return this.todos
        case 'active':
          return this.todos.filter((item) => item.done === false)
        case 'completed':
          return this.todos.filter((item) => item.done === true)

        default:
          return this.todos
      }
    }
  },
  methods: {
    sortTodos(filter) {
      this.filter = filter
      // console.log(this.filter);
    },
    addTodoItem(title) {
      const newTodo = {
        id: this.todos.length + 1,
        done: false,
        title: title
      }
      this.todos.push(newTodo)
      toast(`کار جدید ${title} اضافه شد`, { autoClose: 1000, type: 'success', rtl: true })
    },
    deleteTodoItem(id) {
      const selected = this.todos.filter((item)=>item.id === id)[0]
      swal({
        title: 'مطمئنی؟',
        text: `اگر قبول کنی کار ${selected.title} رو پاک کردی!`,
        icon: 'warning',
        buttons: ["نه!", "قبوله"],
        dangerMode: true
      }).then((willDelete) => {
        if (willDelete) {
          this.todos = this.todos.filter((item) => item.id != id)
          swal('کار حذف شد', {
            icon: 'success',
            buttons: 'موفق بود'
          })
        } else {
          swal('کاری حذف نشد')
        }
      })
      
    },
    changeDoneItem(id, done) {
      const newTodos = [...this.todos]
      const selected = newTodos.find((item) => item.id === id)
      selected.done = done
      this.todos = newTodos
      done
        ? toast('آفرین', { type: 'success', autoClose: 1000, rtl: true })
        : toast('یادت باشه انجام بدی', { type: 'warning', autoClose: 1000, rtl: true })
    },
    deleteCompletedItems() {
      swal({
        title: 'مطمئنی؟',
        text: 'اگر قبول کنی کارهای انجام شده رو پاک کردی!',
        icon: 'warning',
        buttons: ["نه!", "قبوله"],
        dangerMode: true
      }).then((willDelete) => {
        if (willDelete) {
          let newTodos = [...this.todos]
          newTodos = newTodos.filter((item) => item.done !== true)
          this.todos = newTodos
          swal('کارها حذف شد', {
            icon: 'success',
            buttons: 'موفق بود'
          })
        } else {
          swal('کاری حذف نشد')
        }
      })
    },
    dragStart(index) {
      this.dragging = index
    },
    dragEnd(index) {
      let newTodo = this.todos.splice(this.dragging, 1)[0]
      this.todos.splice(index, 0, newTodo)
    }
  }
}
</script>
<style></style>
