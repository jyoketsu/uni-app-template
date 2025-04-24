<script setup lang="ts">
import DemoContainer from '@/components/DemoContainer.vue';
import DemoItem from '@/components/DemoItem.vue';
import { onLoad, onUnload } from '@dcloudio/uni-app';
import { ref } from 'vue';

const animationData = ref('');
const animation = ref<any>();

onLoad(() => {
	animation.value = uni.createAnimation()
});

onUnload(() => {
	animation.value = null;
	animationData.value = '';
})

const rotate = () => {
	animation.value.rotate(Math.random() * 720 - 360).step()
	animationData.value = animation.value.export()
}

const scale = () => {
	animation.value.scale(Math.random() * 2).step()
	animationData.value = animation.value.export()
}

const translate = () => {
	animation.value.translate(Math.random() * 100 - 50, Math.random() * 100 - 50).step()
	animationData.value = animation.value.export()
}

const skew = () => {
	animation.value.skew(Math.random() * 90, Math.random() * 90).step()
	animationData.value = animation.value.export()
}

const rotateAndScale = () => {
	animation.value.rotate(Math.random() * 720 - 360)
		.scale(Math.random() * 2)
		.step()
	animationData.value = animation.value.export()
}

const rotateThenScale = () => {
	animation.value.rotate(Math.random() * 720 - 360).step()
		.scale(Math.random() * 2).step()
	animationData.value = animation.value.export()
}

const all = () => {
	animation.value.rotate(Math.random() * 720 - 360)
		.scale(Math.random() * 2)
		.translate(Math.random() * 100 - 50, Math.random() * 100 - 50)
		.skew(Math.random() * 90, Math.random() * 90)
		.step()
	animationData.value = animation.value.export()
}

const allInQueue = () => {
	animation.value.rotate(Math.random() * 720 - 360).step()
		.scale(Math.random() * 2).step()
		.translate(Math.random() * 100 - 50, Math.random() * 100 - 50).step()
		.skew(Math.random() * 90, Math.random() * 90).step()
	animationData.value = animation.value.export()
}

const reset = () => {
	animation.value.rotate(0, 0)
		.scale(1)
		.translate(0, 0)
		.skew(0, 0)
		.step({ duration: 0 })
	animationData.value = animation.value.export()
}
</script>


<template>
	<DemoContainer doc-url="https://uniapp.dcloud.net.cn/api/ui/animation.html">
		<DemoItem title="示例" style="width: 100%;">
			<view class="animation-element-wrapper">
				<view class="animation-element" :animation="animationData"></view>
			</view>

			<view class="animation-buttons" scroll-y="true">
				<button class="animation-button" @click="rotate">旋转</button>
				<button class="animation-button" @click="scale">缩放</button>
				<button class="animation-button" @click="translate">移动</button>
				<button class="animation-button" @click="skew">倾斜</button>
				<button class="animation-button" @click="rotateAndScale">旋转并缩放</button>
				<button class="animation-button" @click="rotateThenScale">旋转后缩放</button>
				<button class="animation-button" @click="all">同时展示全部</button>
				<button class="animation-button" @click="allInQueue">顺序展示全部</button>
			</view>
			<button class="animation-button animation-button-reset" @tap="reset">还原</button>
		</DemoItem>
	</DemoContainer>
</template>

<style lang="scss" scoped>
.animation-element-wrapper {
	display: flex;
	width: 100%;
	padding-top: 150rpx;
	padding-bottom: 150rpx;
	justify-content: center;
	overflow: hidden;
	background-color: $uni-bg-color-grey;
}

.animation-element {
	width: 200rpx;
	height: 200rpx;
	background-color: $uni-color-primary;
}

.animation-buttons {
	width: 100%;
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-gap: 20rpx;
	padding: 20rpx 0;
}

.animation-button {
	width: 100%;
}

@media (prefers-color-scheme: dark) {
	.animation-element-wrapper {
		background-color: $uni-bg-color-grey-inverse;
	}
}
</style>