export const authorize = (req, res, next) => {
    const {session} = req.cookies;
    const authorized = session
    if(!authorized){
        res.redirect('/login');
    } else {
        next();
    }
}