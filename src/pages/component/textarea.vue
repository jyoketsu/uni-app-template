<script setup lang="ts">
import DemoContainer from '@/components/DemoContainer.vue';
import DemoItem from '@/components/DemoItem.vue';
import { ref } from 'vue';

const value = ref('');
</script>

<template>
	<DemoContainer doc-url="https://uniapp.dcloud.net.cn/component/textarea.html">
		<DemoItem title="示例">
			<textarea v-model="value" placeholder="请输入" auto-height />
			<textarea v-model="value" placeholder="请输入" />
		</DemoItem>
	</DemoContainer>
</template>

<style lang="scss" scoped>
uni-textarea {
	width: 100%;
}
</style>