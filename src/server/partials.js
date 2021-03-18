export function before(page){
return `
    <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Pizza Generation</title>
            <link rel="modulepreload" href="/dist/${page}.js" />
            <link rel="shortcut icon" type="image/jpg" href="https://iconarchive.com/download/i99744/sonya/swarm/Pizza.ico"/>
        </head>
        <body>
            <div id="app">`;
}

export function after(page, props){
    return `</div>
    <script>window._props_ = ${JSON.stringify(props)}</script>
    <script src="/dist/${page}.js" type="module"></script>
    </body></html>`;
}