const postData = require("../storage/post");

class PostTask {
    constructor() {
        this.postData = postData;
    }

    getAllPosts = () => {
        if (this.postData.length === 0) throw new Error(`Нет постов`);
        else return this.postData;
    }
    getPostById = (id) => {
        const filtredData = this.postData.filter((key) => key.id === +id);
        if (this.postData.id != id || !id) throw new Error('Your posts not founded');
        return filtredData;
    }
    postNewArg = (arg) => {
        if (!arg) throw new Error(`Your argumnet is`)
        this.postData.push(arg);
        return this.postData;
    }
    updatePostById = (id, postFromClient) => {
        const filtredData = this.postData.filter((key) => key.id != id);
        if (filtredData.length === this.postData.length) throw new Error(`Not Found`);
        filtredData.push({
            ...id,
            ...postFromClient
        })
        return filtredData;
    }
    deleteById = (id) => {
        const filtredData = this.postData.filter((key) => key.id != +id);
        return filtredData;
    }
}

module.exports = PostTask;