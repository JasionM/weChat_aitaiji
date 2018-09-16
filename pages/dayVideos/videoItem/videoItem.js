// pages/index/videoItem/videoItem.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    videoInfo: {
      type: Object,
      value: "",
      observer(newVal, oldVal) {
        newVal.duration = parseInt(newVal.duration / 60);
        this.setData({
          videoInfo: newVal
        })
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    videoStatus: 'none',
    videoPlayer: ""
  },
  ready() {
    this.data.videoPlayer = wx.createVideoContext(this.data.videoInfo.coursename, this);
    console.log(this.data.videoPlayer);
  },
  /**
   * 组件的方法列表
   */
  methods: {
    playVideo(e) {
      console.log("播放视频")
      this.setData({
        videoStatus: 'block'
      })
      // videoPlayer.play();
      this.data.videoPlayer.requestFullScreen();
    },
    screenChange(e) {
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
    closeVideo() {
      this.data.videoPlayer.stop();
      this.setData({
        videoStatus: 'none'
      })
    }
  }
})
