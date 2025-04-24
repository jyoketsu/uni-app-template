<script setup lang="ts">
import DemoContainer from '@/components/DemoContainer.vue';
import DemoItem from '@/components/DemoItem.vue';
import { ref } from 'vue';

// 打点 vue3不知道为什么【selected值改变时，视图不更新】
const selected = ref<any[]>([]);

const calendar = ref<any>(null);

const change = (e: any) => {
	console.log('change 返回:', e)
	// 模拟动态打卡
	if (selected.value.length > 5) return
	selected.value.push({
		date: e.fulldate,
		info: '打卡'
	})
}

const monthSwitch = (e: any) => {
	console.log('monthSwitchs 返回:', e)
}

const open = () => {
	// @ts-ignore
	const windowWidth = uni.getSystemInfoSync().windowWidth;
	if (windowWidth < 768) {
		calendar.value.open()
	} else {
		uni.showModal({
			title: '提示',
			content: '请在移动端查看日历',
			showCancel: false
		})
	}
}

const confirm = (e: any) => {
	console.log('confirm 返回:', e)
}

const close = () => {
	console.log('关闭日历')
}
</script>


<template>
	<DemoContainer doc-url="https://uniapp.dcloud.net.cn/component/uniui/uni-calendar.html">
		<DemoItem title="插入模式" style="width:100%">
			<uni-calendar :selected="selected" :showMonth="false" @change="change" @monthSwitch="monthSwitch" />
		</DemoItem>

		<DemoItem title="弹出模式" style="width:100%">
			<button class="calendar-button" type="button" @click="open">打开日历</button>

			<uni-calendar ref="calendar" :clear-date="true" :insert="false" :lunar="true" :range="true" @confirm="confirm"
				@close="close" />
		</DemoItem>
	</DemoContainer>
</template>

<style scoped>
.calendar-button {
	width: 100%;
}
</style>