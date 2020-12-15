// pages/release/release.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperImg:[
      "/assets/images/common/123.jpg"
    ],
    fileList:[]
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
  chooseImage(){
    var that = this
    //选择图片
    wx.chooseImage({
      count: 1,
      success(res){
        //发送url转换base64
        console.log(res)
        wx.request({
          url:res.tempFilePaths[0],
          responseType:'arraybuffer',
          success(res){
            console.log(res)
            let base64 = 'data:image/jpeg;base64,'+ wx.arrayBufferToBase64(res.data)
            console.log(base64)
            let Imgs = that.data.swiperImg
            Imgs.push(base64)
            that.setData({
              swiperImg:Imgs
            })
          }
        })  
      }
    })
    // let Imgs = this.data.swiperImg
    // Imgs.push('/assets/images/common/nologin.png')
    // this.setData({
    //   swiperImg:Imgs
    // })
  }
})