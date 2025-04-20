<script setup lang="ts">
import DemoContainer from '@/components/DemoContainer.vue';
import DemoItem from '@/components/DemoItem.vue';
</script>

<template>
	<DemoContainer doc-url="https://uniapp.dcloud.net.cn/component/view.html">
		<DemoItem title="view flex" style="width: 100%;">
			<view class="view-flex-row-container">
				<view class="view-flex-row-item">A</view>
				<view class="view-flex-row-item">B</view>
				<view class="view-flex-row-item">C</view>
				<view class="view-flex-row-item">D</view>
				<view class="view-flex-row-item">E</view>
				<view class="view-flex-row-item">F</view>
				<view class="view-flex-row-item">G</view>
				<view class="view-flex-row-item">H</view>
				<view class="view-flex-row-item">I</view>
			</view>
		</DemoItem>
	</DemoContainer>
</template>

<style scoped>
.view-flex-row-container {
	width: 100%;
	display: flex;
	flex-direction: row;
	column-gap: 15px;
	row-gap: 15px;
	flex-wrap: wrap;
}

.view-flex-row-item {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 20%;
	height: 100px;
}

.view-flex-row-item:nth-child(1) {
	background-color: hsla(0, 70%, 70%, 0.5);
}

.view-flex-row-item:nth-child(2) {
	background-color: hsla(40, 70%, 70%, 0.5);
}

.view-flex-row-item:nth-child(3) {
	background-color: hsla(80, 70%, 70%, 0.5);
}

.view-flex-row-item:nth-child(4) {
	background-color: hsla(120, 70%, 70%, 0.5);
}

.view-flex-row-item:nth-child(5) {
	background-color: hsla(160, 70%, 70%, 0.5);
}

.view-flex-row-item:nth-child(6) {
	background-color: hsla(200, 70%, 70%, 0.5);
}

.view-flex-row-item:nth-child(7) {
	background-color: hsla(240, 70%, 70%, 0.5);
}

.view-flex-row-item:nth-child(8) {
	background-color: hsla(280, 70%, 70%, 0.5);
}

.view-flex-row-item:nth-child(9) {
	background-color: hsla(320, 70%, 70%, 0.5);
}
</style>