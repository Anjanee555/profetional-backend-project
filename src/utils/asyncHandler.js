const asyncHandler = (requestHandler) => {
    return (req,res,next) => {
        Promise.resolve(requestHandler(req,res,next)).
        catch((err) => next(err))
    }
}



export {asyncHandler}


// const asyncHandler = ()  => {}
// const asyncHandler = (func) => () => {}
// const asyncHandler = (func) => async() => {}



// const asyncHandler = () => async(req,res,next) => {
//     try {
//         await fn(req,res,next)
//     } catch (error) {
//         res,statsus(error.code || 404).json({
//             success: false,
//             message: err.message
//         })
//     }
// }