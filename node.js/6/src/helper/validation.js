const validatePatch = (request, response, next) => {
    const {birth} = request.body;
    console.log(birth);
    if(!/^[0-9]+\-[0-9]+\-[0-9]+/g.test(birth)) throw new Error(`Incorrect birth`)

    next()
}

module.exports = {validatePatch}