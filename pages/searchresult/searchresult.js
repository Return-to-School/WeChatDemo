// pages/searchresult/searchresult.js
const app = getApp();
Page({
  data: {
    initValue: "",
    active: [] //活动
  },
  getAct(mes) { //请求活动信息
    var that = this;
    wx.showLoading({
      title: '加载中',
      mask: 'true'
    })

    wx.request({
      url: app.baseURL + '/activity/search-by-name?key=' + mes + '&currPage=1&pageSize=1000',
      method: "GET",
      success(res) {
        wx.hideLoading();
        console.log(res.data);
        that.data.active = res.data.result;
        that.setData(that.data);
      },
      fail(res) {
        wx.hideLoading();
        wx.showToast({
          title: '加载失败，请稍后重试',
          icon: 'none',
          duration: 2000
        })
      }
    })
  },
  onLoad: function(options) {
    this.data.initValue = options.value;
    this.setData(this.data);
    this.getAct(options.value);
  },
  toActive: function(event) {
    var num = event.currentTarget.dataset.num
    var active =this.data.active[num];
    wx.setStorage({
      key: "ActiveDetail",
      data: active
    })
    wx.navigateTo({
      url: '/pages/activedetail/activedetail'
    })
  },
  toSearch: function(event) {
    wx.navigateTo({
      url: '/pages/searchresult/searchresult' + '?value=' + event.detail.value
    })
  }
})