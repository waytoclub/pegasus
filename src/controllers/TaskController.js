
const agenda = require('../jobs/create')

module.exports.create = (req, res) => {
    try {
        agenda.now('create event')
        return res.send({
            status: true,
            message: 'create success'
        })
    } catch(err) {
        return res.send({
            status: false,
            message: 'create failed'
        })
    }
}

module.exports.update = (req, res) => {
    try {
        agenda.now('update event')
        return res.send({
            status: true,
            message: 'update success'
        })
    } catch(err) {
        return res.send({
            status: false,
            message: 'update failed'
        })
    }
}

module.exports.remove = (req, res) => {
    try {
        agenda.now('remove event')
        return res.send({
            status: true,
            message: 'remove success'
        })
    } catch(err) {
        return res.send({
            status: false,
            message: 'remove failed'
        })
    }
}