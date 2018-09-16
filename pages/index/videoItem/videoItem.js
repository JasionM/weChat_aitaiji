// pages/index/videoItem/videoItem.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    videoInfo: {
      type: Object,
      value: {},
      observer(newVal, oldVal){
        console.log(newVal);
        newVal.gradetimesum = parseInt(newVal.gradetimesum / 60);
        this.setData({
          videoInfo: newVal
        })
      }
    },
    videoType: {
      type: String,
      value: "",
      observer(newVal, oldVal) {

      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    gotoVideos(e){
      // console.log(e);
      let data = e.currentTarget.dataset;
      wx.navigateTo({
        url: "./../dayVideos/dayVideos?gradeid=" + data.gradeid + "&gradename=" + data.gradename + "&type=" + this.data.videoType
      });
    },
  }
})
