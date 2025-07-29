const baseUrl = import.meta.env.VITE_APP_BASE_URL;

// 接口返回数据类型，根据项目实际返回数据类型修改，dummyjson直接返回data，所以不需要ApiResponse
interface ApiResponse<T> {
	code: number;
	message: string;
	data: T;
}

export const request = {
	get<T = any>(
		{ url, data, header, hideLoading }:
			{
				url: string,
				data?: object,
				header?: object,
				hideLoading?: boolean
			}
	):
		// Promise<ApiResponse<T>> 
		Promise<T> {
		return new Promise(async function (resolve, reject) {
			try {
				const response = await uni.request({
					url: baseUrl + url,
					data,
					header,
					hideLoading,
				})
				resolve(response.data as
					// ApiResponse<T>
					Promise<T>
				);
			} catch (error) {
				reject(error);
			}
		});
	},

	post<T = any>(
		{ url, data, header }:
			{
				url: string,
				data?: object,
				header?: object
			}
	):
		// Promise<ApiResponse<T>>
		Promise<T> {
		return new Promise(async function (resolve, reject) {
			try {
				const response = await uni.request({
					url: baseUrl + url,
					method: 'POST',
					data,
					header
				})
				resolve(response.data as
					// ApiResponse<T>
					Promise<T>
				);
			} catch (error) {
				reject(error);
			}
		});
	},

	delete<T = any>(
		{ url, data, header }:
			{
				url: string,
				data?: object,
				header?: object
			}
	): Promise<T> {
		return new Promise(async function (resolve, reject) {
			try {
				const response = await uni.request({
					url: baseUrl + url,
					method: 'DELETE',
					data,
					header
				})
				resolve(response.data as
					// ApiResponse<T>
					Promise<T>
				);
			} catch (error) {
				reject(error);
			}
		});
	},
}