/**
 * Connections
<<<<<<< HEAD
 *
 * `Connections` are like "saved settings" for your adapters.  What's the difference between
 * a connection and an adapter, you might ask?  An adapter (e.g. `sails-mysql`) is generic--
 * it needs some additional information to work (e.g. your database host, password, user, etc.)
 * A `connection` is that additional information.
 *
=======
 * 
 * `Connections` are like "saved settings" for your adapters.  What's the difference between
 * a connection and an adapter, you might ask?  An adapter (e.g. `sails-mysql`) is generic--
 * it needs some additional information to work (e.g. your database host, password, user, etc.) 
 * A `connection` is that additional information.
 * 
>>>>>>> 0c83614989d26f4df2230a4d1986df975159bf2e
 * Each model must have a `connection` property (a string) which is references the name of one
 * of these connections.  If it doesn't, the default `connection` configured in `config/models.js`
 * will be applied.  Of course, a connection can (and usually is) shared by multiple models.
 * .
<<<<<<< HEAD
 * Note: If you're using version control, you should put your passwords/api keys
=======
 * Note: If you're using version control, you should put your passwords/api keys 
>>>>>>> 0c83614989d26f4df2230a4d1986df975159bf2e
 * in `config/local.js`, environment variables, or use another strategy.
 * (this is to prevent you inadvertently sensitive credentials up to your repository.)
 *
 * For more information on configuration, check out:
 * http://links.sailsjs.org/docs/config/connections
 */

module.exports.connections = {

  // Local disk storage for DEVELOPMENT ONLY
  //
  // Installed by default.
  //
  localDiskDb: {
    adapter: 'sails-disk'
  },

  // MySQL is the world's most popular relational database.
  // http://en.wikipedia.org/wiki/MySQL
  //
  // Run:
  // npm install sails-mysql
  //
  someMysqlServer: {
<<<<<<< HEAD
    adapter: 'sails-mysql',
    host: 'YOUR_MYSQL_SERVER_HOSTNAME_OR_IP_ADDRESS',
    user: 'YOUR_MYSQL_USER',
    password: 'YOUR_MYSQL_PASSWORD',
=======
    adapter : 'sails-mysql',
    host    : 'YOUR_MYSQL_SERVER_HOSTNAME_OR_IP_ADDRESS',
    user    : 'YOUR_MYSQL_USER',
    password: 'YOUR_MYSQL_PASSWORD', 
>>>>>>> 0c83614989d26f4df2230a4d1986df975159bf2e
    database: 'YOUR_MYSQL_DB'
  },

  // MongoDB is the leading NoSQL database.
  // http://en.wikipedia.org/wiki/MongoDB
  //
  // Run:
  // npm install sails-mongo
  //
<<<<<<< HEAD
  mongo: {
    adapter: 'sails-mongo',
    host: 'localhost',
    port: 27017,
    user: 'cas',
    password: 'sys101',
    database: 'zapboard'
=======
  someMongodbServer: {
    adapter   : 'sails-mongo',
    host      : 'localhost',
    port      : 27017,
    user      : 'username',
    password  : 'password',
    database  : 'your mongo db name here'
>>>>>>> 0c83614989d26f4df2230a4d1986df975159bf2e
  },

  // PostgreSQL is another officially supported relational database. 
  // http://en.wikipedia.org/wiki/PostgreSQL
  //
  // Run:
  // npm install sails-postgresql
  //
  somePostgresqlServer: {
<<<<<<< HEAD
    adapter: 'sails-postgresql',
    host: 'YOUR_POSTGRES_SERVER_HOSTNAME_OR_IP_ADDRESS',
    user: 'YOUR_POSTGRES_USER',
    password: 'YOUR_POSTGRES_PASSWORD',
    database: 'YOUR_POSTGRES_DB'
=======
    adapter   : 'sails-postgresql',
    host      : 'YOUR_POSTGRES_SERVER_HOSTNAME_OR_IP_ADDRESS',
    user      : 'YOUR_POSTGRES_USER',
    password  : 'YOUR_POSTGRES_PASSWORD', 
    database  : 'YOUR_POSTGRES_DB'
>>>>>>> 0c83614989d26f4df2230a4d1986df975159bf2e
  }


  // More adapters:
  // https://github.com/balderdashy/sails

<<<<<<< HEAD
};
=======
};




>>>>>>> 0c83614989d26f4df2230a4d1986df975159bf2e
