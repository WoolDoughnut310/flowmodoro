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
	
	let worker: Worker;
	
	const updateRunningTime = (elapsed: number) => {
		switch ($state) {
			case States.UNSET:
				break;
			case States.RUNNING:
				$running += elapsed;
				break;
			case States.BREAK:
				$breakDuration = Math.max($breakDuration - elapsed, 0);
				break;
			default:
				break;
		}
	};

	onMount(() => {
		let intervalID: number;
		
		if (window.Worker) {
			worker = new Worker("./src/lib/setInterval-worker.js");
			worker.postMessage({ delay: 20 });
			
			worker.onmessage = (event) => {
				if (event.data.intervalID) {
					intervalID = event.data.intervalID;
				}
				
				if (event.data.elapsed) {
					updateRunningTime(event.data.elapsed);
				}
			}
		}

		return () => {
			if (intervalID) clearInterval(intervalID);
			if (worker) worker.terminate();
		};
	});

	// 100 'splitSeconds' in 1 second
	$: splitSeconds = Math.floor(displayTime / 10);
	$: seconds = Math.floor(splitSeconds / 100);
	$: minutes = Math.floor(seconds / 60);
	$: hours = Math.floor(minutes / 60);

	$: time = [hours, minutes % 60, seconds % 60, splitSeconds % 100];
</script>

<p class="text-4xl sm:text-8xl group-hover:cursor-none font-bold font-mono">
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
