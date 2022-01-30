module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '266dc26a78bb751ee009382421a646da'),
  },
});
