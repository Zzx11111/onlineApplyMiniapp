// pages/release/release.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl:'',
    activityName:null
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
  onChange(e){
    console.log(e)
    this.setData({
      value:e.detail
    })
  }
})