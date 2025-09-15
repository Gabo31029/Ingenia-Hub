<script setup>
defineProps({
  conversation: Object,
  active: Boolean,
});
</script>
<template>
  <div
    class="flex items-center justify-between p-2 sm:p-3 cursor-pointer border-b hover:bg-ingenia-secundario/10"
    :class="active ? 'bg-ingenia-secundario/20' : ''"
  >
    <div class="min-w-0">
      <p class="font-semibold text-xs sm:text-sm truncate">{{ conversation.name }}</p>
      <p class="text-[11px] sm:text-xs text-gray-600 truncate">{{ conversation.lastMsg }}</p>
    </div>
    <div class="text-[10px] sm:text-xs text-gray-500 text-right flex flex-col items-end">
      <p>{{ conversation.time }}</p>
      <span
        v-if="conversation.unread > 0"
        class="inline-block bg-ingenia-primario text-white rounded-full px-1.5 sm:px-2 text-[10px] sm:text-xs mt-1"
      >
        {{ conversation.unread }}
      </span>
    </div>
  </div>
</template>
