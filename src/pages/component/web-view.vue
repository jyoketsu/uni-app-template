<script setup lang="ts">
import DemoContainer from '@/components/DemoContainer.vue';
import DemoItem from '@/components/DemoItem.vue';

const webviewStyles = {
	progress: {
		color: '#FF3333'
	}
};
</script>

<template>
	<DemoContainer doc-url="https://uniapp.dcloud.net.cn/component/web-view.html">
		<DemoItem title="示例" style="width:100%">
			<view class="web-view-wrapper">
				<web-view :webview-styles="webviewStyles" src="https://psnine.com/" />
			</view>
		</DemoItem>
	</DemoContainer>
</template>

<style scoped>
uni-page-body {
	height: 100%;
}

.content {
	height: 100%;
}

.demo-item-content {
	flex: 1;
}

.web-view-wrapper {
	position: relative;
	flex: 1
}
</style>