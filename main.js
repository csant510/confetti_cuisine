const express = require("express"),
    app = express();

app.set("port", process.env.Port || 3000);
app.use(express.urlencoded({
    extended: false
    })
);
app.use(express.json());

const layouts = require("express-ejs-layouts");
app.set("view engine", "ejs");
app.use(layouts);

//controllers
const homeController = require("./controllers/homeController");

app.get("/", (req, res) => {
    res.send("Welcome To Confettii Cusine!")
});

//routes
app.get("/courses", homeController.showCourses);
app.get("/contact", homeController.showSignUp);
app.post("/contact", homeController.postedSignUpForm);




app.listen(app.get("port"), () => {
    console.log(`Server running at http://localhost:${app.get("port")}`);
});
