import express from "express";

const app = express();
const port = 3000;

//setting the engine
app.set("view engine", "ejs");

//set the middleware

app.use(express.urlencoded({ extended: true })); // to be able to read data sent in the form
app.use(express.static("public")) // to find static items 


//in Memory "Database"
let recipes =[];


 app.get("/",  (req, res) =>{
    res.render("index", {recipes});
 });

 app.get("/new", (req, res) =>{
    res.render("new");
 ;});

 app.get("/post", (req, res) =>{
      res.render("index", {recipes});
 });

app.post("/new", (req, res) => {
    const { title, ingredients, instructions, author } = req.body; 

    recipes.push({ title, ingredients, instructions, author });

    // Render the post page with the submitted data
    res.redirect("/");
});


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
