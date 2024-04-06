<script setup>
const props = defineProps({
  disabled: { default: false, type: Boolean },
  type    : {
    default  : 'button',
    type     : String,
    validator: (value, props) => ['button', 'reset', 'submit'].includes(value)
  }
});
</script>

<template>
  <button class="btn" :type="props.type" :disabled="props.disabled">
    <slot/>
  </button>
</template>

<style scoped></style>