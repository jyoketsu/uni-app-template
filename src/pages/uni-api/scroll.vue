<script setup lang="ts">
import DemoContainer from '@/components/DemoContainer.vue';
import DemoItem from '@/components/DemoItem.vue';

const scroll2Top = () => {
	uni.pageScrollTo({
		scrollTop: 0,
		duration: 300
	})
}
</script>

<template>
	<DemoContainer doc-url="https://uniapp.dcloud.net.cn/api/ui/scroll.html">
		<DemoItem title="示例" style="width: 100%;">
			<template v-for="(item, index) in Array(50)" :key="index">
				<text>uni.pageScrollTo： {{ index + 1 }}</text>
			</template>
			<button class="scroll-button" size="mini" @click="scroll2Top">返回顶部</button>
		</DemoItem>
	</DemoContainer>
</template>

<style scoped>
.scroll-button {
	position: fixed;
	bottom: 20px;
	right: 20px;
}
</style>