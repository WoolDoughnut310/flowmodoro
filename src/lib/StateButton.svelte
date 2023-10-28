<script lang="ts">
	import { state, States } from './stores';
	import { onMount, SvelteComponentTyped } from 'svelte';

	export let title: string;
	export let newState: States;
	export let activateOnSpace: boolean = false;
	export let Icon: SvelteComponentTyped;

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

<button class="rounded-full hover:bg-[#00000099]" {title} on:click={onClick}>
	<Icon size="96" />
</button>
