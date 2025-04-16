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
<style>
.uni-top-window {
  border-bottom: 1px solid #eaecef;
  z-index: 999;
}

uni-left-window {
  border-right: 1px solid #eaecef;
  z-index: 888;
}

.uni-app--showleftwindow .hideOnPc {
  display: none;
}

.uni-app--showleftwindow .uni-page-head-hd {
  display: none;
}

.content {
  max-width: 1190px;
  margin: 0 auto;
  padding: 25rpx;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  row-gap: 12rpx;
}

.title {
  font-size: 36rpx;
  font-weight: bold;
  color: #8f8f94;
}
</style>
