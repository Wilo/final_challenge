import { Sequelize } from "sequelize-typescript";

const databaseName: string = process.env.DATABASE || 'final-challenge';
const userName: string = process.env.DBUSERNAME || 'userLocalDev';
const dbPassword: string = process.env.DBPASSWORD || 'passwordLocalDev';
const dbHost: string = process.env.DBHOST || 'localhost';
const dbPort: number = Number( process.env.DBPORT ) || 5432;

export const sequelize: Sequelize = new Sequelize(
    databaseName,
    userName,
    dbPassword,
    {
        host: dbHost,
        port: dbPort,
        dialect: 'postgres',
    }
);