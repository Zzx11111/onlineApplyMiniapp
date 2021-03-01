// pages/userInfo/userInfo.js
const {requestUrl} = require('../../utils/request')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:"",
    phone:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    const token = wx.getStorageSync('token')
    const {data} = await requestUrl({
      url:"/v1/user/info",
      header:{
        token:token
      }
    })
    this.setData({
      name:data.name,
      phone:data.phone
    })
  },
  async saveInfo(){
    const token = wx.getStorageSync('token')
    const res = await requestUrl({
      url:"/v1/user/updateInfo",
      method:"POST",
      header:{
        token:token
      },
      data:{
        name:this.data.name,
        phone:this.data.phone
      }
    })
    console.log(res)
    if(res.data.errorCode === 0){
      wx.showToast({
        title: '修改成功',
      })
    }
    const {data} = await requestUrl({
      url:"/v1/user/info",
      header:{
        token:token
      }
    })
    this.setData({
      name:data.name,
      phone:data.phone
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