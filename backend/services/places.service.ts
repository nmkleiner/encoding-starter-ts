import DBService from './DB.service';

interface Criteria {
    name: string;
}

function query() {
    // @ts-ignore
    // const namePart: string = !!criteria.name? criteria.name : '';
    const command: string = `SELECT * FROM places`;

    return DBService.runSQL(command);
}

export default {
    query,
};
