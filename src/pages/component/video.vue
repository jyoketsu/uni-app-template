<script setup lang="ts">
import DemoContainer from '@/components/DemoContainer.vue';
import DemoItem from '@/components/DemoItem.vue';
import { onReady } from '@dcloudio/uni-app';
import { ref } from 'vue';

const danmuList = ref([{
	text: '第 1s 出现的弹幕',
	color: '#ff0000',
	time: 1
},
{
	text: '第 3s 出现的弹幕',
	color: '#ff00ff',
	time: 3
}
]);

const danmuValue = ref('');
const videoContext = ref<any>();

onReady(() => {
	videoContext.value = uni.createVideoContext('myVideo');
})

const videoErrorCallback = (e: any) => {
	uni.showModal({
		content: e.target.errMsg,
		showCancel: false
	})
}

const getRandomColor = () => {
	const rgb = []
	for (let i = 0; i < 3; ++i) {
		let color = Math.floor(Math.random() * 256).toString(16)
		color = color.length == 1 ? '0' + color : color
		rgb.push(color)
	}
	return '#' + rgb.join('')
}

const sendDanmu = () => {
	videoContext.value.sendDanmu({
		text: danmuValue.value,
		color: getRandomColor()
	});
	danmuValue.value = '';
}
</script>

<template>
	<DemoContainer doc-url="https://uniapp.dcloud.net.cn/component/video.html">
		<DemoItem title="示例" style="width:100%">
			<video id="myVideo" src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/2minute-demo.mp4"
				@error="videoErrorCallback" :danmu-list="danmuList" enable-danmu danmu-btn controls />
			<view class="danmu-btn-wrapper">
				<input v-model="danmuValue" type="text" placeholder="在此处输入弹幕内容" />
				<button @click="sendDanmu">发送弹幕</button>
			</view>
		</DemoItem>
	</DemoContainer>
</template>

<style scoped>
#myVideo {
	width: 100%;
	height: 400px;
}

.danmu-btn-wrapper {
	display: flex;
	flex-direction: column;
	row-gap: 12px;
}

.danmu-btn-wrapper>button {
	width: 100%;
}
</style>