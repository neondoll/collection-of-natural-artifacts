<script setup>
const props = defineProps({ placeholder: { default: undefined, type: String } })
</script>

<template>
  <input class="input" :placeholder="props.placeholder"/>
</template>

<style scoped></style>