const fs = require('fs');
fs.readFile('server.js ','utf8',(err,data) =>
{
    if(err)
    {
        console.log("error reading file:",err);
        return ;
    }
    console.log("file content:");
    console.log(data);

});