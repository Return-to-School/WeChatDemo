// pages/register/register.js
const app = getApp();
Page({
  data: {
    account: "",
    password: "",
    name: "",
    confirm: ""
  },
  toRegister(event) {
    var that = this;
    // 验证数据
    if (this.data.account == "" || this.data.confirm == "" || this.data.name == "" || this.data.password == "") {
      this.showMes(" 所填项不能为空！");
    }
    if (this.data.password != this.data.confirm) {
      this.showMes(" 密码与确定密码不一致！");
      return;
    }
    wx.showLoading({
      title: '提交中',
      mask: 'true'
    })

    wx.request({
      url: app.baseURL + '/user?name=' + this.data.name,
      method: "POST",
      data: {
        account: this.data.account,
        password: this.data.password
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        wx.hideLoading();
        that.showMes(res.data.message);
        if (res.data.message != "注册成功") {
          return;
        } else {
          //延缓后跳转到登录页面
          setTimeout(function() {
            wx.navigateBack({
              delta: 1
            })
          }, 2000)
        }
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
  }
})