import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { SvelteKitPWA } from '@vite-pwa/sveltekit'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
    plugins: [sveltekit(), VitePWA({ registerType: 'autoUpdate', devOptions: {enabled: true} })]
});
