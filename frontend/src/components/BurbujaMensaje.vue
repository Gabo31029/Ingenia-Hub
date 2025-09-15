<script setup>
defineProps({
  message: Object,
});
</script>
<template>
  <div
    class="flex"
    :class="message.from === 'me' ? 'justify-end' : 'justify-start'"
  >
    <div
      class="max-w-xs rounded-lg px-4 py-2 text-sm shadow"
      :class="
        message.from === 'me'
          ? 'bg-ingenia-primario text-white'
          : 'bg-gray-100 text-gray-800'
      "
    >
      <p>{{ message.text }}</p>
      <p class="text-xs text-gray-300 mt-1">{{ message.time }}</p>
    </div>
  </div>
</template>
