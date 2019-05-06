module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "rules": {
        "semi": 1,
        "indent": [
            2,
            2
        ],
        "id-length": 2,
        "camelcase": 2,
        "keyword-spacing": 1,
        "space-infix-ops": 1,
        "comma-spacing": 1,
        "space-before-blocks": 1,
        "spaced-comment": 1,
        "key-spacing": 1,
        "no-multi-spaces": 1,
        "space-in-parens": 1,
        "space-before-function-paren": 1,
        "func-call-spacing": 1,
        "no-multiple-empty-lines": 2,
        "padded-blocks": 2,
        "quotes": [
            2,
            "single"
        ],
        "no-floating-decimal": 2,
        "object-property-newline": 2,
        "brace-style": 2,
        "eqeqeq": 1,
        "no-array-constructor": 1
    }
};