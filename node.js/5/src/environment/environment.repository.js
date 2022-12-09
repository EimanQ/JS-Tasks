const {
    pool
} = require("../db")

const createEnvironmentDB = async (environment) => {
    const client = await pool.connect();
    const sql = 'INSERT INTO environment {label, category, priority} VALUES{$1, $2, $3} RETURNING environment.*';
    const arrOfVal = await client.query(sql, [environment.label, environment.category, environment.priority])
    return arrOfVal;
};

module.exports = {
    createEnvironmentDB
}