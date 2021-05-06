export function authorize(access_token) {
    if (!access_token) {
        access_token = localStorage.getItem('access_token')
        if (access_token) {
            return {
                headers: {
                    Authorization: `Bearer ${access_token}`
                }
            }
        }
    }
    return {
        headers: {
            Authorization: `Bearer ${access_token}`
        }
    }

}
