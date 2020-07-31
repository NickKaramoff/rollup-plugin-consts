import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';

export default {
    input: 'src/index.js',
    output: [
        { file: 'dist/rollup-plugin-consts.cjs.js', format: 'cjs' },
        { file: 'dist/rollup-plugin-consts.es.js', format: 'es' },
    ],
    plugins: [commonjs(), resolve()],
};
