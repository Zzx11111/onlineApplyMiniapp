const util = require('../../utils/util')
// pages/release/release.js
const {formatTime} = require('../../utils/util')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl:"",
    activityName:null,
    currentDate:"",
    startDate:"",
    startTime:"",
    address:"",
    latitude:"",
    longitude:"",
    addressName:"",
    content:"",
    phone:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let date = new Date()
    let year = date.getFullYear()
    let month = date.getMonth() + 1
    let day = date.getDate()
    let hour = date.getHours()
    let minute = date.getMinutes()
    let second = date.getSeconds()
    let time = `${year}-${month}-${day}` 
    console.log(formatTime(date))
    this.setData({
      currentDate:time
    })
  },
  bindDateChange(e){
    console.log(e)
    this.setData({
      startDate:e.detail.value
    })
  },
  bindTimeChange(e){
    this.setData({
      startTime:e.detail.value
    })
  },
  //选择图片
  chooseImage(){
    var that = this
    wx.chooseImage({
      count: 1,
      sizeType:['compressed'],
      success(res){
        //发送url转换base64
        console.log(res)
        that.setData({
          imgUrl:res.tempFilePaths[0]
        })
        console.log('data:image/jpg;base64,'+ wx.getFileSystemManager().readFileSync(res.tempFilePaths[0], "base64"))
        // wx.request({
        //   url:res.tempFilePaths[0],
        //   responseType:'arraybuffer',
        //   success(res){
        //     console.log(res)
        //     let base64 = 'data:image/jpeg;base64,'+ wx.arrayBufferToBase64(res.data)
        //     console.log(base64)
        //     let Imgs = that.data.swiperImg
        //     Imgs.push(base64)
        //     that.setData({
        //       swiperImg:Imgs
        //     })
        //   },
        //   fail(error){
        //     console.log(error)
        //   }
        // })  
       }
     })
  },
  //选择地址
  selectAddress(){
    var that = this
    wx.chooseLocation({
      success(res){
        console.log(res)
        that.setData({
          address:res.address,
          latitude:res.latitude,
          longitude:res.longitude,
          addressName:res.name
        })
      }
    })
  },
  //发布
  releaseActivity(){
    
  }
})