import "reflect-metadata";
import * as createError from 'http-errors'
import * as express from 'express'
import * as cookieParser from 'cookie-parser'
import * as logger from 'morgan'
import * as cors from 'cors'
import * as querystring from 'querystring'
import * as request from 'request'
import {createConnection} from "typeorm";
import {Routes} from './routes'
import e = require("express");


createConnection().then(async connection => {

    const app = express();
    const port = 8080;

    app.use(logger('dev'));
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(cookieParser());
    app.set('view engine', 'html');

    Routes.forEach(r => {
        app[r.method](r.route, (req: express.Request, res: express.Response, next: express.NextFunction) => {
            const data = (new (r.controller as any))[r.action](req, res, next)
            if (data instanceof Promise){
                data.then(d => res.send(d))
            } else if (data !== null && data !== undefined){
                data.json()
            }
        })
    })

    // catch 404 and forward to error handler
    app.use(function (req: express.Request, res: express.Response, next: express.NextFunction) {
        next(createError(404));
    });
  
    // error handler
    app.use(function (err: Error, req: express.Request, res: express.Response, next: express.NextFunction) {
        // set locals, only providing error in development
        res.locals.message = err.message;
        res.locals.error = req.app.get('env') === 'development' ? err : {};
  
        res.status(500);
        res.json({
            message: err.message,
            error: err,
        });
    });

    app.listen(port, () => {
        console.log(`Listening at http://localhost:${port}`);
      });

}).catch(error => console.log(error));

//Spotify
const http = express()

const client_id =  '148844e9632d496597bcac8fc1259fff'; 
const client_secret = '40957a5a4653421aa8a223740cf06452'; 
const redirect_uri = 'http://localhost:8888';

const authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    headers: {
        'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
    },
    form: {
        grant_type: 'client_credentials'
    },
    json: true
}

request.post(authOptions, function(error, response, body){
    if (!error && response.statusCode === 200){
        const token = body.access_token
        const options = {
            url: 'https://api.spotify.com/v1/users/jmperezperez',
            headers: {
                'Authorization': 'Bearer ' + token
            },
            json: true
        }
        request.get(options, function(error, response, body){
            console.log(body)
        })
    }
})

http.listen(8888, () => {
    console.log("listening at http://localhost:8888")
});

  
http.get('/', (req: express.Request, res: express.Response) => {
    res.send('Hello World')
});