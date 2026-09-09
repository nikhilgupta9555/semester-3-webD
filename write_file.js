const f =require("fs");
console.log("Nikhil");
console.log("Nishant");
f.writeFile("nikhil.txt","hello nikhil","utf -8 ")
.then(console.log("file is created")    )
.catch((err) => console.log("error is ", err));{
    console.log("error is ", err);

}