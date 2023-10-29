<script lang="ts">
	import { state, States } from './stores';
	import { onMount, SvelteComponent } from 'svelte';

	export let title: string;
	export let newState: States;
	export let activateOnSpace: boolean = false;
	export let Icon: typeof SvelteComponent;

	const onClick = () => {
		$state = newState;
	};

	onMount(() => {
		if (!activateOnSpace) return;

		const keyHandler = (event: KeyboardEvent) => {
			if (event.key === ' ') {
				onClick();
			}
		};
		window.addEventListener('keypress', keyHandler);

		return () => {
			window.removeEventListener('keypress', keyHandler);
		};
	});
</script>

<button class="btn btn-circle w-24 h-24 hover:bg-[#00000099]" {title} on:click={onClick}>
	<svelte:component this={Icon} size="100%" />
</button>
