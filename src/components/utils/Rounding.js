
export function rounding(num) {
    num = Math.round((num + Number.EPSILON) * 100) / 100;
    return num;
}