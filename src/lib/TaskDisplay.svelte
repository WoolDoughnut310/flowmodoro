<script lang="ts">
	import { tasks, selectedTask, type Task, state, States } from './stores';
	import { Trash2Icon, TargetIcon } from 'svelte-feather-icons';
	import { onMount } from 'svelte';

	export let task: Task;
	export let index: number;

	let isEditing = false;

	let inputElement: HTMLInputElement;

	onMount(() => {
		if (task.name === '' && index === $tasks.length - 1) {
			isEditing = true;
		}
	});

	$: if (isEditing && inputElement) inputElement.focus();

	onMount(() => {
		const handleClick = (event: MouseEvent) => {
			// On Click Outside
			if (inputElement && !inputElement.contains(event.target) && !event.defaultPrevented) {
				onUpdate();
			}
		};

		window.addEventListener('click', handleClick, true);

		return () => {
			window.removeEventListener('click', handleClick, true);
		};
	});

	const onSelect = () => {
		if (isSelected) {
			$selectedTask = '';
		} else {
			$selectedTask = task.id;
		}
	};

	const onUpdate = () => {
		const taskIndex = $tasks.findIndex((item) => item.id === task.id);
		if (taskIndex === -1) return;

		$tasks[taskIndex] = task;
		$tasks = $tasks;
		isEditing = false;
	};

	const onDelete = () => {
		$tasks = $tasks.filter((item) => item.id !== task.id);
	};

	$: isSelected = $selectedTask === task.id;
</script>

<div
	class:outline={isSelected}
	class="outline-4 flex flex-row justify-start items-center bg-stone-800 px-2 py-2 sm:px-5 sm:py-4 rounded-xl text-xl"
>
	<input
		type="checkbox"
		bind:checked={task.checked}
		on:change={onUpdate}
		class="checkbox checkbox-md sm:checkbox-lg"
	/>
	<div class="ml-6 flex-1">
		{#if isEditing}
			<input
				type="text"
				placeholder="Enter task name"
				class="input input-bordered w-full text-sm sm:text-lg"
				bind:value={task.name}
				bind:this={inputElement}
				disabled={$state !== States.UNSET}
				on:keypress|capture={(event) => {
					if (event.key === 'Enter') {
						onUpdate();
					}
					event.stopPropagation();
				}}
			/>
		{:else}
			<button
				class="h-max btn btn-ghost w-full normal-case text-sm sm:text-lg"
				class:line-through={task.checked}
				on:click={() => {
					if ($state === States.UNSET) isEditing = true;
				}}>&nbsp;{task.name}&nbsp;</button
			>
		{/if}
	</div>
	<button disabled={$state !== States.UNSET} on:click={onSelect} class="btn btn-circle btn-ghost mx-4 w-6 h-6 sm:w-10 sm:h-10"
		>
			<span class="hidden">{!isSelected ? 'Select' : 'Deselect'}</span>
			<TargetIcon size="100%" />
		</button
	>
	<button
		disabled={$state !== States.UNSET}
		on:click={onDelete}
		class="btn btn-circle btn-ghost w-6 h-6 sm:w-10 sm:h-10"><Trash2Icon size="100%" /></button
	>
</div>
