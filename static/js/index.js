var src = document.getElementsByClassName('src')[0]
var startTime = document.getElementsByClassName('startTime')[0]
var endTime = document.getElementsByClassName('endTime')[0]
var startCapture = document.getElementsByClassName('startCapture')[0]
var loading = document.getElementsByClassName('loading')[0]
var download = document.getElementsByClassName('download')[0]


function init() {
  
  // console.log(res)
  

  startCapture.addEventListener('click', async function () {
    // console.log(src.value)
    var arr = endTime.value.split(':')
    var startTimeArr = startTime.value.split(':')
    var second = 0
    var startSecond = 0
    var captureTime = 0
    if (arr.length > 1) {
      console.log(arr)
      second = Number(arr[2]) + Number(arr[1]) * 60 + Number(arr[0]) * 60 * 60
      startSecond = Number(startTimeArr[2]) + Number(startTimeArr[1]) * 60 + Number(startTimeArr[0]) * 60 * 60
      captureTime = second - startSecond
      console.log(captureTime)
    }
    if (captureTime < 0) {
      alert('结束时间不正确')
    }
    // return
    loading.innerHTML = '截取中'
    download.innerHTML = ''
    fetch(`/capture?src=${src.value}&startTime=${startTime.value}&endTime=${captureTime == 0 ? endTime.value : captureTime}`).then(res => res.json()).then(res => {
      if(res.code === 200) {
        loading.innerHTML = '截取完成'
        let oUrl = res.download
        download.innerHTML = `<a href="${oUrl}" download="${res.download.replace('/', '')}">点击下载</a>`
      }
      console.log(res)
    })
  }, false)
}


init()