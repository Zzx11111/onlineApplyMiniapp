//index.js
//获取应用实例
const app = getApp()
const {
  requestUrl
} = require('../../utils/request.js')
const {
  GetDistance
} = require('../../utils/util')
Page({
  data: {
    //appid:'wxb2bd9a2c08b417bf',
    //secret:'d725f10afcfa3b6455d955b7cd58caa1',
    openID: '',
    token: '',
    activity: [],
    a:false
  },
  onLoad: async function () {
    // var method = 'POST'
    // const res = await requestUrl('http://localhost:3000/v1/activity/getActivity','GET')
    // console.log(res.data)
    // this.setData({
    //   activity:res.data
    // })
  },
  login() {

    var that = this
    wx.login({
      timeout: 5000,
      success(res) {
        console.log(res)
        if (res.code) {
          wx.request({
            method: 'POST',
            url: 'http://localhost:3000/v1/user/login',
            data: {
              code: res.code
            },
            // header:{
            //   "content-type": "application/x-www-form-urlencoded"
            // },
            success(res) {
              // console.log(res.data.token)
              that.setData({
                token: res.data.token
              })
            },
            fail(error) {
              console.log(error)
            }
          })
        }
      },
      fail(err) {
        console.log(err)
        console.log('登录失败了')
      }
    })
  },
  getInfo() {
    var that = this
    console.log(this.data.token)
    wx.request({
      url: 'http://localhost:3000/v1/user/info',
      header: {
        token: that.data.token
      },
      success(res) {
        console.log(res)
      },
      fail(error) {

      }
    })
  },
  site() {

    wx.getLocation({
      // type: 'gcj02',
      // isHighAccuracy:true,
      success(res) {
        console.log(res)
        let a = GetDistance(22.973568, 113.748781, 23.132683, 113.878626)
        console.log(a)
      }
    })

  }

})