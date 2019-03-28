import DBService from './DB.service';

function query(filter: string) {
    console.log('filter',filter);
    filter = filter === undefined? '' : filter;
    const command: string = `SELECT * FROM places WHERE title LIKE '%${filter}%' or description like '%${filter}%'`;
    return DBService.runSQL(command);
}

export default {
    query,
};
