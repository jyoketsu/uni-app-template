import { request } from "@/utils/api/index";

export function fetchList(data: { limit?: number, skip?: number }) {
	return request.get({
		url: "/posts",
		data,
	});
}

export function add(data: {
	title: string,
	userId: number
}) {
	return request.post({
		url: "/posts/add",
		data,
	});
}

export function deletePost(id: number) {
	return request.delete({
		url: `/posts/${id}`,
	});
}