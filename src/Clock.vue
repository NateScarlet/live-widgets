<template>
  <div class="bg-black bg-opacity-50 text-white inline-block px-1">
    {{ nowText }}
  </div>
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
