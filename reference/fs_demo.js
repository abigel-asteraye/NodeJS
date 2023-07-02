const fs= require("fs");
const path= require("path");

//create folder
// fs.mkdir(path.join(__dirname, '/test'),{},err=>{
//     if (err) throw err;
//     console.log("Folder created...");

// });

//Create files and write to them
// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'),"Hello this is my first file that im writing",err=>{
//     if (err) throw err;
//     console.log("Folder created...");

//     // Adding to the file created
//     fs.appendFile(path.join(__dirname, '/test', 'hello.txt'),"I love node JS",err=>{
//         if (err) throw err;
//         console.log("File written to created...");
//     });
// });

// // Read file
// fs.readFile(path.join(__dirname, '/test', 'hello.txt'),'utf8',(err,data)=>{
//     if (err) throw err;
//     console.log(data);
// });

// Rename a file
fs.rename(path.join(__dirname, '/test', 'hello.txt'),path.join(__dirname, '/test', 'non-hello.txt'),(err,data)=>{
    if (err) throw err;
    console.log("File sucessfully rename!!!");
});

