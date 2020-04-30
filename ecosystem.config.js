module.exports = {
  apps: [{
    name: 'app',
    script: './dist/app.js',
    exec_mode: 'cluster',
    instances: 1,
    autorestart: true,
    watch: true,
    max_memory_restart: '1G',
  }],
};
