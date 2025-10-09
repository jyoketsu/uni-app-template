import { getUserInfo as getUserInfoApi, logout as logoutApi, updateUserInfo } from '@/utils/api/auth';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useUserStore = defineStore('user', () => {
	const userInfo = ref<any>(null);

	const getUserInfo = async () => {
		const token = uni.getStorageSync('token');
		if (!token) {
			userInfo.value = null;
			return;
		}
		try {
			const res: any = await getUserInfoApi();
			if (res && res.data) {
				userInfo.value = res.data;
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
			if (res.code === 200) {
				userInfo.value = null;
				uni.removeStorageSync('token');
				uni.removeStorageSync('refreshToken');
			}
		} catch (error) {
			userInfo.value = null;
		}
	}

	const setUserInfo = (data: any) => {
		userInfo.value = data;
	};

	const updateUser = async (data: any) => {
		await updateUserInfo(data);
		userInfo.value = data;
	}

	return {
		userInfo,
		getUserInfo,
		setUserInfo,
		logout,
		updateUser,
	};
});