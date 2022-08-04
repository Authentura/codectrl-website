<script lang="ts">
    import NavBar from "$lib/NavBar.svelte";
    import ThemeSwitcher from "$lib/ThemeSwitcher.svelte";
    import { currentThemeState } from "$lib/stores";

    $: if (typeof localStorage !== "undefined") {
        localStorage.setItem("theme", $currentThemeState);
    }

    if (typeof window !== "undefined") {
        $currentThemeState =
            localStorage.getItem("theme") ??
            window
                .matchMedia("(prefers-color-scheme: dark)")
                .media.replace("(prefers-color-scheme: ", "")
                .replace(")", "")
                .trim();

        window
            .matchMedia("(prefers-color-scheme: dark)")
            .addEventListener("change", (event) => {
                $currentThemeState = event.matches ? "dark" : "light";
            });
    }

    $: if (typeof document !== "undefined") {
        document
            .getElementsByTagName("html")[0]
            .setAttribute("data-theme", $currentThemeState);
    }
</script>

<NavBar />
<main>
    <slot />
</main>
<div class="footer">
    Copyright <a href="https://authentura.com">Authentura</a> 2022 | Website source
    available
    <a href="https://github.com/Authentura/codectrl-website">here</a>.
</div>
<ThemeSwitcher />

<style>
    @font-face {
        font-family: "JetBrains Mono";
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/jetbrainsmono/v13/tDbY2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8yKxjPQ.ttf)
            format("truetype");
    }

    @font-face {
        font-family: "Red Hat Display";
        font-style: normal;
        font-weight: 500;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/redhatdisplay/v13/8vIf7wUr0m80wwYf0QCXZzYzUoTK8RZQvRd-D1NYbmyWckg.ttf)
            format("truetype");
    }

    :root {
        --font-family: "Red Hat Display", sans-serif !important;
        --primary: #c7235d !important;
        --primary-hover: #a81e4f !important;
    }

    :global([data-theme="dark"]),
    :root:not([data-theme="light"]) {
        --secondary: #6b3270 !important;
        --switcher-background: white;
        --switcher-foreground: black;
        --hero-bg: url("/images/background-dark.svg");
        --hero-bg-flipped: url("/images/background-dark-flipped.svg");
        --logo: url("/images/logo-dark.svg");
        --mode-switch: url("/images/light-mode.svg");
        --foreground: var(--color);
    }

    :global([data-theme="light"]),
    :root:not([data-theme="dark"]) {
        --secondary: #f2b4bf !important;
        --h1-color: #070a0e !important;
        --muted-color: #353855 !important;
        --switcher-background: black;
        --switcher-foreground: white;
        --hero-bg: url("/images/background-light.svg");
        --hero-bg-flipped: url("/images/background-light-flipped.svg");
        --logo: url("/images/logo-light.svg");
        --mode-switch: url("/images/dark-mode.svg");
        --foreground: var(--h1-color);
    }

    :global(address, blockquote, dl, figure, form, ol, p, pre, table, ul) {
        color: var(--foreground);
    }

    :global(pre, code, kbd, samp) {
        --font-family: "JetBrains Mono", monospace !important;
    }

    main {
        margin: 0;
        width: 100%;
        max-width: 100%;
        height: 90%;
        max-height: 90%;
        overflow-y: auto;
        overflow-x: hidden;
        padding: 0;
    }

    .footer {
        display: block;
        position: fixed;
        padding: 0.2rem;
        border-top: var(--border-width) solid var(--accordion-border-color);
        height: 2rem;
        width: 100%;
        top: calc(100% - 2rem);
        text-align: center;
        background-color: var(--background-color);
    }
</style>
