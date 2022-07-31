<script lang="ts">
	import { currentThemeState } from "$lib/stores";
</script>

<svelte:head>
	<title>CodeCTRL | Home</title>
</svelte:head>

<!-- TODO(@svmorris, @sboyden): Reword paragraphs to contain "why" instead of "how".  -->

{#key $currentThemeState}
	<div class="bg container hero">
		<div class="inner">
			<hgroup>
				<h1>CodeCTRL</h1>
				<h2>by</h2>
			</hgroup>
			<img class="logo" alt="Authentura logo" />
		</div>
	</div>

	<!-- NOTE: Maybe put an extra section in here to explain why? -->

	<main>
		<div class="bg-flipped grid-left">
			<img src="/images/screenshots/1.png" alt="Screenshot 1" />
			<div>
				<h1>Collect logs from multiple remote sources concurrently</h1>
				<p>
					Host CodeCTRL on your own infrastructure and access the logs via your
					own desktop or browser.
				</p>
			</div>
		</div>
		<div class="bg grid-right">
			<div>
				<h1>View detailed information about any selected log</h1>
				<p>Displays the following information:</p>
				<ul>
					<li>File location and line number.</li>
					<li>Message and its data-type.</li>
					<li>Where the log was sent from and when it was received.</li>
					<li>
						A detailed stacktrace outlining the structure of where and how the
						log was created.
					</li>
				</ul>
			</div>
			<img src="/images/screenshots/2.png" alt="Screenshot 2" />
		</div>
		<div class="bg-flipped grid-left">
			<img src="/images/screenshots/3.png" alt="Screenshot 3" />
			<div>
				<h1>Set alerts for specified keywords</h1>
				<p>
					Need to be alerted when a keyword appears in your logs? Set keywords
					in the settings and CodeCTRL will highlight any log that either
					matches or contains any of the alert keywords.
				</p>
			</div>
		</div>
	</main>
{/key}

<style>
	main {
		height: 100%;
	}

	main > div {
		padding: 1em;
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

	.inner {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-flow: column;
		height: 100%;
	}

	img {
		width: 40%;
	}

	.logo {
		content: var(--logo);
	}

	.bg {
		margin: auto auto;
		background-image: var(--hero-bg);
		aspect-ratio: 960/300;
		background-repeat: no-repeat;
		background-position: center;
		background-size: cover;
		width: 100%;
		max-width: 100%;
		height: 100%;
	}

	.bg-flipped {
		margin: auto auto;
		background-image: var(--hero-bg-flipped);
		aspect-ratio: 960/300;
		background-repeat: no-repeat;
		background-position: center;
		background-size: cover;
		width: 100%;
		max-width: 100%;
		height: 100%;
	}
</style>
