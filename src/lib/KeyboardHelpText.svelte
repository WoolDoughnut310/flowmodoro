<script lang="ts">
	import { state, States } from './stores';
</script>

{#if $state !== States.BREAK}
	<p class="mt-6">
		Press <span class="font-mono bg-stone-600 p-2 rounded-xl">Space</span> to {$state ===
		States.UNSET
			? 'start'
			: 'take a break'}
	</p>
{/if}
