import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { join } from 'path';

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: join(__dirname, 'src/main.ts'), // Caminho para o ponto de entrada do seu pacote
      name: 'Vueller', // Nome do pacote
      fileName: (format) => `vueller.${format}.js`, // Nome do arquivo de saída
      formats: ['es', 'umd'], // Formatos de build
    },
    rollupOptions: {
      // Certifique-se de incluir os estilos no arquivo JavaScript gerado
      output: {
        assetFileNames: 'style.css', // Nome do arquivo de estilo
      },
      // Onde o Rollup deve começar a resolver dependências
      input: join(__dirname, 'src/main.ts'),
    },
  },
});
