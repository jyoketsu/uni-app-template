<script setup lang="ts">
import DemoContainer from '@/components/DemoContainer.vue';
import DemoItem from '@/components/DemoItem.vue';
import { ref } from 'vue';

const imageList = ref<string[]>([]);
const imageUrl = ref<string>('');
const uploading = ref<boolean>(false);

const handleChooseImage = (
	count: number = 9,
	sizeType: string[] = ['original', 'compressed'],
	sourceType: string[] = ['album', 'camera'],
	onSuccess?: (res: UniApp.ChooseImageSuccessCallbackResult) => void
) => {
	uni.chooseImage({
		count, // 默认9
		sizeType, // 可以指定是原图还是压缩图，默认二者都有
		sourceType, // 从相册选择或者拍摄
		success: function (res) {
			if (onSuccess) {
				onSuccess(res);
			}
		},
		fail: (err) => {
			console.log("err: ", err);
			// #ifdef MP
			if (err.errMsg.indexOf('cancel') !== '-1') {
				return;
			}
			uni.getSetting({
				success: (res: any) => {
					let authStatus = res.authSetting['scope.album'] && res.authSetting['scope.camera'];

					if (!authStatus) {
						uni.showModal({
							title: '授权失败',
							content: 'Hello uni-app需要从您的相机或相册获取图片，请在设置界面打开相关权限',
							success: (res) => {
								if (res.confirm) {
									uni.openSetting()
								}
							}
						})
					}
				}
			})
			// #endif
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

const handleAddImage = () => {
	handleChooseImage(6, ['original', 'compressed'], ['album', 'camera'], (res) => {
		imageList.value = imageList.value.concat(res.tempFilePaths);
	})
}

const handleUploadImage = () => {
	handleChooseImage(1, ['compressed'], ['album', 'camera'], (res) => {

		console.log('chooseImage success, temp path is', res.tempFilePaths[0]);
		const imageSrc = res.tempFilePaths[0];

		uploading.value = true;

		uni.uploadFile({
			// 仅为示例，非真实的接口地址
			url: 'https://unidemo.dcloud.net.cn/upload',
			filePath: imageSrc,
			fileType: 'image',
			name: 'data',
			formData: {
				'user': 'test'
			},
			success: (res) => {
				console.log('uploadImage success, res is:', res)
				uni.showToast({
					title: '上传成功',
					icon: 'success',
					duration: 1000
				})
				imageUrl.value = imageSrc;
			},
			fail: (err) => {
				console.log('uploadImage fail', err);
				uni.showModal({
					content: err.errMsg,
					showCancel: false
				});
			},
			complete: () => {
				uploading.value = false;
			}
		});
	})
}
</script>

<template>
	<DemoContainer doc-url="https://uniapp.dcloud.net.cn/api/media/image.html">
		<DemoItem class="w-full" title="选择图片 & 预览图片">
			<button @click="handleAddImage">选择或者拍摄图片</button>
			<text class="text-gray-500">{{ imageList.length ? '点击可预览选择的图片' : '还没有选择图片' }}</text>
			<view class="flex flex-wrap gap-2">
				<view v-for="(image, index) in imageList" :key="index" class="size-[105px]">
					<image class="size-full" :src="image" :data-src="image" mode="aspectFill" @click="handlePreviewImage" />
				</view>
			</view>
		</DemoItem>

		<DemoItem class="w-full" title="选择图片 & 上传图片">
			<button @click="handleUploadImage" :loading="uploading">选择或者拍摄图片</button>
			<view v-if="imageUrl" class="w-full h-[200px]">
				<image class="size-full" :src="imageUrl" mode="aspectFit" />
			</view>
		</DemoItem>
	</DemoContainer>
</template>

<style scoped>
button {
	width: 100%;
}
</style>