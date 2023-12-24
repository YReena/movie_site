const express = require("express");

const {apiGetReviews,apiPostReview,apiGetReview,apiUpdateReview,apiDeleteReview} = require('../controllers/reviews.controller');
const router = express.Router();

router.get("/movie/:id", apiGetReviews)
router.post("/new", apiPostReview)
router.get("/:id", apiGetReview)
router.post("/:id", apiUpdateReview);
router.delete("/:id", apiDeleteReview)

module.exports = router;