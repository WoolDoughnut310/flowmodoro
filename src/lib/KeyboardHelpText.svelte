<script lang="ts">
	import { state, States } from './stores';
</script>

<p>
	Press <kbd class="kbd bg-stone-700 text-slate-200">Space</kbd> to {$state === States.UNSET
		? 'start'
		: 'take a break'}
</p>

<p>
	Press <kbd class="kbd bg-stone-700 text-slate-200">t</kbd> to view tasks
</p>
<p>
	Press <kbd class="kbd bg-stone-700 text-slate-200">s</kbd> to view stats
</p>
<p>
	Press <kbd class="kbd bg-stone-700 text-slate-200">o</kbd> to view options
</p>
<p>Press <kbd class="kbd bg-stone-700 text-slate-200">i</kbd> to view info</p>
