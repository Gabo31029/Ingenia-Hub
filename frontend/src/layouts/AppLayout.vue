<script setup>
import Header from "../components/Header.vue";
</script>
<template>
  <div class="min-h-screen flex flex-col">
    <Header />
    <div class="flex-1">
      <router-view />
    </div>
  </div>
</template>
