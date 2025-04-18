import { createSSRApp } from "vue";
import { createI18n } from "vue-i18n";
import App from "./App.vue";
import "@/utils/interceptor";
import messages from "./locale/index";

let i18nConfig = {
  legacy: false, // 必须设置为 false 才能使用组合式 API
  globalInjection: true, // 全局注入 $t 函数
  locale: uni.getLocale(),
  messages,
};

const i18n = createI18n(i18nConfig);
export function createApp() {
  const app = createSSRApp(App);
  app.use(i18n);
  return {
    app,
  };
}
