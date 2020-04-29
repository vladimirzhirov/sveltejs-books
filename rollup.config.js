import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import {terser} from 'rollup-plugin-terser';

import autoPreprocess from 'svelte-preprocess'
const production = !process.env.ROLLUP_WATCH;

export default {
    input: 'src/index.js',
    output: {
        sourcemap: true,
        format: 'iife',
        name: 'app',
        file: 'public/build/bundle.js'
    },
    plugins: [
        svelte({
            // enable run-time checks when not in production
            dev: !production,
            // we'll extract any component CSS out into
            // a separate file - better for performance
            css: css => {
                css.write('public/build/bundle.css');
            },
			preprocess: autoPreprocess()
        }),
        resolve({browser: true}),
        commonjs(),
        production && terser()
    ]
};
