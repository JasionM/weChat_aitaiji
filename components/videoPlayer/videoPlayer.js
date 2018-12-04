// components/videoPlayer.js
let app = getApp();
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    videoUrl: String,
    videoId: Number,
    videoType: String,
    videoName: String,
    times: {
      type: String,
      observer(val, oldVal) {
        console.log(val);
        let minutes = parseInt(val / 60);
        console.log(val / 60)
        let second = val % 60;
        let result = "";
        if (minutes != 0) {
          result = minutes + "分";
        }
        result += second + "秒";
        this.setData({
          showTimes: result
        })
        console.log(this.data.showTimes)
      }
    }
  },
  formatTimes(time) {
    
  },
  /**
   * 组件的初始数据
   */
  ready(){
    console.log("video ready")
    let animation = wx.createAnimation({
      duration: 0,
      timingFunction: 'linear',
      delay: 0,
      transformOrigin: '50% 50% 0'
    });
    this.animation = animation;
    this.setData({
      height: wx.getSystemInfoSync().windowWidth * 225 / 300
    })
    
  },
  data: {
    animationData: "",
    height: "",
    playId: 0,
    hasFinish: false,
    showTimes: ""
  },

  /**
   * 组件的方法列表
   */
  methods: {
    dataFormat(data) {
      let year = data.getFullYear();
      let month = data.getMonth() + 1;
      let day = data.getDate();
      let hour = data.getHours();
      let minutes = data.getMinutes();
      let second = data.getSeconds();

      let res = year + "-" + (month > 10 ? month : "0" + month) + "-" + (day > 10 ? day : "0" + day) + " " + hour + ":" + minutes + ":" + second;
      return res;
    },
    playEnd() {
      this.data.hasFinish = true;
    },
    replay() {
      if (!this.data.hasFinish) {
        return;
      }
      this.data.hasFinish = false;
      this.record();
    },
    record(){
      wx.request({
        url: app.util.http.tp + "interrptplay",
        data: {
          videoid: this.data.videoId,
          videotype: this.data.videoType,
          starttime: this.dataFormat(new Date()),
          duration: 1,
          uid: app.globalData.uid,
          play_id: this.data.playId
        },
        header: {'content-type':'application/json'},
        method: 'POST',
        dataType: 'json',
        responseType: 'text',
        success: (result)=>{
          this.data.playId = result.data.play_id;
          console.log(result, this.data.playId)          
        },
        fail: ()=>{},
        complete: ()=>{}
      });
    },
    show() {
      this.record();
      let count = 0;
      let interval = setInterval(() => {
        if (this.animation) {
          this.animation.opacity(1).step();
          this.setData({
            animationData: this.animation.export()
          })
          clearInterval(interval);
        }
      }, 100)
      
    },
    hidden() {
      this.animation.opacity(0).step();
      this.setData({
        animationData: this.animation.export()
      })
      setTimeout(() => {
        this.triggerEvent("control");
      }, 400);
    }
  }
})
