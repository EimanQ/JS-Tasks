const app = require("./src/app");
const port = 3666;


app.listen(port, () => {
    console.log(`Server ${port} is running`);
})