<script setup lang="ts">
import DemoContainer from '@/components/DemoContainer.vue';
import DemoItem from '@/components/DemoItem.vue';

const svgSpinnersUrl = 'https://icon-sets.iconify.design/svg-spinners/';
const mdiUrl = 'https://icon-sets.iconify.design/mdi/';
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
				<text class="iconfont-icon">&#xe716;</text>
				<text class="iconfont-icon">&#xe71f;</text>
				<text class="iconfont-icon">&#xe7c6;</text>
				<text class="iconfont-icon">&#xe7df;</text>
				<text class="iconfont-icon">&#xe849;</text>
			</view>
		</DemoItem>

		<DemoItem title="Tailwind CSS">
			<text class="text-3xl font-black bg-gradient-to-b from-blue-700 to-purple-300 text-transparent bg-clip-text">Tailwind CSS</text>
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
</template>

<style scoped>
.logo {
	width: 20px;
	height: 20px;
	margin-right: 8px
}

.icons {
	display: flex;
	flex-direction: row;
	align-items: center;
	column-gap: 5px;
}
</style>