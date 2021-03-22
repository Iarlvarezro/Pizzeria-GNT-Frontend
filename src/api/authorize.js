export function authorize(){
    const access_token = localStorage.getItem('access_token')
    if(access_token){
        return {
            headers: {
                Authorization: "Bearer access_token"
            }
        }
    }
}
