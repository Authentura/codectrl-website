export type DocFile = {
    metadata: {
        index?: number;
        children?: DocFile[];
    };
    slug: string;
};

export function sortDocFiles(
    a: { index: number; file: DocFile },
    b: { index: number; file: DocFile }
): number {
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
