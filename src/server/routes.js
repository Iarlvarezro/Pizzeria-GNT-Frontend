import path from 'path';
import fg from 'fast-glob';
import mm from 'micromatch';
import { render } from './render';

function getPages(){
    const pattern = 'src/pages/*/index.js';
    const files = fg.sync(pattern);
    return files.map((file) => {
        const [name] = mm.capture(pattern, file);
        return name; 
    })
}

async function setupRoute(app, page){
    const componentPath = path.join(process.cwd(), 'build', `${page}.js`);
    const Component = await import(`file://${componentPath}`).then((mod) => mod.default);
    app.get(Component.route, (req, res) => {
        render(req, res, Component, page);
    });
}

export async function loadRoutes(app){
    const setupRoutes = getPages().map((page) => setupRoute(app, page));
    await Promise.all(setupRoutes);
}