// pages/profile/profile.js
const {requestUrl} = require('../../utils/request')
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(app.globalData.userInfo)
    this.setData({
      userInfo:app.globalData.userInfo
    })
  },
  //获取用户信息
  async _getUserInfo(e){
    var userInfo = e.detail.userInfo
    var code = null
    wx.login({
      timeout: 5000,
      async success(res) {
        console.log(res)
        code = res.code
        if(code){
          var user = await requestUrl({
            url:"/v1/user/login",
            method:"post",
            data:{
              code:code,
              avatarUrl:userInfo.avatarUrl,
              username:userInfo.nickName
            }
          })
          console.log(user)
          wx.setStorage({
            data:user.data.token,
            key: 'token',
          })
        }
      },
      fail(err) {
        console.log(err)
        console.log('登录失败了')
      }
    })
    
    this.setData({
      userInfo:e.detail.userInfo
    })
  },
  goUserInfo(){
    wx.navigateTo({
      url: '/pages/userInfo/userInfo'
    })
  },
  goMyEnlist(){
    wx.navigateTo({
      url: '/pages/myEnlist/myEnlist'
    })
  },
  goMyRelease(){
    console.log("aaaaa")
    wx.navigateTo({
      url: '/pages/myRelease/myRelease'
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