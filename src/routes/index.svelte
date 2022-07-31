<script lang="ts">
	import { currentThemeState } from "$lib/stores";
</script>

<svelte:head>
	<title>CodeCTRL | Home</title>
</svelte:head>

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

	<main>
		<div class="bg-flipped grid-left">
			<img src="/images/screenshots/1.png" alt="Screenshot 1" />
			<div>
				<h1>Lorem ipsum</h1>
				<p>
					Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa
					sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat
					excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate
					voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure
					elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris
					cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem
					sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit
					enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa
					duis.
				</p>
			</div>
		</div>
		<div class="bg grid-right">
			<div>
				<h1>Lorem ipsum</h1>
				<p>
					Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa
					sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat
					excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate
					voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure
					elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris
					cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem
					sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit
					enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa
					duis.
				</p>
			</div>
			<img src="/images/screenshots/2.png" alt="Screenshot 2" />
		</div>
		<div class="bg-flipped grid-left">
			<img src="/images/screenshots/3.png" alt="Screenshot 3" />
			<div>
				<h1>Lorem ipsum</h1>
				<p>
					Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa
					sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat
					excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate
					voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure
					elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris
					cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem
					sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit
					enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa
					duis.
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
		width: 100vw;
		max-width: 100vw;
		height: 100%;
	}

	.bg-flipped {
		margin: auto auto;
		background-image: var(--hero-bg-flipped);
		aspect-ratio: 960/300;
		background-repeat: no-repeat;
		background-position: center;
		background-size: cover;
		width: 100vw;
		max-width: 100vw;
		height: 100%;
	}
</style>
