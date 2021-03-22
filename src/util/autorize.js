import {urlUser,resolveUrl,api} from '../api/api'
async function getSession(session){
    const url = resolveUrl(`session/${session}`,urlUser)
    return await api(url).get()
}
export const authorize = async (req, res, next) => {
    const {session} = req.cookies;
    const authorized = session;
    if(!authorized){
        res.redirect('/login');
    } else {
        req.session = await getSession(session);
        next();
    }
}