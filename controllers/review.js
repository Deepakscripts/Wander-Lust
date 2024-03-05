/* REVIEW MODEl */
const Review = require("../models/review.js"); 
const Listing = require("../models/listing.js");

/* REVIEW CONTROLLER */
module.exports.review = async (req, res) => {
    let listing = await Listing.findById(req.params.id);
    let newReview = new Review(req.body.review);
    newReview.author = req.user._id;
    listing.reviews.push(newReview);

    await newReview.save();
    await listing.save();
    req.flash("success", "Thanks for sharing your feedback with us!");
    res.redirect(`/listings/${listing._id}`)
};

/* DELETE REVIEW CONTROLLER */
module.exports.deleteReview = async (req, res) => {
    let { id, reviewId } = req.params;
    await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });//pull operator
    await Review.findByIdAndDelete(reviewId);
    req.flash("success", "Review Deleted!");
    res.redirect(`/listings/${id}`)
};