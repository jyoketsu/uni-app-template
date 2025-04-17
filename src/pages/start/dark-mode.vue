<script setup lang="ts">
import DemoContainer from '@/components/DemoContainer.vue';
import DemoItem from '@/components/DemoItem.vue';
import { onLoad } from '@dcloudio/uni-app';
import { ref } from 'vue';

const theme = ref('');

onLoad(() => {
	theme.value = uni.getSystemInfoSync().theme || '';
	// 监听主题切换事件
	uni.onThemeChange((res) => {
		theme.value = res.theme;
	})
})
</script>

<template>
	<DemoContainer doc-url="https://uniapp.dcloud.net.cn/tutorial/darkmode.html">
		<DemoItem title="当前主题">
			<text>{{ `当前主题是: ${theme}` }}</text>
		</DemoItem>
		<DemoItem title="页面 css 适配">
			<view class="dark-css-demo-wrapper">
				<text>这是测试文字</text>
			</view>
		</DemoItem>
	</DemoContainer>
</template>

<style scoped>
.dark-css-demo-wrapper {
	background-color: #e5e5e5;
	color: #2b9939;
	padding: 15rpx;
	border-radius: 8px
}

@media (prefers-color-scheme: dark) {

	/* DarkMode 下的样式 start */
	.dark-css-demo-wrapper {
		background-color: #4c4c4c;
		color: #aad6af;
	}
	/* DarkMode 下的样式 end */
}
</style>