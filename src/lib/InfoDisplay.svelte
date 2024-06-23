<script lang="ts">
	import { InfoIcon } from 'svelte-feather-icons';
	import DisplayModal from './DisplayModal.svelte';

	let dialogElement: HTMLDialogElement;
</script>

<button on:click={() => dialogElement.showModal()} class="w-14 h-14 btn btn-circle btn-ghost p-2"
	><InfoIcon size="100%" /></button
>
<DisplayModal triggerKey="i" bind:dialogElement title="Info">
	<svelte:fragment slot="body">
		<a href="https://youtu.be/-dkYI2OECZo" class="text-lg sm:text-2xl link">What is Flowmodoro?</a>
	</svelte:fragment>
</DisplayModal>
