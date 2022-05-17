const express = require("express");

const PORT = 5000;

const app = express();
app.use(express.json); // 요청바디를 파싱하기 위해 내장 BodyParser를 사용

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.listen(PORT);

console.log(`Running on port ${PORT}`);