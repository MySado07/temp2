var Express = require('express');
var app = Express();

app.get("/", (req,res) =>{
    res.setHeader("Content-Type", "text/plain");
    res.write(req.url);
    res.end();
})

app.get("/getNames", (req,res) => {
    res.setHeader('Content-Type', 'text/plain');
    res.write("Hii!");
    res.write("hiii");
    res.end();
})


app.listen(process.env.PORT);
