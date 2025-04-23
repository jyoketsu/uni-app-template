<script setup lang="ts">
import DemoContainer from '@/components/DemoContainer.vue';
import DemoItem from '@/components/DemoItem.vue';

const handleShowToastSuccess = () => {
	uni.showToast({
		title: '最多7个汉字长度',
		icon: 'fail',
		duration: 2000
	})
}

const handleShowToastError = () => {
	uni.showToast({
		title: '最多7个汉字长度',
		icon: 'error',
		duration: 2000
	})
}

const handleShowToastLoading = () => {
	uni.showToast({
		title: '加载中...',
		icon: 'loading',
		mask: true,
		duration: 2000
	})
}

const handleShowToastNone = () => {
	uni.showToast({
		title: '标题，小程序可显示两行',
		icon: 'none',
		duration: 2000
	})
}

const handleHideToast = () => {
	uni.hideToast();
}

const handleShowLoading = () => {
	uni.showLoading({
		title: '加载中...',
		// mask: true
	})
}

const handleHideLoading = () => {
	uni.hideLoading();
}

const handleShowModal = () => {
	uni.showModal({
		title: '提示',
		content: '这是一个模态弹窗',
		showCancel: false
	})
}

const handleShowActionSheet = () => {
	uni.showActionSheet({
		itemList: ['A', 'B', 'C'],
		success: function (res) {
			uni.showToast({
				title: '选中了第' + (res.tapIndex + 1) + '个按钮',
				icon: 'none',
				duration: 2000
			})
		},
		fail: function (res) {
			console.log(res.errMsg);
		}
	})
}
</script>

<template>
	<DemoContainer doc-url="https://uniapp.dcloud.net.cn/api/ui/prompt.html">
		<DemoItem title="showToast" style="width: 100%;">
			<button @click="handleShowToastSuccess()">
				success
			</button>
			<button @click="handleShowToastError()">
				error
			</button>
			<button @click="handleShowToastLoading()">
				loading
			</button>
			<button @click="handleShowToastNone()">
				none
			</button>
			<button @click="handleHideToast()">
				隐藏toast
			</button>
		</DemoItem>

		<DemoItem title="showLoading" style="width: 100%;">
			<button @click="handleShowLoading()">
				显示loading
			</button>
			<button @click="handleHideLoading()">
				隐藏loading
			</button>
		</DemoItem>

		<DemoItem title="showModal" style="width: 100%;">
			<button @click="handleShowModal()">
				显示modal
			</button>
		</DemoItem>

		<DemoItem title="showActionSheet" style="width: 100%;">
			<button @click="handleShowActionSheet()">
				显示actionsheet
			</button>
		</DemoItem>
	</DemoContainer>
</template>

<style scoped>
button {
	width: 100%;
}
</style>