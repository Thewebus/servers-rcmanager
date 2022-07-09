module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '5c39b72d288e9977e8b1ffd6facd3984'),
  },
});
