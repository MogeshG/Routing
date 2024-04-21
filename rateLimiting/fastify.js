import Fastify from "fastify";
// import fastifyRateLimit from "@fastify/rate-limit";

const fastify = Fastify();

await fastify.register(import('@fastify/rate-limit'),{
    max: 10,
    timeWindow: '1 minute'
});

fastify.get('/home', (req, res)=> {
    res.send("Home");
});

fastify.get('/dashboard', (req,res) => {
    res.send("Dashboard");
});

fastify.listen({ port: 8080 } ,(err, address) => {
    if(err)
        console.log(err);
    else    
        console.log("Server running at "+address+"/home");
});

// import Fastify from 'fastify'

// const fastify = Fastify()
// await fastify.register(import('@fastify/rate-limit'), {
//   max: 100,
//   timeWindow: '1 minute'
// })

// fastify.get('/', (request, reply) => {
//   reply.send({ hello: 'world' })
// })

// fastify.listen({ port: 3000 }, err => {
//   if (err) throw err
//   console.log('Server listening at http://localhost:3000')
// })