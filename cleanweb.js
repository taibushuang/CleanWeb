module.exports = {
  apps : [
      {
        name: "cleanweb",
        script: "bin/www",
        exec_mode : "cluster",
        watch: false,
        env: {
            "HTTP_PORT": 8080,
            "HTTPS_PORT": 8081,
            "NODE_ENV": "development"
        },
        env_production: {
            "HTTP_PORT": 8080,
            "HTTPS_PORT": 8081,
            "NODE_ENV": "production",
        }
      }
  ]
}
