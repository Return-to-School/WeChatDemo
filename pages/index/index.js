const app = getApp();
Page({
  data: {
    imgUrl: app.imgUrl,
    baseURL: app.baseURL,
    img: [
      "http://img3.imgtn.bdimg.com/it/u=1670524489,3110547408&fm=26&gp=0.jpg",
      "http://img4.imgtn.bdimg.com/it/u=1906892428,3163048084&fm=26&gp=0.jpg",
      "http://img5.imgtn.bdimg.com/it/u=3914465514,1089330837&fm=26&gp=0.jpg"
    ], //轮播图图片地址
    display: true, //为true显示活动，为false显示以往活动
    active: [], //现在进行的活动
    historyActive: [], //以往的活动
    currPage: 1, //正在进行活动的当前页面
    historyCurrPage: 1, //以往活动的当前页面
    pageSize: 4 //设置每页面条数
  },
  toActive: function(event) {
    wx.navigateTo({
      url: '/pages/activedetail/activedetail'
    })
  },
  toSearch: function(event) {
    if (event.detail.value==""){
      wx.showToast({
        title: ' 搜索内容不能为空 ',
        icon: 'none',
        duration: 2000
      })
      return;
    }
    wx.navigateTo({
      url: '/pages/searchresult/searchresult' + '?value=' + event.detail.value
    })
  },
  getAct(page) { //请求当前活动页面数据，page为页面数
    var that = this;
    wx.showLoading({
      title: '加载中',
      mask: 'true'
    })

    wx.request({
      url: this.data.baseURL + '/activity/all/underway-act?currPage=' + page + '&pageSize=' + this.data.pageSize,
      method: "GET",
      success(res) {
        wx.hideLoading();
        console.log(res.data);
        if (res.data.result.length == 0) {
          that.data.currPage--;
          that.setData(that.data);
          wx.showToast({
            title: '没有更多了...',
            icon: 'success',
            duration: 2000
          })
          return;
        }
        that.data.active.push(...res.data.result);
        that.setData(that.data);
        wx.showToast({
          title: '加载成功',
          icon: 'success',
          duration: 2000
        })
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
  getHistoryAct(page) { //请求当前活动页面数据，page为页面数
    var that = this;
    wx.showLoading({
      title: '加载中',
      mask: 'true'
    })

    wx.request({
      url: this.data.baseURL + '/activity/history/?currPage=' + page + '&pageSize=' + this.data.pageSize,
      method: "GET",
      success(res) {
        wx.hideLoading();
        console.log(res.data);
        if (res.data.result.length == 0) {
          that.data.historyCurrPage--;
          that.setData(that.data);
          wx.showToast({
            title: '没有更多了...',
            icon: 'success',
            duration: 2000
          })
          return;
        }
        that.data.historyActive.push(...res.data.result);
        that.setData(that.data);
        wx.showToast({
          title: '加载成功',
          icon: 'success',
          duration: 2000
        })
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
  refresh(event) {
    this.onLoad();
  },
  moreAct(event) {
    if (event.target.dataset.name == "active") {
      this.data.currPage++;
      this.getAct(this.data.currPage);
    } else {
      this.data.historyCurrPage++;
      this.getHistoryAct(this.data.historyCurrPage);
    }
  },
  onLoad: function() {
    this.getAct(this.data.currPage);
    this.getHistoryAct(this.data.historyCurrPage);
  }
})