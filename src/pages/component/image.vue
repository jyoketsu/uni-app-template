<script setup lang="ts">
import DemoContainer from '@/components/DemoContainer.vue';
import DemoItem from '@/components/DemoItem.vue';
import { ref } from 'vue';

const imageUrl = "https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/shuijiao.jpg";

const modeList = ['widthFix', 'heightFix', 'aspectFit', 'aspectFill', 'scaleToFill']
const mode = ref(modeList[0])

const handleModeChange = (e: any) => {
	mode.value = modeList[e.detail.value]
}
</script>

<template>
	<DemoContainer doc-url="https://uniapp.dcloud.net.cn/component/image.html">
		<picker @change="handleModeChange" :value="mode" :range="modeList">
			<view class="uni-input">{{ mode }}</view>
		</picker>
		<DemoItem title="示例" style="width:100%">
			<image style="width: 100%; height: 500px;background-color: black;" :mode="mode" :src="imageUrl" />
		</DemoItem>
	</DemoContainer>
</template>