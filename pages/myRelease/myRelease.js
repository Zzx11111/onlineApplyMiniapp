// pages/myRelease/myRelease.js
const {requestUrl} = require('../../utils/request')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    activity:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad:async function (options) {
    const token = wx.getStorageSync('token')
    const {data} = await requestUrl({
      url:"/v1/user/myRelease",
      header:{
        token:token
      },
      method:"GET"
    })
    console.log(data)
    // if(data.errorCode)
    this.setData({
      activity:data
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

  }
})