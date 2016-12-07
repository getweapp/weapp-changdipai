//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    cityName: '上海',
    cityList: ['1','2','3','4'],
     imgUrls: [
      'http://m.changdipai.com/resource/changdipai/img/album/0/1.jpg',
      'http://m.changdipai.com/resource/changdipai/img/album/0/2.jpg',
      'http://m.changdipai.com/resource/changdipai/img/album/0/3.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    suggests: []
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad() {
    console.log('onLoad')
    wx.request({
      url: 'https://api.getweapp.com/vendor/changdipai/suggest', 
      success: (res) => {
        console.log(typeof(res.data),res.data)
          this.setData({
            suggests: res.data
          })
      }
    })
  }
})
