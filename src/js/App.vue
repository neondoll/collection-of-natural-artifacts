<script setup>
import Logo from '../assets/images/logo.svg';
import { BtnLogIn, BtnNext, BtnSearch, Link } from "./components";
</script>

<template>
  <header class="header">
    <div class="header__navbar navbar">
      <a class="navbar__link" href="#">
        <img class="navbar__logo" :src="Logo" alt="Logo">
      </a>
      <nav class="navbar__menu menu-navbar">
        <ul class="menu-navbar__list">
          <li class="menu-navbar__item">
            <Link class="menu-navbar__link" href="#">Каталог</Link>
          </li>
          <li class="menu-navbar__item">
            <Link class="menu-navbar__link" href="#">Галерея</Link>
          </li>
          <li class="menu-navbar__item">
            <Link class="menu-navbar__link" href="#">О лаборатории</Link>
          </li>
          <li class="menu-navbar__item">
            <Link class="menu-navbar__link" href="#">Контакты</Link>
          </li>
        </ul>
      </nav>
      <div class="navbar__btn-group">
        <BtnSearch/>
        <BtnLogIn/>
      </div>
    </div>
    <div class="header__container">
      <h1 class="header__title">Крупнейшая коллекция природных артефактов</h1>
      <BtnNext class="header__btn-next">Исследовать</BtnNext>
    </div>
  </header>
</template>

<style scoped></style>