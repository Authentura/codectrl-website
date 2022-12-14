<script lang="ts">
    import { currentThemeState } from "$lib/stores";
    import { Lightbox } from "svelte-lightbox";
</script>

<svelte:head>
    <title>CodeCTRL | Home</title>
</svelte:head>

<!-- TODO(@svmorris, @sboyden): Reword paragraphs to contain "why" instead of "how".  -->

{#key $currentThemeState}
    <header class="bg container hero h-center">
        <hgroup>
            <h1>CodeCTRL</h1>
            <h2>by</h2>
        </hgroup>
        <img class="logo" alt="Authentura logo" />
    </header>

    <!-- NOTE: Maybe put an extra section in here to explain why? -->

    <section class="bg-flipped h-center">
        <h1>A dynamic source code analysis tool...</h1>
    </section>
    <section class="bg grid-left">
        <!-- <img src="/images/screenshots/1.png" alt="Screenshot 1" /> -->
        <Lightbox
            modalClasses="modal"
            thumbnailClasses="thumbnail"
            imagePreset="fullscreen"
            clickToClose={true}
        >
            <img src="/images/screenshots/1.png" alt="Screenshot 1" />
        </Lightbox>
        <div>
            <h1>That collects logs in one friendly interface</h1>
            <p>
                We often use logging to understand what bits of code get executed and what
                is stored in variables.
            </p>
            <p>Using CodeCTRL's interface over the console allows you to...</p>
        </div>
    </section>
    <section class="bg-flipped grid-right">
        <div>
            <h1>Get detailed information about any selected log</h1>
            <p>
                Instead of just the text passed to it, CodeCTRL collects the following
                information:
            </p>
            <ul>
                <li>The call stack</li>
                <li>The log message</li>
                <li>Where it was called</li>
                <li>Some code context for the log</li>
                <!--
                      TODO: Make the screenshot more representative of these points.

                      For example it would be better to have the image clearly show that
                      the log (something simple, preferable 1 line) was called in a context
                      of code. Maybe show the entire function with it.
                -->
            </ul>
        </div>
        <Lightbox
            modalClasses="modal"
            thumbnailClasses="thumbnail"
            imagePreset="fullscreen"
            clickToClose={true}
        >
            <img src="/images/screenshots/2.png" alt="Screenshot 2" />
        </Lightbox>
    </section>
    <section class="bg grid-left">
        <Lightbox
            modalClasses="modal"
            thumbnailClasses="thumbnail"
            imagePreset="fullscreen"
            clickToClose={true}
        >
            <img src="/images/screenshots/3.png" alt="Screenshot 3" />
        </Lightbox>
        <div>
            <h1>Set alerts for specified keywords</h1>
            <p>
                You know that a function is vulnerable, you just need to know if user
                input reaches it?
            </p>
            <p>
                Insert a logger call to the function, and set an alert for a keyword. Now
                paste that keyword into every user input. CodeCTRL will alert you if it
                matches.
            </p>
        </div>
    </section>
{/key}

<style>
    section {
        padding: 1rem;
    }

    :global(.thumbnail) {
        width: 100%;
    }

    :global(.clickable) {
        width: 100%;
        display: flex;
        align-content: center;
        justify-content: center;
    }

    .grid-left {
        display: grid;
        grid-template-columns: 2fr 1fr;
        gap: var(--grid-spacing-horizontal);
        justify-content: center;
        align-items: center;
        height: 100%;
    }

    .grid-right {
        display: grid;
        grid-template-columns: 1fr 2fr;
        gap: var(--grid-spacing-horizontal);
        justify-content: center;
        align-items: center;
        height: 100%;
    }

    @media only screen and (max-width: 1000px) {
        .grid-left,
        .grid-right {
            grid-template-columns: unset;
            gap: 0;
            grid-template-rows: min-content min-content;
        }

        .grid-left > :last-child {
            order: -1;
        }
    }

    .grid-left > *,
    .grid-right > * {
        display: block;
    }

    .grid-left > img,
    .grid-right > img {
        width: 100%;
    }

    .container {
        text-align: center;
    }

    .h-center {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-flow: column;
    }

    .logo {
        content: var(--logo);
        width: 40%;
    }

    .bg,
    .bg-flipped {
        margin: auto auto;
        background-image: var(--hero-bg);
        background-position: center;
        background-size: 100% 100%;
        width: 100%;
        max-width: 100%;
        min-height: 100%;
        height: auto;
    }

    .bg-flipped {
        background-image: var(--hero-bg-flipped);
    }

    @media only screen and (max-width: 1000px) {
        .bg,
        .bg-flipped {
            background-size: 150% 100%;
        }
    }

    @media only screen and (max-width: 500px) {
        .bg,
        .bg-flipped {
            background-size: 200% 100%;
        }
    }
</style>
