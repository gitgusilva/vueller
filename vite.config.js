import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { join } from 'path'
import { terser } from 'rollup-plugin-terser'

export default defineConfig({
  plugins: [
    vue(),
  ],
  build: {
    lib: {
      entry: join(__dirname, 'src/main.ts'), // Modifique conforme necessário
      name: 'Vueller', // Modifique conforme necessário
      fileName: (format) => `vueller.${format}.js`,
    },
    emptyOutDir: true, // Limpar o diretório de saída antes de construir
    outDir: 'dist', // Diretório de saída
    rollupOptions: {
      external: ['vue'], // Mova para dentro de `build.rollupOptions` se necessário
      output: {
        globals: {
          vue: 'Vue',
        }
      }
    },
    // Configuração para minificar usando Terser
    minify: 'terser',
    // Configuração adicional para Terser
    terserOptions: {
      format: {
        comments: false, // Remove comentários do arquivo minificado
      },
    },
    sourcemap: true, // Gerar sourcemaps
  },
})
