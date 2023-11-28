const fastify = require("fastify")
const app = fastify()
const connectDB = require("./db")

connectDB();

// app.get("/", yourRouteHandler);
// app.get("/second", Second);

app.get('/', function (request, reply) {
  reply.send("Our first route")
})

// Listen to the server on a specific port
app.listen(3000, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log("Running on port 3000!!");
});