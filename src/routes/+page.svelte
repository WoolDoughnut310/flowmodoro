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
	import InfoDisplay from '$lib/InfoDisplay.svelte';
	
	import { onMount } from "svelte";
	
	onMount(() => {
		if (window.Notification && Notification.permission === "default") {
			Notification.requestPermission();
		}
	});
</script>

<div class="flex-1 w-full max-w-6xl flex flex-col sm:justify-center items-center">
	<div
		class="mt-8 sm:mt-0 sm:absolute sm:top-0 sm:right-0 display flex flex-row justify-center items-center p-4 sm:p-12 space-x-4"
	>
		<InfoDisplay />
		<TasksDisplay />
		<StatsDisplay />
		<OptionsDisplay />
	</div>
	<div class="my-4 sm:mt-12 flex sm:w-3/5 py-2 flex-col justify-center items-center space-y-8 sm:space-y-12">
		<CurrentTaskText />
		<div class="flex w-full flex-row justify-around items-center">
			<EstimatedBreakTime />
			<InterruptionsCounter />
		</div>
	</div>
	<Stopwatch />

	<div class="text-xl text-center font-mono mt-8">
		{#if $state !== States.BREAK}
			<div class="hidden sm:contents space-y-4">
				<KeyboardHelpText />
			</div>
		{:else}
			<p class="mx-8">
				If you have a lot of energy, maintain your flow state (e.g. do some miscellaneous tasks)<br />
				If you are tired, use active relaxation (e.g. mindfulness meditation)
				
			</p>
		{/if}
	</div>

	<audio id="audio-player" />
</div>
