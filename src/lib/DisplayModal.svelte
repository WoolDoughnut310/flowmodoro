<script lang="ts">
	import { onMount } from 'svelte';

	export let triggerKey: string;
	export let isOpen: boolean;
	export let title: string;

	onMount(() => {
		const keyHandler = (event: KeyboardEvent) => {
			if (event.key === triggerKey) {
				isOpen = !isOpen;
			}
		};

		window.addEventListener('keypress', keyHandler);

		return () => {
			window.removeEventListener('keypress', keyHandler);
		};
	});
</script>

<dialog class="modal" class:modal-open={isOpen}>
	<div class="modal-box w-5/6 max-w-4xl">
		<header class="px-8 w-full flex flex-row justify-between items-center">
			<h2 class="font-bold text-4xl">{title}</h2>
			<slot name="header" />
		</header>
		<div class="flex flex-col w-full px-12 my-8 space-y-4">
			<slot name="body" />
		</div>
		<div class="modal-action">
			<button class="btn" on:click={() => (isOpen = false)}>Close</button>
		</div>
	</div>
</dialog>
