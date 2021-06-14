const chalk = require('chalk')
const moment = require('moment')
const log = message => {
  
    console.log(`${chalk.magenta(moment().format('YYYY-MM h:mm:ss'))} ${message}`)
}

module.exports = async client => {
  let tarih = moment().format('l');
    client.user.setPresence({activity:{name:`Revers Family`},status: 'online'})
    log(chalk.green(`[Revers] Aktif, Komutlar Yüklendi ${tarih}`))
  }