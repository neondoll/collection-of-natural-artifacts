<script setup>
import createUniqueID from "../../functions/createUniqueID";
import { computed } from "vue";

const props = defineProps({
  class   : { default: undefined, type: String },
  color   : {
    default  : 'primary-green',
    type     : String,
    validator: (value, props) => ['background-shade', 'primary-green'].includes(value)
  },
  disabled: { default: false, type: Boolean }
});

const id = createUniqueID('btn-next');

const classes = computed(() => {
  const classes = [];

  if (props.class) {
    classes.push(props.class);
  }

  classes.push('btn-next');
  classes.push(`btn-next--${props.color}`);

  return classes;
});

const btnNextIconViewBox = { _: '0 0 44 15', hover: '0 0 54 15' };
const btnNextIconPathD = {
  _    : 'M43.7071 8.20711C44.0976 7.81658 44.0976 7.18342 43.7071 6.79289L37.3431 0.428932C36.9526 0.0384078 36.3195 0.0384078 35.9289 0.428932C35.5384 0.819457 35.5384 1.45262 35.9289 1.84315L41.5858 7.5L35.9289 13.1569C35.5384 13.5474 35.5384 14.1805 35.9289 14.5711C36.3195 14.9616 36.9526 14.9616 37.3431 14.5711L43.7071 8.20711ZM0 8.5L43 8.5V6.5L0 6.5L0 8.5Z',
  hover: 'M53.7071 8.20711C54.0976 7.81658 54.0976 7.18342 53.7071 6.79289L47.3431 0.428932C46.9526 0.0384078 46.3195 0.0384078 45.9289 0.428932C45.5384 0.819457 45.5384 1.45262 45.9289 1.84315L51.5858 7.5L45.9289 13.1569C45.5384 13.5474 45.5384 14.1805 45.9289 14.5711C46.3195 14.9616 46.9526 14.9616 47.3431 14.5711L53.7071 8.20711ZM0 8.5L53 8.5V6.5L0 6.5L0 8.5Z'
};

document.addEventListener('DOMContentLoaded', function () {
  const btnNextElement = document.getElementById(id);
  const btnNextIconElement = btnNextElement.querySelector('.btn-next__icon');
  const btnNextIconPathElement = btnNextIconElement.querySelector('path');

  btnNextElement.addEventListener('mouseover', function () {
    btnNextIconElement.setAttribute('viewBox', btnNextElement.disabled ? btnNextIconViewBox._ : btnNextIconViewBox.hover);
    btnNextIconPathElement.setAttribute('d', btnNextElement.disabled ? btnNextIconPathD._ : btnNextIconPathD.hover);
  });

  btnNextElement.addEventListener('mouseout', function () {
    btnNextIconElement.setAttribute('viewBox', btnNextIconViewBox._);
    btnNextIconPathElement.setAttribute('d', btnNextIconPathD._);
  });
});
</script>

<template>
  <button :class="classes" :id="id" type="button" :disabled="props.disabled">
    <span class="btn-next__text"><slot/></span>
    <svg class="btn-next__icon" viewBox="0 0 44 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M43.7071 8.20711C44.0976 7.81658 44.0976 7.18342 43.7071 6.79289L37.3431 0.428932C36.9526 0.0384078 36.3195 0.0384078 35.9289 0.428932C35.5384 0.819457 35.5384 1.45262 35.9289 1.84315L41.5858 7.5L35.9289 13.1569C35.5384 13.5474 35.5384 14.1805 35.9289 14.5711C36.3195 14.9616 36.9526 14.9616 37.3431 14.5711L43.7071 8.20711ZM0 8.5L43 8.5V6.5L0 6.5L0 8.5Z"
            fill="currentColor"/>
    </svg>
  </button>
</template>

<style scoped></style>