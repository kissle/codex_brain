<template>
  <form @submit.prevent="submit">
    <input v-model="title" placeholder="Title" />
    <textarea v-model="body" placeholder="Body" />
    <input v-model="tags" placeholder="Tags comma separated" />
    <button type="submit">Create</button>
  </form>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const title = ref('')
const body = ref('')
const tags = ref('')

const submit = async () => {
  await $fetch('/api/notes', {
    method: 'POST',
    body: { title: title.value, body: body.value, tags: tags.value.split(',').map(t => t.trim()).filter(Boolean) }
  })
  title.value = ''
  body.value = ''
  tags.value = ''
}
</script>
