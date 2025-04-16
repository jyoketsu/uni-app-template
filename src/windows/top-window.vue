<script lang="ts">
export default {
	data() {
		return {
			currentPath: '',
			tabBarPages: [{
				id: 'start',
				name: '开始',
				firstPage: 'page'
			}, {
				id: 'component',
				name: '内置组件',
				firstPage: 'view'
			}, {
				id: 'uni-api',
				name: 'API',
				firstPage: 'interceptor'
			}, {
				id: 'uni-ui',
				name: '扩展组件',
				firstPage: 'uni-badge'
			}]
		}
	},
	watch: {
		$route: {
			immediate: true,
			handler(newRoute: any, oldRoute: any) {
				this.currentPath = newRoute.path;

				const width = uni.getSystemInfoSync().windowWidth;

				if (width >= 768) {
					let path = newRoute.path
					if (path.split('/')[3] === 'index') {
						const tabBarName = path.split('/')[2];
						const pageName = this.tabBarPages.find(item => item.id === tabBarName)?.firstPage;
						if (pageName) {
							uni.redirectTo({
								url: `/pages/${tabBarName}/${pageName}`
							})
						}
					}
				}
			}
		}
	}

}
</script>

<template>
	<view class="top-header">
		<text class="title">uni-app-template</text>
		<i class="space" />
		<view class="buttons">
			<navigator v-for="item in tabBarPages" :key="item.id" class="top-navigator"
				:class="currentPath.split('/')[2] === item.id ? 'active' : ''" open-type="switchTab"
				:url="`/pages/${item.id}/index`">
				<text>{{ item.name }}</text>
			</navigator>
		</view>
	</view>
</template>

<style scoped>
.title {
	font-size: 18px;
	font-weight: bold;
	color: #8f8f94;
}

.top-header {
	height: 100%;
	background-color: #FFFFFF;
	padding: 0 15px 0 15px;
	display: flex !important;
	flex-direction: row !important;
	align-items: center !important;
}

.space {
	flex: 1
}

.top-navigator {
	padding: 5px;
	border-radius: 5px;
}

.buttons {
	display: flex !important;
	flex-direction: row !important;
	align-items: center !important;
	column-gap: 15px !important;
	font-size: 14px !important;
}

.active {
	color: #179b16;
}
</style>