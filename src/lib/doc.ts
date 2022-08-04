export type DocFile = {
    metadata?: {
        index?: number;
        children?: DocFile[];
        title?: string;
    };
    slug: string;
};

type DocFileSort = { index: number; file: DocFile };

export function sortDocFiles(a: DocFileSort, b: DocFileSort): number {
    const aIndex = a.file?.metadata?.index ?? -1;
    const bIndex = b.file?.metadata?.index ?? -1;

    if (aIndex > bIndex) {
        return -1;
    } else if (aIndex < bIndex) {
        return 1;
    } else {
        return 0;
    }
}
