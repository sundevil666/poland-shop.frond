module.exports = {
  apps: [
    {
      name: 'nuxt-prod',
      exec_mode: 'cluster',
      instances: 'max', // Or a number of instances
      script: './node_modules/nuxt/bin/nuxt.js',
      args: 'start',
      env: {
        NODE_ENV: "production",
          HOST: '0.0.0.0',
          PORT: 35000
      }
    },
    // {
    //   name: "nuxt-prod",
    //   script: "npm",
    //   args: "run start"
    // }
  ]
}
