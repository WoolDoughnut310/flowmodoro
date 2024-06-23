<script lang="ts">
	import type Task from './stores';
	import { HashIcon, WatchIcon, BriefcaseIcon, CalendarIcon } from 'svelte-feather-icons';

	export let task: Task;

	const formatDuration = (seconds: number) => {
		const minutes = Math.floor(seconds / 60);
		const hours = Math.floor(minutes / 60);
		return `${hours} hr, ${minutes % 60} min, ${seconds % 60} sec`;
	};
</script>

<div class="collapse collapse-arrow border border-base-200">
	<input type="checkbox" />
	<div class:line-through={task.checked} class="font-mono text-xl collapse-title">
		&nbsp;{task.name !== "" ? task.name : "[Unnamed]"}&nbsp;
	</div>
	<div class="collapse-content space-y-4">
		{#each task.stats as stat}
			<div class="flex flex-col sm:flex-row space-y-4 justify-around items-start sm:items-center text-sm">
				<div title="Work Time" class="flex space-x-4 sm:space-x-0 flex-row sm:flex-col justify-center items-center">
					<div class="w-5 h-5 sm:w-8 sm:h-8"><BriefcaseIcon size="100%" /></div>
					<span>{formatDuration(stat.workTime)}</span>
				</div>
				<div title="Break Time" class="flex space-x-4 sm:space-x-0 flex-row sm:flex-col justify-center items-center">
					<div class="w-5 h-5 sm:w-8 sm:h-8"><WatchIcon size="100%" /></div>
					<span>{formatDuration(stat.breakTime)}</span>
				</div>

				<div title="Interruptions" class="flex space-x-4 sm:space-x-0 flex-row sm:flex-col justify-center items-center">
					<div class="w-5 h-5 sm:w-8 sm:h-8"><HashIcon size="100%" /></div>
					<span>{stat.interruptions}</span>
				</div>
				<div title="Started at" class="flex space-x-4 sm:space-x-0 flex-row sm:flex-col justify-center items-center">
					<div class="w-5 h-5 sm:w-8 sm:h-8"><CalendarIcon size="100%" /></div>
					<span>{new Date(stat.timeStartedAt).toLocaleString()}</span>
				</div>
			</div>
		{/each}
	</div>
</div>
