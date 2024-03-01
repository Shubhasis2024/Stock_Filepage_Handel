const link= require("http");
const fs=require("fs");
const port=process.env.PORT||5500;


const server= link.createServer((req,res)=>{
    res.statusCode=200;
    res.setHeader('content-Type','text/html')
    if(req.url=='/'){
        res.statusCode=200;
        res.end('<h1>This is a Webpage </h1><p1>This is a Backend Nodejs use webpage for Parctice </p1>');
    }
    else if(req.url=='/about'){
        res.statusCode=200;
        res.end('<h1>This is a Webpage </h1><p1>This is the webpage about  </p1>');
    }
    else if(req.url=='/data'){
        const data=fs.readFileSync('index.html');
        res.end(data.toString());
    }
    else{
        res.statusCode=404;
        res.end('<h1>Thi page is not found</h1><p1>This is the webpage   </p1>');
    }
})

server.listen(port,()=>{
    console.log(`Server is listening port ${port}`);
});