<script setup lang="ts">
import DemoContainer from '@/components/DemoContainer.vue';
import DemoItem from '@/components/DemoItem.vue';
import { ref } from 'vue';

const value = ref(false);

const switchChange = (e: any) => {
	value.value = e.detail.value;
	console.log('switch1 发生 change 事件，携带值为', e.detail.value)
}
</script>

<template>
	<DemoContainer doc-url="https://uniapp.dcloud.net.cn/component/switch.html">
		<DemoItem title="示例">
			<switch :checked="value" @change="switchChange" />
			<view>
				<switch checked color="#FFCC33" style="transform:scale(0.7)" />
			</view>
		</DemoItem>
	</DemoContainer>
</template>

<style lang="scss" scoped></style>