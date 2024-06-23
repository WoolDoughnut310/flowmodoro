<script lang="ts">
	import TimeDisplay from './TimeDisplay.svelte';
	import StopwatchOverlay from './StopwatchOverlay.svelte';
</script>

<div
	class="group relative rounded-2xl border-4 mt-6 sm:mt-0 mx-8 sm:mx-0 sm:container px-4 py-6 sm:px-8 sm:py-12 flex justify-center items-center"
>
	<TimeDisplay />
	<StopwatchOverlay />
</div>
