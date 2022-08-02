<script lang="ts">
    import { currentThemeState } from "$lib/stores";

    let switchToState: string = "thinking...";

    // $: switchToState = $currentThemeState[0]?.toUpperCase() + $currentThemeState.slice(1);
    $: if ($currentThemeState == "dark") {
        switchToState = "light";
    } else {
        switchToState = "dark";
    }

    const switchTheme = () => {
        if ($currentThemeState == "dark") {
            $currentThemeState = "light";
        } else {
            $currentThemeState = "dark";
        }
    };
</script>

<button class="switcher" on:click={switchTheme}>
    Switch to {switchToState} mode
</button>

<style>
    .switcher {
        padding: 0.25em;
        margin: 0;
        position: fixed;
        bottom: 5%;
        right: 1%;
        width: max-content;
        height: max-content;
        background-color: var(--switcher-background);
        border-color: var(--switcher-background);
        color: var(--switcher-foreground);
    }
</style>
