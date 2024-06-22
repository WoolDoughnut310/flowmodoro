<script>
	import '../app.css';
	import { pwaInfo } from 'virtual:pwa-info';
	import Footer from '$lib/Footer.svelte';

	$: webManifestLink = pwaInfo ? pwaInfo.webManifest.linkTag : '';
</script>

<svelte:head>
	{@html webManifestLink}
</svelte:head>

<main class="w-full h-full flex flex-col items-center justify-center">
	<slot />
	<Footer />
</main>

<style lang="postcss">
	:global(body, html) {
		width: 100%;
		height: 100%;
		background: theme(backgroundColor.stone.800);
		color: theme(colors.white);
	}
</style>
