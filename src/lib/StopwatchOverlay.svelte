<script lang="ts">
	import { state, States } from './stores';
	import { PlayCircleIcon, StopCircleIcon, RefreshCwIcon } from 'svelte-feather-icons';
	import StateButton from './StateButton.svelte';
</script>

<div
	class="w-full h-full absolute top-0 left-0 space-x-24 flex-row items-center justify-center group-hover:bg-[#00000088] group-hover:cursor-pointer hidden group-hover:flex"
>
	{#if $state === States.UNSET}
		<StateButton title="Start" newState={States.RUNNING} activateOnSpace Icon={PlayCircleIcon} />
	{:else}
		{#if $state !== States.BREAK}
			<StateButton title="Stop" newState={States.BREAK} activateOnSpace Icon={StopCircleIcon} />
		{/if}
		<StateButton title="Reset" newState={States.UNSET} Icon={RefreshCwIcon} />
	{/if}
</div>
