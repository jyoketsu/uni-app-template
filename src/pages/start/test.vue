<script setup lang="ts">
import { onLoad } from '@dcloudio/uni-app';
import { ref } from 'vue';
import DemoContainer from '@/components/DemoContainer.vue';

const id = ref<string>('');
const name = ref<string>('');

onLoad((options: any) => {
	console.log('---options---', options);
	id.value = options.id;
	name.value = options.name;
});
</script>

<template>
	<DemoContainer doc-url="https://uniapp.dcloud.net.cn/api/router.html">
		<text>id: {{ id }}</text>
		<text>name: {{ name }}</text>
	</DemoContainer>
</template>