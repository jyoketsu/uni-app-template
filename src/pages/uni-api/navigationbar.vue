<script setup lang="ts">
import DemoContainer from '@/components/DemoContainer.vue';
import DemoItem from '@/components/DemoItem.vue';
import { onReady, onShow } from '@dcloudio/uni-app';
import { ref } from 'vue';

const title = ref('设置导航条-新的标题');

onReady(() => {
	uni.setNavigationBarTitle({
		title: title.value
	});
})

const handleSetNavigationBarTitle = () => {
	uni.setNavigationBarTitle({
		title: title.value
	});
}

const handleSetNavigationBarColor = () => {
	// 如果需要在页面进入时设置标题，可以在onReady内执行
	uni.setNavigationBarColor({
		frontColor: '#ffffff', // 仅支持 #ffffff 和 #000000
		backgroundColor: '#DB4D6D',
		animation: {
			duration: 400,
			timingFunc: 'easeIn'
		}
	})
}

const handleShowNavigationBarLoading = () => {
	uni.showNavigationBarLoading();
}

const handleHideNavigationBarLoading = () => {
	uni.hideNavigationBarLoading();
}

const handleHideHomeButton = () => {
	// #ifdef MP-WEIXIN || MP-JD
	uni.hideHomeButton();
	// #else
	uni.showToast({
		title: '当前平台不支持',
		icon: 'none'
	});
	// #endif
}
</script>

<template>
	<DemoContainer doc-url="https://uniapp.dcloud.net.cn/api/ui/navigationbar.html">
		<DemoItem title="setNavigationBarTitle" style="width:100%">
			<input v-model="title" placeholder="请输入导航条标题" />
			<button @click="handleSetNavigationBarTitle()">
				设置导航条标题
			</button>
		</DemoItem>

		<DemoItem title="setNavigationBarColor" style="width: 100%;">
			<button @click="handleSetNavigationBarColor()">
				设置导航条颜色
			</button>
		</DemoItem>

		<DemoItem title="showNavigationBarLoading" style="width: 100%;">
			<button @click="handleShowNavigationBarLoading">显示导航条加载动画</button>
			<button @click="handleHideNavigationBarLoading">隐藏导航条加载动画</button>
		</DemoItem>

		<DemoItem title="hideHomeButton" style="width:100%">
			<button @click="handleHideHomeButton">隐藏返回首页按钮</button>
		</DemoItem>
	</DemoContainer>

</template>

<style scoped>
button {
	width: 100%;
}
</style>