import express from "express";

const app = express();

const roles = ["ADMIN"];

const users = [
    {id:1, name: "User", role: "BASIC"},
    {id:2, name: "Admin", role: "ADMIN"},
];

const authUser = (req, res, next) => {
    const id = parseInt(req.headers.id);
    const user = users.find((user) => user.id === id);
    if(!user){
        return res.status(401).send("Please sign in");
    }
    next();
};

const authRole = (req, res, next) => {
    const role = req.headers.role;
    if(!(role && roles.includes(role))) {
        return res.status(401).send("You are not permitted to enter");
    }
    next();
};

app.get('/', authUser, (req, res) => {
    const user = users.find((user) => user.id === parseInt(req.headers.id));
    res.send(user);
});

app.get('/dashboard', (req, res) => {
    res.send("Dashboard");
});

app.get('/admin', [authUser, authRole], (req, res) => {
    res.send(users);
});

app.listen(8080, (err) => {
    if(err)
        console.log(err);
    else    
        console.log("http://127.0.0.1:8080");
});
