<script setup lang="ts">
import DemoContainer from '@/components/DemoContainer.vue';
import DemoItem from '@/components/DemoItem.vue';
import { ref } from 'vue';

const systemInfo = ref<any>(null);
const deviceInfo = ref<any>(null);

const getSystemInfo = () => {
	systemInfo.value = uni.getSystemInfoSync();
}

const getDeviceInfo = () => {
	deviceInfo.value = uni.getDeviceInfo();
	console.log('deviceInfo', deviceInfo.value);

}
</script>

<template>
	<DemoContainer doc-url="https://uniapp.dcloud.net.cn/api/system/info.html">
		<DemoItem title="示例" style="width:100%">
			<view v-if="systemInfo">
				<view class="system-info-item">
					<view>设备型号</view><text>{{ systemInfo.model }}</text>
				</view>
				<view class="system-info-item">
					<view>客户端平台</view><text>{{ systemInfo.platform }}</text>
				</view>
				<view class="system-info-item">
					<view>操作系统版本</view><text>{{ systemInfo.system }}</text>
				</view>
				<view class="system-info-item">
					<view>语言</view><text>{{ systemInfo.language }}</text>
				</view>
				<view class="system-info-item">
					<view>版本</view><text>{{ systemInfo.version }}</text>
				</view>
				<view class="system-info-item">
					<view>语言</view><text>{{ systemInfo.language }}</text>
				</view>
				<view class="system-info-item">
					<view>屏幕宽度</view><text>{{ systemInfo.screenWidth }}</text>
				</view>
				<view class="system-info-item">
					<view>屏幕高度</view><text>{{ systemInfo.screenHeight }}</text>
				</view>
				<view class="system-info-item">
					<view>设备方向</view><text>{{ systemInfo.deviceOrientation }}</text>
				</view>
				<view class="system-info-item">
					<view>可使用窗口高度</view><text>{{ systemInfo.windowHeight }}</text>
				</view>
				<view class="system-info-item">
					<view>可使用窗口的顶部位置</view><text>{{ systemInfo.windowTop }}</text>
				</view>
				<view class="system-info-item">
					<view>可使用窗口的底部位置</view><text>{{ systemInfo.windowBottom }}</text>
				</view>
				<view class="system-info-item">
					<view>状态栏的高度</view><text>{{ systemInfo.statusBarHeight }}</text>
				</view>
				<view class="system-info-item">
					<view>DPI</view><text>{{ systemInfo.pixelRatio }}</text>
				</view>
				<!-- #ifdef MP -->
				<view class="system-info-item">
					<view>基础库版本</view><text>{{ systemInfo.SDKVersion }}</text>
				</view>
				<!-- #endif -->
			</view>
			<button @click="getSystemInfo">获取设备系统信息</button>

			<view v-if="deviceInfo">
				<view class="system-info-item">
					<view>设备品牌</view><text>{{ deviceInfo.deviceBrand }}</text>
				</view>
				<view class="system-info-item">
					<view>设备 id</view><text>{{ deviceInfo.deviceId }}</text>
				</view>
				<view class="system-info-item">
					<view>设备型号</view><text>{{ deviceInfo.deviceModel }}</text>
				</view>
				<view class="system-info-item">
					<view>设备类型</view><text>{{ deviceInfo.deviceType }}</text>
				</view>
				<view class="system-info-item">
					<view>设备方向</view><text>{{ deviceInfo.deviceOrientation }}</text>
				</view>
				<view class="system-info-item">
					<view>操作系统及版本</view><text>{{ deviceInfo.system }}</text>
				</view>
			</view>
			<button @click="getDeviceInfo">获取设备基础信息</button>
		</DemoItem>
	</DemoContainer>
</template>

<style scoped>
button {
	width: 100%;
}

.system-info-item {
	display: grid;
	grid-template-columns: 200px 1fr;
	gap: 10px;
}
</style>