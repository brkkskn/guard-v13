const req = event => require(`../events/${event}`)
require('events').EventEmitter.defaultMaxListeners = 15;

module.exports = client => {
    client.on('ready',() => req('ready')(client))
    client.on('message',req('message'))
   

}