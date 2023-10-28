<script>
	import InterruptionsCounter from '$lib/InterruptionsCounter.svelte';
	import EstimatedBreakTime from '$lib/EstimatedBreakTime.svelte';
	import Stopwatch from '$lib/Stopwatch.svelte';
	import KeyboardHelpText from '$lib/KeyboardHelpText.svelte';
	import { state, States } from '$lib/stores';
</script>

<main class="flex-1 w-full max-w-6xl flex flex-col justify-center items-center">
	<div class="flex w-3/5 py-2 flex-row justify-around items-center">
		<EstimatedBreakTime />
		<InterruptionsCounter />
	</div>
	<Stopwatch />

	{#if $state !== States.BREAK}
		<KeyboardHelpText />
	{:else}
		<p class="mt-6 white-space-pre text-center font-mono">
			Relax! Go for a walk! Stretch! Close your eyes! <br /> But DON'T scroll social media! And DON'T
			play video games!
		</p>
	{/if}
</main>
