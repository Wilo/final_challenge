import app from "./app";
import { sequelize } from './database/config';
import { swaggerDocs } from './swagger';

const PORT: number = 8000;

const main = async (): Promise<void> =>
{
    try
    {
        await sequelize.sync( { alter: true } );
        app.listen( PORT, (): void =>
        {
            console.log( `listening port ${ PORT }` );
            swaggerDocs( app, PORT );
        } );
    } catch ( error )
    {
        console.error( 'Unable to connect to the database:', error );
    }
}

main();