const asyncHandler= (requestHandler)=>{
    (req,res,next)=>{
        Promise.resolve(requestHandler(req,res,next)).catch((err)=>next(err))
    }
}  


// -----------------------------------------------THis is first Method of Promises--------------------------------



// -----------------------------------------THis is Second  Method of try and catch--------------------------------



// const asyncHandler=()=>{}                    // Now Showing How we can write Super Order Function

// const asyncHandler =()=>{()=>{}} //           Here We can Remove Curly Brackets to make it super orderfunc

// const asyncHandler =()=>()=>{}                  // Given is the format of super order function//





//  const asyncHandler =(fn)=>async(req,res,next)=>{

//     try {
//         await fn(req,res,next)

        
//     } catch (err) {
//         res.status(err.code||400).json({
//             success:false,
//             message:err.message
//         })
        
//     }
//  }



 export default asyncHandler


