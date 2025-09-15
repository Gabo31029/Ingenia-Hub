<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import SidebarConversations from "../components/SidebarChat.vue";
import ChatWindow from "../components/ChatVentana.vue";

const showChat = ref(false);
const isDesktop = ref(window.innerWidth >= 1024);

function updateSize() {
  isDesktop.value = window.innerWidth >= 1024;
}

onMounted(() => {
  window.addEventListener("resize", updateSize);
});
onUnmounted(() => {
  window.removeEventListener("resize", updateSize);
});

function openChat() {
  showChat.value = true;
}
function closeChat() {
  showChat.value = false;
}
</script>
<template>
  <div
    class="flex justify-center bg-gray-50 overflow-hidden py-2 h-[calc(100vh-70px)]"
  >
    <div
      class="flex flex-col lg:flex-row w-full max-w-6xl flex-1 bg-white shadow-lg rounded-2xl overflow-hidden"
    >
      <SidebarConversations
        v-if="!showChat || isDesktop"
        class="w-full lg:w-1/3 border-r"
        @openChat="openChat"
      />

      <ChatWindow
        v-if="showChat || isDesktop"
        class="flex-1"
        @back="closeChat"
      />
    </div>
  </div>
</template>
