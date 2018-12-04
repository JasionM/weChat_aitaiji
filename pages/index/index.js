//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    nowTab: 0,
    actVideos: '',
    aitaijiVideos: '',
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
     this.setData({
       userInfo: app.globalData.userInfo
     })
   } else {
    wx.getUserInfo({
      success: res => {
        app.globalData.userInfo = res.userInfo
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
   }

   this.getVideoData();
  },
  onShareAppMessage(res) {
    return {
      title: "爱太极",
      path: "/page/index/index"
    }
  },
  changeTab(e){
    this.setData({
      nowTab: e.currentTarget.dataset.tabindex
    })
  },
  goUser(e) {
    console.log('tag', '11')
    wx.navigateTo({
      url: './../user/user',
    });
  },
  getVideoData(){
    wx.request({
      url: app.util.http.tp + "main",
      method: 'GET',
      data: {},
      header: 'application/x-www-form-urlencoded',
      success: (res)=>{
        console.log(res.data);
        let data = res.data;
        this.setData({
          actVideos: data.data[0].regiona,
          aitaijiVideos: data.data[0].regionb
        })
      },
      fail: ()=>{}
    });
  }
})
