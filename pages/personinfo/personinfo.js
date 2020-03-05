// pages/personinfo/personinfo.js
const app = getApp();
Page({
  data: {
    userid:"",
    userInfo:{},
    isLogin:false
  },
  to:function(event){
    wx.navigateTo({
      url: event.currentTarget.dataset.url
    })
  },
  onShow:function(){
    if(app.userid!=-1){
      this.data.userid = app.userid;
      this.data.userInfo = app.userInfo;
      this.data.isLogin = true;
      this.setData(this.data);
    }
  }
})