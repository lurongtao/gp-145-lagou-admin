const path = require('path')
const multer = require('multer')
const randomstring = require('randomstring')
const fs = require('fs')

// const upload = multer({
//   dest: path.resolve(__dirname, '../public/uploads')
// })

var filename = ''

const mimetypeMap = {
  'image/png': '.png',
  'image/jpg': '.jpg',
  'image/jpeg': '.jpeg',
  'image/gif': '.gif'
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.resolve(__dirname, '../public/uploads'))
  },

  filename: (req, file, cb) => {
    let { fieldname, mimetype } = file
    filename = fieldname + '-' + randomstring.generate(6) + mimetypeMap[mimetype]
    cb(null, filename)
  }
})

const upload = multer({
  storage
}).single('companyLogo')

// module.exports = ((req, res, next) => {
//   return upload.single('companyLogo')
// })()

module.exports = (req, res, next) => {
  upload(req, res, (err) => {
    if (filename) {
      fs.unlink(path.resolve(__dirname, '../public/uploads/' + req.body.tempCompanylogo), (err) => {
        if (err) {
          console.log(err.message)
        }
      })
    }
    req.filename = filename

    // 将filename置空，不然下一次修改会沿用上一次修改的图片
    filename = ''
    next()
  })
}