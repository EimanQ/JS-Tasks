const {
    createEnvironmentDB
} = require("./environment.repository");

const postNewBody = async (body) => {
    const value = await createEnvironmentDB(body);
    return value
}

module.exports = {
    postNewBody
};