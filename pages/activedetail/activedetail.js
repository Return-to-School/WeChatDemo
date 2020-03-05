// pages/activedetail/activedetail.js
Page({
  data: {
    active: {}
  },
  onLoad(){
    var that = this;
    wx.getStorage({
      key: 'ActiveDetail',
      success: function(res) {
        that.data.active=res.data;
        that.setData(that.data);
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
  }
})