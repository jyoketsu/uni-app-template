<script setup lang="ts">
import DemoContainer from "@/components/DemoContainer.vue";
import DemoItem from "@/components/DemoItem.vue";
import { ref } from "vue";

const clipboardData = ref("");

const setClipboardData = () => {
  if (!clipboardData.value) {
    uni.showToast({
      title: "请输入内容",
      icon: "none",
    });
    return;
  }
  uni.setClipboardData({
    data: clipboardData.value,
  });
};

const getClipboardData = () => {
  uni.getClipboardData({
    success: (res) => {
      uni.showToast({
        title: res.data,
        icon: "none",
      });
    },
    fail: () => {
      uni.showToast({
        title: "获取剪贴板内容失败",
        icon: "none",
      });
    },
  });
};
</script>

<template>
  <DemoContainer
    doc-url="https://uniapp.dcloud.net.cn/api/system/clipboard.html"
  >
    <DemoItem class="w-full" title="设置剪贴板内容">
      <input
        class="uni-input"
        v-model="clipboardData"
        placeholder="请输入内容"
      />
      <button class="w-full" @click="setClipboardData">设置剪贴板内容</button>
    </DemoItem>
    <DemoItem class="w-full" title="获取剪贴板内容">
      <button class="w-full" @click="getClipboardData">获取剪贴板内容</button>
    </DemoItem>
  </DemoContainer>
</template>
