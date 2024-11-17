import { fixupPluginRules } from "@eslint/compat";
import eslintJS from "@eslint/js";
import tsParser from "@typescript-eslint/parser";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginImport from "eslint-plugin-import";
import jsxA11yPlugin from "eslint-plugin-jsx-a11y";
import eslintPluginReact from "eslint-plugin-react";
import eslintPluginReactHooks from "eslint-plugin-react-hooks";
import eslintPluginReactRefresh from "eslint-plugin-react-refresh";
import eslintPluginUnicorn from "eslint-plugin-unicorn";
import globals from "globals";
import typescriptEslint from "typescript-eslint";

const patchedReactHooksPlugin = fixupPluginRules(eslintPluginReactHooks);
const patchedImportPlugin = fixupPluginRules(eslintPluginImport);

const baseESLintConfig = {
	name: "eslint",
	plugins: {
		"eslint-plugin-js": eslintJS,
	},
	rules: {
		"no-await-in-loop": "error",
		"no-constant-binary-expression": "error",
		"no-duplicate-imports": "error",
		"no-new-native-nonconstructor": "error",
		"no-promise-executor-return": "error",
		"no-self-compare": "error",
		"no-template-curly-in-string": "error",
		"no-unmodified-loop-condition": "error",
		"no-unreachable-loop": "error",
		"no-unused-private-class-members": "error",
		camelcase: "error",
	},
};

const typescriptConfig = {
	name: "typescript",
	languageOptions: {
		parser: tsParser,
		parserOptions: {
			ecmaFeatures: { modules: true },
			ecmaVersion: "latest",
			project: "./tsconfig.json",
		},
		globals: {
			...globals.builtin,
			...globals.browser,
			...globals.es2025,
		},
	},
	linterOptions: {},
	plugins: {
		import: patchedImportPlugin,
	},
	rules: {},
	settings: {
		"import/resolver": {
			typescript: {
				alwaysTryTypes: true,
				project: "./tsconfig.json",
			},
		},
	},
};

const reactConfig = {
	name: "react",
	plugins: {
		react: eslintPluginReact,
		"react-hooks": patchedReactHooksPlugin,
		"react-refresh": eslintPluginReactRefresh,
	},
	rules: {
		"import/no-anonymous-default-export": "error",
		"react/jsx-filename-extension": [
			2,
			{ extensions: [".js", ".jsx", ".ts", ".tsx"] },
		],
		"react/jsx-sort-props": [
			"error",
			{
				callbacksLast: true,
				shorthandFirst: true,
				reservedFirst: true,
				multiline: "last",
			},
		],
		"react-hooks/exhaustive-deps": "error",
		...patchedReactHooksPlugin.configs.recommended.rules,
		"react-refresh/only-export-components": [
			"warn",
			{ allowConstantExport: true },
		],
	},
};

const jsxA11yConfig = {
	name: "jsxA11y",
	plugins: {
		"jsx-a11y": jsxA11yPlugin,
	},
	rules: {
		"jsx-a11y/alt-text": ["error", { elements: ["img"], img: ["Image"] }],
		"jsx-a11y/aria-props": "error",
		"jsx-a11y/role-supports-aria-props": "error",
	},
};

const unicornConfig = {
	name: "unicorn",
	plugins: {
		unicorn: eslintPluginUnicorn,
	},
	rules: {
		"unicorn/custom-error-definition": "error",
		"unicorn/empty-brace-spaces": "error",
		"unicorn/no-array-for-each": "off",
		"unicorn/no-null": "off",
	},
};

const eslintConfig = [
	baseESLintConfig,
	typescriptConfig,
	reactConfig,
	jsxA11yConfig,
	unicornConfig,
	eslintConfigPrettier,
];

eslintConfig.forEach((config) => {
	config.files = ["src/**/*.ts", "src/**/*.tsx"];
});

export default eslintConfig;
