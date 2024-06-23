<script lang="ts">
	import { ClipboardIcon } from 'svelte-feather-icons';
	import { tasks, selectedTask } from './stores';

	$: currentTask = $tasks.find((item) => item.id === $selectedTask);
</script>

<div class="flex flex-row justify-center items-center">
	<div class="w-8 h-8 sm:w-14 sm:h-14">
		<ClipboardIcon size="100%" />
	</div>

	<p class="ml-4 text-2xl sm:text-4xl font-mono">
		{currentTask ? (currentTask.name !== '' ? currentTask.name : '[Unnamed]') : 'No task selected'}
	</p>
</div>
