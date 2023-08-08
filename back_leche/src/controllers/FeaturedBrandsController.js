const FeaturedBrands = require('../models/Featured_brands')
const mongoose = require('mongoose')

module.exports.AllFeaturedBrands = (req, res) => {
    FeaturedBrands.find()
    .then(response => {
        res.json({
            response
        })
    })
    .catch(error => {
        res.json({
            message: 'An error Occured!'
        })
    })
}

module.exports.CreateFeaturedBrands = async (req, res, next) => {
    let body = req.body

    let featured_brands = new FeaturedBrands({
        image: body.image,
    })
    
    featured_brands.save()
    .then(response => {
        res.json({
        response
        })
    })
    .catch(error => {
        console.log(error)
        res.json({
            message: 'An error Occured!'
        })
    })
}