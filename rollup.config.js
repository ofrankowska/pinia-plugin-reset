import { defineConfig } from 'rollup'

import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import terser from '@rollup/plugin-terser'

export default defineConfig({
  input: './src/index.ts',
  external: ['lodash.clonedeep'],
  output: [
    {
      file: './dist/es/index.mjs',
      format: 'esm',
      sourcemap: true,
      exports: 'named',
    },
    {
      file: './dist/lib/index.cjs',
      format: 'cjs',
      sourcemap: true,
      exports: 'named',
    },
    {
      file: './dist/index.js',
      format: 'iife',
      sourcemap: true,
      exports: 'named',
      name: 'PiniaPluginReset',
      globals: {
        'pinia': 'Pinia',
        'lodash.clonedeep': 'cloneDeep',
      },
    },
  ],
  plugins: [
    resolve({ extensions: ['.ts'] }),
    typescript({ tsconfig: './tsconfig.json' }),
    terser(),
  ],
})
