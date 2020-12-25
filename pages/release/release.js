const {formatTime} = require('../../utils/util')
import Toast from '@vant/weapp/toast/toast';
const {requestUrl} = require('../../utils/request')
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
    phone:"13018427121"
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
      currentDate:time,
      imgUrl:null
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
  async releaseActivity(){
    //判断活动信息是否为空
    if(!this.data.imgUrl){
      Toast('图片不能为空');
      return false;
    }
    if(!this.data.activityName){
      Toast('活动名称不能为空')
      return false
    }
    if(!this.data.startDate || !this.data.startTime){
      Toast('日期时间不能为空')
      return false
    }
    if(!this.data.addressName || !this.data.latitude || !this.data.longitude || !this.data.address){
      Toast('活动地址不能为空')
       return false
    }
    if(!this.data.content){
      Toast('活动内容不能为空')
    }
    if(!this.data.phone){
      Toast('联系电话不能为空')
    }else if(!(/^1(3|4|5|6|7|8|9)\d{9}$/.test(this.data.phone))){
      Toast('联系电话有误')
    }
    //图片转base64
    let image = 'data:image/jpg;base64,' + wx.getFileSystemManager().readFileSync(this.data.imgUrl,"base64")
    let datetime = this.data.startDate+ " " + this.data.startTime
    console.log(datetime)
    const v = await requestUrl({
      url:"/v1/activity/addActivity",
      method:"POST",
      data:{
        imgUrl:image,
        activityName:this.data.activityName,
        address:this.data.address,
        addressName:this.data.addressName,
        latitude:this.data.latitude,
        longitude:this.data.longitude,
        startDate:datetime,
        content:this.data.content,
        phone:this.data.phone,
        uid:1
      }
    })
    console.log(v)
  }
})