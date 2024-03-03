export function normalize<T>(arr: T[][]): T[] {
    let final_arr: T[] = [];

    for (let x = 0; x < arr.length; x++) {
        const inner = arr[x];
        for (let y = 0; y < inner.length; y++) {
            const element = inner[y];
            final_arr.push(element);
        }
    }

    return final_arr;
}
