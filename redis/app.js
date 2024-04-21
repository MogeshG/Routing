import express from "express";
import redis from "redis";
import cors from "cors";
import axios from "axios";

const client = redis.createClient({
    legacyMode:true
});

const default_Exp =3600; //3600s = 1 Hr

client.connect();

const app =express();

app.use(cors());

app.get('/', async(req, res) => {
    const albumId = req.query.albumId;
    client.get(`albumId:${albumId}`,async (err, photo)=> {
        if(err) console.log(err)
        if(photo != null){
            return res.json(JSON.parse(photo));
        }
    else{
        const { data } = await axios.get("https://jsonplaceholder.typicode.com/photos", { params: {albumId} });
        client.setEx(`albumId:${albumId}`, default_Exp, JSON.stringify(data));
        res.json(data);
    }
    })
});

app.listen(8080, (err, data) => {
    if(err)
        console.log(err)
    console.log("server running at http://localhost:8080")
});