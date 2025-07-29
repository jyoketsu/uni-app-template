<script setup lang="ts">
const props = defineProps<{ type: 'navigator' | 'api' }>()

const navigateTo = () => {
	uni.navigateTo({
		url: '/pages/start/test?id=1&name=test'
	});
}

const navigateBack = () => {
	uni.navigateBack({
		delta: 1
	});
}

const redirectTo = () => {
	uni.redirectTo({
		url: '/pages/start/adapt'
	});
}

const switchTab = () => {
	// 跳转到tabBar页面只能使用 switchTab 跳转
	uni.switchTab({
		// url需指向tabBar中的pagePath
		url: '/pages/component/index'
	});
}

const reLaunch = () => {
	uni.reLaunch({
		url: '/pages/start/page'
	});
}
</script>

<template>
	<view class="container">
		<template v-if="props.type === 'navigator'">
			<view class="content buttons">
				<uni-link href="https://uniapp.dcloud.net.cn/component/navigator" text="navigator"></uni-link>
				<navigator url="/pages/start/test?id=1&name=test">
					<button>跳转页面并传递参数</button>
				</navigator>

				<navigator open-type="navigateBack">
					<button>返回</button>
				</navigator>

				<navigator url="/pages/start/adapt" open-type="redirect">
					<button>重定向</button>
				</navigator>

				<!-- url需指向tabBar中的pagePath -->
				<navigator url="/pages/component/index" open-type="switchTab">
					<button>跳转到tabBar</button>
				</navigator>

				<navigator url="/pages/start/page" open-type="reLaunch">
					<button>重新加载</button>
				</navigator>

			</view>
		</template>
		<template v-else>
			<view class="content buttons">
				<uni-link href="https://uniapp.dcloud.net.cn/api/router" text="Router API"></uni-link>
				<button style="width: 100%;" @click="navigateTo">跳转页面并传递参数</button>
				<button style="width: 100%;" @click="navigateBack">返回</button>
				<button style="width: 100%;" @click="redirectTo">重定向</button>
				<button style="width: 100%;" @click="switchTab">跳转到tabBar</button>
				<button style="width: 100%;" @click="reLaunch">重新加载</button>
			</view>
		</template>
	</view>
</template>

<style scoped>
.container {
	width: 100%;
}

.content.buttons {
	align-items: unset;
	padding: unset;
}
</style>