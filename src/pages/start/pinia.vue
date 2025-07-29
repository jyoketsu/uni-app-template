<script setup lang="ts">
import DemoContainer from "@/components/DemoContainer.vue";
import DemoItem from "@/components/DemoItem.vue";
</script>

<template>
	<DemoContainer doc-url="https://pinia.vuejs.org/zh/">
		<DemoItem title="Pinia">
			<navigator url="/pages/start/scroll-list" open-type="redirect">
				<button>见 [列表滚动加载与刷新]</button>
			</navigator>
		</DemoItem>
	</DemoContainer>
</template>