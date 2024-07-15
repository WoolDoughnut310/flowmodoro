<script lang="ts">
	import { interruptions } from './stores';
	import { HashIcon, PlusCircleIcon, MinusCircleIcon } from 'svelte-feather-icons';

	const btnClassName = 'btn p-0 w-8 h-8 sm:w-14 sm:h-14 btn-ghost block sm:hidden sm:group-hover:block absolute';
</script>

<div class="group relative flex flex-row items-center justify-between ml-20 px-8 sm:px-20">
	<button
		class={`${btnClassName} left-20 sm:left-3`}
		aria-label="Add interruption"
		on:click={() => ($interruptions = Math.max($interruptions - 1, 0))}
		>
			<MinusCircleIcon size="100%" />
		</button
	>
	<span title="Interruptions" class="text-2xl sm:text-4xl font-bold text-center">
		<div class="hidden sm:contents">
			<HashIcon class="mx-auto my-1" size="50" />
		</div>
		<div class="contents sm:hidden">
			<HashIcon class="mx-auto my-1" size="30" />
		</div>
		{$interruptions}
	</span>
	<button
		class={`${btnClassName} right-20 sm:right-3`}
		aria-label="Remove interruption"
		on:click={() => ($interruptions += 1)}
		>
			<PlusCircleIcon size="100%" />
		</button
	>
</div>
