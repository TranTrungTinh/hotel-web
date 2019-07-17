<template>
  <transition name="router-fade" mode="out-in">
    <keep-alive>
      <component :is="layout">
        <router-view />
      </component>
    </keep-alive>
  </transition>
</template>
<script>
const default_layout = "default";
export default {
  name: "App",
  computed: {
    layout() {
      return `${this.$route.meta.layout || default_layout}-layout`;
    }
  }
};
</script>
<style lang="scss">
@import "@/assets/scss/main.scss";
</style>
