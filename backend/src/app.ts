import compression from 'compression';
import cors from 'cors';
import express from "express";
import healthRoutes from './routes/health.routes';
import morgan from 'morgan';

const app: express.Application = express();

// middlewares
app.use( compression() );
app.use( morgan( 'dev' ) );
app.use( express.json() );
app.use( cors() );

// routes
app.get( '/', ( _req: express.Request, res: express.Response ): void =>
{
    res.redirect( '/api/docs' );
} );
app.get( '/api', ( _req: express.Request, res: express.Response ): void =>
{
    res.redirect( '/api/docs' );
} );
app.use( '/api/health', healthRoutes );

export default app;