<script setup lang="ts">
import DemoContainer from '@/components/DemoContainer.vue';
import DemoItem from '@/components/DemoItem.vue';
import { ref } from 'vue';

// 如果设置了 accordion 属性，则使用 string 类型
const opened = ref(['0', '1']);
</script>

<template>
	<DemoContainer doc-url="https://uniapp.dcloud.net.cn/component/uniui/uni-collapse.html">
		<DemoItem title="基本用法" style="width:100%">
			<uni-collapse>
				<uni-collapse-item title="默认开启" :open="true">
					<view class="content">
						<text>折叠内容</text>
					</view>
				</uni-collapse-item>
				<uni-collapse-item title="折叠内容">
					<view class="content">
						<text>折叠内容</text>
					</view>
				</uni-collapse-item>
				<uni-collapse-item title="禁用状态" disabled>
					<view class="content">
						<text>折叠内容</text>
					</view>
				</uni-collapse-item>
			</uni-collapse>
		</DemoItem>

		<DemoItem title="手风琴效果" style="width:100%">
			<uni-collapse accordion>
				<uni-collapse-item title="手风琴效果">
					<view class="content">
						<text>折叠内容</text>
					</view>
				</uni-collapse-item>
				<uni-collapse-item title="手风琴效果">
					<view class="content">
						<text>折叠内容</text>
					</view>
				</uni-collapse-item>
				<uni-collapse-item title="手风琴效果">
					<view class="content">
						<text>折叠内容</text>
					</view>
				</uni-collapse-item>
			</uni-collapse>
		</DemoItem>


		<DemoItem title="动态设置折叠面板打开状态" style="width:100%">
			<uni-collapse v-model="opened">
				<uni-collapse-item title="默认开启">
					<view class="content">
						<text>折叠内容</text>
					</view>
				</uni-collapse-item>
				<uni-collapse-item title="默认开启">
					<view class="content">
						<text>折叠内容</text>
					</view>
				</uni-collapse-item>
				<uni-collapse-item title="默认不开启">
					<view class="content">
						<text>折叠内容</text>
					</view>
				</uni-collapse-item>
			</uni-collapse>
		</DemoItem>

		<DemoItem title="不开启动画" style="width:100%">
			<uni-collapse>
				<uni-collapse-item title="不开启动画" :show-animation="false">
					<view class="content">
						<text>折叠内容</text>
					</view>
				</uni-collapse-item>
				<uni-collapse-item title="开启动画">
					<view class="content">
						<text>折叠内容</text>
					</view>
				</uni-collapse-item>
			</uni-collapse>
		</DemoItem>

		<DemoItem title="配置图片" style="width:100%">
			<uni-collapse>
				<uni-collapse-item title="标题文字" thumb="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png">
					<view class="content">
						<text>折叠内容</text>
					</view>
				</uni-collapse-item>
			</uni-collapse>
		</DemoItem>

		<DemoItem title="自定义插槽" style="width:100%">
			<uni-collapse>
				<uni-collapse-item>
					<template v-slot:title>
						<view class="content">
							<text class="text">自定义标题</text>
						</view>
					</template>
					<view class="content">
						<text class="text">折叠内容主体，可自定义内容及样式</text>
					</view>
				</uni-collapse-item>
			</uni-collapse>
		</DemoItem>
	</DemoContainer>
</template>

<style scoped>
.content {
	padding: 15px;
}
</style>