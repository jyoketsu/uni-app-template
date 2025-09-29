<script setup lang="ts">
import DemoContainer from '@/components/DemoContainer.vue';
import { wechatLogin } from '@/utils/api/auth';
import { ref } from 'vue';
import { useUserStore } from '@/stores/user';
import { storeToRefs } from 'pinia';
import { User } from '@/interface/User';

const { userInfo } = storeToRefs(useUserStore());
const { setUserInfo, logout, updateUser } = useUserStore();

const handleLogin = () => {
	uni.getProvider({
		service: 'oauth',
		success: function (res) {
			// @ts-ignore
			if (~res.provider.indexOf('weixin')) {
				uni.getUserProfile({
					desc: '获取用户信息',
					success: (profileRes) => {
						console.log('用户信息:', profileRes.userInfo);
						uni.login({
							provider: 'weixin',
							success: async (loginRes) => {
								// 发送code到后端
								const res = await wechatLogin({ code: loginRes.code });
								setUserInfo(res.data);
								// 登录请求成功后，从res.data.accessToken获取Token，存储到Storage。
								uni.setStorageSync('token', res.data.accessToken);
								uni.setStorageSync('refreshToken', res.data.refreshToken);
								// 小程序后续请求在header中携带Authorization: Bearer <token>
							}
						});
					}
				});
			}
		}
	});
}

const handleLogout = () => {
	logout();
}

const handleChooseAvatar = (res: any) => {
	// 处理选择头像事件
	const avatarUrl = res.detail.avatarUrl;
	setUserInfo({
		...userInfo.value,
		avatar: avatarUrl
	} as User);
}
</script>

<template>
	<DemoContainer doc-url="https://uniapp.dcloud.net.cn/api/plugins/login.html">
		<!--  #ifdef MP-WEIXIN  -->
		<button v-if="!userInfo" @click="handleLogin">微信登录</button>
		<button v-else @click="handleLogout">退出登录</button>
		<!-- #else -->
		<text>请在微信小程序中打开</text>
		<!-- #endif -->
		<view v-if="userInfo" class="user-info">
			<view class="relative size-[50px]">
				<button class="absolute inset-0 opacity-0" open-type="chooseAvatar" @chooseavatar="handleChooseAvatar">
				</button>
				<image v-if="userInfo.avatar" class="avatar" :src="userInfo.avatar" />
				<image v-else class="avatar" src="~@/static/defaultAvatar.jpeg" />
			</view>
			<input class="flex-1" type="nickname" v-model="userInfo.username" placeholder="请输入昵称" />
		</view>
	</DemoContainer>
</template>

<style scoped>
.avatar {
	width: 50px;
	height: 50px;
	border-radius: 50%;
}

.user-info {
	width: 100%;
	display: flex;
	flex-direction: row;
	align-items: center;
	column-gap: 15px;
}
</style>