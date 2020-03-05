// pages/fillinfo/fillinfo.js
const app = getApp();
Page({
  data: {
    userInfo: {},
    notice: "本页填写的信息用于报名活动"
  },
  onLoad: function() {
    if (app.userid != -1) {
      this.data.userInfo = app.userInfo;
      this.setData(this.data);
    } else {
      app.needLogin();
    }
  },
  inputedit(event) {
    var type = event.currentTarget.dataset.type;
    this.data.userInfo[type] = event.detail.value;
  },
  submitInfo(event) {
    var that = this;
    console.log(this.data.userInfo);
    //正则表达式验证信息
    if (!/^((0\d{2,3}-\d{7,8})|(1[34578]\d{9}))$/.test(this.data.userInfo.phone)) {
      this.showMes(" 联系电话填写不正确 ");
      return;
    }
    if (!/^([a-zA-Z\d])(\w|\-)+@[a-zA-Z\d]+\.[a-zA-Z]{2,4}$/.test(this.data.userInfo.email)) {
      this.showMes(" 邮箱填写不正确 ");
      return;
    }
    if (!/^[1-9][0-9]{4,10}$/.test(this.data.userInfo.qq)) {
      this.showMes(" QQ填写不正确 ");
      return;
    }
    if (!/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(this.data.userInfo.idCard)) {
      this.showMes(" 身份证填写不正确 ");
      return;
    }
    if (!/^([1-9]{1})(\d{14}|\d{18})$/.test(this.data.userInfo.bankCard)) {
      this.showMes(" 建行卡号填写不正确 ");
      return;
    }
    if (this.data.userInfo.origin == "" || this.data.userInfo.origin == null) {
      this.showMes(" 籍贯填写不正确 ");
      return;
    }
    if (this.data.userInfo.highSchool == "" || this.data.userInfo.highSchool == null) {
      this.showMes(" 回访中学填写不正确 ");
      return;
    }
    //设置提交数据
    var sendData = {};
    sendData.phone = this.data.userInfo.phone;
    sendData.email = this.data.userInfo.email;
    sendData.qq = this.data.userInfo.qq;
    sendData.idCard = this.data.userInfo.idCard;
    sendData.bankCard = this.data.userInfo.bankCard;
    sendData.origin = this.data.userInfo.origin;
    sendData.highSchool = this.data.userInfo.highSchool;

    console.log(sendData);

    wx.showLoading({
      title: '提交中',
      mask: 'true'
    })

    wx.request({
      url: app.baseURL + '/student/' + app.userInfo.id,
      method: "PUT",
      data: sendData,
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        wx.hideLoading();
        if(res.data.message=="更新成功"){
          that.showMes("提交成功");
          app.userInfo = that.data.userInfo;
        }else{
          that.showMes("提交失败，请稍后重试");
        }
      },
      fail(res) {
        wx.hideLoading();
        wx.showToast({
          title: '提交失败，请稍后重试',
          icon: 'none',
          duration: 2000
        })
      }
    })

  },
  showMes(mes) {
    wx.showToast({
      title: mes,
      icon: 'none',
      duration: 2000,
      mask: true
    })
  }
})