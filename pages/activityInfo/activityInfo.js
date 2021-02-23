// pages/activityInfo/activityInfo.js
const {requestUrl} = require('../../utils/request')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    activityInfo:{},
    imageBaseUrl:"http://localhost:3000/",
    navigateUrl:"/pages/viewList/viewList"
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
    this.setData({
      activityInfo:data
    })
    //字符串过长使用encodeURIComponent编码
    const enlistList = encodeURIComponent(JSON.stringify(this.data.activityInfo.enlistList))
    const navigateUrl = this.data.navigateUrl + `?enlistList=${enlistList}`
    this.setData({
      navigateUrl:navigateUrl
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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