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
// CSS原生语法（不推荐），变量无法解析
// @import url(./global.scss);

// SCSS专用语法（推荐）
@import "./global.scss";
</style>
