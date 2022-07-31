<script lang="ts">
	import type { DocFile } from "./doc";
	import { afterNavigate } from "$app/navigation";

	export let doc: DocFile;
	export let setTitle: (_: string) => void;
	export let root = "/docs";

	let activated = false;

	afterNavigate(({ to }) => {
		if (typeof window !== "undefined") {
			if (doc.slug !== "index") {
				activated = to.pathname.replace(root, "").includes(`/${doc.slug}`);
			} else {
				activated = to.pathname.replaceAll("/", "") === root.replaceAll("/", "");
			}
		}
	});
</script>

<div>
	{#if doc.metadata.children}
		<li>
			<details open>
				{#if doc.slug === "index"}
					<summary on:click={() => setTitle(doc.metadata.title)}>
						<a 
							href={root} 
							class="contrast" 
							class:active={activated}
							role="button"
							aria-current="page"
						>
							{doc.metadata.title}
						</a>
					</summary>
				{:else}
					<summary on:click={() => setTitle(doc.metadata.title)}>
						<a 
							href={`${root}/${doc.slug}`} 
							class="contrast" 
							class:active={activated}
							role="button"
							aria-current="page"
						>
							{doc.metadata.title}
						</a>
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
				class:active={activated}
				role="button"
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
				class:active={activated}
				role="button"
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
	  display: none;
	}

	details {
		border: none;
	}

	a.active {
		color: var(--contrast);
		background-color: var(--secondary);
		border: none;
		text-align: left;
		padding: 0.2em;
	}

	a:not(.active) {
		color: var(--contrast);
		background-color: unset;
		border: none;
		text-align: left;
		padding: 0.2em;
	}
</style>
