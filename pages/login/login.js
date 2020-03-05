// pages/persomInfo/personInfo.js
const app = getApp();
Page({
  data: {
    account: "",
    password: ""
  },
  toRejister: function(e) {
    wx.navigateTo({
      url: '../register/register'
    });
  },
  inputedit(event) {
    var type = event.currentTarget.dataset.type;
    this.data[type] = event.detail.value;
  },
  showMes(mes) {
    wx.showToast({
      title: mes,
      icon: 'none',
      duration: 2000
    })
  },
  toLogin(event) {
    var that = this;
    console.log(this.data);
    //验证数据
    if (this.data.account == "") {
      this.showMes(" 学号不能为空 ");
    }
    if (this.data.password == "") {
      this.showMes(" 密码不能为空 ")
    }
    //登录
    wx.showLoading({
      title: '登录中',
      mask: 'true'
    })
    // wx.request({
    //   url: app.baseURL + "/user/verification",
    //   method: "POST",
    //   data: {
    //     account: this.data.account,
    //     password: this.data.password
    //   },
    //   header: {
    //     'content-type': 'application/json' // 默认值
    //   },
    //   success(res) {
    //     wx.hideLoading();
    //     console.log(res.data);
    //   },
    //   fail(res) {
    //     wx.hideLoading();
    //     wx.showToast({
    //       title: '登录失败，请稍后重试',
    //       icon: 'none',
    //       duration: 2000
    //     })
    //   }
    // })
    app.userid = 39;
    //获取个人信息
    wx.request({
      url: app.baseURL + "/student/39",
      method: "GET",
      success(res) {
        wx.hideLoading();
        app.userInfo = res.data;
        that.showMes(" 登录成功，即将自动跳转... ");
        setTimeout(function(){
          wx.switchTab({
            url:"/pages/personinfo/personinfo"
          })
        },2000)
      },
      fail(res) {
        wx.hideLoading();
        that.showMes(" 登录失败，请稍后重试！");
      }
    })
  }
})