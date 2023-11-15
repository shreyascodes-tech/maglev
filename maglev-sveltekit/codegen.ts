import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
	overwrite: true,
	schema: 'https://backboard.railway.app/graphql/v2',
	documents: 'src/**/*.ts',
	emitLegacyCommonJSImports: false,
	generates: {
		'src/gql/': {
			preset: 'client',
			plugins: [],
		},
	},
};

export default config;
