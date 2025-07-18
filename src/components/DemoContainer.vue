<script setup lang="ts">
const props = defineProps({
	docUrl: String,
})
</script>

<template>
	<view class="content">
		<view class="description">
			<text class="doc-url-name">文档详见：</text>
			<uni-link :href="docUrl" :text="docUrl" />
		</view>
		<slot />
	</view>
</template>

<style scoped lang="scss">
.doc-url-name {
	color: $uni-color-title;
}

@media (prefers-color-scheme: dark) {

	.doc-url-name {
		color: $uni-color-title-inverse;
	}
}
</style>