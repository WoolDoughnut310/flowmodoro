<script lang="ts" context="module">
	let locked = false;
</script>

<script lang="ts">
	import { onMount } from 'svelte';
	import { keyTriggerLocked } from "./stores";

	export let triggerKey: string;
	export let title: string;
	
	export let dialogElement: HTMLDialogElement;
	
	export const show = () => {
		dialogElement?.showModal();
		$keyTriggerLocked = true;
	}

	onMount(() => {		
		const onKeyUp = (event: KeyboardEvent) => {
			if (!$keyTriggerLocked && event.key === triggerKey) {
				show();
			}
		};
		
		const onClose = () => {
			$keyTriggerLocked = false;
		}

		window.addEventListener('keyup', onKeyUp);
		dialogElement.addEventListener('close', onClose);

		return () => {
			window.removeEventListener('keyup', onKeyUp);
			dialogElement.removeEventListener('close', onClose);
		};
	});
</script>

<dialog class="modal !ml-0 sm:!ml-4" bind:this={dialogElement}>
	<div class="modal-box w-full h-full sm:h-3/5 max-w-4xl max-h-full rounded-none sm:rounded-xl bg-gray-800">
		<header class="sticky px-8 w-full flex flex-col sm:flex-row space-y-4 sm:space-y-0 justify-between items-center">
			<h2 class="font-bold text-4xl">{title}</h2>
			<slot name="header" />
		</header>
		<div class="flex flex-col w-full px-0 sm:px-12 mt-12 mb-16 space-y-8">
			<slot name="body" />
		</div>
		<div class="modal-action sticky bottom-6 right-6">
			<form method="dialog">
				<button class="btn">Close</button>
			</form>
		</div>
	</div>
</dialog>
