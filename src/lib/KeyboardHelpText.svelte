<script lang="ts">
	import { state, States } from './stores';
</script>

<p>
	Press <kbd class="kbd bg-stone-600">Space</kbd> to {$state === States.UNSET
		? 'start'
		: 'take a break'}
</p>

<p>
	Press <kbd class="kbd bg-stone-600">t</kbd> to view tasks
</p>
<p>
	Press <kbd class="kbd bg-stone-600">s</kbd> to view stats
</p>
<p>
	Press <kbd class="kbd bg-stone-600">o</kbd> to view options
</p>
<p>Press <kbd class="kbd bg-stone-600">i</kbd> to view info</p>
