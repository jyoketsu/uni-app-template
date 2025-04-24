<script setup lang="ts">
import DemoContainer from '@/components/DemoContainer.vue';
import DemoItem from '@/components/DemoItem.vue';
import { ref } from 'vue';

const routes = ref([
	{
		to: "/pages/index/index",
		name: "首页",
	},
	{
		to: "",
		name: "菜单 A",
	},
	{
		to: "",
		name: "菜单 B",
	},
]);
</script>

<template>
	<DemoContainer doc-url="https://uniapp.dcloud.net.cn/component/uniui/uni-breadcrumb.html">
		<DemoItem title="示例" style="width:100%">
			<uni-breadcrumb separator="/">
				<uni-breadcrumb-item v-for="(route, index) in routes" :key="index" :to="route.to">
					{{ route.name }}
				</uni-breadcrumb-item>
			</uni-breadcrumb>
		</DemoItem>
	</DemoContainer>
</template>