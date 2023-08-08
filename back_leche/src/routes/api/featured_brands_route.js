const { Router } = require('express')
const featured_brands_controller = require('../../controllers/FeaturedBrandsController')

const router = Router()

router.get('/', featured_brands_controller.AllFeaturedBrands)
router.post('/', featured_brands_controller.CreateFeaturedBrands)

module.exports = router