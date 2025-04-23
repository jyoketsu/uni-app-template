<script setup lang="ts">
import DemoContainer from '@/components/DemoContainer.vue';
import DemoItem from '@/components/DemoItem.vue';
import { computed } from 'vue';
import { ref } from 'vue';


const date = ref(new Date())
const years = computed(() => {
	const list = []
	for (let i = 1990; i <= date.value.getFullYear(); i++) {
		list.push(i)
	}
	return list
})
const year = ref(date.value.getFullYear())
const months = computed(() => {
	const list = []
	for (let i = 1; i <= 12; i++) {
		list.push(i)
	}
	return list
})
const month = ref(date.value.getMonth() + 1)
const days = computed(() => {
	const list = []
	for (let i = 1; i <= 31; i++) {
		list.push(i)
	}
	return list
})
const day = ref(date.value.getDate())

const value = ref([9999, month.value - 1, day.value - 1]);

const bindChange = (e: any) => {
	const val = e.detail.value
	year.value = years.value[val[0]]
	month.value = months.value[val[1]]
	day.value = days.value[val[2]]
}
</script>

<template>
	<DemoContainer doc-url="https://uniapp.dcloud.net.cn/component/picker-view.html">
		<DemoItem title="示例">
			<view class="uni-padding-wrap">
				<view class="uni-title">日期：{{ year }}年{{ month }}月{{ day }}日</view>
			</view>
			<picker-view indicator-style="height: 50px;" :value="value" @change="bindChange" class="picker-view">
				<picker-view-column>
					<view class="item" v-for="(item, index) in years" :key="index">{{ item }}年</view>
				</picker-view-column>
				<picker-view-column>
					<view class="item" v-for="(item, index) in months" :key="index">{{ item }}月</view>
				</picker-view-column>
				<picker-view-column>
					<view class="item" v-for="(item, index) in days" :key="index">{{ item }}日</view>
				</picker-view-column>
			</picker-view>
		</DemoItem>
	</DemoContainer>
</template>

<style lang="scss" scoped>
.picker-view {
	width: 750rpx;
	height: 600rpx;
	margin-top: 20rpx;
}

.item {
	line-height: 100rpx;
	text-align: center;
}
</style>