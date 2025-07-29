import { deletePost, fetchList } from '@/utils/api/post';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const usePostStore = defineStore('post', () => {
	const current = ref(1);
	const size = 20;
	const total = ref(0);

	const refresh = ref(0);
	const refresherTriggered = ref(false);

	const postList = ref<any[]>([]);

	const getPostList = async () => {
		const res = await fetchList({
			skip: (current.value - 1) * size,
			limit: size,
		});
		if (current.value === 1) {
			postList.value = res.posts;
		} else {
			postList.value.push(...res.posts);
		}
		total.value = res.total;
		refresherTriggered.value = false;
	};

	const loadMore = async () => {
		if (postList.value.length < total.value) {
			current.value++;
			await getPostList();
		} else {
			uni.showToast({
				title: "没有更多了",
				icon: "none",
			});
		}
	}

	const refreshPostList = async () => {
		current.value = 1;
		postList.value = [];
		refresherTriggered.value = true;
		await getPostList();
	}

	const deleteById = async (id: number) => {
		await deletePost(id);
		postList.value = postList.value.splice(postList.value.findIndex(item => item.id === id), 1);
	}

	return {
		current,
		total,
		refresh,
		refresherTriggered,
		postList,
		getPostList,
		loadMore,
		refreshPostList,
		deleteById
	};
});