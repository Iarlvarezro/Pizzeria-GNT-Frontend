const errorStrategies = {
    401: () => location.replace('/login'),
    403: () => location.replace('/login'),
    404: () => location.replace('/not-found'),
    500: () => location.replace('/unexpected-error'),
}

export async function apiCall(cb, ...args) {
    try {
        const resp = await cb(...args);
        return resp;
    } catch (err) {
        console.error(err);
        const code = err.code || 500;
        const strategy = errorStrategies[code];
        if(strategy) {
            return strategy();
        }
        throw err;
    }
}