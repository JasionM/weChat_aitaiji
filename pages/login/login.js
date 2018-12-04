//index.js
//获取应用实例
const app = getApp()
const APP_ID = "wx01f52a52b6e24b8e";
const APP_SECRET = "cf4053d84e84fa6f44812abe4372a125";
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    wx.login({
      success: res => {
        app.globalData.openId = res.code;
        console.log(res)
        wx.getUserInfo({
          success: user => {
            app.globalData.userInfo = user.userInfo;
            console.log('userInfo', user);
            this.loginData = {
              encryptedData: user.encryptedData,
              errMsg: user.errMsg,
              iv: user.iv,
              // userInfo: user.userInfo,
              signature: user.signature,
              token: app.globalData.openId
            }
            this.setData({
              userInfo: user.userInfo,
              hasUserInfo: true
            })
          }
        })
      }
    })
    
    // if (app.globalData.userInfo) {
    //   this.setData({
    //     userInfo: app.globalData.userInfo,
    //     hasUserInfo: true
    //   })
    // } else if (this.data.canIUse) {
    //   // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //   // 所以此处加入 callback 以防止这种情况
    //   app.userInfoReadyCallback = res => {
    //     this.setData({
    //       userInfo: res.userInfo,
    //       hasUserInfo: true
    //     })
    //   }
    // } else {
    //   // 在没有 open-type=getUserInfo 版本的兼容处理
    //   wx.getUserInfo({
    //     success: res => {
    //       app.globalData.userInfo = res.userInfo;
    //       console.log('userInfo', res.userInfo)
    //       this.setData({
    //         userInfo: res.userInfo,
    //         hasUserInfo: true
    //       })
    //     }
    //   })
    // }
  },
  getUserInfo: function (e) {
    app.globalData.userInfo = e.detail.userInfo;
    
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
    wx.navigateTo({
      url: 'pages/index/index',
    })
  },
  gotoIndex: function (e) {
    wx.request({
      url: app.util.http.tp + "login",
      method: 'post',
      data: this.loginData
      // {
      //   token: app.globalData.openId
      // }
      ,
      header: 'application/x-www-form-urlencoded',
      success: (res)=>{
        console.log(res)
        app.globalData.uid = res.data.uid;
        console.log(app.globalData)
        wx.switchTab({
          url: "/pages/index/index"
        });
      },
      fail: (err)=>{
        console.log('login err', err);
      }
    });
    
  }
})
