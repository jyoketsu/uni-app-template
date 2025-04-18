<script setup lang="ts">
import DemoContainer from '@/components/DemoContainer.vue';
import DemoItem from '@/components/DemoItem.vue';

const handlePostRequest = () => {
	uni.request({
		url: 'https://dummyjson.com/posts/add',
		method: 'POST',
	});
}
</script>

<template>
	<DemoContainer doc-url="https://uniapp.dcloud.net.cn/api/request/request.html">
		<DemoItem title="Request拦截器" style="width: 100%;">
			<button class="request-button" @click="handlePostRequest">发起请求</button>
		</DemoItem>
	</DemoContainer>
</template>

<style scoped>
.request-button {
	width: 100%;
	margin-bottom: 12px;
}
</style>