const express = require("express");
const mongoose = require("mongoose");
const app = express();
const config = require("config");

// add body parser
app.use(express.json());

app.use("/api/blogs", require("./routes/api/blogs"));
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/videos", require("./routes/api/videos"));
app.use("/api/links", require("./routes/api/links"));

const db = config.get("mongoURI");

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(() => console.log("MongoDB connected..."))
  .catch(err => console.log(err));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));
