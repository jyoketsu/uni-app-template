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
			<view>
				<uni-card :cover="cover">
					<text>这是一个带封面和操作栏的卡片示例，此示例展示了封面插槽和操作栏插槽的用法。</text>
					<template v-slot:actions>
						<view class="card-actions">
							<view class="card-actions-item">
								<uni-icons type="pyq" size="18" color="#999"></uni-icons>
								<text class="card-actions-item-text">分享</text>
							</view>
							<view class="card-actions-item">
								<uni-icons type="heart" size="18" color="#999"></uni-icons>
								<text class="card-actions-item-text">点赞</text>
							</view>
							<view class="card-actions-item">
								<uni-icons type="chatbubble" size="18" color="#999"></uni-icons>
								<text class="card-actions-item-text">评论</text>
							</view>
						</view>
					</template>
				</uni-card>
			</view>
		</DemoItem>

		<DemoItem title="自定义卡片标题" style="width: 100%;">
			<uni-card title="基础卡片" :isFull="true" sub-title="副标题" extra="额外信息" :thumbnail="avatar">
				<template v-slot:title>
					<uni-list>
						<uni-list-item :show-switch="true" title="这是自定义标题" />
					</uni-list>
				</template>
				<text class="uni-body">自定义卡片标题。</text>
			</uni-card>
		</DemoItem>

		<DemoItem title="自定义封面+列表" style="width:100%">
			<uni-card padding="0" spacing="0">
				<template v-slot:cover>
					<view class="custom-cover">
						<image class="cover-image" mode="aspectFill" :src="cover">
						</image>
						<view class="cover-content">
							<text class="uni-subtitle uni-white">今日新闻热点</text>
						</view>
					</view>
				</template>
				<uni-list>
					<uni-list-item title="今日新闻" showArrow></uni-list-item>
					<uni-list-item title="今日新闻" showArrow></uni-list-item>
				</uni-list>
				<view slot="actions" class="card-actions no-border">
					<view class="card-actions-item">
						<uni-icons type="pengyouquan" size="18" color="#999"></uni-icons>
						<text class="card-actions-item-text">分享</text>
					</view>
					<view class="card-actions-item">
						<uni-icons type="heart" size="18" color="#999"></uni-icons>
						<text class="card-actions-item-text">点赞</text>
					</view>
					<view class="card-actions-item">
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

.cover-image {
	width: 100%;
}

.custom-cover {
	flex: 1;
	flex-direction: row;
	position: relative;
}

.cover-content {
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
	height: 40px;
	background-color: rgba(0, 0, 0, .4);
	display: flex;
	flex-direction: row;
	align-items: center;
	padding-left: 15px;
	font-size: 14px;
	color: #fff;
}
</style>