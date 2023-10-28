<script lang="ts">
	import { state, States } from './stores';
	import { RefreshCwIcon } from 'svelte-feather-icons';

	const onClick = () => {
		$state = States.UNSET;
	};
</script>

<button class="rounded-full hover:bg-[#00000099]" title="Reset" on:click={onClick}>
	<RefreshCwIcon size="96" />
</button>
