// getdata(1,()=>{
//     getdata(2,()=>{
//         getdata(3,()=>{
//             getdata(4,()=>{
//                 getdata(5,()=>{
                    
//                 })
//             })
//         })
//     })
// })



function getdata(id,callback){
    setTimeout(()=>{
        console.log(`data is fetched for id ${id}`);
        callback();
    },1000) 
}
    