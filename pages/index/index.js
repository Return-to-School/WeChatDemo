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
          content: "1月22日9时许，已经踏上返乡旅程的武汉大学人民医院病理科医生吴小艳，收到医院发出的医疗支援号召后，立刻返回武汉，两个多小时后就出现在岗位上。“大家都在战斗，只有回到战场，我才安心。”吴小艳说。“我的‘战友’都在这里，越是危险的时候，越是要冲在最前面！”严丽是华中科技大学附属同济医院急诊内科副主任医师，原本已向医院申请休假，1月22日，当全家准备外出旅行时，她却从机场回到了医院。"
        },
        {
          title: "活动二",
          content: "1月22日9时许，已经踏上返乡旅程的武汉大学人民医院病理科医生吴小艳，收到医院发出的医疗支援号召后，立刻返回武汉，两个多小时后就出现在岗位上。“大家都在战斗，只有回到战场，我才安心。”吴小艳说。“我的‘战友’都在这里，越是危险的时候，越是要冲在最前面！”严丽是华中科技大学附属同济医院急诊内科副主任医师，原本已向医院申请休假，1月22日，当全家准备外出旅行时，她却从机场回到了医院。"
        },
        {
          title: "活动三",
          content: "1月22日9时许，已经踏上返乡旅程的武汉大学人民医院病理科医生吴小艳，收到医院发出的医疗支援号召后，立刻返回武汉，两个多小时后就出现在岗位上。“大家都在战斗，只有回到战场，我才安心。”吴小艳说。“我的‘战友’都在这里，越是危险的时候，越是要冲在最前面！”严丽是华中科技大学附属同济医院急诊内科副主任医师，原本已向医院申请休假，1月22日，当全家准备外出旅行时，她却从机场回到了医院。"
        },
        {
          title: "活动四",
          content: "1月22日9时许，已经踏上返乡旅程的武汉大学人民医院病理科医生吴小艳，收到医院发出的医疗支援号召后，立刻返回武汉，两个多小时后就出现在岗位上。“大家都在战斗，只有回到战场，我才安心。”吴小艳说。“我的‘战友’都在这里，越是危险的时候，越是要冲在最前面！”严丽是华中科技大学附属同济医院急诊内科副主任医师，原本已向医院申请休假，1月22日，当全家准备外出旅行时，她却从机场回到了医院。"
        }
      ],    //现在进行的活动
    histroyActive: [
      {
        title: "活动一",
        content: "1月22日9时许，已经踏上返乡旅程的武汉大学人民医院病理科医生吴小艳，收到医院发出的医疗支援号召后，立刻返回武汉，两个多小时后就出现在岗位上。“大家都在战斗，只有回到战场，我才安心。”吴小艳说。“我的‘战友’都在这里，越是危险的时候，越是要冲在最前面！”严丽是华中科技大学附属同济医院急诊内科副主任医师，原本已向医院申请休假，1月22日，当全家准备外出旅行时，她却从机场回到了医院。"
      },
      {
        title: "活动二",
        content: "1月22日9时许，已经踏上返乡旅程的武汉大学人民医院病理科医生吴小艳，收到医院发出的医疗支援号召后，立刻返回武汉，两个多小时后就出现在岗位上。“大家都在战斗，只有回到战场，我才安心。”吴小艳说。“我的‘战友’都在这里，越是危险的时候，越是要冲在最前面！”严丽是华中科技大学附属同济医院急诊内科副主任医师，原本已向医院申请休假，1月22日，当全家准备外出旅行时，她却从机场回到了医院。"
      },
      {
        title: "活动三",
        content: "1月22日9时许，已经踏上返乡旅程的武汉大学人民医院病理科医生吴小艳，收到医院发出的医疗支援号召后，立刻返回武汉，两个多小时后就出现在岗位上。“大家都在战斗，只有回到战场，我才安心。”吴小艳说。“我的‘战友’都在这里，越是危险的时候，越是要冲在最前面！”严丽是华中科技大学附属同济医院急诊内科副主任医师，原本已向医院申请休假，1月22日，当全家准备外出旅行时，她却从机场回到了医院。"
      },
      {
        title: "活动四",
        content: "1月22日9时许，已经踏上返乡旅程的武汉大学人民医院病理科医生吴小艳，收到医院发出的医疗支援号召后，立刻返回武汉，两个多小时后就出现在岗位上。“大家都在战斗，只有回到战场，我才安心。”吴小艳说。“我的‘战友’都在这里，越是危险的时候，越是要冲在最前面！”严丽是华中科技大学附属同济医院急诊内科副主任医师，原本已向医院申请休假，1月22日，当全家准备外出旅行时，她却从机场回到了医院。"
      }
    ]    //以往的活动
  },
  toActive:function(event){
    wx.navigateTo({
      url: '/pages/activedetail/activedetail'
    })
  },
  toSearch:function(event){
    wx.navigateTo({
      url: '/pages/searchresult/searchresult' + '?value=' + event.detail.value
    })
  }
})
