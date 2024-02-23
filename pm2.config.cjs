module.exports = {
  apps: [
    {
      name: 'frontend',
      script: 'npm',
      args: 'run dev',
      interpreter: '/bin/bash',
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development',
      },
      env_production: {
        NODE_ENV: 'production',
      },
    },
  ],
}