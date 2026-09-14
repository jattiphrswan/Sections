<template>
  <div>
    <p>Welcome, {{ user }}!</p>
    <button @click="handleClick">Click Me {{ user  }}</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  user: {
    type: String,
    default: 'Guest'
  }
})

function handleClick() {
  alert(`Hello, ${user}! Button was clicked.`)
}
</script>
