module.exports = {
    extends: [
        'tslint-config-getresponse-base',
        'tslint-react',
    ],
    rules: {
        'jsx-alignment': true,
        'jsx-boolean-value': [true, 'always'],
        'jsx-curly-spacing': [true, 'never'],
        'jsx-equals-spacing': [true, 'never'],
        'jsx-key': true,
        'jsx-no-bind': true,
        'jsx-no-lambda': true,
        'jsx-no-multiline-js': false,
        'jsx-no-string-ref': true,
        'jsx-use-translation-function': [true, 'allow-htmlentities'],
        'jsx-self-close': true,
        'jsx-space-before-trailing-slash': false,
        'jsx-wrap-multiline': true,
    },
};
