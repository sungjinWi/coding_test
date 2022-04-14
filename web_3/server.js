const express = require("express");
const Router = require("router");
const PORT = 3000;
const HOST = "127.0.0.1";

const app = express();
const router = Router();

app.use("/getCookie",router);

router.get("/",(req, res)=>res.json({Token: true}));


app.listen(PORT, HOST, () => console.log(`listening to ${HOST}:${PORT}`));