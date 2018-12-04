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
        newVal.sourceTime = newVal.duration;

        let minutes = parseInt(newVal.duration / 60);
        let second = newVal.duration % 60;
        let result = "";
        if (minutes != 0) {
          result = minutes + "分";
        }
        result += second + "秒";

        newVal.duration = result;
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
    videoPlayer: "",
    opacity: "1",
    showPlayer: "",
  },
  ready() {
    this.data.videoPlayer = wx.createVideoContext(this.data.videoInfo.coursename, this);
  },
  /**
   * 组件的方法列表
   */
  methods: {
    closeInfo(e) {
      this.setData({
        opacity: 0
      })
    },
    playVideo(e) {
      this.setData({
        showPlayer: this.data.videoInfo.coursename
      })
      this.videoPlayer = this.selectComponent("#videoPlayer");
      this.videoPlayer.show();
      console.log(this.videoPlayer)
      // console.log("播放视频")
      // this.setData({
      //   videoStatus: 'block'
      // })
      // videoPlayer.play();
      // this.data.videoPlayer.requestFullScreen();
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
      this.setData({
        showPlayer: ""
      })
      // this.data.videoPlayer.stop();
      // this.setData({
      //   opacity: 1
      // })
      // this.setData({
      //   videoStatus: 'none'
      // })
    }
  }
})
