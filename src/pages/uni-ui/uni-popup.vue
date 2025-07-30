<script setup lang="ts">
import DemoContainer from '@/components/DemoContainer.vue';
import DemoItem from '@/components/DemoItem.vue';
import { ref } from 'vue';

const popup = ref<any>(null);

const handleOpenPopup = () => {
	popup.value?.open("bottom");
};

const handleClosePopup = () => {
	popup.value?.close();
};
</script>


<template>
	<DemoContainer doc-url="https://uniapp.dcloud.net.cn/component/uniui/uni-popup.html">
		<DemoItem title="示例" style="width:100%">
			<button class="w-full" @click="handleOpenPopup">打开popup</button>
			<uni-popup ref="popup" type="bottom" background-color="#fff" border-radius="20px 20px 0 0">
				<view class="w-full px-[17px] py-[40px] box-border flex flex-col items-center space-y-[28px]">
					<text class="text-[19px] font-medium">popup标题</text>
					<text class="text-gray-500">popup内容</text>

					<view class="w-full flex justify-between">
						<button
							class="w-full h-[45px] leading-[45px] text-[#C7C7C7] bg-white border border-solid border-[#C7C7C7] rounded-[22px] px-[17px] text-[17px] ml-0 mr-[13px] after:!border-none"
							@click="handleClosePopup">
							取消
						</button>
						<button
							class="w-full h-[45px] leading-[45px] text-white bg-[#3cc51f] rounded-[22px] px-[17px] text-[17px] mx-0 after:!border-none"
							@click="handleClosePopup">
							确定
						</button>
					</view>
				</view>
			</uni-popup>
		</DemoItem>
	</DemoContainer>
</template>
