const os= require("os");

//Platform: Mac(darwin), windows, linux
console.log(os.platform());

//CPU Architectire
console.log(os.arch());

//CPU Core Info
console.log(os.cpus());

// Free Memory
console.log(os.freemem());

//Total memory
console.log(os.totalmem());

//Home Dir
console.log(os.homedir());

//Uptime
console.log(os.uptime());
