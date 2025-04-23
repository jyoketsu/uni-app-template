<script setup lang="ts">
import DemoContainer from '@/components/DemoContainer.vue';
import DemoItem from '@/components/DemoItem.vue';
import { ref } from 'vue';
import graceChecker from "@/utils/graceChecker"

const data = ref({});

const formSubmit = (e: any) => {
	console.log('form发生了submit事件，携带数据为：' + JSON.stringify(e.detail.value))
	//定义表单规则
	var rule = [
		{ name: "nickname", checkType: "string", checkRule: "1,3", errorMsg: "姓名应为1-3个字符" },
		{ name: "gender", checkType: "in", checkRule: "男,女", errorMsg: "请选择性别" },
		{ name: "loves", checkType: "notnull", checkRule: "", errorMsg: "请选择爱好" }
	];
	//进行表单检查
	var formData = e.detail.value;
	var checkRes = graceChecker.check(formData, rule);
	if (checkRes) {
		uni.showToast({ title: "验证通过!", icon: "none" });
	} else {
		uni.showToast({ title: graceChecker.error, icon: "none" });
	}
};

const formReset = (e: any) => {
	console.log('清空数据')
}
</script>

<template>
	<DemoContainer doc-url="https://uniapp.dcloud.net.cn/component/form.html">
		<DemoItem title="示例" style="width:100%">
			<form class="form" @submit="formSubmit" @reset="formReset">

				<view class="uni-form-item uni-column">
					<view class="title">姓名</view>
					<input class="uni-input" name="nickname" placeholder="请输入姓名" />
				</view>

				<view class="uni-form-item uni-column">
					<view class="title">性别</view>
					<radio-group name="gender">
						<label style="margin-right: 20rpx;">
							<radio value="男" /><text>男</text>
						</label>
						<label>
							<radio value="女" /><text>女</text>
						</label>
					</radio-group>
				</view>

				<view class="uni-form-item uni-column">
					<view class="title">爱好</view>
					<checkbox-group name="loves">
						<label style="margin-right: 20rpx;">
							<checkbox value="读书" /><text>读书</text>
						</label>
						<label>
							<checkbox value="写字" /><text>写字</text>
						</label>
					</checkbox-group>
				</view>

				<view class="uni-form-item uni-column">
					<view class="title">年龄</view>
					<slider value="20" name="age" show-value></slider>
				</view>

				<view class="uni-form-item uni-column">
					<view class="title">保留选项</view>
					<view>
						<switch name="switch" />
					</view>
				</view>

				<view class="uni-btn-v">
					<button form-type="submit">Submit</button>
					<button type="default" form-type="reset">Reset</button>
				</view>
			</form>
		</DemoItem>
	</DemoContainer>
</template>

<style lang="scss" scoped>
.uni-form-item {
	margin-bottom: 30rpx;
}

.uni-form-item .title {
	padding: 20rpx 0;
}

.uni-btn-v>button:first-child {
	margin-bottom: 20rpx;
}
</style>