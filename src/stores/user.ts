import { getUserInfo as getUserInfoApi, logout as logoutApi } from '@/utils/api/auth';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useUserStore = defineStore('user', () => {
	const userInfo = ref<{ username: string, avatar: string } | null>(null);

	const getUserInfo = async () => {
		const token = uni.getStorageSync('token');
		if (!token) {
			userInfo.value = null;
			return;
		}
		try {
			const res: any = await getUserInfoApi();
			if (res && res.data) {
				userInfo.value = {
					username: res.data.username,
					avatar: res.data.avatar
				};
			}
		} catch (error) {
			userInfo.value = null;
		}
	};

	const logout = async () => {
		try {
			const token = uni.getStorageSync('token');
			const refreshToken = uni.getStorageSync('refreshToken');
			const res: any = await logoutApi(token, refreshToken);
			if (res.code===200) {
				userInfo.value = null;
				uni.removeStorageSync('token');
				uni.removeStorageSync('refreshToken');
			}
		} catch (error) {
			userInfo.value = null;
		}
	}

	const setUserInfo = async (username: string, avatar: string) => {
		userInfo.value = { username, avatar };
	};

	return {
		userInfo,
		getUserInfo,
		setUserInfo,
		logout,
	};
});