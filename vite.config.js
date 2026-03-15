import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: './', // Use relative paths for GitHub Pages
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        cart: resolve(__dirname, 'src/pages/Cart/cart.html'),
        itemDetails: resolve(__dirname, 'src/pages/Item-Details/Item-Details.html'),
        signup: resolve(__dirname, 'src/pages/Signup/signup.html'),
      },
    },
  },
});
