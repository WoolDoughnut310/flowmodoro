<script lang="ts">
	import TimeDisplay from './TimeDisplay.svelte';
	import StopwatchOverlay from './StopwatchOverlay.svelte';
</script>

<div
	class="group relative rounded-2xl border-4 container px-8 py-12 flex justify-center items-center"
>
	<TimeDisplay />
	<StopwatchOverlay />
</div>
