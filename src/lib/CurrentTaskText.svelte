<script lang="ts">
	import { ClipboardIcon } from 'svelte-feather-icons';
	import { tasks, selectedTask } from './stores';

	$: currentTask = $tasks.find((item) => item.id === $selectedTask);
</script>

<div class="flex flex-row justify-center items-center">
	<ClipboardIcon size="64" />
	<p class="ml-4 text-lg sm:text-4xl font-mono">
		{currentTask ? currentTask.name : 'No task selected'}
	</p>
</div>
