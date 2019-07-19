<template>
  <a-dropdown placement="bottomRight">
    <span class="dropdown">
      <img
        v-if="$i18n.locale === 'vi'"
        src="~@/assets/images/vi.svg"
        alt="vi"
      />
      <img v-else src="~@/assets/images/en.svg" alt="en" />
      <span>Language</span>
      <a-icon type="caret-down" />
    </span>
    <a-menu
      slot="overlay"
      class="user-dropdown-menu-wrapper"
      @click="changeLanguage"
    >
      <a-menu-item
        v-for="(language, index) in languages"
        :key="language.shortName"
        class="language--item"
      >
        <img v-if="index === 0" src="~@/assets/images/vi.svg" alt="vi" />
        <img v-else src="~@/assets/images/en.svg" alt="en" />
        <span>{{ language.name }}</span>
      </a-menu-item>
    </a-menu>
  </a-dropdown>
</template>

<script>
export default {
  data() {
    return {
      languages: [
        {
          name: "Vietnamese",
          shortName: "vi"
        },
        {
          name: "English",
          shortName: "en"
        }
      ]
    };
  },
  methods: {
    changeLanguage({ key }) {
      if (this.$i18n.locale !== "vi" && key === "vi") {
        this.$i18n.locale = "vi";
      } else if (this.$i18n.locale !== "en" && key === "en") {
        this.$i18n.locale = "en";
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.dropdown {
  display: flex;
  align-items: center;
  cursor: pointer;

  & span {
    padding: 0 5px;
  }
}
.language {
  &--item {
    display: flex;
    align-items: center;

    & span {
      padding-left: 10px;
    }
  }
}
</style>
