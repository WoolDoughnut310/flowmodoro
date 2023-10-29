<script lang="ts">
	import { BarChartIcon } from 'svelte-feather-icons';
	import { tasks } from './stores';
	import DisplayModal from './DisplayModal.svelte';
	import StatDisplay from './StatDisplay.svelte';

	let isOpen = false;
</script>

<button on:click={() => (isOpen = true)} class="w-14 h-14 btn btn-circle btn-ghost p-2"
	><BarChartIcon size="100%" /></button
>
<DisplayModal triggerKey="s" bind:isOpen title="Stats">
	<svelte:fragment slot="body">
		{#each $tasks as task (task.id)}
			<StatDisplay {task} />
		{:else}
			<p class="text-lg">No data. Do some work!</p>
		{/each}
	</svelte:fragment>
</DisplayModal>
