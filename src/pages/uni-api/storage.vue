<script setup lang="ts">
import DemoContainer from '@/components/DemoContainer.vue';
import DemoItem from '@/components/DemoItem.vue';
import { ref } from 'vue';

const storageKey = ref('');
const storageValue = ref('');

const handleSave = () => {
	if (!storageKey.value) {
		return uni.showModal({
			title: '提示',
			content: '请输入key',
			showCancel: false
		})
	}
	uni.setStorageSync(storageKey.value, storageValue.value);
	uni.showModal({
		title: '提示',
		content: '存储成功',
		showCancel: false
	})
};

const handleGet = () => {
	if (!storageKey.value) {
		return uni.showModal({
			title: '提示',
			content: '请输入key',
			showCancel: false
		})
	}
	const value = uni.getStorageSync(storageKey.value);
	uni.showModal({
		title: '提示',
		content: `key: ${storageKey.value}, value: ${value}`,
		showCancel: false
	})
}

const handleClear = () => {
	uni.clearStorageSync();
	storageKey.value = '';
	storageValue.value = '';
}
</script>

<template>
	<DemoContainer doc-url="https://uniapp.dcloud.net.cn/api/storage/storage.html">
		<DemoItem title="示例" style="width: 100%;">
			<input v-model="storageKey" placeholder="请输入key" />
			<input v-model="storageValue" placeholder="请输入value" />
			<button type="primary" @click="handleSave">存储数据</button>
			<button type="default" @click="handleGet">获取数据</button>
			<button type="warn" @click="handleClear">清除数据</button>
		</DemoItem>
	</DemoContainer>
</template>

<style scoped>
button {
	width: 100%;
}
</style>