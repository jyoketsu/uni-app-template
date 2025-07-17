<script setup lang="ts">
import DemoContainer from '@/components/DemoContainer.vue';
import DemoItem from '@/components/DemoItem.vue';
import { ref } from 'vue';

const imageList = ref<string[]>([]);

const handleChooseImage = () => {
	uni.chooseImage({
		count: 6, // 默认9
		sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
		sourceType: ['album', 'camera'], // 从相册选择或者拍摄
		success: function (res) {
			console.log(res);
			imageList.value = imageList.value.concat(res.tempFilePaths);
		}
	});
}

const handlePreviewImage = (e: any) => {
	uni.previewImage({
		// current 为当前显示图片的链接/索引值
		current: e.currentTarget.dataset.src,
		urls: imageList.value,
		showmenu: true,
	});
}
</script>

<template>
	<DemoContainer doc-url="https://uniapp.dcloud.net.cn/api/media/image.html">
		<DemoItem title="选择图片" style="width:100%">
			<button @click="handleChooseImage">选择或者拍摄图片</button>
			<text class="text-gray-500">{{ imageList.length ? '点击可预览选择的图片' : '还没有选择图片' }}</text>
			<view class="flex flex-wrap gap-2">
				<view v-for="(image, index) in imageList" :key="index" class="size-[105px]">
					<image class="size-full" :src="image" :data-src="image" mode="aspectFill" @click="handlePreviewImage" />
				</view>
			</view>
		</DemoItem>
	</DemoContainer>
</template>

<style scoped>
button {
	width: 100%;
}
</style>