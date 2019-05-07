module.exports = {
    "env": {
        "browser": true,
        "es6": true,
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
        "semi": [
            2,
            "always"
        ],
        "indent": [
            2,
            2
        ],
        "linebreak-style": [
            2,
            "windows"
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
        "space-in-parens": [
            1,
            "never"
        ],
        "space-before-function-paren": [
            1,
            "never"
        ],
        "func-call-spacing": 1,
        "no-multiple-empty-lines": [
            2,
            {
                "max": 1
            }
        ],
        "padded-blocks": [
            2,
            "never"
        ],
        "quotes": [
            2,
            "single"
        ],
        "no-floating-decimal": 2,
        "object-property-newline": 2,
        "brace-style": 2,
        "eqeqeq": [
            1,
            "always",
            {
                "null": "ignore"
            }
        ],
        "no-array-constructor": 1
    }
};