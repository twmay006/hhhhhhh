module.exports = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module'
    },
    env: {
        browser: true,
    },

    extends: 'standard',
    // required to lint *.vue files
    plugins: [
        'html'
    ],
    rules: {
        // allow async-await
        'generator-star-spacing': 'off',
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        "semi": [2, "always"],
        "space-before-function-paren": ["error", "never"],
        "indent": "off",
        "quotes": "off"
    }
}
