const express = require("express");
const app = express();
const connect = require("./db/connect");
const PORT = process.env.PORT || 3000; // http://localhost:3000
const cors = require("cors");
connect();


app.use(express.json());
app.use(cors())


app.get("/", (req, res) => {
  res.send("Hello World!");
}
);

app.get("/ahoj", (req, res) => { // http://localhost:3000/ahoj
  res.send("Ahoj");
}
);

app.get("/ahojky", (req, res) => { // http://localhost:3000/ahoj
  res.send("Ahoj2");
}
);
app.get("/ahojky3", (req, res) => { // http://localhost:3000/ahoj
  res.send("Pavel je bůh");
}
);

// this route creates a random person from person.schema.js

app.post("/person", async (req, res) => { // http://localhost:3000/person
  const Person = require("./schema/person.schema");
  //const person = await Person.create(req.body);
  const justCreatePerson = await Person.create(req.body);

  res.status(201).json(justCreatePerson);
}
);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}
);


