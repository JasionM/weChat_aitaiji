// pages/dayVideos/dayVideos.js
let app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataArray: [],
    gradeid: "",
    gradename: "",
    type: "",
    partInfo: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      gradeid: options.gradeid,
      gradename: options.gradename,
      type: options.type
    })

    wx.setNavigationBarTitle({
      title: this.data.gradename,
    });

    this.getVideoData();
  },
  onShareAppMessage(res) {
    let pages =  getCurrentPages();
    let currentPage =  pages[pages.length - 1].route;
    let param = {
      title: "",
      path: "",
      imageUrl: ""
    }
    if (res.from == 'button') {
      param.title = "爱太极";
      param.path = "/"+currentPage;
    }

    return param;
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
  getVideoData(){
    wx.request({
      url: app.util.http.tp + "main",
      method: 'GET',
      data: {},
      header: 'application/x-www-form-urlencoded',
      success: (res)=>{
        console.log(res.data);
        let data = res.data;
        if (this.data.type == 0) {
          for (let i = 0; i < data.data[0].regiona.length; i++) {
            const item = data.data[0].regiona[i];
            if (item.gradeid == this.data.gradeid) {
              item.gradetimesum = item.gradetimesum == 0 ? 0:parseInt(item.gradetimesum / 60);
              this.setData({
                partInfo: item,
                dataArray: item.grade
              })
            }
          }
        } else {
          for (let i = 0; i < data.data[0].regionb.length; i++) {
            const item = data.data[0].regionb[i];
            item.gradetimesum = item.gradetimesum == 0 ? 0:parseInt(item.gradetimesum / 60);

            if (item.gradeid == this.data.gradeid) {
              this.setData({
                partInfo: item,
                dataArray: item.grade
              })
            }
          }
          
        }
      },
      fail: ()=>{}
    });
  }
})