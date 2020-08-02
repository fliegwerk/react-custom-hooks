module.exports = {
	env: {
		browser: true,
		es2020: true
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
		'prettier',
		'prettier/@typescript-eslint',
		'prettier/react'
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: 11,
		sourceType: 'module'
	},
	plugins: ['react', '@typescript-eslint'],
	rules: {},
	settings: {
		react: {
			pragma: 'React',
			version: 'detect'
		}
	}
};
