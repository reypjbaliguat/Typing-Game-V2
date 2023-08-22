export default async function fetchUtil(url: URL | string) {
    return fetch(url).then((res) => res.json());
}
