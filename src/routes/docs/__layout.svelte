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

    /** @type {boolean} */
    let opened = true;

    if (typeof window !== "undefined" && window.innerWidth <= 750) {
        opened = false;
    }

    if (typeof localStorage !== "undefined") {
        localStorage.getItem("docs-nav-state-opened") === "true" ?? false;
    }

    $: if (typeof localStorage !== "undefined") {
        localStorage.setItem("docs-nav-state-opened", opened.toString());
    }
</script>

<main>
    <div class="nav-table">
        <aside>
            <details class="main" bind:open={opened}>
                <summary>
                    {#if opened}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="collapse"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                            height="16px"
                            ><title>Collapse</title><path
                                fill-rule="evenodd"
                                d="M1 8a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 8zm7-8a.5.5 0 0 1 .5.5v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L7.5 4.293V.5A.5.5 0 0 1 8 0zm-.5 11.707l-1.146 1.147a.5.5 0 0 1-.708-.708l2-2a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 11.707V15.5a.5.5 0 0 1-1 0v-3.793z"
                            /></svg
                        >
                    {:else}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="expand"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                            height="16px"
                            ><title>Expand</title><path
                                fill-rule="evenodd"
                                d="M1 8a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 8zM7.646.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 1.707V5.5a.5.5 0 0 1-1 0V1.707L6.354 2.854a.5.5 0 1 1-.708-.708l2-2zM8 10a.5.5 0 0 1 .5.5v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L7.5 14.293V10.5A.5.5 0 0 1 8 10z"
                            /></svg
                        >
                    {/if}

                    <span>Table of Contents</span>
                </summary>
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
        margin-left: 1rem;
        padding: 1rem;
        border-left: var(--border-width) solid var(--accordion-border-color);
        overflow-y: auto;
        max-width: calc(100% - 1rem);
    }

    main > * {
        padding: 0.5em;
    }

    main {
        display: grid;
        grid-template-columns: 1fr 5fr;
        margin: 0;
        width: 100%;
        max-width: 100%;
        height: 100%;
        max-height: 100%;
    }

    .collapse,
    .expand {
        display: none;
    }

    @media only screen and (max-width: 750px) {
        .collapse,
        .expand {
            display: inline-block;
        }

        .nav-table {
            height: 100%;
            border-bottom: var(--border-width) solid var(--accordion-border-color);
        }

        .nav-table > aside > details > summary {
            text-align: center;
        }

        .nav-table > aside > details {
            margin-bottom: 0;
            padding-bottom: 0;
        }

        main {
            grid-template-columns: unset;
            grid-template-rows: max-content min-content;
            max-height: 100%;
        }

        .container {
            border-left: none;
            margin-left: none;
            padding: none;
        }
    }
</style>
