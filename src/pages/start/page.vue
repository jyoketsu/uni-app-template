<script setup lang="ts">
import { onHide, onLoad, onReady, onResize, onShow, onUnload } from '@dcloudio/uni-app';
import Route from './route.vue';
import { ref } from 'vue';
import DemoItem from '@/components/DemoItem.vue';
import DemoContainer from '@/components/DemoContainer.vue';

const routeType = ref<'navigator' | 'api'>('navigator');

onLoad(() => {
	// 接受上页的参数，联网取数据，更新data
	console.log('---page lifecycle: onLoad---');

	const app = getApp();
	console.log('---app---', app.globalData)

	const currentPages = getCurrentPages();
	console.log('---currentPages---', currentPages);

})

onShow(() => {
	console.log('---page lifecycle: onShow---');
})

onReady(() => {
	console.log('---page lifecycle: onReady---');
})

onHide(() => {
	console.log('---page lifecycle: onHide---');
})

onUnload(() => {
	console.log('---page lifecycle: onUnload---');
	uni.$off('test'); // 卸载页面时，移除事件监听
})

onResize(() => {
	console.log('---page lifecycle: onResize---');
});

const handleEmit = () => {
	uni.$emit('test', { msg: '这是测试消息' });
}

// $emit、$on、$off常用于跨页面、跨组件通讯，这里为了方便演示放在同一个页面
// 一次性事件，使用 uni.$once
uni.$on('test', function (data) {
	console.log(`监听到事件来自 test ，携带参数 msg 为： ${data.msg}`);

	uni.showToast({
		title: data.msg,
		duration: 2000
	});
	console.log();
})

const radioChange = (e: any) => {
	routeType.value = e.detail.value;
}

</script>

<template>
	<DemoContainer doc-url="https://uniapp.dcloud.net.cn/tutorial/page.html">
		<DemoItem title="生命周期">
			<uni-link href="http://uniapp.dcloud.net.cn/tutorial/page.html#lifecycle" text="页面生命周期"></uni-link>
		</DemoItem>

		<DemoItem title="页面调用接口">
			<uni-link
				href="https://uniapp.dcloud.net.cn/tutorial/page.html#%E9%A1%B5%E9%9D%A2%E8%B0%83%E7%94%A8%E6%8E%A5%E5%8F%A3"
				text="页面调用接口"></uni-link>
		</DemoItem>

		<DemoItem title="页面通讯" style="width: 100%;">
			<button @click="handleEmit" style="width: 100%;">发送消息</button>
		</DemoItem>

		<DemoItem title="路由" style="width: 100%;">
			<radio-group class="route-radio-group" @change="radioChange">
				<label class="route-radio">
					<view>
						<radio value="navigator" :checked="routeType === 'navigator'" color="#2b9939" />
					</view>
					<view>navigator</view>
				</label>
				<label class="route-radio">
					<view>
						<radio value="api" :checked="routeType === 'api'" color="#2b9939" />
					</view>
					<view>api</view>
				</label>
			</radio-group>

			<Route :type="routeType" style="width: 100%;" />
		</DemoItem>
	</DemoContainer>
</template>

<style scoped>
.route-radio-group,
.route-radio {
	display: flex;
	align-items: center;
}

.route-radio-group {
	column-gap: 25rpx;
}
</style>