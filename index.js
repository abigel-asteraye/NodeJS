const http= require('http');
const path= require('path');
const fs= require('fs');


//Creating the server object
const server = http.createServer((req,res) => {
    if (req.url =='/'){
        fs.readFile(
            path.join(__dirname,'reference','public', 'index.html'), 
            (err, content) => {
                if (err) throw err;
                res.writeHead(200, { 'Content-Type': 'text/html'});
                res.end(content);  
    }
  );
}
    

    if(req.url === '/api/users'){
        const users= [
        {name: 'Boby Smith', age: 35},
        {name: 'Abby Doe', age:45}
    ];
    res.writeHead(200, { 'Content-Type': 'application/json'});
        res.end(JSON.stringify(users));       
    }
});
const PORT = process.env.PORT || 5000;

server.listen(PORT,()=> console.log(`Server running on port ${PORT}`));
