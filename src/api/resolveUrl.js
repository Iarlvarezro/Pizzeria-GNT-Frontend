export function resolveUrl(path, base, query ={}){
    const url = new URL (path, base);
    Object.entries(query).forEach(entry=> {
        url.searchParams.append(entry[0],entry[1])
    });
    return url.href;
}