<script lang="ts">
	import DisplayModal from './DisplayModal.svelte';
	import { SlidersIcon } from 'svelte-feather-icons';
	import { settings } from './stores';
    import { sounds, playSound } from './sounds';

	let isOpen = false;

	const onPreviewSound = () => {
        playSound($settings.timerSound);
    }
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
				{#each sounds as sound}
					<option class="text-xl" selected={$settings.timerSound === sound}
						>{sound}</option
					>
				{/each}
			</select>
		</div>
	</svelte:fragment>
</DisplayModal>
