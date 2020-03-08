// pages/activedetail/activedetail.js
const app = getApp();
Page({
  data: {
    active: {},
    filenames: [
      "xxx12312312312312312.pdf",
      "xxx123123.pdf",
      "xxx.pdf",
      "xxx123.pdf",
      "xxx33.pdf",
    ],
    status:-1
  },
  onLoad() {
    var that = this;
    wx.getStorage({
      key: 'ActiveDetail',
      success: function(res) {
        that.data.active = res.data;
        that.setData(that.data);
        //获取文件列表
        wx.showLoading({
          title: ' 活动加载中... ',
          mask: 'true'
        })
        wx.request({
          url: app.baseURL + '/activity/' + that.data.active.id + '/filenames',
          method: "GET",
          success(res) {
            wx.hideLoading();
            console.log(res);
          },
          fail(res) {
            wx.hideLoading();
            wx.showToast({
              title: ' 加载失败，请稍后重试 ',
              icon: 'none',
              duration: 2000
            })
            setTimeout(function() {
              wx.navigateBack({
                delta: 1
              })
            }, 2000)
          }

        })
        that.getStatus();
      }
    })
    
  },
  showPopup() {
    let popupComponent = this.selectComponent('.downloadFile');
    popupComponent && popupComponent.show();
  },
  hidePopup() {
    let popupComponent = this.selectComponent('.downloadFile');
    popupComponent && popupComponent.hide();
  },
  getStatus() {
    var that = this;
    if(app.userid==-1){
      return;
    }
    wx.showLoading({
      title: ' 状态加载中... ',
      mask: 'true'
    })
    wx.request({
      url: app.baseURL + '/apply/activity/' + that.data.active.id + '/student/'+app.userid,
      method: "GET",
      success(res) {
        wx.hideLoading();
        console.log(res);
      },
      fail(res) {
        wx.hideLoading();
        wx.showToast({
          title: ' 加载失败，请稍后重试 ',
          icon: 'none',
          duration: 2000
        })
        setTimeout(function() {
          wx.navigateBack({
            delta: 1
          })
        }, 2000)
      }

    })
  }
})