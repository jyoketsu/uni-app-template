<script setup lang="ts">
import DemoContainer from '@/components/DemoContainer.vue';
import DemoItem from '@/components/DemoItem.vue';

</script>

<template>
	<DemoContainer doc-url="https://uniapp.dcloud.net.cn/component/button.html">
		<DemoItem title="示例" style="width:100%">
			<view class="button-wrapper">
				<button type="primary">Primary normal</button>
				<button type="primary" loading="true">Primary loading</button>
				<button type="primary" disabled="true">Primary disabled</button>
				<button type="default">Default normal</button>
				<button type="default" disabled="true">Default disabled</button>
				<button type="warn">Warn normal</button>
				<button type="warn" disabled="true">Warn disabled</button>
				<button type="primary" plain="true">Primary plain</button>
				<button type="primary" plain="true" disabled="true">Primary plain disabled</button>
				<button type="default" plain="true">Default plain</button>
				<button type="default" plain="true" disabled="true">Default plain</button>
			</view>
			<view class="mini-button-wrapper">
				<button class="mini-btn" type="primary" size="mini">Mini primary</button>
				<button class="mini-btn" type="default" size="mini">Mini default</button>
				<button class="mini-btn" type="warn" size="mini">Mini warn</button>
			</view>
		</DemoItem>
	</DemoContainer>
</template>

<style scoped>
.button-wrapper {
	width: 100%;
	display: flex;
	flex-direction: column;
	row-gap: 8px;
}

.button-wrapper>button {
	width: 100%;
}

.mini-button-wrapper {
	width: 100%;
	padding: 25px 0;
	display: flex;
	flex-direction: row;
	column-gap: 8px;
}
</style>