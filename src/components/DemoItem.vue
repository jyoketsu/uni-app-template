<script setup lang="ts">
const props = defineProps({
	title: String,
})
</script>

<template>
	<view class="demo-item-content">
		<text class="title">{{ props.title }}</text>
		<slot />
	</view>
</template>

<style scoped>
.demo-item-content {
	width: 100%;
	display: flex;
	flex-direction: column;
	row-gap: 8px;
	overflow: hidden;
}

.title {
	margin-bottom: 8px;
}
</style>