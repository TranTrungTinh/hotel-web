<template>
  <div class="home">
    <span>{{ $t("text") }}</span>
    <router-link to="/about-us">About</router-link>
  </div>
</template>

<script>
export default {
  name: "home"
};
</script>
