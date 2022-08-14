const app = require("./src/app");
const port = 8002;

app.listen(port, () => {
    console.log(`Server ${port} is RUNNING :)`);
})