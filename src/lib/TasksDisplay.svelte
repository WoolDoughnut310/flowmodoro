<script lang="ts">
	import { PlusCircleIcon } from 'svelte-feather-icons';
	import { tasks, state, States } from './stores';
	import TaskDisplay from './TaskDisplay.svelte';
	import DisplayModal from './DisplayModal.svelte';

	let isOpen = false;

	const createTask = () => {
		$tasks = [
			...$tasks,
			{
				id: crypto.randomUUID(),
				checked: false,
				name: '',
				stats: []
			}
		];
	};
</script>

<DisplayModal triggerKey="t" bind:isOpen title="Tasks">
	<button
		slot="header"
		class="btn btn-wide h-12 py-1"
		disabled={$state !== States.UNSET}
		on:click={createTask}><PlusCircleIcon size="100%" /></button
	>
	<svelte:fragment slot="body">
		{#each $tasks as task, index (task.id)}
			<TaskDisplay {task} {index} />
		{:else}
			<p class="text-lg">No tasks created yet. Add one!</p>
		{/each}
	</svelte:fragment>
</DisplayModal>
