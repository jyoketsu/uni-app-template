/**
 * 设备检测工具
 */

/**
 * 检测是否为移动设备
 * @returns boolean
 */
export function isMobile(): boolean {
  // #ifdef H5
  const userAgent = navigator.userAgent.toLowerCase();
  
  // 移动设备关键词
  const mobileKeywords = [
    'mobile', 'android', 'iphone', 'ipad', 'ipod', 
    'blackberry', 'windows phone', 'opera mini', 'iemobile'
  ];
  
  return mobileKeywords.some(keyword => userAgent.includes(keyword));
  // #endif
  
  // #ifndef H5
  // 非H5环境，可以通过uni.getSystemInfo()获取
  const systemInfo = uni.getSystemInfoSync();
  return systemInfo.platform === 'ios' || systemInfo.platform === 'android';
  // #endif
}

/**
 * 检测是否为桌面设备
 * @returns boolean
 */
export function isDesktop(): boolean {
  return !isMobile();
}

/**
 * 检测设备类型
 * @returns 'mobile' | 'desktop'
 */
export function getDeviceType(): 'mobile' | 'desktop' {
  return isMobile() ? 'mobile' : 'desktop';
}

/**
 * 检测是否为iOS设备
 * @returns boolean
 */
export function isIOS(): boolean {
  // #ifdef H5
  const userAgent = navigator.userAgent.toLowerCase();
  return /iphone|ipad|ipod/.test(userAgent);
  // #endif
  
  // #ifndef H5
  const systemInfo = uni.getSystemInfoSync();
  return systemInfo.platform === 'ios';
  // #endif
}

/**
 * 检测是否为Android设备
 * @returns boolean
 */
export function isAndroid(): boolean {
  // #ifdef H5
  const userAgent = navigator.userAgent.toLowerCase();
  return /android/.test(userAgent);
  // #endif
  
  // #ifndef H5
  const systemInfo = uni.getSystemInfoSync();
  return systemInfo.platform === 'android';
  // #endif
} 