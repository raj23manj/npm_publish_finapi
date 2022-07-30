
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import sourceMaps from 'rollup-plugin-sourcemaps';
import { terser } from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2';
import pkg from "./package.json";
import dts from 'rollup-plugin-dts';
import del from "rollup-plugin-delete";

export default [{
    input: 'lib/index.ts',
    output: [
      { file: 'build/index.js',
      format: 'cjs',
      sourcemap: true },
    ],
    external: [
      ...Object.keys(pkg.dependencies || {}),
      ...Object.keys(pkg.devDependencies || {}),
    ],
    plugins: [
      typescript({
        tsconfig: "./tsconfig.json"
      }),
      json(),
      resolve(),
      commonjs({
        include: "node_modules/**"
      }),
      sourceMaps(),
      terser()
    ],
  },
  {
    // path to your declaration files root
    input: 'build/index.d.ts',
    output: [{ file: 'build/index.d.ts', format: 'cjs' }],
    plugins: [
      dts(),
      del({ hook: "buildEnd", targets: ['build/*/', 'build/*.d.ts', '!build/*.js', '!build/*.js.map', ] })
    ],
  },
];


