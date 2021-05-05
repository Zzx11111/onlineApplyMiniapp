// pages/enlist/enlist.js
const {requestUrl} = require('../../utils/request')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:"",
    phone:"",
    checked:false,
    aid:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    const aid = options.aid
    this.setData({
      aid:aid
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
  onChange({detail}){
    this.setData({
      checked: detail
    })
  },
  async enlist(){
    const token = wx.getStorageSync('token')
    console.log(this.data.aid)
    console.log(this.data.phone)
    if(this.data.name === "" || this.data.phone === ""){
      wx.showToast({
        title: '请输入个人信息',
      })
      return 
    }
    const {data} = await requestUrl({
      url:"/v1/Enlist/activityEnlist",
      method:"POST",
      data:{
        aid:this.data.aid,
        name:this.data.name,
        phone:this.data.phone
      },
      header:{
        token:token
      }
    })
    if(data.errorCode !== 0){
      wx.showToast({
        title:data.msg,
      })
      return
    }
    if(this.data.checked === true){
      const res = await requestUrl({
        method:"POST",
        url:"/v1/user/updateInfo",
        data:{
          name:this.data.name,
          phone:this.data.phone
        },
        header:{
          token:token
        },
      })
      console.log(res)
    }
    var that = this
    wx.requestSubscribeMessage({
      tmplIds: ['Xn26NFlTGIg3laBb0kAKXLKDZYgv8ZHRaIly417RQ3E'],
      success(res){
        requestUrl({
          url:"/v1/Enlist/subscribeMessage",
          method:"POST",
          header:{
            token:token
          },
          data:{
            aid:that.data.aid
          }
        })
      },
      fail(err){
        console.log(err)
      },
    })
    wx.navigateTo({
      url: `/pages/activityInfo/activityInfo?id=${this.data.aid}`,
    })
  }
})