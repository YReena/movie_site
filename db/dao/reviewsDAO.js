const mongodb = require("mongodb");

const ObjectId = mongodb.ObjectId;

   const injectDB = async (conn)=> {
        if (reviews) {
            return
        }
        try {
            reviews = await conn.db("reviews").collection("reviews")
        }
        catch (e) {
            console.log(`Unable to establish collection handle in userDAO:${e}`)
        }
    }
module.exports.injectDB = injectDB;

const addReview = async (movieId, user, review)=> {
        try {
            const reviewDoc = {
                movieId: movieId,
                user: user,
                review: review
            }
            return await review.inserOne(reviewDoc)
        }
        catch (e) {
            console.error(`unable to post review${e}`)
            return { error: e }
        }
    }
module.exports.addReview = addReview;
    

    const getReview= async (reviewId)=> {
        try {
            return await review.findOne({ _id: ObjectId })
        } catch (e) {
            console.error(`unable to get review:${e}`)
        }
    }

    module.exports.getReview = getReview;

    const updateReview= async(reviewId, user, review)=> {
        console.log("rev", reviewId)
        try {
            const updateResponse = await review.updateOne({ _id: ObjectId },
                { $set: { user: user, review: review } }
            )
            return updateResponse
        }
        catch (e) {
            console.error(`unable to update review: ${e}`)
        }
    }
module.exports.updateReview = updateReview;

    const deleteReview= async (reviewId)=> {
        try {
            const deleteResponse = await reviews.deleteOne({
                _id: ObjectId(reviewId),
            })
            return deleteResponse
        }
         catch(e) {
         console.error(`unable to delete review:${e}`)
         return {error:e}
    }
}
module.exports.deleteReview = deleteReview;


const getReviewsByMovieId= async(movieId)=>{
    try{
        const cursor = await reviews.find({movieId:parseInt(movieId)})
        return cursor.toArray()
    }catch(e){
        console.error(`unable to get review:${e}`)
        return {error:e}
    }
}

module.exports.getReviewsByMovieId = getReviewsByMovieId;

