import express from "express";

const app = express();

app.get('/', (req, res) => {
    res.send("Hiiiii");
});

app.post('/', (req,res) => {
    const data = req.header.name;
    console.log("Greetings From server.... Hiiiii "+data);
    res.end();
})



app.listen(8080);