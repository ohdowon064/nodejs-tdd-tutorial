const express = require("express");
const productRouter = require("./routes/product");

const PORT = 3000;
const app = express();

app.use(express.json());
app.use("/api/products", productRouter);

app.get("/", (req, res) => {
    res.send("Hello World");
});


app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})    