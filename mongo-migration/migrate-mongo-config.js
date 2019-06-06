const DATABASE_HOST = process.env.DATABASE_HOST || 'localhost'

const config = {
  mongodb: {
    url: `mongodb://${DATABASE_HOST}:27017`,
    databaseName: 'strapi',
    options: {
      useNewUrlParser: true
    }
  },
  migrationsDir: 'migrations',
  changelogCollectionName: 'changelog'
}

module.exports = config
