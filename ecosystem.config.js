module.exports = {
  apps: [
    {
      name: 'docs-techcatalyst-ru',
      cwd: '/var/www/docs.techcatalyst.ru',
      script: '.next/standalone/server.js',
      env: {
        NODE_ENV: 'production',
        PORT: 3011,
      },
    },
  ],
}
