const express = require("express");
const siteRoutes = require("./routes/siteRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Up and Running on ${PORT}`));

app.use("/api", siteRoutes);
