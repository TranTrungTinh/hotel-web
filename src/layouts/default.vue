<template>
  <section class="default">
    <a-layout>
      <a-layout-header
        :style="{ position: 'fixed', zIndex: 10, width: '100%' }"
      >
        Header
      </a-layout-header>
      <a-layout-content :style="{ padding: '0 50px', marginTop: '64px' }">
        <section class="default__content">
          <slot />
        </section>
      </a-layout-content>
      <a-layout-footer :style="{ textAlign: 'center' }">
        Footer
      </a-layout-footer>
    </a-layout>
  </section>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.default {
  &__content {
    min-height: 90vh;
    background: #fff;
    padding: 24px;
  }
}
</style>
