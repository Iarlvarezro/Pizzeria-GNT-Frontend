import 'cross-fetch/polyfill';
import express from 'express';
import {loadRoutes} from './server/routes.js'
import {registerController} from './server/user'
import cookieParser from 'cookie-parser';

const PORT = 8081;

(async function() {
    const app = express();
    app.use(express.static('public'));
    app.use(cookieParser())
    await loadRoutes(app);
    registerController(app)
    app.listen(PORT, () => {
        console.log(`server listening on http://localhost:${PORT}`);
    });
}())