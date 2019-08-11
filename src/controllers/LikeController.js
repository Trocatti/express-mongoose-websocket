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

        if (targetDev.likes.includes(loggedDev._id)) {
            const loggedSocket = req.connectedUsers[user]
            const targetSocket = req.connectedUsers[dev]

            if (loggedSocket) {
                req.io.to(loggedSocket).emit('match', targetDev)
            }

            if (targetSocket) {
                req.io.to(targetSocket).emit('match', loggedDev)
            }
        }

        loggedDev.likes.push(targetDev._id)

        await loggedDev.save()

        return res.json(loggedDev)
    }

}