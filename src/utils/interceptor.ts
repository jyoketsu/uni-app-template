// 请求拦截器
uni.addInterceptor("request", {
  // 调用前触发
  invoke(args) {
    // 添加全局请求头
    args.header = {
      "X-Request-Source": "uni-app",
      Authorization: `Bearer ${uni.getStorageSync("token")}`,
      ...args.header,
    };

    // 开始加载动画
    if (!args.hideLoading) {
      uni.showLoading({ title: "加载中" });
    }
  },
  // 调用成功触发
  success(res) {
    // 统一处理响应状态码
    if (res.statusCode >= 400) {
      const error = new Error(res.data.message || "请求失败") as any;
      error.statusCode = res.statusCode;
      return Promise.reject(error);
    }
    return res.data;
  },

  // 调用失败触发
  fail(err) {
    return Promise.reject(new Error(`网络错误：${err.errMsg}`));
  },

  // 调用结束触发（成功失败都会触发）
  complete() {
    uni.hideLoading();
  },
});

// 错误统一处理
const showError = (err: Error) => {
  uni.showToast({
    title: err.message,
    icon: "error",
    duration: 2000,
  });

  // 401跳转登录页
  if ((err as any).statusCode === 401) {
    uni.reLaunch({ url: "/pages/start/wechat-login" });
  }
};

// 全局Promise错误捕获
// 增加平台判断逻辑
// @ts-ignore
const isH5 = process.env.VUE_APP_PLATFORM === "h5";

// 统一错误处理函数
const handleRejection = (err: any) => {
  const error = err.reason || err || "系统错误";
  showError(error);
  // 阻止默认处理（H5需要）
  if (isH5 && err.preventDefault) {
    err.preventDefault();
  }
};

// 兼容H5的异常捕获
if (isH5) {
  window.addEventListener("unhandledrejection", (event) => {
    handleRejection(event);
    event.preventDefault(); // 阻止浏览器默认打印
  });
}

// 保留原有uni-app的全局捕获（用于小程序）
uni.onUnhandledRejection(handleRejection);
