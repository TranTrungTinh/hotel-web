<template>
  <div class="header">
    <div class="header__left">
      <div class="header__left--brand">
        <span>Logo Here</span>
      </div>
    </div>
    <div class="header__right">
      <div class="header__right--top">
        <the-language />
        <a-button
          class="header__right--top--call"
          type="primary"
          shape="circle"
          icon="phone"
        />
        <a-button class="header__right--top--book" type="primary" size="large">
          Book now
        </a-button>
      </div>
      <div class="header__right--bottom">
        <span class="header__link">rooms</span>
        <span class="header__link">gallery</span>
        <span class="header__link">attractions</span>
        <span class="header__link">contact us</span>
        <span class="header__link">about us</span>
      </div>
    </div>
  </div>
</template>
<script>
import { TheLanguage } from "@/components/tools";
export default {
  components: { TheLanguage }
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/header/header.scss";
</style>
