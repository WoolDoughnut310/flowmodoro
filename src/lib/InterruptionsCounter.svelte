<script lang="ts">
	import { interruptions } from './stores';
	import { HashIcon, PlusCircleIcon, MinusCircleIcon } from 'svelte-feather-icons';
</script>

<div class="group relative flex flex-row items-center justify-between py-16">
	<button
		class="hidden group-hover:block top-2 absolute rounded-full hover:bg-stone-600"
		on:click={() => ($interruptions += 1)}><PlusCircleIcon size="50" /></button
	>
	<span title="Interruptions" class="text-4xl font-bold text-center">
		<HashIcon class="mx-auto" size="50" />
		{$interruptions}
	</span>
	<button
		class="hidden group-hover:block bottom-2 absolute rounded-full hover:bg-stone-600"
		on:click={() => ($interruptions = Math.max($interruptions - 1, 0))}
		><MinusCircleIcon size="50" /></button
	>
</div>
