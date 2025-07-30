<script setup lang="ts">
import DemoContainer from "@/components/DemoContainer.vue";
import DemoItem from "@/components/DemoItem.vue";
import { onReady } from "@dcloudio/uni-app";

const svgSpinnersUrl = "https://icon-sets.iconify.design/svg-spinners/";
const mdiUrl = "https://icon-sets.iconify.design/mdi/";

onReady(() => {
  uni.setNavigationBarColor({
    backgroundColor: '#CCFD5F',
    frontColor: '#000000',
  });
});
</script>

<template>
  <view class="relative w-full bg-[#FAF8EB]">
    <view class="absolute top-0 left-0 w-full aspect-[375/559]">
      <image src="~@/static/bg-banner.png" class="size-full" mode="aspectFill" />
    </view>
    <view class="absolute bottom-0 left-0 w-full h-fit">
      <view class="w-full aspect-[375/412]">
        <image src="~@/static/bg-green.png" class="size-full" mode="aspectFill" />
      </view>
      <view class="relative w-full aspect-[375/412]">
        <image src="~@/static/bg-pink.png" class="size-full absolute bottom-0 left-0" mode="aspectFill" />
      </view>
    </view>

    <DemoContainer doc-url="https://uniapp.dcloud.net.cn/tutorial/syntax-css.html">
      <DemoItem title="SCSS变量">
        <text>uni.scss</text>
      </DemoItem>

      <DemoItem title="全局样式">
        <text class="active">这个是全局样式</text>
      </DemoItem>

      <DemoItem title="CSS变量">
        <text>--status-bar-height</text>
        <text>--window-top</text>
        <text>--window-bottom</text>
        <navigator url="/pages/start/scroll-list">
          <button class="w-full h-[49px] leading-[49px] text-white bg-[#FE81C7] rounded-[25px] after:!border-none">
            应用见 [列表滚动加载与刷新]
          </button>
        </navigator>
      </DemoItem>

      <DemoItem title="背景图片">
        <image class="logo" src="~@/static/logo.png" />
        <text>见顶部与底部背景图片</text>
      </DemoItem>

      <DemoItem title="字体图标">
        <view class="icons">
          <text class="iconfont-icon text-red-500 !text-5xl">&#xe716;</text>
          <text class="iconfont-icon">&#xe71f;</text>
          <text class="iconfont-icon">&#xe7c6;</text>
          <text class="iconfont-icon">&#xe7df;</text>
          <text class="iconfont-icon">&#xe849;</text>
        </view>
      </DemoItem>

      <DemoItem title="Tailwind CSS">
        <text
          class="text-3xl font-black bg-gradient-to-b from-blue-700 to-purple-300 text-transparent bg-clip-text">Tailwind
          CSS</text>
        <text class="truncate">
          truncate
          类用于截断文本并显示省略号，当文本内容超出其容器的宽度时，多余的文本会被隐藏，并在末尾显示省略号。
        </text>
        <view class="w-full aspect-[16/9] bg-gray-700 text-white text-xl flex justify-center items-center">
          16:9
        </view>
        <view class="w-full flex justify-center items-center my-4">
          <text class="scale-anim text-2xl">scale-anim</text>
        </view>
      </DemoItem>

      <DemoItem title="Iconify">
        <uni-link :href="svgSpinnersUrl" text="svg-spinners" fontSize="18" />
        <view class="w-full flex flex-row gap-2">
          <text class="i-svg-spinners-12-dots-scale-rotate size-8" />
          <text class="i-svg-spinners-bars-scale size-8" />
          <text class="i-svg-spinners-3-dots-fade size-8" />
          <text class="i-svg-spinners-blocks-wave size-8" />
          <text class="i-svg-spinners-pulse-3 size-8" />
          <text class="i-svg-spinners-180-ring-with-bg size-8" />
          <text class="i-svg-spinners-tadpole size-8" />
        </view>
        <uni-link :href="mdiUrl" text="mdi" fontSize="18" />
        <view class="w-full flex flex-row gap-2">
          <text class="i-mdi-add-circle size-8" />
          <text class="i-mdi-delete size-8" />
          <text class="i-mdi-edit size-8" />
          <text class="i-mdi-search size-8" />
          <text class="i-mdi-image size-8" />
        </view>
      </DemoItem>
    </DemoContainer>
  </view>
</template>

<style scoped>
.logo {
  width: 20px;
  height: 20px;
  margin-right: 8px;
}

.icons {
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 5px;
}

@keyframes scalePulse {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.2);
  }

  100% {
    transform: scale(1);
  }
}

.scale-anim {
  animation: scalePulse 1.2s infinite cubic-bezier(0.4, 0, 0.2, 1);
}
</style>
