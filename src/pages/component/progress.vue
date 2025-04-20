<script setup lang="ts">
import DemoContainer from '@/components/DemoContainer.vue';
import DemoItem from '@/components/DemoItem.vue';
</script>

<template>
	<DemoContainer doc-url="https://uniapp.dcloud.net.cn/component/progress.html">
		<DemoItem title="示例" style="width:100%">
			<view class="container">
				<progress class="progress" percent="10" />
				<progress class="progress" percent="50" show-info active />
				<progress class="progress" percent="60" activeColor="#E64340" backgroundColor="#d3d3d3" />
				<progress class="progress" percent="70" :stroke-width="10" />
				<progress class="progress" percent="70" :stroke-width="10" border-radius="8" />
			</view>
		</DemoItem>
	</DemoContainer>
</template>

<style scoped>
.container {
	display: flex;
	flex-direction: column;
	row-gap: 35rpx;
}
</style>