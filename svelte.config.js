import adapter from "@sveltejs/adapter-auto";
import preprocess from "svelte-preprocess";
import path from "path";
import { fileURLToPath } from "url";
import { mdsvex } from "mdsvex";

const dirname = path.resolve(fileURLToPath(import.meta.url), "../");

/** @type {import('@sveltejs/kit').Config} */
const config = {
    // Consult https://github.com/sveltejs/svelte-preprocess
    // for more information about preprocessors
    extensions: [".svelte", ".md"],
    preprocess: [
        preprocess(),
        mdsvex({
            extensions: [".md"],
            layout: {
                _: path.join(dirname, "./src/routes/docs/_template.svelte")
            }
        })
    ],

    kit: {
        adapter: adapter()
    }
};

export default config;
