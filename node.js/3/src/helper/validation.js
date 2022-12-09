const validationKey = (request, response, next) => {
    if (!request.body.hasOwnProperty(`user_id`) && !request.body.hasOwnProperty(`img`)) throw new Error(`Arr of obj has no property`);
    next()
}

const validationEmail = (request, response, next) => {
    if (!/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(request.body.email)) throw new Error(`Your email incorrect`);
    next();
}

module.exports = {
    validationKey,
    validationEmail
};