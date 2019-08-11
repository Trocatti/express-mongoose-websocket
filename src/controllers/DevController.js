const axios = require('axios')
const DevModel = require('../models/DevModel')

module.exports = {

    index: async (req, res) => {
        const { user } = req.headers

        const loggedDev = await DevModel.findById(user)

        const users = await DevModel.find({
            $and: [
                { _id: { $ne: user } },
                { _id: { $nin: loggedDev.likes } },
                { _id: { $nin: loggedDev.dislikes } }
            ]
        })
        
        return res.json(users)
    },

    store: async (req, res) => {
        const { username } = req.body

        const userExists = await DevModel.findOne({ user: username })

        if (userExists) {
            return res.json(userExists)
        }

        const response = await axios.get(`https://api.github.com/users/${username}`)

        const { name, bio, avatar_url: avatar } = response.data

        const dev = await DevModel.create({
            name,
            user: username,
            bio,
            avatar
        })

        return res.json(dev)
    }

}