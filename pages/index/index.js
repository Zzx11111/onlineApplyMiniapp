//index.js
//获取应用实例
const app = getApp()
const {
  requestUrl
} = require('../../utils/request.js')
const {
  GetDistance
} = require('../../utils/util')
Page({
  data: {
    offset:0,
    limit:10,
    keyWord:"",
    activity:[]
  },
  onLoad: async function () {
    const {data} = await requestUrl({
      url:"/v1/activity/getActivity"
    })
    this.setData({
      activity:data
    })
  },
  site() {
    wx.getLocation({
      // type: 'gcj02',
      // isHighAccuracy:true,
      success(res) {
        console.log(res)
        let a = GetDistance(22.973568, 113.748781, 23.132683, 113.878626)
        console.log(a)
      }
    })

  },
  searchActivity(e){
    if(this.data.keyWord !== ''){
      wx.navigateTo({
        url: `/pages/searchActivity/searchActivity?keyWord=${this.data.keyWord}`,
      })
    }else{
      wx.showToast({
        title: '请输入搜索的关键字',
        icon:'none'
      })
    }
  },
  // searchValueChange(e){
  //   this.setData({
  //     keyWord:e.detail
  //   })
  // }

})