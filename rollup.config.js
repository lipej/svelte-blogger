import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import styles from 'rollup-plugin-styles';

export default {
	//...
	plugins: [
		//...
		json(),
		resolve({
			browser: true,
			dedupe: ['svelte'],
			preferBuiltins: false
		}),
		styles()
	]
};
