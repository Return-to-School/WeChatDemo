const app = getApp();
Page({
  data:{
    imgUrl:app.imgUrl,
    img: [
      "http://img3.imgtn.bdimg.com/it/u=1670524489,3110547408&fm=26&gp=0.jpg",  
      "http://img4.imgtn.bdimg.com/it/u=1906892428,3163048084&fm=26&gp=0.jpg",
      "http://img5.imgtn.bdimg.com/it/u=3914465514,1089330837&fm=26&gp=0.jpg"    
      ],    //轮播图图片地址
      display:true,    //为true显示活动，为false显示以往活动
      active:[
        {
          title:"活动一",
          img:"http://q1vh3wr3c.bkt.clouddn.com/icon1.png"
        },
        {
          title: "活动二",
          img: "http://q1vh3wr3c.bkt.clouddn.com/icon2.png"
        },
        {
          title: "活动三",
          img: "http://q1vh3wr3c.bkt.clouddn.com/icon3.png"
        },
        {
          title: "活动四",
          img: "http://q1vh3wr3c.bkt.clouddn.com/icon4.png"
        }
      ],    //现在进行的活动
    histroyActive: [
      {
        title: "以往活动一",
        img: "http://q1vh3wr3c.bkt.clouddn.com/icon5.png"
      },
      {
        title: "以往活动二",
        img: "http://q1vh3wr3c.bkt.clouddn.com/icon1.png"
      },
      {
        title: "以往活动三",
        img: "http://q1vh3wr3c.bkt.clouddn.com/icon2.png"
      },
      {
        title: "以往活动四",
        img: "http://q1vh3wr3c.bkt.clouddn.com/icon3.png"
      }
    ]    //以往的活动
  },
  ChangeDisplay:function(e){
    this.setData({
      display:e.target.dataset.set
    })
  }
})
