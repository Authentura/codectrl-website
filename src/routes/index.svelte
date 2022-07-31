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
		<div class="bg-flipped">
			<div class="inner">
				<h1>A dynamic source code analysis tool...</h1>
			</div>
		</div>
		<div class="bg grid-left">
			<img src="/images/screenshots/1.png" alt="Screenshot 1" />
			<div>
				<h1>That collects logs in one friendly interface</h1>
				<p>
					We often use logging to understand what bits of code get executed and what is stored in
					variables.
				</p>
				<p>Using CodeCTRL's interface over the console allows you to...</p>
			</div>
		</div>
		<div class="bg-flipped grid-right">
			<div>
				<h1>Get detailed information about any selected log</h1>
				<p>Instead of just the text passed to it, CodeCTRL collects the following information:</p>
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
			<img src="/images/screenshots/2.png" alt="Screenshot 2" />
		</div>
		<div class="bg grid-left">
			<img src="/images/screenshots/3.png" alt="Screenshot 3" />
			<div>
				<h1>Set alerts for specified keywords</h1>
				<p>
					You know that a function is vulnerable, you just need to know if user input reaches it?
				</p>
				<p>
					Insert a logger call to the function, and set an alert for a keyword. Now paste that
					keyword into every user input. CodeCTRL will alert you if it matches.
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
