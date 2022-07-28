<script context="module">
	/** @type {import(".svelte-kit/types/src/routes/docs/__types").Load} */
	export async function load({ fetch }) {
		const res = await fetch(`/docs/docs.json`);
		const { docs } = await res.json();

		console.log(docs);

		return {
			props: { docs }
		};
	}
</script>

<script>
	// @ts-nocheck
	import { currentDocPageTitle } from "$lib/stores/current-page";

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

<div>
	<aside>
		<details open="true">
			<summary>Documentation</summary>
			<nav class="container-fluid">
				<ul>
					{#each docs as doc}
						{#if doc.metadata.children}
							<li>
								<details open="true">
									{#if doc.slug === "index"}
										<summary on:click={() => setTitle(doc.metadata.title)} class="contrast">
											<a href={`/docs/`}>{doc.metadata.title}</a>
										</summary>
									{:else}
										<summary on:click={() => setTitle(doc.metadata.title)} class="contrast">
											<a href={`/docs/${doc.slug}`}>{doc.metadata.title}</a>
										</summary>
									{/if}
									<nav class="container-fluid">
										<li>
											{#each doc.metadata.children as child}
												<li>
													<a
														class="contrast"
														on:click={() => setTitle(child.metadata.title)}
														href={`/docs/${doc.slug}/${child.slug}`}
														aria-current="page"
													>
														{child.metadata.title}
													</a>
												</li>
											{/each}
										</li>
									</nav>
								</details>
							</li>
						{:else if doc.slug === "index"}
							<li>
								<a
									class="contrast"
									on:click={() => setTitle(doc.metadata.title)}
									href={`/docs/`}
									aria-current="page"
								>
									{doc.metadata.title}
								</a>
							</li>
						{:else}
							<li>
								<a
									class="contrast"
									on:click={() => setTitle(doc.metadata.title)}
									href={`/docs/${doc.slug}`}
									aria-current="page"
								>
									{doc.metadata.title}
								</a>
							</li>
						{/if}
					{/each}
				</ul>
			</nav>
		</details>
	</aside>
</div>

<div class="container">
	<slot />
</div>

<style>
	aside {
		margin-right: 1em;
	}

	summary::after {
		background-image: none;
	}
</style>
