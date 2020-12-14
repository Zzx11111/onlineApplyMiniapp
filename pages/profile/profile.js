// pages/profile/profile.js
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
  _getUserInfo(e){
    var that= this
    console.log(e)
    // wx.login({
    //   timeout: 5000,
    //   success(res) {
    //     console.log(res)
    //     if (res.code) {
    //       wx.request({
    //         method: 'POST',
    //         url: 'http://localhost:3000/v1/user/login',
    //         data: {
    //           code: res.code
    //         },
    //         // header:{
    //         //   "content-type": "application/x-www-form-urlencoded"
    //         // },
    //         success(res) {
    //           // console.log(res.data.token)
    //           that.setData({
    //             token: res.data.token
    //           })
    //         },
    //         fail(error) {
    //           console.log(error)
    //         }
    //       })
    //     }
    //   },
    //   fail(err) {
    //     console.log(err)
    //     console.log('登录失败了')
    //   }
    // })
    // wx.getUserInfo({
    //   success(res){
    //     console.log(res)
    //     that.setData({
    //       userInfo:res.userInfo
    //     })
    //   }
    // })
    this.setData({
      userInfo:e.detail.userInfo
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