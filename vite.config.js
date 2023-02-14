import { defineConfig } from 'vite';
import htmlPurge from 'vite-plugin-html-purgecss';

export default defineConfig({
    root: 'src',
    server: {
        hot: true
    },
    build: {
        emptyOutDir: true,
        outDir: '../dist',
    },
    plugins: [
        htmlPurge(),
    ]
});
