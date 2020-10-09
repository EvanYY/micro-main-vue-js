import shared from '@/shared'

const { entrys } = require(`./${process.env.NODE_ENV}`)
const url = process.env.VUE_APP_MICRO_URL
export const handleConfig = {
  login: {
    name: 'MicroAppLogin',
    entry: url + entrys.MicroAppLogin,
    container: '',
    props: { context: { name: 'MicroAppLogin' }, shared, NODE_ENV: process.env.NODE_ENV, VUE_APP_MODE: process.env.VUE_APP_MODE }
  }
}
