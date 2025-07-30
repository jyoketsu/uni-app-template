/**
 * 权限处理工具
 */

/**
 * 检查相册权限
 * @returns Promise<boolean> 是否有权限
 */
export function checkPhotoAlbumPermission(): Promise<boolean> {
  return new Promise((resolve) => {
    // #ifdef MP-WEIXIN
    uni.getSetting({
      success: (res) => {
        const hasPermission = res.authSetting['scope.writePhotosAlbum'];
        resolve(hasPermission === true);
      },
      fail: () => {
        resolve(false);
      }
    });
    // #endif
    
    // #ifndef MP-WEIXIN
    // 其他平台默认有权限
    resolve(true);
    // #endif
  });
}

/**
 * 请求相册权限
 * @returns Promise<boolean> 是否获得权限
 */
export function requestPhotoAlbumPermission(): Promise<boolean> {
  return new Promise((resolve) => {
    // #ifdef MP-WEIXIN
    uni.authorize({
      scope: 'scope.writePhotosAlbum',
      success: () => {
        resolve(true);
      },
      fail: (err) => {
        console.log('权限请求失败:', err);
        resolve(false);
      }
    });
    // #endif
    
    // #ifndef MP-WEIXIN
    // 其他平台默认有权限
    resolve(true);
    // #endif
  });
}

/**
 * 打开权限设置页面
 */
export function openPermissionSetting(): void {
  // #ifdef MP-WEIXIN
  uni.openSetting({
    success: (res) => {
      console.log('设置页面返回:', res);
      if (res.authSetting['scope.writePhotosAlbum']) {
        uni.showToast({
          title: '权限已开启',
          icon: 'success'
        });
      }
    },
    fail: (err) => {
      console.error('打开设置页面失败:', err);
    }
  });
  // #endif
  
  // #ifndef MP-WEIXIN
  // 其他平台不需要处理
  // #endif
}

/**
 * 处理相册权限（检查 -> 请求 -> 打开设置）
 * @returns Promise<boolean> 最终是否有权限
 */
export async function handlePhotoAlbumPermission(): Promise<boolean> {
  // 1. 检查当前权限
  const hasPermission = await checkPhotoAlbumPermission();
  if (hasPermission) {
    return true;
  }
  
  // 2. 请求权限
  const granted = await requestPhotoAlbumPermission();
  if (granted) {
    return true;
  }
  
  // 3. 显示权限说明并打开设置
  uni.showModal({
    title: '需要相册权限',
    content: '保存文件到相册需要您授权相册权限，请在设置中开启',
    confirmText: '去设置',
    cancelText: '取消',
    success: (res) => {
      if (res.confirm) {
        openPermissionSetting();
      }
    }
  });
  
  return false;
}

/**
 * 带权限检查的文件保存
 * @param filePath 文件路径
 * @param taskType 任务类型
 * @returns Promise<void>
 */
export async function saveFileWithPermission(filePath: string, taskType: string): Promise<void> {
  // 检查权限
  const hasPermission = await handlePhotoAlbumPermission();
  if (!hasPermission) {
    throw new Error('没有相册权限');
  }
  
  // 保存文件
  return new Promise((resolve, reject) => {
    if (taskType === "1") {
      // 保存图片
      uni.saveImageToPhotosAlbum({
        filePath,
        success: () => {
          uni.showToast({
            title: "图片已保存到相册",
            icon: "success",
          });
          resolve();
        },
        fail: (err) => {
          console.error('保存图片失败:', err);
          uni.showToast({
            title: "保存失败",
            icon: "error",
          });
          reject(err);
        }
      });
    } else {
      // 保存视频
      uni.saveVideoToPhotosAlbum({
        filePath,
        success: () => {
          uni.showToast({
            title: "视频已保存到相册",
            icon: "success",
          });
          resolve();
        },
        fail: (err) => {
          console.error('保存视频失败:', err);
          uni.showToast({
            title: "保存失败",
            icon: "error",
          });
          reject(err);
        }
      });
    }
  });
} 