import nodeResolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'

export default {
  input: `src/index.js`,
  output: {
    name: `folktale-validations`,
    file: `dist/folktale-validations.js`,
    format: `umd`,
    globals: { ramda: `R`, 'ramda-adjunct': `RA`, folktale: `folktale` },
  },
  // Define modules that shouldn't be included in the build. It is assumed they
  // will be available via globals at runtime.
  external: [`ramda`, `ramda-adjunct`, `folktale`],
  // Define how external global modules should be referenced in the UMD bundle

  plugins: [
    nodeResolve(),
    babel({
      babelrc: false,
      exclude: `node_modules/**`,
      presets: [
        [
          `env`,
          {
            modules: false,
          },
        ],
      ],
      plugins: [
        `external-helpers`,
        `transform-es2015-destructuring`,
        `transform-object-rest-spread`,
      ],
    }),
    // Allow CommonJS modules to be included in build.
    commonjs({
      namedExports: {
        'node_modules/folktale/index.js': [`validation`],
      },
    }),
  ],
}
