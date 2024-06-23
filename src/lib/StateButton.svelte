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

		const onKeyUp = (event: KeyboardEvent) => {
			if (event.key === ' ') {
				onClick();
			}
		};
		window.addEventListener('keyup', onKeyUp);

		return () => {
			window.removeEventListener('keyup', onKeyUp);
		};
	});
</script>

<button class="btn btn-circle w-12 h-12 sm:w-24 sm:h-24 sm:p-2" {title} on:click={onClick}>
	<svelte:component this={Icon} size="100%" />
</button>
