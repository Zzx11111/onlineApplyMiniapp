const baseUrl = "http://localhost:3000"

// const baseUrl = "http://192.168.0.105:3000"
function requestUrl(options){
  return new Promise((resolve,reject) => {
    wx.request({
      url:baseUrl + options.url,
      data:options.data || {},
      method:options.method || "GET",
      header:options.header || {},
      success(res){
        resolve(res)
      },
      fail(error){
        reject(error)
      }
    })
  })
}

module.exports = {
  requestUrl
}