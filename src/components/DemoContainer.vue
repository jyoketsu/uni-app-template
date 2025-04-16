<script setup lang="ts">
const props = defineProps({
	docUrl: String,
})
</script>

<template>
	<view class="content">
		<view class="description">
			<text>文档详见：</text>
			<uni-link :href="docUrl" :text="docUrl" />
		</view>
		<slot />
	</view>
</template>

<style scoped>
.content {
	row-gap: 45rpx;
}
</style>