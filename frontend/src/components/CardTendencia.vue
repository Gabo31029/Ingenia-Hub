<script setup>
const props = defineProps({
  titulo: { type: String, default: "Tendencia" },
  posts: { type: Number, default: 0 },
});
</script>

<template>
  <div class="flex justify-between items-center py-2 border-b last:border-none">
    <span class="font-medium text-fluid-md text-gray-800">
      {{ titulo }}
    </span>
    <span class="text-fluid-sm text-gray-500">
      {{ posts }} posts
    </span>
  </div>
</template>
