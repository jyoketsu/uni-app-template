<script setup lang="ts">
import DemoContainer from '@/components/DemoContainer.vue';
import DemoItem from '@/components/DemoItem.vue';
import { computed, ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const value = ref(false);

const applicationLocale = ref(uni.getLocale());
const date = ref(getDate());
const startDate = computed(() => getDate('start'));
const endDate = computed(() => getDate('end'));

const data =
	[
		{
			'name': "亚洲", sub: [
				{ name: '中国', sub: [{ name: '常州' }, { name: '无锡' }, { name: '苏州' }] },
				{ name: '日本', sub: [{ name: '东京' }, { name: '大阪' }] }]
		},
		{
			'name': "欧洲", sub: [
				{ name: '英国', sub: [{ name: '伦敦' }, { name: '曼彻斯特' }] },
				{
					name: '法国', sub: [{ name: '巴黎' }, { name: '马赛' }]
				}],
		}
	];

const locales = computed(() => ([{
	locale: 'auto',
	name: t('locale.auto'),
}, {
	locale: 'zh-Hans',
	name: t("locale.zh-hans"),
}, {
	locale: 'zh-Hant',
	name: t('locale.zh-hant'),
}, {
	locale: 'en',
	name: t('locale.en'),
}, {
	locale: 'ja',
	name: t('locale.ja'),
}]))

const multiArray = ref([
	// 第一层 亚洲 欧洲
	data.map(item => item.name),
	// 第二层 中国 日本
	data[0].sub.map(item => item.name),
	// 第三层 常州 无锡 苏州
	data[0].sub[0].sub.map(item => item.name)
])
const multiIndex = ref([0, 0, 0]);

const time = ref("11:45")

const localeDisp = computed(() => (
	locales.value.find(item => item.locale === applicationLocale.value)?.name || ''
))

const handleChangeLocale = (e: any) => {
	applicationLocale.value = locales.value[e.detail.value].locale;
	console.log(e.detail.value);
}

const bindTimeChange = (e: any) => {
	time.value = e.detail.value
}

const bindDateChange = (e: any) => {
	date.value = e.detail.value
}

const bindMultiPickerColumnChange = (e: any) => {
	console.log('修改的列为：' + e.detail.column + '，值为：' + e.detail.value)
	multiIndex.value[e.detail.column] = e.detail.value
	switch (e.detail.column) {
		case 0: //拖动第1列
			switch (multiIndex.value[0]) {
				case 0:
					// multiArray.value[1] = ['中国', '日本']
					multiArray.value[1] = data[0].sub.map(item => item.name)
					// multiArray.value[2] = ['常州', '无锡', '苏州']
					multiArray.value[2] = data[0].sub[0].sub.map(item => item.name)
					break
				case 1:
					// multiArray.value[1] = ['英国', '法国']
					multiArray.value[1] = data[1].sub.map(item => item.name)
					// multiArray.value[2] = ['伦敦', '曼彻斯特']
					multiArray.value[2] = data[1].sub[0].sub.map(item => item.name)
					break
			}
			multiIndex.value.splice(1, 1, 0)
			multiIndex.value.splice(2, 1, 0)
			break
		case 1: //拖动第2列
			switch (multiIndex.value[0]) { //判断第一列是什么
				case 0:
					switch (multiIndex.value[1]) {
						case 0:
							// multiArray.value[2] = ['常州', '无锡', '苏州']
							multiArray.value[2] = data[0].sub[0].sub.map(item => item.name)
							break
						case 1:
							// multiArray.value[2] = ['东京', '北海道']
							multiArray.value[2] = data[0].sub[1].sub.map(item => item.name)
							break
					}
					break
				case 1:
					switch (multiIndex.value[1]) {
						case 0:
							// multiArray.value[2] = ['伦敦', '曼彻斯特']
							multiArray.value[2] = data[1].sub[0].sub.map(item => item.name)
							break
						case 1:
							// multiArray.value[2] = ['巴黎', '马赛']
							multiArray.value[2] = data[1].sub[1].sub.map(item => item.name)
							break
					}
					break
			}
			multiIndex.value.splice(2, 1, 0)
			break
	}
}

function getDate(type?: 'start' | 'end') {
	const date = new Date();
	let year = date.getFullYear();
	let month = date.getMonth() + 1;
	let day = date.getDate();

	if (type === 'start') {
		year = year - 60;
	} else if (type === 'end') {
		year = year + 2;
	}
	// @ts-ignore
	month = month > 9 ? month : '0' + month;
	// @ts-ignore
	day = day > 9 ? day : '0' + day;
	return `${year}-${month}-${day}`;
}

</script>

<template>
	<DemoContainer doc-url="https://uniapp.dcloud.net.cn/component/picker.html">
		<DemoItem title="普通选择器">
			<picker @change="handleChangeLocale" :value="applicationLocale" :range="locales" range-key="name">
				<view class="uni-input">{{ localeDisp }}</view>
			</picker>
		</DemoItem>

		<DemoItem title="时间选择器">
			<picker mode="time" :value="time" start="09:00" end="18:00" @change="bindTimeChange">
				<view class="uni-input">{{ time }}</view>
			</picker>
		</DemoItem>

		<DemoItem title="多列选择器">
			<picker mode="multiSelector" @columnchange="bindMultiPickerColumnChange" :value="multiIndex" :range="multiArray">
				<view class="uni-input">
					{{ multiArray[0][multiIndex[0]] }}，{{ multiArray[1][multiIndex[1]] }}，{{ multiArray[2][multiIndex[2]] }}
				</view>
			</picker>
		</DemoItem>

		<DemoItem title="日期选择器">
			<picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange">
				<view class="uni-input">{{ date }}</view>
			</picker>
		</DemoItem>
	</DemoContainer>
</template>

<style lang="scss" scoped></style>