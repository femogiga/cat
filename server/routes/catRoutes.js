const express = require('express')
const  searchCat  = require('../controllers/cat')
const router = express.Router()


router.post('/find', searchCat.searchCat)
router.get('/topten',searchCat.topten)
module.exports = router
