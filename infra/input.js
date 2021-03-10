import fg from 'fast-glob';
import mm from 'micromatch';

export function getEntries() {
    const input = {};
    const pattern = 'src/pages/*/index.js';
    const files = fg.sync(pattern);
    for (let file of files) {
      const [name] = mm.capture(pattern, file);
      input[name] = file;
    }
    return input;
}

export function getServerEntries(){
    const input = {};
    const pattern = 'src/pages/*/page.js';
    const files = fg.sync(pattern);
    for (let file of files) {
        const [name] = mm.capture(pattern, file);
        input[name] = file;
    }
    return input;
}

export function getVirtualEntries(input){
    return Object.keys(input).reduce((entries, page) => {
        entries[page] = `
            import ReactDOM from 'react-dom';
            import React from 'react';
            import Component from '${input[page]}';
            const app = document.getElementById('app');
            ReactDOM.hydrate(React.createElement(Component, window._props_), app);
        `;
        return entries;
    }, {});
}
export function getVirtualInput(input){
    return Object.keys(input).reduce((input, page) => {
        input[page] = page;
        return input
    },{})
}

export function getInput(){
    const input = getEntries();
    return {
        input: getServerEntries(),
        virtualInput: getVirtualInput(input),
        virtualEntries: getVirtualEntries(input)
    }
}