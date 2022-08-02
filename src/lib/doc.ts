export type DocFile = {
    metadata: any;
    slug: string;
};

export function sortDocFiles(a: DocFile, b: DocFile): number {
    const aIndex = a?.metadata?.index;
    const bIndex = b?.metadata?.index;

    if (aIndex && bIndex) {
        return bIndex - aIndex;
    } else if (aIndex) {
        return -1;
    } else {
        return 1;
    }
}
