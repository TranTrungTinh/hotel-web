<template>
  <section class="default">
    <a-layout>
      <a-layout-header class="default__head">
        <the-header />
      </a-layout-header>
      <a-layout-content class="default__main">
        <section class="default__main--content">
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
import { TheHeader } from "@/components/header";
export default {
  components: { TheHeader }
};
</script>
<style lang="scss" scoped>
.default {
  &__head {
    position: fixed;
    width: 100%;
    z-index: 10;
    height: auto !important;
  }

  &__main {
    margin-top: 130px;
    padding: 0 30px;
    border-top: 1px solid #dfded3;

    &--content {
      min-height: 90vh;
      background: #fff;
      padding: 24px;
    }
  }
}
</style>
