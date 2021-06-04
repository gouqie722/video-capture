var ffmpeg = require('fluent-ffmpeg')
var url = require('url')

function capture(req, res) {
  let params = url.parse(req.url, true)
  console.log(params.query)
  // res.json({code: 200, content: 'hello world', download: '/input1.mp4'})
  // res.end()
  // res.json({code: 200, content: 'hello world', download: '/output1.mp4'})
  // res.end()
  // return 
  var command = ffmpeg(params.query.src)
  command.seek(params.query.startTime).duration(Number(params.query.endTime)).save('./static/output1.mp4').on('progress', function (progress) {
    console.log(progress)
    console.log('进度 ==> '+ progress.percent +'%' )
  }).on('end', () => {
    console.log('处理完成')
    res.json({code: 200, content: 'hello world', download: '/output1.mp4'})
    res.end()
  }).on('error', function () {
    res.code = 500
    res.send('error')
  })
  // res.send({content: 'hello world'})
}




module.exports = {
  capture
}

