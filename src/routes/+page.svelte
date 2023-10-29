<script>
	import InterruptionsCounter from '$lib/InterruptionsCounter.svelte';
	import EstimatedBreakTime from '$lib/EstimatedBreakTime.svelte';
	import Stopwatch from '$lib/Stopwatch.svelte';
	import KeyboardHelpText from '$lib/KeyboardHelpText.svelte';
	import { state, States } from '$lib/stores';
	import TasksDisplay from '$lib/TasksDisplay.svelte';
	import CurrentTaskText from '$lib/CurrentTaskText.svelte';
	import StatsDisplay from '$lib/StatsDisplay.svelte';
	import OptionsDisplay from '$lib/OptionsDisplay.svelte';
</script>

<main class="flex-1 w-full max-w-6xl flex flex-col justify-center items-center">
	<div
		class="absolute top-0 right-0 display flex flex-row justify-center items-center p-12 space-x-4"
	>
		<StatsDisplay />
		<OptionsDisplay />
	</div>
	<div class="flex w-3/5 py-2 flex-col justify-center items-center space-y-3">
		<CurrentTaskText />
		<div class="flex w-full flex-row justify-around items-center">
			<EstimatedBreakTime />
			<InterruptionsCounter />
		</div>
	</div>
	<Stopwatch />

	<div class="text-xl text-center font-mono mt-8 space-y-4">
		{#if $state !== States.BREAK}
			<KeyboardHelpText />
		{:else}
			<p>
				Relax! Go for a walk! Stretch! Close your eyes! <br /> But DON'T scroll social media! And DON'T
				play video games!
			</p>
		{/if}
	</div>

	<TasksDisplay />
</main>
