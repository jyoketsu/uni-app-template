import { request } from "@/utils/api/index";

export function wechatLogin(data: {
	code: string,
}) {
	return request.post({
		url: "/api/auth/wechat/login",
		data,
		isAuth: true
	});
}

export function getUserInfo() {
	return request.get({
		url: "/api/auth",
		isAuth: true
	});
}

export function logout(accessToken: string, refreshToken: string) {
	return request.post({
		url: "/api/auth/token/logout",
		data: { accessToken, refreshToken },
		isAuth: true
	});
}