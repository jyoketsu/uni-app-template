<script setup lang="ts">
import DemoContainer from '@/components/DemoContainer.vue';
import DemoItem from '@/components/DemoItem.vue';

</script>

<template>
	<DemoContainer doc-url="https://uniapp.dcloud.net.cn/tutorial/syntax-css.html">
		<DemoItem title="SCSS变量">
			<text>uni.scss</text>
		</DemoItem>
		<DemoItem title="全局样式">
			<text class="active">这个是全局样式</text>
		</DemoItem>
		<DemoItem title="背景图片">
			<image class="logo" src="~@/static/logo.png" />
		</DemoItem>
		<DemoItem title="字体图标">
			<view class="icons">
				<text class="test-icon">&#xe716;</text>
				<text class="test-icon">&#xe71f;</text>
				<text class="test-icon">&#xe7c6;</text>
				<text class="test-icon">&#xe7df;</text>
				<text class="test-icon">&#xe849;</text>
			</view>
		</DemoItem>
	</DemoContainer>
</template>

<style scoped>
.logo {
	width: 20px;
	height: 20px;
	margin-right: 8px
}

@font-face {
	font-family: 'iconfont';
	/* Project id 3639604 */
	src: url('//at.alicdn.com/t/c/font_3639604_s7ofq7zhbm9.woff2?t=1733212734887') format('woff2'),
		url('//at.alicdn.com/t/c/font_3639604_s7ofq7zhbm9.woff?t=1733212734887') format('woff'),
		url('//at.alicdn.com/t/c/font_3639604_s7ofq7zhbm9.ttf?t=1733212734887') format('truetype');
}

.test-icon {
	font-family: 'iconfont';
	font-size: 32px;
}

.icons {
	display: flex;
	flex-direction: row;
	align-items: center;
	column-gap: 5px;
}
</style>