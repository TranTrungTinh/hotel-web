import Vue from "vue";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);

export const i18n = new VueI18n({
  locale: localStorage.getItem("hotel__locale") || "vi",
  fallbackLocale: "vi",
  messages: {
    vi: require("./locales/vi"),
    en: require("./locales/en")
  }
});
