<script setup lang="ts">
import DemoContainer from '@/components/DemoContainer.vue';
import DemoItem from '@/components/DemoItem.vue';
import { ref } from 'vue';

const iconType = ref(
	// #ifdef APP-PLUS|| MP-WEIXIN || H5
	['success', 'success_no_circle', 'info', 'warn', 'waiting', 'cancel', 'download', 'search', 'clear']
	// #endif
	// #ifdef MP-ALIPAY
	['info', 'warn', 'waiting', 'cancel', 'download', 'search', 'clear', 'success', 'success_no_circle', 'loading']
	// #endif
	// #ifdef MP-BAIDU
	['success', 'info', 'warn', 'waiting', 'success_no_circle', 'clear', 'search', 'personal', 'setting', 'top', 'close', 'cancel', 'download', 'checkboxSelected', 'radioSelected', 'radioUnselect']
	// #endif
);
</script>

<template>
	<DemoContainer doc-url="https://uniapp.dcloud.net.cn/component/icon.html">
		<DemoItem title="示例">
			<view class="icon-wrapper">
				<view class="item" v-for="(value, index) in iconType" :key="index">
					<icon :type="value" size="26" />
					<text>{{ value }}</text>
				</view>
			</view>
		</DemoItem>
	</DemoContainer>
</template>

<style scoped>
.icon-wrapper {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	column-gap: 25px;
	row-gap: 25px;
}

.item {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
</style>