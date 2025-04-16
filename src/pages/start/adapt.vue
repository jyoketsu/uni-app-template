<script setup lang="ts">
import DemoContainer from '@/components/DemoContainer.vue';
import DemoItem from '@/components/DemoItem.vue';
import { onLoad } from '@dcloudio/uni-app';
import { ref } from 'vue';

// 设备类型: `phone`、`pad`、`pc`
const deviceType = ref('');
const windowWidth = ref(0);
const screenWidth = ref(0);

onLoad(() => {
	deviceType.value = uni.getDeviceInfo().deviceType;
	windowWidth.value = uni.getSystemInfoSync().windowWidth;
	screenWidth.value = uni.getSystemInfoSync().screenWidth;
})
</script>

<template>
	<DemoContainer doc-url="https://uniapp.dcloud.net.cn/tutorial/adapt.html">
		<DemoItem title="一、页面窗体级适配方案：leftWindow、rightWindow、topWindow">
			<text>改变窗口大小，查看页面变化</text>
		</DemoItem>

		<DemoItem title="二、更具api返回的值自己实现">
			<text>{{ `deviceType(设备类型)：${deviceType}` }}</text>
			<text>{{ `screenWidth(屏幕宽度 )：${screenWidth}` }}</text>
			<text>{{ `windowWidth(窗口宽度)：${windowWidth}` }}</text>
		</DemoItem>

		<DemoItem title="三、match-media组件">
			<match-media :min-width="375" :max-width="800">
				<view>当页面最小宽度 375px， 页面宽度最大 800px 时显示</view>
			</match-media>

			<match-media :min-height="400" orientation="landscape">
				<view>当页面高度不小于 400px 且屏幕方向为横向时展示这里</view>
			</match-media>
		</DemoItem>
	</DemoContainer>
</template>

<style scoped></style>