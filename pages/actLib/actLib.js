// pages/actLib/actLib.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    firstKindIndex: 0,
    currentFirstKind: "",
    currentSecondKind: "",
    firstKind: {
      trickArray: [],
      trickIdArray: []
    },
    videoList: [],
    videoStatus: 'none',
    sourceList: [],
    videoPlayer: "",
    showPlayer: false
  },
  changeFirstKind(e){
    this.setData({
      firstKindIndex: e.detail.value
    })
    this.getVideoList(this.data.firstKind.trickIdArray[e.detail.value]);
  },
  changeSecondKind(e){
    this.setData({
      secondKindIndex: e.detail.value
    })
    this.data.currentSecondKind = this.data.secondKindArray[e.detail.value];
  },
  gotoPlay(e){
    // this.data.videoPlayer = wx.createVideoContext(e.currentTarget.dataset.videoid, this);
    // console.log(e.currentTarget.dataset)
    // this.setData({
    //   videoStatus: 'block'
    // })

    // this.data.videoPlayer.requestFullScreen();
    // this.data.videoPlayer.play();
    // wx.navigateTo({
    //   url: "./../videoPlay/videoPlay"
    // });
    this.setData({
      showPlayer: e.currentTarget.dataset.videoid
    })
    let s = "#videoPlayer" + e.currentTarget.dataset.videoid
    
    this.videoPlayer = this.selectComponent(s);

    this.videoPlayer.show();
  },
  screenChange(e) {
    console.log(e);
    if (e.detail.fullScreen === false) {
      console.log("退出全屏")
      this.data.videoPlayer.stop();
      this.setData({
        videoStatus: 'none'
      })
    } else {
      console.log("进入全屏")
    }
  },
  getVideoList(id) {
    wx.showLoading({
      title: "加载中",
      mask: true,
    });
    wx.request({
      url: app.util.http.tp + "action",
      method: 'post',
      data: {
        trickid: id
      },
      header: 'application/x-www-form-urlencoded',
      success: (res)=>{
        wx.hideLoading();
        // console.log(res);
        let data = res.data.data[0];
        let trickArray = [];
        let trickIdArray = [];

        for (let i = 0; i < data.tricklist.length; i++) {
          const e = data.tricklist[i];
          trickArray.push(e.trick);
          trickIdArray.push(e.trickid);
        }

        let temp = [];
        this.data.sourceList = data.action;
        if (this.data.sourceList.length <= 10) {
          temp = this.data.sourceList;
        } else {
          for (let i = 0; i < 10; i++) {
            const e = this.data.sourceList[i];
            temp.push(e);
          }
        }

        this.setData({
          videoList: temp,
          firstKind: {
            trickArray: trickArray,
            trickIdArray: trickIdArray
          }
        })
        // console.log(this.data.firstKind)
      },
      fail: ()=>{}
    });
  },
  closeVideo() {
    this.setData({
      showPlayer: ""
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getVideoList(1);
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
    let currentLength = this.data.videoList.length;
    let sourceLength = this.data.sourceList.length;
    let tempArray = [];
    let getDataLength = 0;

    if (currentLength == sourceLength) {
      return;
    }

    if (currentLength + 10 <= sourceLength) {
      getDataLength = currentLength + 10;
    } else {
      getDataLength = sourceLength;
    }

    for (let i = currentLength; i < getDataLength; i++) {
      const e = this.data.sourceList[i];
      tempArray.push(e);
    }

    this.setData({
      videoList: this.data.videoList.concat(tempArray)
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})