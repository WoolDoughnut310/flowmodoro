<script lang="ts">
	import { running, settings } from './stores';
	import { WatchIcon } from 'svelte-feather-icons';

	$: breakTime = Math.round($running / $settings.breakRatio / 1000 / 60);
</script>

<span title="Est. Break Time" class="text-4xl font-bold text-center">
	<WatchIcon class="mx-auto my-1" size="50" />
	{breakTime} min
</span>
