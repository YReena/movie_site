const {ReviewsDAO} =  require('../db/dao/reviewsDAO');


const apiPostReview = async (req, res, next) => {
    try {
        const movieId = req.body.movieId
        const review = req.body.review
        const user = req.body.user

        const reviewResponse = await ReviewsDAO.addReview(
            movieId,
            user,
            review
        )
        res.json({ status: "success" })
    }
    catch (e) {
        res.status(500).json({ error: e.message })
    }
}

module.exports.apiPostReview = apiPostReview;

const apiGetReview = async (req, res, next) => {
    try {
        let id = req.params.id || {}
        let review = await ReviewsDAO.getReview(id)
        if (!review) {
            res.status(404).json({ error: "Not Found" })
            return
        }
        res.json(review)
    } catch (err) {
        console.log(`api,${err}`)
        res.status(500).json({ error: e })
    }

}
module.exports.apiGetReview = apiGetReview;

const apiUpdateReview = async (req, res, next) => {
    try {
        const reviewId = req.params.id
        const review = req.body.review
        const user = req.body.user

        const reviewResponse = await ReviewsDAO.updateReview(
            reviewId,
            user,
            review
        )
        var { error } = reviewResponse
        if (error) {
            res.status(400).json({ error })
        }
        if (reviewResponse.modifiedCount === 0) {
            throw new Error("unable to update review",)
        }
        res.json({ status: "success" })
    }
    catch (e) {
        res.status(500).json({ error: e.message })
    }
}

module.exports.apiUpdateReview = apiUpdateReview;


const apiDeleteReview = async (req, res, next) => {
    try {
        const reviewId = req.params.id
        const reviewResponse = await ReviewsDAO.deleteReview(reviewId)
        res.json({ status: "success" })
    }
    catch (err) {
        res.status(500).json({ error: err.message })
    }
}

module.exports.apiDeleteReview = apiDeleteReview;

const apiGetReviews = async (req, res, next) => {
    try {
        let id = req.params.id || {}
        let review = await ReviewsDAO.getReviewsByMovieId(id)
        if (!review) {
            res.status(404).json({ error: "Not Found" })
            return
        }
        res.json(review)
    } catch (err) {
        console.log(`api,${err}`)
        res.status(500).json({ error: e })
    }

}
module.exports.apiGetReviews = apiGetReviews;
