const Place = require('../models/place')
const Datauri = require('datauri')
const path = require('path')
const dUri = new Datauri()
const cloudinary = require('cloudinary')
const dataUri = req => dUri.format(path.extname(req.file.originalname).toString(), req.file.buffer)

module.exports = (req, res) => {
    const urls = []
    console.log('bodyy=>', req.body)
    if (req.file)
        console.log('==>', req.file)
    if (req.files) {
        console.log('there are files!!!!!' + req.files)
        const files = req.files;

        for (const file of files) {
            const f = dataUri(file).content

            cloudinary.uploader.upload(f).then((result) => {
                let newPath = result.url
                urls.push(newPath)
            })
        }
        return urls
    }

    let place = req.body
    place.images = urls

    Place.create(place)
        .then(data => res.send(data))
        .catch(err => { console.log(err) })

}