module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'rcadmin1_db1'),
      user: env('DATABASE_USERNAME', 'rcadmin1_usr1'),
      password: env('DATABASE_PASSWORD', 'Rim@2022'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
