<script setup>
const props = defineProps({ disabled: Boolean });
</script>

<template>
  <button class="btn" type="button" :disabled="props.disabled">
    <slot/>
  </button>
</template>

<style scoped></style>