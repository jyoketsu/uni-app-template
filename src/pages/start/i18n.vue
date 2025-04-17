<script setup lang="ts">
import DemoContainer from '@/components/DemoContainer.vue';
import DemoItem from '@/components/DemoItem.vue';
import { onLoad } from '@dcloudio/uni-app';
import { computed, ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { t, locale } = useI18n();

const systemLocale = ref('');
const applicationLocale = ref('');

const localeDisp = computed(() => (
	locales.value.find(item => item.locale === applicationLocale.value)?.name || ''
))

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

onLoad(() => {
	systemLocale.value = uni.getSystemInfoSync().language || '';
	applicationLocale.value = uni.getLocale();
})

const handleChangeLocale = (e: any) => {
	applicationLocale.value = locales.value[e.detail.value].locale;
	uni.setLocale(applicationLocale.value);
	locale.value = applicationLocale.value;
}

</script>

<template>
	<DemoContainer doc-url="https://uniapp.dcloud.net.cn/tutorial/i18n.html">
		<DemoItem :title="$t('index.language-info')">
			<text>{{ `${$t('index.system-language')}: ${systemLocale}` }}</text>
			<text>{{ `${$t('index.application-language')}: ${applicationLocale}` }}</text>
		</DemoItem>

		<DemoItem :title="$t('demo.changeLocale')">
			<picker @change="handleChangeLocale" :value="applicationLocale" :range="locales" range-key="name">
				<view class="uni-input">{{ localeDisp }}</view>
			</picker>
		</DemoItem>

		<DemoItem title="nvue">
			<navigator url="/pages/start/nvue-demo" open-type="navigate">
				demo
			</navigator>
		</DemoItem>

		<DemoItem title="pages.json">
			<text>{{ $t('demo.pageJson') }}</text>
		</DemoItem>
	</DemoContainer>
</template>