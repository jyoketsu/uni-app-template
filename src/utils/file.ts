import { isMobile } from './device';
import { saveFileWithPermission } from './permission';

/**
 * 文件保存工具
 */

/**
 * 保存文件到相册（带权限检查）
 * @param filePath 文件路径
 * @param type 类型 1-图片 2-视频
 * @returns Promise
 */
export function saveFileToPhotosAlbum(filePath: string, type: string): Promise<void> {
  return saveFileWithPermission(filePath, type);
}

/**
 * 下载并保存文件（带权限检查）
 * @param url 文件URL
 * @param type 类型 1-图片 2-视频
 * @returns Promise
 */
export function downloadAndSaveFile(url: string, type: string): Promise<void> {
  return new Promise((resolve, reject) => {
    // #ifdef H5 
    if (isMobile() && type === '1') {
      // 手机H5端将图片新标签页打开
      uni.showModal({
        title: '下载',
        content: '请长按图片后下载',
        success: function (res) {
          if (res.confirm) {
            window.open(url, '_blank');
          }
        }
      });
      resolve();
    } else {
      // 电脑H5环境直接下载
      uni.showLoading({
        title: "下载中",
      });

      uni.downloadFile({
        url, success: (res) => {
          const oA = document.createElement("a");
          oA.download = ""; // 设置下载的文件名
          oA.href = res.tempFilePath;
          document.body.appendChild(oA);
          oA.click();
          oA.remove();
          uni.hideLoading();
          resolve();
        }
      });

    }
    // #else 
    // 非H5环境保存到相册（带权限检查）
    uni.showLoading({
      title: "下载中",
    });

    uni.downloadFile({
      url,
      success: async (res) => {
        try {
          await saveFileWithPermission(res.tempFilePath, type);
          uni.hideLoading();
          resolve();
        } catch (error) {
          uni.hideLoading();
          reject(error);
        }
      },
      fail: (err) => {
        console.error('下载失败:', err);
        uni.hideLoading();
        uni.showToast({
          title: "下载失败",
          icon: "error",
        });
        reject(err);
      }
    });
    //  #endif
  });
}

/**
 * 获取文件类型描述
 * @param type 类型
 * @returns 文件类型描述
 */
export function getFileTypeDescription(type: string): string {
  return type === "1" ? "图片" : "视频";
}

/**
 * 检查是否为视频任务
 * @param type 类型
 * @returns 是否为视频
 */
export function isVideoTask(type: string): boolean {
  return type !== "1";
} 