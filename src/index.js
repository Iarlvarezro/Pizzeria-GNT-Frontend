import 'cross-fetch/polyfill';
import express from 'express';
import {loadRoutes} from './server/routes.js'

const PORT = 8081;

(async function() {
    const app = express();
    app.use(express.static('public'));
    await loadRoutes(app);
    app.listen(PORT, () => {
        console.log(`server listening on http://localhost:${PORT}`);
    });
}())