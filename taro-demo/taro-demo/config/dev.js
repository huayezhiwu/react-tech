const isH5 = process.env.CLIENT_ENV === "h5";
console.log("h5:", process.env.CLIENT_ENV, isH5);
const HOST = '"http://easy-mock.com"';
module.exports = {
    env: {
        NODE_ENV: '"development"'
    },
    defineConstants: {
        HOST: isH5 ? '"/api"' : HOST
    },
    weapp: {},
    h5: {
        devServer: {
            proxy: {
                "/api/": {
                    target: JSON.parse(HOST),
                    pathRewrite: {
                        "^/api/": "/"
                    },
                    changeOrigin: true
                }
            }
        }
    }
};
