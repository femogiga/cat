const express = require('express')
const  searchCat  = require('../controllers/catController')
const router = express.Router()


router.post('/', searchCat.searchCat)
router.get('/topten',searchCat.topten)
module.exports = router
