import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from '@typescript-eslint/eslint-plugin'
import tseslintParser from '@typescript-eslint/parser'
import pluginReact from 'eslint-plugin-react'
import pluginPrettier from 'eslint-plugin-prettier'

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
	{
		files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
		languageOptions: {
			parser: tseslintParser,
			parserOptions: {
				ecmaVersion: 'latest',
				sourceType: 'module',
				ecmaFeatures: { jsx: true },
			},
			globals: globals.browser,
		},
		plugins: {
			react: pluginReact,
			prettier: pluginPrettier,
			'@typescript-eslint': tseslint,
		},
		settings: {
			react: {
				version: 'detect',
			},
		},
		rules: {
			'prettier/prettier': ['error', { endOfLine: 'auto' }, { usePrettierrc: true }],
			'react/react-in-jsx-scope': 'off',
			'react/no-children-prop': 'off',
			'@typescript-eslint/no-namespace': 'off',
			'@typescript-eslint/no-var-requires': 'off',
			'@typescript-eslint/no-non-null-assertion': 'off',
			'import/no-anonymous-default-export': 'off',
		},
	},
	pluginJs.configs.recommended,
	...tseslint.configs.recommended,
	pluginReact.configs.flat.recommended,
]
