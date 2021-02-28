module.exports = {
	env: {
		browser: true,
		es2020: true
	},
	settings: {
		react: {
			pragma: 'React',
			version: 'detect'
		}
	},
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: 11,
		sourceType: 'module'
	},
	plugins: ['react', '@typescript-eslint'],
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react/recommended',
		'plugin:prettier/recommended',
		'prettier'
	],
	rules: {
		'prettier/prettier': 'warn'
	}
};
