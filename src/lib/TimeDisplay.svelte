<script lang="ts">
	import { onMount } from 'svelte';
	import { running, state, States, breakDuration } from './stores';

	let displayTime: number;

	$: switch ($state) {
		case States.UNSET:
			displayTime = $running;
			break;
		case States.RUNNING:
			displayTime = $running;
			break;
		case States.BREAK:
			displayTime = $breakDuration;
			break;
		default:
			break;
	}

	let previousTimestamp: number;

	const updateRunningTime = (timestamp: number) => {
		if (previousTimestamp === undefined) {
			previousTimestamp = timestamp;
		}

		switch ($state) {
			case States.UNSET:
				break;
			case States.RUNNING:
				$running += timestamp - previousTimestamp;
				break;
			case States.BREAK:
				$breakDuration = Math.max($breakDuration - (timestamp - previousTimestamp), 0);
				break;
			default:
				break;
		}

		previousTimestamp = timestamp;

		window.requestAnimationFrame(updateRunningTime);
	};

	onMount(() => {
		const request = window.requestAnimationFrame(updateRunningTime);

		return () => {
			window.cancelAnimationFrame(request);
		};
	});

	// 100 'splitSeconds' in 1 second
	$: splitSeconds = Math.floor(displayTime / 10);
	$: seconds = Math.floor(splitSeconds / 100);
	$: minutes = Math.floor(seconds / 60);
	$: hours = Math.floor(minutes / 60);

	$: time = [hours, minutes % 60, seconds % 60, splitSeconds % 100];
</script>

<p class="text-8xl group-hover:cursor-none font-bold font-mono">
	{#each time as item, i}
		{#if !(item === 0 && i === 0)}
			<span>
				{item.toString().padStart(2, '0')}
				{#if i !== time.length - 1}
					:
				{/if}
			</span>
		{/if}
	{/each}
</p>
