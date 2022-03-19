import e from '~/environment.js'

const ConnectyCube = require("./connectycube")

const credentials = {
    appId: e.CONNECTYCUBE_APPID,
    authKey: e.CONNECTYCUBE_AUTH_KEY,
    authSecret: e.CONNECTYCUBE_AUTH_SECRET,
}

const config = {
    debug: { mode: 1 }
}

exports.start = () => {
    ConnectyCube.init(credentials, config)
}