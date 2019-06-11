module.exports = {
    extends: ['react-app', 'prettier', 'prettier/react'],
    plugins: ['prettier'],
    rules: {
        'react/jsx-filename-extension': [
            1,
            {
                extensions: ['.js', '.jsx']
            }
        ],
        'react/prop-types': 0,
        'no-underscore-dangle': 0,
        'import/imports-first': ['error', 'absolute-first'],
        'import/newline-after-import': 'error',
        'import/no-extraneous-dependencies': 0,
        'import/prefer-default-export': 0,
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off'
    },
    env: {
        browser: true,
        es6: true,
        node: true
    },
    globals: {
        window: true,
        Api: true,
        '@assets': true,
        '@components': true,
        '@constants': true,
        '@locales': true,
        '@router': true,
        '@services': true,
        '@store': true,
        '@views': true,
        KootExtend: true,
        __DEV__: true,
        __TEST__: true,
        __PRO__: true
    },
    parser: 'babel-eslint'
    // settings: {
    //     'import/resolver': {
    //         webpack: {
    //             config: require('./config/webpack.config')(process.cwd())
    //         }
    //     }
    // }
};
