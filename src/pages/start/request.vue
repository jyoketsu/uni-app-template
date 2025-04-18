<script setup lang="ts">
import DemoContainer from '@/components/DemoContainer.vue';
import DemoItem from '@/components/DemoItem.vue';
import { ref } from 'vue';

const list = ref<any[]>([]);
const response = ref<any>(null);

const handleGetRequest = async () => {
	const res: any = await uni.request({
		url: 'https://dummyjson.com/posts',
		data: {
			limit: 10
		},
		header: {
			'custom-header': 'hello' //自定义请求头信息
		},
	});

	list.value = res.data.posts;
}


const handlePostRequest = async () => {
	const res = await uni.request({
		url: 'https://dummyjson.com/posts/add',
		method: 'POST',
		data: {
			title: 'Test',
			userId: 5
		}
	});

	response.value = res.data;

	uni.showToast({
		title: '创建成功',
		icon: 'success',
		duration: 2000
	})
}
</script>

<template>
	<DemoContainer doc-url="https://uniapp.dcloud.net.cn/api/request/request.html">
		<DemoItem title="GET" style="width: 100%;">
			<button class="request-button" @click="handleGetRequest">发起Get请求</button>

			<uni-section title="文章列表" type="line">
				<uni-list v-if="list.length">
					<uni-list-item v-for="item in list" :key="item.id" :title="item.title" :rightText="`阅读：${item.views}`" />
				</uni-list>
				<view v-else class="empty">
					<text>暂无数据</text>
				</view>
			</uni-section>
		</DemoItem>

		<DemoItem title="POST" style="width: 100%;">
			<button class="request-button" @click="handlePostRequest">发起Post请求</button>
			<view v-if="response" class="response">
				<text>返回数据：</text>
				<text>{{ response }}</text>
			</view>
		</DemoItem>
	</DemoContainer>
</template>

<style scoped>
.request-button {
	width: 100%;
	margin-bottom: 12px;
}

.empty {
	text-align: center;
	padding-bottom: 15px;
}

.response {
	display: flex;
	flex-direction: column;
}
</style>