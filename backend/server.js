const express = require("express");
const router = require("./routes/auth-routes");

const app = express();
const port = 3000;

// ? we won't be needing app.get() walay routes as now routes are defined in routes folder and here used as middleware
app.use('/api/auth', router);

app.listen(port, ()=>{
    console.log(`server running at ${port}`);
    
})