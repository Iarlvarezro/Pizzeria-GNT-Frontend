import React from 'react';
import ReactDOMServer from 'react-dom/server.js';
import { before, after } from './partials.js';

export async function render(req, res, Component, page) {
    res.write(before(page));
    let props = {};
    if (Component.getData) {
        props = await Component.getData(req.params, req.query);
    }
    const content = ReactDOMServer.renderToNodeStream(<Component {...props} />);
    content.pipe(res, { end: false });
    content.on('end', () => {
        res.end(after(page, props));
    });
}