<template>
  <svg
    viewBox="0 0 145 20"
    xmlns="http://www.w3.org/2000/svg"
    class="bg-black bg-opacity-50 w-full"
  >
    <text x="5" y="14" fill="white" style="font: 12px sans-serif">{{ nowText }}</text>
  </svg>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, onUnmounted, ref } from "vue";

export default defineComponent({
  setup() {
    const el = ref<HTMLElement | undefined>();
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

    return { now, nowText };
  },
});
</script>
