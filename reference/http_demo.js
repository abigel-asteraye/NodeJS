const http= require('http');

//Creating a server object
http.createServer((req, res) => {
    //Write response
    res.write('Writing into the response');
    res.end();
})
.listen(5000, () => console.log('Server running....'));
