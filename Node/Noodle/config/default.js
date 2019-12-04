module.exports = {
  port: 3000,
  session: {
    secret: 'Noodle',
    key: 'Noodle',
    maxAge: 2592000000
  },
  mongodb: 'mongodb://localhost:27017/Noodle'
}
