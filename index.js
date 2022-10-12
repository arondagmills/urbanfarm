const express = require("express");
const path = require("path");

const app = express();

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.set("views", "./views");

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/homepage", (req, res) => {
	res.send("Homepage! hello world.");
});

app.get("/login", (req, res) => {
	res.send("Register here please.");
});

app.get("/register/ :name", (req, res) => {
	res.send("hello" + req.params.name);
});

app.get("/queryparams", (req, res) => {
	res.send("my query params are: " + req.query.class + " and " + req.query.cohort);
});

app.get("/", (req, res) => {
	res.sendFile(__dirname + "/views/About_us.html");
});

app.get("/register", (req, res) => {
	res.sendFile(__dirname + "/views/Register.html");
});

app.post("/register", (req, res) => {
	console.log(req.body);
	res.redirect;
	("/");
});

app.get("/home", (req, res) => {
	res.sendFile(__dirname + "/views/Home.html");
});

app.post("/home", (req, res) => {
	console.log(req.body);
	res.redirect;
	("/");
});

app.get("/layout", (req, res) => {
	res.render("navbar");
});

app.post("/layout", (req, res) => {
	console.log(req.body);
	res.redirect;
	("/");
});

app.listen(2000, () => console.log("Urban Farm login page"));
