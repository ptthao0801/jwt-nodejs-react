import express from 'express';

/**
 * 
 * @param {any} app - express app
 */
const configViewEngine = (app) => {
    app.use(express.static('./src/public'))
    // noi cho express biet la dung HTML thong qua view engine ten ejs
    app.set('view engine', 'ejs');
    app.set('views','./src/views')

}

export default configViewEngine;