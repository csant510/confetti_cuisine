const express = require("express"),
    app = express();

app.set("port", process.env.Port || 3000);

app.get("/", (req, res) => {
    res.send("Welcome To Confettii Cusine!")
});







app.listen(app.get("port"), () => {
    console.log(`Server running at http://localhost:${app.get("port")}`);
});
