import json from "@rollup/plugin-json";
import nodeResolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
// import buble from '@rollup/plugin-buble';

//

const commonPlugins = [
    nodeResolve(),
    json(),
    commonjs({
        // include: 'node_modules/**',
    }),
    babel({
        presets: [
            [
                "@babel/preset-env",
                {
                    exclude: ["@babel/plugin-transform-typeof-symbol"]
                }
            ],
        ],
        babelHelpers: "runtime",
        plugins: [
            [
                "@babel/plugin-transform-runtime",
                {
                    "corejs": 3
                }
            ],
        ],
    }),
];
const makeExternalPredicate = externalArr => {
    if (externalArr.length === 0) {
      return () => false;
    }
    const pattern = new RegExp(`^(${externalArr.join('|')})($|/)`);
    return id => pattern.test(id);
};
export default [
    {
        input: "src/index.js",
        output: {
            file: "dist/bundle.cjs.js",
            format: "cjs",
            exports: "named",
        },
        plugins: commonPlugins,
        external: makeExternalPredicate(["react", "@babel/runtime-corejs3"]),
    },
    // {
    //     input: 'src/index.js',
    //     output: {
    //         file: 'dist/bundle.esm.js',
    //         format: 'esm'
    //     },
    //     plugins: commonPlugins
    // },
    // {
    //     input: 'src/index.js',
    //     output: {
    //         file: 'dist/bundle.umd.js',
    //         format: 'umd',
    //         name: 'RollupStarter'
    //     },
    //     plugins: commonPlugins
    // }
];
