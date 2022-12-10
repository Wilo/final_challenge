import express from 'express';
/// Health controller
export const getHealth = ( _req: express.Request, res: express.Response ): void =>
{
    res.setHeader( 'Content-Type', 'application/json' );
    res.setHeader( 'Cache-Control', 'no-cache' );
    res.json( { status: "available" } );
}