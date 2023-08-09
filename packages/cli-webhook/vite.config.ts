import { UserConfigExport, defineConfig } from 'vite';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { node } from '@liuli-util/vite-plugin-node'

const __dirname = dirname(fileURLToPath(import.meta.url));
export const config: UserConfigExport = {
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      formats: ['es', 'cjs'],
      name: 'webHook'
    }
  },
  plugins: [node()]
}
export default defineConfig(config);
