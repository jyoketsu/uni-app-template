<script setup lang="ts">
import DemoContainer from '@/components/DemoContainer.vue';
import DemoItem from '@/components/DemoItem.vue';
import { ref } from 'vue';

const value = ref('');
</script>

<template>
	<DemoContainer doc-url="https://uniapp.dcloud.net.cn/component/input.html">
		<DemoItem title="示例">
			<input class="uni-input" v-model="value" focus placeholder="请输入" />
			<input class="uni-input" type="number" placeholder="这是一个数字输入框" />
		</DemoItem>
	</DemoContainer>
</template>

<style lang="scss" scoped></style>