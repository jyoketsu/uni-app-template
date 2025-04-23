<script setup lang="ts">
import DemoContainer from '@/components/DemoContainer.vue';
import DemoItem from '@/components/DemoItem.vue';
import { ref } from 'vue';

const datas = ref([{
	value: 'ps5',
	name: 'PlayStation 5',
}, {
	value: 'switch',
	name: 'Nintendo Switch',
}, {
	value: 'xbox',
	name: 'Xbox Series X',
},]);

const current = ref('ps5');

const radioChange = (e: any) => {
	console.log(e.detail.value);
}
</script>

<template>
	<DemoContainer doc-url="https://uniapp.dcloud.net.cn/component/radio.html">
		<DemoItem title="示例">
			<radio-group @change="radioChange">
				<label class="radio-wrapper" v-for="(item, index) in datas" :key="item.value">
					<view>
						<radio :value="item.value" :checked="item.value === current" />
					</view>
					<view>{{ item.name }}</view>
				</label>
			</radio-group>
		</DemoItem>
	</DemoContainer>
</template>

<style lang="scss" scoped>
.radio-wrapper {
	display: flex;
	align-items: center;
	margin-bottom: 8px;
}
</style>