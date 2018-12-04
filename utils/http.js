const sysInfo = wx.getSystemInfoSync();
console.log(sysInfo.platform);
const www = "https://tiny.i-taichi.cn/api/";
const http = {
  tp: www + "tp/"
}

module.exports = {
  http
}