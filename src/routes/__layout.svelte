<script lang="ts">
	import NavBar from "$lib/NavBar.svelte";
</script>

<NavBar />
<main class="container">
	<slot />
</main>

<style>
	main {
		display: grid;
		grid-template-columns: 300px auto;
		padding: 1em;
	}
</style>
