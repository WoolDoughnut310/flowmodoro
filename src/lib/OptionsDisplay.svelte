<script lang="ts">
	import DisplayModal from './DisplayModal.svelte';
	import { SlidersIcon, PlayCircleIcon } from 'svelte-feather-icons';
	import { settings } from './stores';
	import { sounds, playSound } from './sound';

	let isOpen = false;

	const onPreviewSound = () => {
		playSound($settings.timerSound);
	};
</script>

<button on:click={() => (isOpen = true)} class="w-14 h-14 btn btn-circle btn-ghost p-2"
	><SlidersIcon size="100%" /></button
>
<DisplayModal triggerKey="o" bind:isOpen title="Options">
	<svelte:fragment slot="body">
		<div class="flex flex-row justify-around items-center">
			<div class="flex flex-col items-center">
				<p class="font-mono text-2xl">Break Ratio</p>
				<p class="text-sm">For every <i>n</i> minutes of work, take a 1 minute break</p>
			</div>
			<div class="flex flex-col items-center space-y-2">
				<p class="font-bold text-2xl">{$settings.breakRatio}</p>
				<input type="range" min={3} max={5} bind:value={$settings.breakRatio} class="range" />
			</div>
		</div>
		<div class="flex flex-row justify-around items-center">
			<p class="font-mono text-2xl">Timer Sound</p>
			<select bind:value={$settings.timerSound} class="select select-lg">
				{#each Object.keys(sounds) as sound}
					<option value={sound} class="text-xl">{sound}</option>
				{/each}
			</select>
			<button on:click={onPreviewSound} title="Preview Sound" class="btn btn-circle btn-ghost"
				><PlayCircleIcon size="100%" /></button
			>
		</div>
	</svelte:fragment>
</DisplayModal>
