<script lang="ts">
	import { PlusCircleIcon, ClipboardIcon } from 'svelte-feather-icons';
	import { tasks, state, States } from './stores';
	import TaskDisplay from './TaskDisplay.svelte';
	import DisplayModal from './DisplayModal.svelte';

	let modal: DisplayModal;

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

<button on:click={modal.show} aria-label="Tasks" class="w-14 h-14 btn btn-circle btn-ghost p-2"
	><ClipboardIcon size="100%" /></button
>
<DisplayModal triggerKey="t" bind:this={modal} title="Tasks">
	<button
		slot="header"
		class="btn btn-wide h-12 py-1"
		disabled={$state !== States.UNSET}
		aria-label="Create task"
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
