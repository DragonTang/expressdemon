import https from 'https'
import fs from 'fs'
import qr from 'qr-image'
module.exports = (req, res) => {
  const url = 'https://mp.weixin.qq.com/cgi-bin/showqrcode?ticket=gQH28DwAAAAAAAAAAS5odHRwOi8vd2VpeGluLnFxLmNvbS9xLzAyd2N5ZmQxNFRmXzExMDAwME0wMzYAAgSVQWBaAwQAAAAA'
  https
    .get(url, (stream) => {
      stream.pipe(res)
      res.set('Content-Type', 'image/jpeg')
      res.set('Content-Disposition', 'attachment; filename="qyc.jpg"')
    })
  // res.sendfile(path.join('../timg.jpeg'))
  // res.header("Access-Control-Allow-Origin", "*")
  // res.writeHead(200, { "Content-Type": "application/json;charset=utf-8" })
  // res.header("Access-Control-Allow-Headers", "X-Requested-With")
  // res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS")
  // res.header("X-Powered-By", ' 3.2.1')
  // res.header("Content-Type", "text/html;charset=utf-8");
  // res.sendFile(__dirname + '/../test.html')
  // res.end(JSON.stringify({num:123456}))
  // var code = qr.image('https://mp.weixin.qq.com/cgi-bin/showqrcode?ticket=gQH28DwAAAAAAAAAAS5odHRwOi8vd2VpeGluLnFxLmNvbS9xLzAyd2N5ZmQxNFRmXzExMDAwME0wMzYAAgSVQWBaAwQAAAAA', { type: 'png' })
  // res.setHeader('Content-type', 'image/png');  //sent qr image to client side
  // code.pipe(res)

}
