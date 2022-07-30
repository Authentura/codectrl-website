<script lang="ts">
	import NavBar from "$lib/NavBar.svelte";
</script>

<NavBar />
<main>
	<slot />
</main>

<style>
	main {
		margin: 0;
		width: 100vw;
		max-width: 100vw;
		height: 90%;
		max-height: 90%;
		padding: 0;
	}
</style>
