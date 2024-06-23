import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
    plugins: [
		sveltekit(),
		VitePWA({
			registerType: 'autoUpdate',
			devOptions: {
				enabled: true
			},
			workbox: {
				runtimeCaching: [{
					handler: 'NetworkOnly',
					 urlPattern: /\/api\/.*\/*.json/,
					 method: 'POST',
					 options: {
						backgroundSync: {
							name: 'myQueueName',
							options: {
								maxRetentionTime: 24 * 60
							}
						}
					  }
				}]
			 },
			includeAssets: ['favicon.ico', 'favicon.svg', 'apple-touch-icon.png', 'mask-icon.svg'],
			manifest: {
				name: 'Flowmodoro',
				short_name: 'Flowmodoro',
				short_description: "Flowmodoro app.",
				description: "Flowmodoro timer app.",
				theme_color: "#708090",
				icons: [
					{
						src: "pwa-192x192.png",
						sizes: "192x192",
						type: "image/png",
						purpose: "any",
					},
					{
						src: "pwa-maskable-192x192.png",
						sizes: "192x192",
						type: "image/png",
						purpose: "maskable",
					},
					{
						src: "pwa-512x512.png",
						sizes: "512x512",
						type: "image/png",
						purpose: "any",
					},
					{
						src: "pwa-maskable-512x512.png",
						sizes: "512x512",
						type: "image/png",
						purpose: "maskable",
					},
				],
				screenshots: [
					{
						src: "screenshot-wide.jpeg",
						sizes: "1744x892",
						type: "image/jpeg",
						form_factor: "wide"
					},
					{
						src: "screenshot-narrow.jpeg",
						sizes: "360x740",
						type: "image/jpeg",
						form_factor: "narrow"
					},
				]
			}
		})
	]
});
