<script lang="ts">
    import { ToastType } from "./types";

    export let text: string;
    export let toastType: ToastType = ToastType.NOTE;
    export let link: string = "";

    let prefix = "";
    let buttonColour = "contrast";
    let anchor: HTMLAnchorElement | null = null;

    $: switch (toastType) {
        case ToastType.NOTE:
            prefix = "NOTE";
            buttonColour = "contrast outline";
            break;

        case ToastType.ALERT:
            prefix = "ALERT";
            buttonColour = "primary";
            break;

        case ToastType.WARNING:
            prefix = "WARNING";
            buttonColour = "warning";
            break;

        case ToastType.ERROR:
            prefix = "ERROR";
            buttonColour = "error";
            break;
    }

    const handleClick = () => {
        if (anchor) {
            anchor.click();
        }
    };
</script>

<button on:click={handleClick} class={buttonColour} class:not-linked={!link.length}>
    {#if link.length}
        <a href={link} bind:this={anchor}>{`${prefix}: ${text}`}</a>
    {:else}
        {`${prefix}: ${text}`}
    {/if}
</button>

<style>
    button {
        margin: 1em auto;
        width: max-content;
    }

    button > a {
        color: unset;
        text-decoration: none;
    }

    .not-linked:hover {
        cursor: unset;
    }

    .warning {
        background-color: #ffb300;
        border-color: #ffb300;
    }

    .error {
        background-color: #e53935;
        border-color: #e53935;
    }
</style>
