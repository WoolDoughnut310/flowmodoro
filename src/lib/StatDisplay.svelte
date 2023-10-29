<script lang="ts">
	import type Task from './stores';
	import { HashIcon, WatchIcon, BriefcaseIcon, CalendarIcon } from 'svelte-feather-icons';

	export let task: Task;

	const formatDuration = (num: number) => {
		const seconds = num;
		const minutes = Math.floor(seconds / 60);
		const hours = Math.floor(minutes / 60);
		return `${hours} hr, ${minutes % 60} min, ${seconds % 60} sec`;
	};
</script>

<div class="collapse collapse-arrow border border-base-200">
	<input type="checkbox" />
	<div class:line-through={task.checked} class="font-mono text-xl collapse-title">
		&nbsp;{task.name}&nbsp;
	</div>
	<div class="collapse-content space-y-4">
		{#each task.stats as stat}
			<div class="flex flex-row justify-around items-center">
				<div title="Work Time" class="flex flex-col justify-center items-center">
					<BriefcaseIcon size="30" />
					{formatDuration(stat.workTime)}
				</div>
				<div title="Break Time" class="flex flex-col justify-center items-center">
					<WatchIcon size="30" />
					{formatDuration(stat.breakTime)}
				</div>

				<div title="Interruptions" class="flex flex-col justify-center items-center">
					<HashIcon size="30" />
					{stat.interruptions}
				</div>
				<div title="Started at" class="flex flex-col justify-center items-center">
					<CalendarIcon size="30" />
					{new Date(stat.timeStartedAt).toLocaleString()}
				</div>
			</div>
		{/each}
	</div>
</div>
