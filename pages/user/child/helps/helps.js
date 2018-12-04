// pages/user/child/helps/helps.js
let app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    vcodeUrl: "",
    vcodeText: ""
  },
  previewImg() {
    wx.previewImage({
      current: [this.data.vcodeUrl], // 当前显示图片的http链接   
      urls: [this.data.vcodeUrl] // 需要预览的图片http链接列表   
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: app.util.http.tp + "wxfeedback",
      method: "get",
      header: { 'content-type': 'application/json' },
      dataType: 'json',
      responseType: 'text',
      success: (result) => {
        this.setData({
          vcodeUrl: result.data.wx_img,
          vcodeText: result.data.wx_msg
        })
      },
      fail: () => { },
      complete: () => { }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})