const Video = require('../models/Video')

function indexVideoRoute(req, res, next) {
  Video.find(req.query)
    .then(videos => res.json(videos))
    .catch(next)
}

function createVideoRoute(req, res, next) {
  const video = new Video(req.body)
  video.save()
    .then(video => res.status(201).json(video))
    .catch(next)
}

module.exports = {
  index: indexVideoRoute,
  create: createVideoRoute
}
