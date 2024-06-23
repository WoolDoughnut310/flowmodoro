<script lang="ts">
	import { BarChartIcon } from 'svelte-feather-icons';
	import { tasks } from './stores';
	import DisplayModal from './DisplayModal.svelte';
	import StatDisplay from './StatDisplay.svelte';

	let dialogElement: HTMLDialogElement;
</script>

<button on:click={() => dialogElement.showModal()} class="w-14 h-14 btn btn-circle btn-ghost p-2"
	><BarChartIcon size="100%" /></button
>
<DisplayModal triggerKey="s" bind:dialogElement title="Stats">
	<svelte:fragment slot="body">
		{#each $tasks as task (task.id)}
			<StatDisplay {task} />
		{:else}
			<p class="text-lg">No data. Do some work!</p>
		{/each}
	</svelte:fragment>
</DisplayModal>
