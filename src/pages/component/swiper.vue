<script setup lang="ts">
import DemoContainer from '@/components/DemoContainer.vue';
import DemoItem from '@/components/DemoItem.vue';
import { ref } from 'vue';

// 是否显示面板指示点	
const indicatorDots = ref(true);
// 是否自动切换	
const autoplay = ref(true);
// 自动切换时间间隔	
const interval = ref(2000);
// 滑动动画时长	
const duration = ref(500);
</script>

<template>
	<DemoContainer doc-url="https://uniapp.dcloud.net.cn/component/swiper.html">
		<DemoItem title="示例" style="width: 100%;">
			<swiper class="swiper" circular :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval"
				:duration="duration">
				<swiper-item>
					<view class="swiper-item">A</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item">B</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item">C</view>
				</swiper-item>
			</swiper>
		</DemoItem>
	</DemoContainer>
</template>

<style scoped>
.swiper {
	width: 100%;
	height: 400rpx;
}
</style>