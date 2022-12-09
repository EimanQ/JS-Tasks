const app = require("./src/app");
const port = 3666;

app.listen(port, () => {
    console.log(`Сервер успешно запущен на порте ${port}`);
})