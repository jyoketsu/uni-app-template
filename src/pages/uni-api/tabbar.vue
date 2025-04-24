<script setup lang="ts">
import DemoContainer from '@/components/DemoContainer.vue';
import DemoItem from '@/components/DemoItem.vue';
import { ref } from 'vue';

const emit = defineEmits(['back']);

const hasHiddenTabBar = ref(false);
const hasSetTabBarBadge = ref(false);
const hasShownTabBarRedDot = ref(false);

const handleSetTabBarItem = () => {
	uni.setTabBarItem({
		index: 2,
		text: 'api-新的标题'
	})
}

const handleSetTabBarStyle = () => {
	uni.setTabBarStyle({
		backgroundColor: '#eb9fb0',
	})
}

const handleToggleTabBar = () => {
	if (hasHiddenTabBar.value) {
		uni.showTabBar();
	} else {
		uni.hideTabBar();
	}
	hasHiddenTabBar.value = !hasHiddenTabBar.value;
}

const handleToggleTabBarBadge = () => {
	if (hasSetTabBarBadge.value) {
		uni.removeTabBarBadge({
			index: 2,
		})
	} else {
		uni.setTabBarBadge({
			index: 2,
			text: '10'
		})
	}
	hasSetTabBarBadge.value = !hasSetTabBarBadge.value;
}

const handleToggleRedDot = () => {
	if (hasShownTabBarRedDot.value) {
		uni.hideTabBarRedDot({
			index: 2,
		})
	} else {
		uni.showTabBarRedDot({
			index: 2,
		})
	}
	hasShownTabBarRedDot.value = !hasShownTabBarRedDot.value;
}
</script>

<template>
	<DemoContainer doc-url="https://uniapp.dcloud.net.cn/api/ui/tabbar.html">
		<DemoItem title="setTabBarItem" style="width: 100%;">
			<button @click="handleSetTabBarItem()">
				设置TabBar内容
			</button>
		</DemoItem>

		<DemoItem title="setTabBarStyle" style="width: 100%;">
			<button @click="handleSetTabBarStyle()">
				设置TabBar样式
			</button>
		</DemoItem>


		<DemoItem title="hideTabBar/showTabBar" style="width: 100%;">
			<button @click="handleToggleTabBar()">
				{{
					hasHiddenTabBar ? '显示TabBar' : '隐藏TabBar'
				}}
			</button>
		</DemoItem>

		<DemoItem title="setTabBarBadge/removeTabBarBadge" style="width: 100%;">
			<button @click="handleToggleTabBarBadge()">
				{{
					hasSetTabBarBadge ? '移除TabBar徽标' : '设置TabBar徽标'
				}}
			</button>
		</DemoItem>

		<DemoItem title="showTabBarRedDot/hideTabBarRedDot" style="width: 100%;">
			<button @click="handleToggleRedDot">
				{{
					hasShownTabBarRedDot ? '移除TabBar小红点' : '设置TabBar小红点'
				}}
			</button>
		</DemoItem>

		<button type="primary" @click="emit('back')">返回上一页</button>
	</DemoContainer>
</template>

<style scoped>
button {
	width: 100%;
}
</style>