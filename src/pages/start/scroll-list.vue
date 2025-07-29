<script setup lang="ts">
import { usePostStore } from '@/stores/post';
import { onLoad } from '@dcloudio/uni-app';
import { storeToRefs } from 'pinia';

const postStore = usePostStore();
const { getPostList, loadMore, refreshPostList, deleteById } = postStore;

const { current, total, refresh, refresherTriggered, postList, } = storeToRefs(postStore);

onLoad(() => {
	if (postList.value.length === 0) {
		postStore.getPostList();
	}
});
</script>

<template>
	<view class="container w-full flex flex-col overflow-hidden">
		<view class="w-full p-2 box-border">
			<text class="text-xl font-bold">局部滚动 & 下拉刷新</text>
		</view>
		<view class="flex-1 overflow-hidden">
			<scroll-view class="size-full" scroll-y refresher-enabled refresher-default-style="white"
				:refresher-threshold="100" :refresher-triggered="refresherTriggered" @scrolltolower="loadMore"
				@refresherrefresh="refreshPostList">
				<view v-for="(item) in postList" :key="item.id" class="p-2 box-border">
					<text>{{ item.title }}</text>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<style scoped>
.container {
	height: calc(100vh - var(--status-bar-height) - var(--window-top) - var(--window-bottom));
}
</style>