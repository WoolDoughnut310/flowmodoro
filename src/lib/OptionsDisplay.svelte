<script lang="ts">
	import DisplayModal from './DisplayModal.svelte';
	import { SlidersIcon, PlayCircleIcon } from 'svelte-feather-icons';
	import { settings } from './stores';
	import { sounds, playSound } from './sound';

	let modal: DisplayModal;

	const onPreviewSound = () => {
		playSound($settings.timerSound);
	};
</script>

<button on:click={modal.show} class="w-14 h-14 btn btn-circle btn-ghost p-2"
	><SlidersIcon size="100%" /></button
>
<DisplayModal triggerKey="o" bind:this={modal} title="Options">
	<svelte:fragment slot="body">
		<div class="flex space-y-4 sm:space-y-0 flex-col sm:flex-row justify-around items-start sm:items-center">
			<div class="flex flex-col items-start sm:items-center">
				<p class="font-mono text-lg sm:text-2xl">Break Ratio</p>
				<p class="text-xs">For every <i>n</i> minutes of work, take a 1 minute break</p>
			</div>
			<div class="flex flex-row-reverse sm:flex-col items-center justify-start sm:justify-center space-y-2">
				<p class="font-bold text-md sm:text-2xl ml-6 sm:ml-0">{$settings.breakRatio}</p>
				<input type="range" min={3} max={5} bind:value={$settings.breakRatio} class="range range-sm" />
			</div>
		</div>
		<div class="flex space-y-4 sm:space-y-0 flex-col sm:flex-row items-start justify-center sm:items-center sm:justify-around">
			<p class="font-mono text-lg sm:text-2xl">Timer Sound</p>
			<div class="flex flex-row justify-around items-center">
				<select bind:value={$settings.timerSound} class="select select-sm sm:select-lg">
					{#each Object.keys(sounds) as sound}
						<option value={sound} class="text-xl">{sound}</option>
					{/each}
				</select>
				<button on:click={onPreviewSound} title="Preview Sound" class="ml-6 btn btn-circle btn-ghost w-8 h-8 sm:w-12 sm:h-12"
					><PlayCircleIcon size="100%" /></button
				>
			</div>
		</div>
	</svelte:fragment>
</DisplayModal>
