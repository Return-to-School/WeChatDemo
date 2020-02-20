// pages/personinfo/personinfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  to:function(event){
    wx.navigateTo({
      url: event.currentTarget.dataset.url
    })
  }
})