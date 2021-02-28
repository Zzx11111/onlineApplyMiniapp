// pages/nearby/nearby.js
const {requestUrl} = require('../../utils/request')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:"",
    latitude:"",
    longitude:"",
    activity:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  async site() {
    var that = this
    wx.getLocation({
      type: 'gcj02', //返回可以用于wx.openLocation的经纬度
      success (res) {
        const latitude = res.latitude
        const longitude = res.longitude
        that.setData({
          
          
        })
        wx.chooseLocation({
          latitude,
          longitude,
          async success(res){
            console.log(res)
            that.setData({
              name:res.name,
              latitude:res.latitude,
              longitude:res.longitude
            })
            console.log(res.latitude)
            const {data} = await requestUrl({
              url:"/v1/activity/nearlyActivity",
              method:"POST",
              data:{
                latitude:res.latitude,
                longitude:res.longitude
              }
            })
            that.setData({
              activity:data
            })
            
          }
        })
      }
    })
    
    
    
    // wx.chooseLocation({
    //   success(res){
    //     console.log(longitude)
    //     console.log(res)
    //   }
    // })
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