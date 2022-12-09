const {
    pool
} = require("../db")

const getAllStudentsDB = async () => {
    const client = await pool.connect();

    const sqlSelectAll = `SELECT * FROM students as S
    JOIN students_info as SI ON SI.id = S.info_id`;
    const objAllSelect = (await client.query(sqlSelectAll)).rows

    return objAllSelect;
}


const createUserDB = async (name, surname, birth, city, age) => {
    const client = await pool.connect();

    try {
        await client.query('BEGIN')

        const sqlStudentsInfo = `INSERT into students_info (birth, city, age)
        VALUES($1, $2, $3)
        RETURNING students_info.*`;
        const objStudentsInfo = (await client.query(sqlStudentsInfo, [birth, city, age])).rows[0]

        const sqlStudents = `INSERT into students (name, surname, info_id)
        VALUES($1, $2, $3)
        RETURNING students.*`;
        const objStudent = (await client.query(sqlStudents, [name, surname, objStudentsInfo.id])).rows;

        await client.query('COMMIT')
        return objStudent

    } catch (error) {

        client.query('ROLLBACK')
        console.log(error.message);
    }

}

const updateUserDB = async (id, infoID, body) => {
    const client = await pool.connect();
    try {
        await client.query(`BEGIN`)

        const sqlSelectItemsTables = `SELECT S.name, S.surname, S.id, SI.birth, SI.city, SI.age, SI.id AS info_id 
        FROM students as S
        JOIN students_info as SI on SI.ID = S.info_id
        WHERE SI.id = $1`;
        const objSelectInfo = (await client.query(sqlSelectItemsTables, [infoID])).rows[0];

        if (!objSelectInfo.length) throw new Error(`Student not founded in DataBase`);

        const dbInfoObj = [...sqlSelectItemsTables, ...body];

        const sqlUpdateInfo = `UPDATE into students_info SET birth = $1, city = $2, age = $3 
        WHERE students_info.id = $4`

        await client.query(sqlUpdateInfo, [dbInfoObj.birth, dbInfoObj.city, dbInfoObj.age, dbInfoObj.id]);

        const sqlUpdateStudents = `UPDATE into students SET name = $1, surname = $2
        WHERE students.id = $3`

        await client.query(sqlUpdateStudents, [dbInfoObj.name, dbInfoObj.surname, dbInfoObj.id])

        const sqlResult = `SELECT S.id, S.name, S.surname,  SI.birth, SI.city, SI.age
        FROM students as S
        JOIN students_info as SI on SI.id = S.info_id 
        WHERE S.id = $1`

        const result = (await client.query(sqlResult, [id])).rows

        await client.query(`COMMIT`)

        return result
    } catch (error) {

        await client.query(`ROLLBACK`);
        console.log(error.message);
    }

}

const delteUserDB = async (id, infoID) => {
    const client = await pool.connect();

    try {
        await client.query('BEGIN');

        const sqlDeleteStudentsInfo = `DELETE from students_info 
        WHERE id = $1`;
        await client.query(sqlDeleteStudentsInfo, [infoID]);

        const sqlDeleteStudents = `DELETE from students 
        WHERE id = $1`;
        await client.query(sqlDeleteStudents, [id]);

        const sqlSelect = `SELECT S.id, S.name, S.surname,  SI.birth, SI.city, SI.age
        FROM students as S
        JOIN students_info as SI on SI.id = S.info_id
        WHERE S.id = $1`
        const result = (await client.query(sqlSelect)).rows;

        await client.query(`COMMIT`)
        if(!result.length > 0) throw new Error(`Result is empty`);

        return result
    } catch (error) {

        await client.query(`ROLLBACK`)
        console.log(error.message);
    }
}


module.exports = {
    getAllStudentsDB,
    createUserDB,
    updateUserDB,
    delteUserDB
}