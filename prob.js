import { defineConfig } from 'vite';
import * as glob from 'glob';
import path, { resolve } from 'node:path';
import { ViteMinifyPlugin } from 'vite-plugin-minify';
import handlebars from 'vite-plugin-handlebars';
import htmlPurge from 'vite-plugin-purgecss';

// importa o define cualquier contexto necesario para handlebars

export default defineConfig({
  base: '/',
  build: {
    rollupOptions: {
      input: Object.fromEntries(
        [...glob.sync('./!(dist)/*.html').map(file => [
          file.slice(0, file.length - path.extname(file).length), resolve(__dirname, file)
        ]),
        ...glob.sync('./*.html').map(file => [
          file.slice(0, file.length - path.extname(file).length), resolve(__dirname, file)
        ])]
      ),
    },
  },
  plugins: [
    handlebars({
      // configura tus opciones de handlebars aquí
      // partialDirectory: resolve(__dirname, 'partials'),
      // context: handlerBarsContext,
    }),
    htmlPurge({}),
    ViteMinifyPlugin({}),
  ],
});
