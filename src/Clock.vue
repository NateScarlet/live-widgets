<template>
  <div class="bg-black bg-opacity-50 w-screen h-screen flex flex-center p-2">
    <svg viewBox="0 0 130 20" xmlns="http://www.w3.org/2000/svg" class="w-full">
      <text x="5" y="14" fill="white" font-size="10">
        {{ nowText }}
      </text>
    </svg>
  </div>
</template>

<script lang="ts">
import { computed, onUnmounted, ref } from "vue";
</script>

<script setup lang="ts">
const now = ref(new Date());
const timer = setInterval(() => {
  now.value = new Date();
}, 100);
onUnmounted(() => {
  clearInterval(timer);
});
const nowText = computed(() => {
  return now.value.toLocaleString(undefined, {
    hour12: false,
    year: "numeric",
    month: "numeric",
    day: "numeric",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
});
</script>
