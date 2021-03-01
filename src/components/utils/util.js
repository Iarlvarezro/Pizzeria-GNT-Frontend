
export function isEsc(ev) {
    const { key, keyCode } = ev;
    return key === 'Escape' || key === "Esc" || keyCode === 27;
}


export function isClick(ev) {
    const { key, keyCode } = ev;
    return key === 'Space' || keyCode === 32 || key === "Enter" || keyCode === 13 ;
}