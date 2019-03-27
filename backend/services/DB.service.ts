// @ts-ignore
import mysql from 'mysql';

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '770770',
    database: 'radar_db',
    insecureAuth: true,
});

connection.connect((err: boolean) => {
    if (err) {
        throw new Error('mySql failed connection');
    }
    console.log('connected to SQL server');
});


function runSQL(query: string) {
    return new Promise((resolve, reject) => {
        connection.query(query, (error: boolean, results: [], fields: []) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
            // // not entirely clear on whether connection.end() should be called here or not.
            // // Leaning towards not.
            // connection.end();
        });
    });
}

export default {
    runSQL,
};
