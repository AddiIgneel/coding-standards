/* eslint quote-props: ["error", "always"] */
// Quote properties for consistency in this file only
// (Many ESLint rules use key names that require quotation marks)
module.exports = {
	'root': true,
	'env': {
		'browser': true,
		'es6': true
	},
	'extends': [
		'eslint:recommended',
		'react-app',
	],
	'parserOptions': {
		'ecmaFeatures': {
			'experimentalObjectRestSpread': true,
			'jsx': true
		},
		'sourceType': 'module'
	},
	'rules': {
		'array-bracket-spacing': [ 'error', 'always', {
			'objectsInArrays': false,
		} ],
		'block-spacing': [ 'error' ],
		'brace-style': [ 'error', '1tbs' ],
		'comma-spacing': [ 'error', {
			'before': false,
			'after': true,
		} ],
		'comma-dangle': [ 'error', 'always-multiline' ],
		'eqeqeq': [ 'error' ],
		'key-spacing': [ 'error', {
			'beforeColon': false,
			'afterColon': true,
			'align': 'value'
		} ],
		'keyword-spacing': [ 'error', {
			'after': true,
			'before': true
		} ],
		'eol-last': [ 'error', 'unix' ],
		'func-call-spacing': [ 'error' ],
		'space-before-function-paren': [ 'error', {
			'anonymous': 'always',
			'asyncArrow': 'always',
			'named': 'never',
		} ],
		'space-in-parens': [ 'warn', 'always', {
			'exceptions': [ 'empty' ]
		} ],
		'indent': [ 'error', 'tab', {
			'SwitchCase': 1,
		} ],
		'no-mixed-spaces-and-tabs': [ 'error', 'smart-tabs' ],
		'linebreak-style': [ 'error', 'unix' ],
		'quotes': [ 'error', 'single' ],
		'semi-spacing': [ 'error', {
			'before': false,
			'after': true,
		} ],
		'space-unary-ops': [ 'error', {
			'words': true,
			'nonwords': false,
			'overrides': {
				'!': true,
			},
		} ],
		'no-multiple-empty-lines': [ 'error', {
			'max': 1,
		} ],
		'object-curly-newline': [ 'error', {
			'multiline': true,
		} ],
		'object-curly-spacing': [ 'error', 'always' ],
		'arrow-parens': [ 'error', 'as-needed' ],
		'arrow-spacing': [ 'error', {
			'before': true,
			'after': true,
		} ],
		'yoda': [ 'error', 'never' ],
		'no-console': [ 'warn' ],
		'no-trailing-spaces': [ 'error' ],
		'no-var': [ 'warn' ],
		'react/jsx-curly-spacing': [ 'error', 'always' ],
	},
};
