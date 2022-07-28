import type { DocFile } from "$lib/doc";

function getDocs(slug: string | null = null) {
	const glob = slug ? import.meta.glob<any>("./*/*.md") : import.meta.glob("./*.md");

	return Promise.all(
		Object.entries(glob)
			.filter(([path]) => {
				if (slug) {
					return path.includes(`${slug}/`);
				} else {
					return true;
				}
			})
			.map(async ([path, page]) => {
				const { metadata } = await page();
				const slug = path.split("/").pop()?.split(".").shift();

				console.log(metadata);
				if (metadata?.children && slug) {
					metadata.children = await getDocs(slug);
				}

				return { metadata, slug } as DocFile;
			})
	);
}

export async function GET() {
	const docs = await getDocs();

	return { status: 200, body: { docs } };
}
