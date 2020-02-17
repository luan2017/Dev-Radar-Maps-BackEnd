const Dev = require('../models/Dev')
const parseStringAsArray = require('../../src/utils/parseStringAsArray')

module.exports = {
    async index(req, res, next) {
        const {latitude, longitude ,techs} = req.query
        const listTechs = parseStringAsArray(techs)

        const devs = await Dev.find({
            techs: {
                $in: listTechs,
            },
            location: {
                $near:  {
                    $geometry: {
                        type: 'Point',
                        coordinates: [longitude, latitude],
                    },
                    $maxDistance: 10000 //10km
                },
            },
        })
        return res.json({devs})

    }
}