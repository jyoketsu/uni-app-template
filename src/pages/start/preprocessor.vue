<script setup lang="ts">
import DemoContainer from '@/components/DemoContainer.vue';
import DemoItem from '@/components/DemoItem.vue';

const handleClick = () => {
	let message = '';
	// #ifdef H5 || MP-WEIXIN

	// #ifdef H5
	message = '这是H5';
	// #else
	message = '这是微信小程序';
	// #endif

	// #else
	message = '其他平台';
	// #endif

	uni.showToast({
		title: message,
		icon: "none",
		duration: 2000,
	});
}

</script>

<template>
	<DemoContainer doc-url="https://uniapp.dcloud.net.cn/tutorial/platform.html">
		<DemoItem title="条件编译(ifdef)" style="width: 100%;">
			<!-- #ifdef H5 || MP-WEIXIN -->

			<!-- #ifdef H5 -->
			<button @click="handleClick">这是H5</button>
			<!-- #else -->
			<button @click="handleClick">这是微信小程序</button>
			<!-- #endif -->

			<!-- #else -->
			<button @click="handleClick">其他平台</button>
			<!-- #endif -->
		</DemoItem>

		<DemoItem title="条件编译(ifndef)">
			<!-- #ifndef H5-->
			<text>这个不是H5</text>
			<!-- #else -->
			<text>这个是H5</text>
			<!-- #endif -->
		</DemoItem>

		<DemoItem title="环境变量(process.env.UNI_PLATFORM)">
			<text class="text-gray-500 italic">查看vite.config.ts中的用法</text>
		</DemoItem>
	</DemoContainer>
</template>

<style lang="scss" scoped>
button {
	width: 100%;
	/* #ifdef H5 */
	color: $uni-color-primary;
	/* #endif */
}
</style>