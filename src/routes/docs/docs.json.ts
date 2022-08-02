import { sortDocFiles, type DocFile } from "$lib/doc";

function getSlug(path: string) {
    return path.split("/").pop()?.split(".").shift();
}

function getDocs(slug: string | null = null) {
    const glob = slug ? import.meta.glob<any>("./**/*.md") : import.meta.glob("./*.md");

    return Promise.all(
        Object.entries(glob)
            .filter(([path]) => {
                if (slug) {
                    return path.includes(`${slug}/${getSlug(path)}`);
                } else {
                    return true;
                }
            })
            .map(async ([path, page]) => {
                const { metadata } = await page();
                const slug = getSlug(path);

                if (metadata?.children && slug) {
                    metadata.children = await getDocs(slug);
                }

                return { metadata, slug } as DocFile;
            })
    );
}

export async function GET() {
    let docs = await getDocs();
    docs = docs.sort((a, b) => sortDocFiles(a, b));

    return { status: 200, body: { docs } };
}
