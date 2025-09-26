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