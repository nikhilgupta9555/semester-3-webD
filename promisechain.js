Getdata(1).then((res)=>{
    return getdata(2)
}).then((res)=>{
    return getdata(3)
}       ).then((res)=>{
    return getdata(4)
}    ).then((res)=>{
     console.log("All data fetched");
})