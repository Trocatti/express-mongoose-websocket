const DevModel = require('../models/DevModel')

module.exports = {

    store: async (req, res) => {

        const { id: dev } = req.params
        const { user } = req.headers

        const targetDev = await DevModel.findById({ like: dev })
        const loggedDev = await DevModel.findById({ like: user })

        if (!targetDev) {
            return res.status(400).json({ error: 'Dev not exists' })
        }

        loggedDev.dislikes.push(targetDev._id)

        await loggedDev.save()

        return res.json(loggedDev)
    }

}