<script setup lang="ts">
import DemoContainer from '@/components/DemoContainer.vue';
import DemoItem from '@/components/DemoItem.vue';
</script>

<template>
	<DemoContainer doc-url="https://uniapp.dcloud.net.cn/component/scroll-view.html">
		<DemoItem title="纵向滚动" style="width: 100%;">
			<scroll-view class="scroll-y-view" scroll-y>
				<view class="scroll-y-view-item">A</view>
				<view class="scroll-y-view-item">B</view>
				<view class="scroll-y-view-item">C</view>
			</scroll-view>
		</DemoItem>
		<DemoItem title="横向滚动" style="width: 100%;">
			<scroll-view class="scroll-x-view" scroll-x>
				<view class="scroll-x-view-item">A</view>
				<view class="scroll-x-view-item">B</view>
				<view class="scroll-x-view-item">C</view>
			</scroll-view>
		</DemoItem>
	</DemoContainer>
</template>

<style scoped>
.scroll-y-view {
	width: 100%;
	height: 300px;
	background-color: #f5f5f5;
}

.scroll-y-view-item {
	width: 100%;
	height: 300px;
	display: flex;
	justify-content: center;
	align-items: center;
}

.scroll-y-view-item:nth-child(1) {
	background-color: hsla(80, 70%, 70%, 0.5);
}

.scroll-y-view-item:nth-child(2) {
	background-color: hsla(40, 70%, 70%, 0.5);
}

.scroll-y-view-item:nth-child(3) {
	background-color: hsla(0, 70%, 70%, 0.5);
}

.scroll-x-view {
	white-space: nowrap;
	width: 100%;
	background-color: #f5f5f5;
}

.scroll-x-view-item {
	display: inline-block;
	width: 100%;
	height: 300px;
	line-height: 300px;
	text-align: center;
}

.scroll-x-view-item:nth-child(1) {
	background-color: hsla(0, 70%, 70%, 0.5);
}

.scroll-x-view-item:nth-child(2) {
	background-color: hsla(40, 70%, 70%, 0.5);
}

.scroll-x-view-item:nth-child(3) {
	background-color: hsla(80, 70%, 70%, 0.5);
}
</style>