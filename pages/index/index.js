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
    searchValue:"",
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
    console.log(e)
  },
  searchValueChange(e){
    console.log(e);
    this.setData({
      searchValue:e.detail
    })
  }

})