const {
    createUserDB, updateUserDB, delteUserDB, getAllStudentsDB
} = require("./user.repository")

const getAllStudents = async () => {
    const gotAllStudentsDB = await getAllStudentsDB();
    
    return gotAllStudentsDB;
}

const createUser = async (name, surname, birth, city, age) => {
    const createdUserDB = await createUserDB(name, surname, birth, city, age);
    return createdUserDB
}

const updateUser = async (id, infoID, body) => {
    const updatedUserDB = await updateUserDB(id, infoID, body);

    // console.log(updatedUserDB);
    // if(!updatedUserDB.length) throw new Error(`Student not found`)
    return updatedUserDB;
}

const deleteUser = async (id, infoID) => {
    const deletedUserDB = await delteUserDB(id, infoID);

    return deletedUserDB
}

module.exports = {
    getAllStudents, createUser, updateUser, deleteUser
}