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

const checkboxChange = (e: any) => {
	console.log(e.detail.value);
}
</script>

<template>
	<DemoContainer doc-url="https://uniapp.dcloud.net.cn/component/checkbox.html">
		<DemoItem title="示例" style="width:100%">
			<checkbox-group @change="checkboxChange">
				<label class="checkbox-wrapper" v-for="(item, index) in datas" :key="item.value">
					<view>
						<checkbox :value="item.value" :checked="index === 0" />
					</view>
					<view>{{ item.name }}</view>
				</label>
			</checkbox-group>
		</DemoItem>
	</DemoContainer>
</template>

<style scoped>
.checkbox-wrapper {
	display: flex;
	align-items: center;
	margin-bottom: 8px;
}
</style>