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
	import DocTocItem from "$lib/DocTOCItem.svelte";
	import { sortDocFiles } from "$lib/doc";
	import Toast from "$lib/Toast.svelte";
	import { ToastType } from "$lib/types";

	/** @type {import("$lib/doc").DocFile[]} */
	export let docs;
</script>

<main>
	<div>
		<aside>
			<details class="main" open>
				<summary>Documentation</summary>
				<nav class="container-fluid">
					<ul>
						{#each docs as doc}
							<DocTocItem {doc} />
						{/each}
					</ul>
				</nav>
			</details>
		</aside>
	</div>

	<div class="container">
		<Toast
			text="Documentation is still very much WIP, please feel free to contribute."
			toastType={ToastType.NOTE}
		/>

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
