const multer = require('multer');

const storage = multer.memoryStorage()

const uploadsMultiple = multer({
    storage
    // , fileFilter: (req, file, cb) => {
    //     if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
    //         cb(null, true);
    //     } else {
    //         cb(null, false);
    //         return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
    //     }
    // }
}).array('images')

module.exports = uploadsMultiple



// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, './uploads/')
//   },
//   filename: function (req, file, cb) {
//     cb(null, new Date().toISOString() + '-' + file.originalname)
//   }
// })


// const fileFilter = (req, file, cb) => {
//   if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
//     cb(null, true)
//   } else {
//     //reject file
//     cb({
//       message: 'Unsupported file format'
//     }, false)
//   }
// }

// const uploadsMultiple = multer({
//   storage: storage,
//   limits: {
//     fileSize: 1024 * 1024
//   },
//   fileFilter: fileFilter
// })

module.exports = uploadsMultiple;