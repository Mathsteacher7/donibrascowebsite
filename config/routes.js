const router = require('express').Router()
const videoController = require('../controllers/videos')

router.get('/', (req, res) => {
  res.json({ meesage: 'Everything is working'})
})

router.route('/videos')
  .get(videoController.index)
  .post(videoController.create)




module.exports = router
