<script setup lang="ts">
import DemoContainer from '@/components/DemoContainer.vue';
import DemoItem from '@/components/DemoItem.vue';

const cover = 'https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/shuijiao.jpg';
const avatar = 'https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png';
const extraIcon = {
	color: '#4cd964',
	size: '22',
	type: 'gear-filled'
}

const handleClick = () => {
	uni.showToast({
		title: '点击了卡片',
		icon: 'none'
	})
}

</script>

<template>
	<DemoContainer doc-url="https://uniapp.dcloud.net.cn/component/uniui/uni-card.html">
		<DemoItem title="基础卡片" style="width:100%">
			<uni-card>
				<text>这是一个基础卡片示例，内容较少，此示例展示了一个没有任何属性不带阴影的卡片。</text>
			</uni-card>
		</DemoItem>

		<DemoItem title="卡片标题+额外信息" style="width: 100%;">
			<uni-card title="基础卡片" extra="额外信息">
				<text class="uni-body">这是一个基础卡片示例，此示例展示了一个标题加标题额外信息的标准卡片。</text>
			</uni-card>
		</DemoItem>

		<DemoItem title="双标题卡片" style="width: 100%;">
			<uni-card title="基础卡片" sub-title="副标题" extra="额外信息" :thumbnail="avatar" @click="handleClick">
				<text class="uni-body">这是一个带头像和双标题的基础卡片，此示例展示了一个完整的卡片。</text>
			</uni-card>
		</DemoItem>

		<DemoItem title="通栏卡片" style="width: 100%;">
			<uni-card title="基础卡片" :isFull="true" sub-title="副标题" extra="额外信息" :thumbnail="avatar">
				<text class="uni-body">这是一个通栏卡片 ，通栏没有外边距，左右会贴合父元素。</text>
			</uni-card>
		</DemoItem>

		<DemoItem title="卡片封面图+操作栏">
			<uni-card :cover="cover" @click="onClick">
				<text class="uni-body">这是一个带封面和操作栏的卡片示例，此示例展示了封面插槽和操作栏插槽的用法。</text>
				<view slot="actions" class="card-actions">
					<view class="card-actions-item" @click="actionsClick('分享')">
						<uni-icons type="pengyouquan" size="18" color="#999"></uni-icons>
						<text class="card-actions-item-text">分享</text>
					</view>
					<view class="card-actions-item" @click="actionsClick('点赞')">
						<uni-icons type="heart" size="18" color="#999"></uni-icons>
						<text class="card-actions-item-text">点赞</text>
					</view>
					<view class="card-actions-item" @click="actionsClick('评论')">
						<uni-icons type="chatbubble" size="18" color="#999"></uni-icons>
						<text class="card-actions-item-text">评论</text>
					</view>
				</view>
			</uni-card>
		</DemoItem>

	</DemoContainer>
</template>

<style scoped>
.card-actions {
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
	height: 45px;
	border-top: 1px #eee solid;
}

.card-actions-item {
	display: flex;
	flex-direction: row;
	align-items: center;
}

.card-actions-item-text {
	font-size: 12px;
	color: #666;
	margin-left: 5px;
}
</style>