<script lang="ts">
	import { interruptions } from './stores';
	import { HashIcon, PlusCircleIcon, MinusCircleIcon } from 'svelte-feather-icons';

	const btnClassName = 'btn btn-circle btn-ghost hidden group-hover:block absolute';
</script>

<div class="group relative flex flex-row items-center justify-between px-20 py-12">
	<button class={`${btnClassName} left-3`} on:click={() => ($interruptions += 1)}
		><PlusCircleIcon size="50" /></button
	>
	<span title="Interruptions" class="text-4xl font-bold text-center">
		<HashIcon class="mx-auto my-1" size="50" />
		{$interruptions}
	</span>
	<button
		class={`${btnClassName} right-3`}
		on:click={() => ($interruptions = Math.max($interruptions - 1, 0))}
		><MinusCircleIcon size="50" /></button
	>
</div>
