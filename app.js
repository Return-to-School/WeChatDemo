//app.js
App({
  onLaunch: function () {
    
  },
  imgUrl: "http://q1vh3wr3c.bkt.clouddn.com",
  baseURL:"http://www.yiweiting.top:8080",
  //存储用户id和信息，登录后更新
  userid:-1,
  userInfo:{},
  //提示要登录的函数
  needLogin(){
    wx.showToast({
      title:"请先登录...",
      icon: 'none',
      duration: 2000,
      mask:true
    })
    setTimeout(function () {
      wx.switchTab({
        url: "/pages/personinfo/personinfo"
      })
    }, 2000)
  }
})