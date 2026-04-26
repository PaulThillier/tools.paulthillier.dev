import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://tools.paulthillier.dev',
  output: 'static',   // fully static — no server needed, pure client-side tools
});
