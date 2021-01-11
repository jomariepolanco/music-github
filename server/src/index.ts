import "reflect-metadata";
import * as createError from 'http-errors'
import * as express from 'express'
import * as cookieParser from 'cookie-parser'
import * as logger from 'morgan'
import {createConnection} from "typeorm";
import {Routes} from './routes'


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

const http = express()

http.use(logger('dev'));
http.use(express.json());
http.use(express.urlencoded({ extended: false }));
http.use(cookieParser());
http.set('view engine', 'html');

http.listen(8888, () => {
    console.log("listening at http://localhost:8888")
});

  
http.get('/', (req: express.Request, res: express.Response) => {
    res.send('Hello World')
});