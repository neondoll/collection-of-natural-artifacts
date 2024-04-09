<script setup>
const props = defineProps({ class: { default: undefined, type: String }, href: { default: undefined, type: String } });


</script>

<template>
  <a :class="props.class" class="link" :href="props.href">
    <slot/>
  </a>
</template>

<style scoped></style>