<script lang="ts">
// @ts-ignore
import StartPage from '@/pages/start/index.nvue';
// @ts-ignore
import ComponentPage from '@/pages/component/index.nvue';
// @ts-ignore
import ApiPage from '@/pages/uni-api/index.nvue';
// @ts-ignore
import UiPage from '@/pages/uni-ui/index.nvue';

export default {
	components: {
		StartPage,
		ComponentPage,
		ApiPage,
		UiPage
	},
	data() {
		return {
			currentPath: '',
			active: ''
		}
	},
	watch: {
		$route: {
			immediate: true,
			handler(newRoute: any) {
				this.currentPath = newRoute.path;
				
				// 获取窗口宽度
				const width = uni.getSystemInfoSync().windowWidth;
				
				if (width >= 768) {
					const path = newRoute.path;
					const tabBarName = path.split('/')[2];

					switch (tabBarName) {
						case 'start':
							this.active = 'StartPage';
							break;
						case 'component':
							this.active = 'ComponentPage';
							break;
						case 'uni-api':
							this.active = 'ApiPage';
							break;
						case 'uni-ui':
							this.active = 'UiPage';
							break;
						default:
							break;
					}
				}
			}
		}
	}
}
</script>

<template>
	<view>
		<component :is="active" :active="currentPath.split('/')[3]" />
	</view>
</template>