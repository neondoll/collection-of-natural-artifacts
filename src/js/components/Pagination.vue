<script setup>
import createUniqueID from "../functions/createUniqueID";

const id = createUniqueID('pagination');

const paginationNextIconViewBox = { _: '0 0 26 16', hover: '0 0 36 16' };
const paginationNextIconPathD = {
  _    : 'M25.7071 8.70711C26.0976 8.31658 26.0976 7.68342 25.7071 7.2929L19.3431 0.928934C18.9526 0.538409 18.3195 0.538409 17.9289 0.928934C17.5384 1.31946 17.5384 1.95262 17.9289 2.34315L23.5858 8L17.9289 13.6569C17.5384 14.0474 17.5384 14.6805 17.9289 15.0711C18.3195 15.4616 18.9526 15.4616 19.3431 15.0711L25.7071 8.70711ZM-8.74228e-08 9L25 9L25 7L8.74228e-08 7L-8.74228e-08 9Z',
  hover: 'M35.7071 8.70711C36.0976 8.31659 36.0976 7.68342 35.7071 7.2929L29.3431 0.928935C28.9526 0.53841 28.3195 0.53841 27.9289 0.928935C27.5384 1.31946 27.5384 1.95262 27.9289 2.34315L33.5858 8L27.9289 13.6569C27.5384 14.0474 27.5384 14.6805 27.9289 15.0711C28.3195 15.4616 28.9526 15.4616 29.3431 15.0711L35.7071 8.70711ZM-8.74228e-08 9L35 9L35 7L8.74228e-08 7L-8.74228e-08 9Z'
};
const paginationPrevIconViewBox = { _: '0 0 26 16', hover: '0 0 36 16' };
const paginationPrevIconPathD = {
  _    : 'M0.292892 7.29289C-0.0976315 7.68342 -0.0976315 8.31658 0.292892 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292892 7.29289ZM26 7L1 7V9L26 9V7Z',
  hover: 'M0.292892 7.29289C-0.0976315 7.68342 -0.0976315 8.31658 0.292892 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292892 7.29289ZM36 7L1 7V9L36 9V7Z'
};

document.addEventListener('DOMContentLoaded', function () {
  const paginationElement = document.getElementById(id);
  const paginationNextElement = paginationElement.querySelector('.pagination__next');
  const paginationNextIconElement = paginationNextElement.querySelector('.pagination__icon');
  const paginationNextIconPathElement = paginationNextIconElement.querySelector('path');
  const paginationPrevElement = paginationElement.querySelector('.pagination__prev');
  const paginationPrevIconElement = paginationPrevElement.querySelector('.pagination__icon');
  const paginationPrevIconPathElement = paginationPrevIconElement.querySelector('path');

  paginationNextElement.addEventListener('mouseover', function () {
    paginationNextIconElement.setAttribute('viewBox', paginationNextIconViewBox.hover);
    paginationNextIconPathElement.setAttribute('d', paginationNextIconPathD.hover);
  });

  paginationNextElement.addEventListener('mouseout', function () {
    paginationNextIconElement.setAttribute('viewBox', paginationNextIconViewBox._);
    paginationNextIconPathElement.setAttribute('d', paginationNextIconPathD._);
  });

  paginationPrevElement.addEventListener('mouseover', function () {
    paginationPrevIconElement.setAttribute('viewBox', paginationPrevIconViewBox.hover);
    paginationPrevIconPathElement.setAttribute('d', paginationPrevIconPathD.hover);
  });

  paginationPrevElement.addEventListener('mouseout', function () {
    paginationPrevIconElement.setAttribute('viewBox', paginationPrevIconViewBox._);
    paginationPrevIconPathElement.setAttribute('d', paginationPrevIconPathD._);
  });
});
</script>

<template>
  <div class="pagination" :id="id">
    <button class="pagination__prev" type="button">
      <svg class="pagination__icon" viewBox="0 0 26 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.292892 7.29289C-0.0976315 7.68342 -0.0976315 8.31658 0.292892 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292892 7.29289ZM26 7L1 7V9L26 9V7Z"
              fill="currentColor"/>
      </svg>
    </button>
    <div class="pagination__desc">1 из 3</div>
    <button class="pagination__next">
      <svg class="pagination__icon" viewBox="0 0 26 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M25.7071 8.70711C26.0976 8.31658 26.0976 7.68342 25.7071 7.2929L19.3431 0.928934C18.9526 0.538409 18.3195 0.538409 17.9289 0.928934C17.5384 1.31946 17.5384 1.95262 17.9289 2.34315L23.5858 8L17.9289 13.6569C17.5384 14.0474 17.5384 14.6805 17.9289 15.0711C18.3195 15.4616 18.9526 15.4616 19.3431 15.0711L25.7071 8.70711ZM-8.74228e-08 9L25 9L25 7L8.74228e-08 7L-8.74228e-08 9Z"
              fill="currentColor"/>
      </svg>
    </button>
  </div>
</template>

<style scoped></style>