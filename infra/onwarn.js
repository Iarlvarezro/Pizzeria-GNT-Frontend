export function onwarn(warning, warn) {
    if (warning.code === 'EVAL') {
        return;
    }
    warn(warning);
}