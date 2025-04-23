<script setup lang="ts">
import DemoContainer from '@/components/DemoContainer.vue';
import DemoItem from '@/components/DemoItem.vue';
import { ref } from 'vue';

const value = ref(60);

const sliderChange = (e: any) => {
	console.log('value 发生变化：' + e.detail.value)
}
</script>

<template>
	<DemoContainer doc-url="https://uniapp.dcloud.net.cn/component/slider.html">
		<DemoItem title="设置step:5" style="width: 100%;">
			<slider value="60" @change="sliderChange" step="5" />
		</DemoItem>

		<DemoItem title="显示当前value" style="width: 100%;">
			<slider value="60" show-value />
		</DemoItem>

		<DemoItem title="设置最大值和最小值" style="width: 100%;">
			<slider value="100" min="50" max="200" show-value />
		</DemoItem>

		<DemoItem title="不同颜色和大小的滑块" style="width: 100%;">
			<slider value="50" @change="sliderChange" activeColor="#FFCC33" backgroundColor="#000000" block-color="#8A6DE9"
				block-size="20" />
		</DemoItem>
	</DemoContainer>
</template>

<style lang="scss" scoped></style>