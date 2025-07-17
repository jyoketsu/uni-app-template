<script setup lang="ts">
import { onLaunch, onShow, onHide } from "@dcloudio/uni-app";
onLaunch(() => {
  console.log("App Launch");
});
onShow(() => {
  console.log("App Show");
});
onHide(() => {
  console.log("App Hide");
});
</script>

<style lang="scss">
@use 'tailwindcss/base';
@use 'tailwindcss/components';
@use 'tailwindcss/utilities';

@import "./global.scss";

@font-face {
  font-family: 'iconfont';
  /* Project id 3639604 */
  src: url('//at.alicdn.com/t/c/font_3639604_6ceein7gmr6.woff2?t=1744855442978') format('woff2'),
    url('//at.alicdn.com/t/c/font_3639604_6ceein7gmr6.woff?t=1744855442978') format('woff'),
    url('//at.alicdn.com/t/c/font_3639604_6ceein7gmr6.ttf?t=1744855442978') format('truetype');
}

.iconfont-icon {
  font-family: 'iconfont';
  font-size: 28px;
}
</style>
