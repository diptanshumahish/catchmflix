export function prettify(str: string) {
    if (str === undefined) return;
    if (str.length === 0) return str;
    const re = /[_.,-]/g;

    return str
        .split(re)
        .map((char) => {
            const trimmed = char.trim();
            const first = trimmed.at(0) ?? "";
            const rest = trimmed.slice(1);
            return [first.toUpperCase(), rest].filter(Boolean).join("");
        })
        .join(" ");
}
