<script setup lang="ts">
import DemoContainer from '@/components/DemoContainer.vue';
import DemoItem from '@/components/DemoItem.vue';

</script>

<template>
	<DemoContainer doc-url="https://uniapp.dcloud.net.cn/component/uniui/uni-badge.html">
		<DemoItem title="基础用法" class="demo-item" style="width:100%">
			<view>
				<uni-badge text="1" />
				<uni-badge text="2" type="primary" />
				<uni-badge text="34" type="success" />
				<uni-badge text="45" type="warning" />
				<uni-badge text="123" type="info" />
			</view>
		</DemoItem>

		<DemoItem title="无底色">
			<view>
				<uni-badge :inverted="true" text="1" />
				<uni-badge :inverted="true" text="2" type="primary" />
				<uni-badge :inverted="true" text="34" type="success" />
				<uni-badge :inverted="true" text="45" type="warning" />
				<uni-badge :inverted="true" text="123" type="info" />
			</view>
		</DemoItem>

		<DemoItem title="自定义样式">
			<view>
				<uni-badge text="2" type="primary" :customStyle="{ background: '#4335d6' }" />
				<uni-badge text="2" type="primary" :customStyle="{ backgroundColor: '#62ed0d', color: '#fff' }" />
			</view>
		</DemoItem>

		<DemoItem title="定位: aboslute 属性">
			<view>
				<uni-badge :text="123" absolute="rightTop" size="small">
					<view class="box"><text class="box-text">右上</text></view>
				</uni-badge>
			</view>
		</DemoItem>

		<DemoItem title="偏移: offset 属性(存在 aboslute)">
			<view>
				<uni-badge :text="8" absolute="rightTop" :offset="[-3, -3]" size="small">
					<view class="box"><text class="box-text">右上</text></view>
				</uni-badge>
			</view>
		</DemoItem>


		<DemoItem title="仅显示点: is-dot 属性">
			<view>
				<uni-badge :text="8" absolute="rightTop" :is-dot="true" size="small">
					<view class="box"><text class="box-text">右上</text></view>
				</uni-badge>
			</view>
		</DemoItem>

	</DemoContainer>
</template>

<style scoped>
.box {
	position: relative;
	width: 40px;
	height: 40px;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	background-color: #9a9ca1;
	color: #fff;
	font-size: 12px;
}
</style>