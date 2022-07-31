<script lang="ts">
	import NavBar from "$lib/NavBar.svelte";
</script>

<NavBar />
<main>
	<slot />
</main>
<div class="footer">
	Copyright <a href="https://authentura.com">Authentura</a> 2022
</div>

<style>
	@font-face {
		font-family: 'JetBrains Mono';
		font-style: normal;
		font-weight: 700;
		font-display: swap;
		src: url(https://fonts.gstatic.com/s/jetbrainsmono/v13/tDbY2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8yKxjPQ.ttf) format('truetype');
	}

	@font-face {
		font-family: 'Red Hat Display';
		font-style: normal;
		font-weight: 500;
		font-display: swap;
		src: url(https://fonts.gstatic.com/s/redhatdisplay/v13/8vIf7wUr0m80wwYf0QCXZzYzUoTK8RZQvRd-D1NYbmyWckg.ttf) format('truetype');
	}

	:root {
		--font-family: "Red Hat Display", sans-serif !important;
	}

	:global(pre, code, kbd, samp) {
		--font-family: 'JetBrains Mono', monospace !important;
	}
	
	main {
		margin: 0;
		width: 100vw;
		max-width: 100vw;
		height: 90%;
		max-height: 90%;
		padding: 0;
	}

	.footer {
		display: block;
		position: absolute;
		padding: 0.2em;
		border-top: var(--border-width) solid var(--accordion-border-color);
		height: 1em;
		width: 100%;
		top: calc(100% - 2em);
		text-align: center;
		background-color: var(--background-color);
	}
</style>
