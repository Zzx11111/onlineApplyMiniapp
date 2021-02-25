// pages/activityInfo/activityInfo.js
const {requestUrl} = require('../../utils/request')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    activityInfo:{},
    imageBaseUrl:"http://localhost:3000/",
    navigateUrl:"/pages/viewList/viewList",
    timeEnd:""
  },
  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad:async function (options) {
    const id = options.id
    const {data} = await requestUrl({
      method:"POST",
      url:"/v1/activity/activityInfo",
      data:{
        id:id
      }
    })
    console.log(data)
    this.setData({
      activityInfo:data
    })
    //字符串过长使用encodeURIComponent编码
    const enlistList = encodeURIComponent(JSON.stringify(this.data.activityInfo.enlistList))
    const navigateUrl = this.data.navigateUrl + `?enlistList=${enlistList}`
    // this.setData({
    //   navigateUrl:navigateUrl
    // })
    const nowTime = Date.parse(Date())
    console.log(nowTime)
    const activityTime = Date.parse(this.data.activityInfo.activityTime)
    console.log(activityTime);
    const timeEnd = activityTime - nowTime 
    console.log(timeEnd);
    this.setData({
      navigateUrl:navigateUrl,
      timeEnd:timeEnd
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  openMap(e){
    console.log(e)
    const latitude = Number(e.currentTarget.dataset.latitude)
    const longitude = Number(e.currentTarget.dataset.longitude)
    wx.openLocation({
      latitude: latitude,
      longitude: longitude,
    })
  },

  share(){
    wx.showShareMenu({
      withShareTicket: true,
      menus: ['shareAppMessage', 'shareTimeline']
    })
  },
  goHome(){
    // wx.navigateBack({
    //   delta: 10,
    // })
    wx.reLaunch({
      url: '/pages/index/index',
    })
  },
  /**
   * 报名
   */
  enlist(){
    const token = wx.getStorageSync('token')
    console.log(token);
    if(token){
      wx.navigateTo({
        url: `/pages/enlist/enlist?aid=${this.data.activityInfo.id}`,
      })
    }else{
      wx.reLaunch({
        url: "/pages/profile/profile",
      })
    }
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  },
})