<script lang="ts">
	import type { DocFile } from "./doc";

	export let doc: DocFile;
	export let setTitle: (_: string) => void;
	export let root = "/docs";
</script>

<div>
	{#if doc.metadata.children}
		<li>
			<details open="true">
				{#if doc.slug === "index"}
					<summary on:click={() => setTitle(doc.metadata.title)}>
						<a href={root} class="contrast" aria-current="page">{doc.metadata.title}</a>
					</summary>
				{:else}
					<summary on:click={() => setTitle(doc.metadata.title)}>
						<a href={`${root}/${doc.slug}`} class="contrast" aria-current="page">{doc.metadata.title}</a>
					</summary>
				{/if}
				<nav class="container-fluid">
					<li>
						{#each doc.metadata.children as child}
							<svelte:self doc={child} {setTitle} root={`${root}/${doc.slug}`} />
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
				href={`${root}/${doc.slug}`}
				aria-current="page"
			>
				{doc.metadata.title}
			</a>
		</li>
	{/if}
</div>

<style>
	summary::after {
		background-image: none;
	}

	details {
		border: none;
	}
</style>
