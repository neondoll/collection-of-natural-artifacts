<script setup>
const props = defineProps({ href: { default: undefined, type: String } });
</script>

<template>
  <a class="link" :href="props.href">
    <slot/>
  </a>
</template>

<style scoped></style>