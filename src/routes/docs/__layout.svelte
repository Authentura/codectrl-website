<script context="module">
	export const ssr = true;
	export const prerender = true;

	/** @type {import(".svelte-kit/types/src/routes/docs/__types").Load} */
	export async function load({ fetch }) {
		const res = await fetch(`/docs/docs.json`);
		let { docs } = await res.json();
		docs = docs.sort((a, b) => sortDocFiles(a, b));

		return {
			props: { docs }
		};
	}
</script>

<script>
	// @ts-nocheck
	import { currentDocPageTitle } from "$lib/stores";
	import DocTocItem from "$lib/DocTOCItem.svelte";
	import { sortDocFiles } from "$lib/doc";

	/** @type {string} */
	let title = "Index";
	$: title = $currentDocPageTitle;
	/** @type {import("$lib/doc").DocFile[]} */
	export let docs;

	/** @param {string} newTitle */
	const setTitle = (newTitle) => {
		$currentDocPageTitle = newTitle;
	};
</script>

<svelte:head>
	<title>CodeCTRL | Documentation | {title}</title>
</svelte:head>

<main>
	<div>
		<aside>
			<details class="main" open>
				<summary>Documentation</summary>
				<nav class="container-fluid">
					<ul>
						{#each docs as doc}
							<DocTocItem {doc} {setTitle} />
						{/each}
					</ul>
				</nav>
			</details>
		</aside>
	</div>

	<div class="container">
		<slot />
	</div>
</main>

<style>
	summary::after {
		background-image: none;
	}

	details {
		border: none;
	}

	.container {
		margin-left: 1em;
		padding: 1em;
		border-left: var(--border-width) solid var(--accordion-border-color);
		overflow-y: auto;
		max-width: calc(100% - 1em);
	}

	main > * {
		padding: 0.5em;
	}

	main {
		display: grid;
		grid-template-columns: 300px auto;
		margin: 0;
		width: 100vw;
		max-width: 100vw;
		height: 100%;
		max-height: 100%;
	}
</style>
