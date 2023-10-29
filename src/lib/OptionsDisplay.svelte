<script lang="ts">
	import DisplayModal from './DisplayModal.svelte';
	import { SlidersIcon } from 'svelte-feather-icons';
	import { settings } from './stores';

	let isOpen = false;

	const timerSounds = ['bell', 'whistle'];
</script>

<button on:click={() => (isOpen = true)} class="w-14 h-14 btn btn-circle btn-ghost p-2"
	><SlidersIcon size="100%" /></button
>
<DisplayModal triggerKey="o" bind:isOpen title="Options">
	<svelte:fragment slot="body">
		<div class="flex flex-row justify-around items-center">
			<div class="flex flex-col items-center">
				<p class="font-mono text-2xl">Break Ratio</p>
				<sub class="text-sm">For every <i>n</i> minutes of work, take a 1 minute break</sub>
			</div>
			<div class="flex flex-col items-center space-y-2">
				<p class="font-bold text-2xl">{$settings.breakRatio}</p>
				<input type="range" min={3} max={5} bind:value={$settings.breakRatio} class="range" />
			</div>
		</div>
		<div class="flex flex-row justify-around items-center">
			<p class="font-mono text-2xl">Timer Sound</p>
			<select class="select select-lg">
				{#each timerSounds as timerSound}
					<option class="text-xl" selected={$settings.timerSound === timerSound}
						>{timerSound}</option
					>
				{/each}
			</select>
		</div>
	</svelte:fragment>
</DisplayModal>
