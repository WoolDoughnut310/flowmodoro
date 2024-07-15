<script lang="ts">
	import { BarChartIcon } from 'svelte-feather-icons';
	import { tasks } from './stores';
	import DisplayModal from './DisplayModal.svelte';
	import StatDisplay from './StatDisplay.svelte';

	let modal: DisplayModal;
</script>

<button on:click={modal.show} aria-label="Stats" class="w-14 h-14 btn btn-circle btn-ghost p-2"
	><BarChartIcon size="100%" /></button
>
<DisplayModal triggerKey="s" bind:this={modal} title="Stats">
	<svelte:fragment slot="body">
		{#each $tasks as task (task.id)}
			<StatDisplay {task} />
		{:else}
			<p class="text-lg">No data. Do some work!</p>
		{/each}
	</svelte:fragment>
</DisplayModal>
