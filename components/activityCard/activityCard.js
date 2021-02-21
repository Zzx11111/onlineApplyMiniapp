// components/activityCard/activityCard.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    activity:{
      type:Object,
      value:{},
      observer:function(newVal){
        this.setData({
          activityStartTime:newVal.activityTime
        })
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    imageBaseUrl:"http://localhost:3000/",
    activityStartTime:"",
    timeEnd:''
    
  },
  /**
   * 组件的方法列表
   */
  methods: {

  },
  // observers:{
  //   'activity':function(activity){
  //     this.setData({
  //       activityStartTime:activity.activityTime
  //     })
  //   }
  // },
  lifetimes:{
    attached(){
      console.log(Date.now())
      let nowTime = Date.now()
      let activityTime = Date.parse(this.data.activityStartTime)
      //相差天数
      let differDay = Number(((activityTime - nowTime)/(1000*60*60*24)))
      if(differDay > 1){
        differDay = Number(differDay.toFixed(0)) + 1 + "天后报名截止"
        this.setData({
          timeEnd:differDay
        })
      }else if(differDay < 0){
        this.setData({
          timeEnd:"活动已结束"
        })
      }else{
        const differMinute = Number((differDay * 24 * 60).toFixed(0)) + 1 + "分钟后报名截止"
        this.setData({
          timeEnd:differMinute
        })
      }
    }
  }
  
})
