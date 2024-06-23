<script lang="ts">
	import { running, settings } from './stores';
	import { WatchIcon } from 'svelte-feather-icons';

	$: breakTime = Math.round($running / $settings.breakRatio / 1000 / 60);
</script>

<span title="Est. Break Time" class="text-2xl sm:text-4xl font-bold text-center">
	<div class="mx-auto my-1 w-8 h-8 sm:w-14 sm:h-14">
		<WatchIcon size="100%" />
	</div>
	{breakTime} min
</span>
