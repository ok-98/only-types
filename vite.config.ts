import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

const name = 'only-types';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    dts({
      include: ['lib'],
      exclude: ['**/*.test.ts'],
      rollupTypes: true,
      rollupConfig: {
        bundledPackages: [ "http-code-util"]
      },
    }),
  ],
  build: {
    lib: {
      name,
      entry: [resolve(__dirname, 'lib/only-types.ts')],
      formats: ["es"]
    },
  },
});
