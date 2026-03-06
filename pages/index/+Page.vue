<template>
  <h1>My Vike app</h1>
  <p>This page is:</p>
  <ul>
    <li>Rendered to HTML.</li>
    <li>Interactive. <Counter /></li>
  </ul>

  <div class="mt-8 p-4 border rounded">
    <h2 class="text-xl font-bold mb-2">Pinia Store Example</h2>
    <p>Store Name: {{ appStore.name }}</p>
    <p>Global Count: {{ appStore.count }}</p>
    <button class="btn mt-2" @click="appStore.increment">Increment Global</button>
  </div>
</template>

<script lang="ts" setup>
import Counter from "@components/Counter.vue";
import { useAppStore } from "@stores/app";

const appStore = useAppStore();
</script>
