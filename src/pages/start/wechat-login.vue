<script setup lang="ts">
import DemoContainer from '@/components/DemoContainer.vue';
import { ref } from 'vue';

const code = ref('');
const userInfo = ref<{ nickName: string, avatarUrl: string } | null>(null);

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
						userInfo.value = profileRes.userInfo;
						uni.login({
							provider: 'weixin',
							success: (loginRes) => {
								// 将loginRes.code和profileRes.userInfo发送给后端
								code.value = loginRes.code;
								console.log('登录凭证:', loginRes.code);

								// 这里可以发送到服务器
								// uni.request({
								// 	url: 'your-api-endpoint',
								// 	method: 'POST',
								// 	data: {
								// 		code: loginRes.code,
								// 		userInfo: profileRes.userInfo
								// 	}
								// });

								// 1. 后端接口在响应体中返回accessToken字段。
								// 2. 小程序在登录请求成功后，从res.data.accessToken获取Token，存储到Storage。
								// 3. 小程序后续请求在header中携带Authorization: Bearer <token>。

							}
						});

					}
				});
			}
		}
	});
}
</script>

<template>
	<DemoContainer doc-url="https://uniapp.dcloud.net.cn/api/plugins/login.html">
		<!--  #ifdef MP-WEIXIN  -->
		<button @click="handleLogin">微信登录</button>
		<!-- #else -->
		<text>请在微信小程序中打开</text>
		<!-- #endif -->
		<view v-if="code">
			<text>{{ `登录凭证：${code}` }}</text>
		</view>
		<view v-if="userInfo" class="user-info">
			<image class="avatar" :src="userInfo.avatarUrl" />
			<text>{{ userInfo.nickName }}</text>
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
	display: flex;
	flex-direction: row;
	align-items: center;
	column-gap: 15px;
}
</style>