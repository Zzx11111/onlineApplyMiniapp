

function requestUrl(url,data,method = 'GET',header = {}){
  return new Promise((resolve,reject) => {
    wx.request({
      url,
      data,
      method,
      header,
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