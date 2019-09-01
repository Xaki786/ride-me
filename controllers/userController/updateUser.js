// ===========================================================
// UPDATE User PROFILE
// ===========================================================
const { User } = require("../../models");
// ===========================================================
module.exports = async(req, res, next) => {
    // ------------------------------------------------------------
    const { userId } = req.params;
    // ------------------------------------------------------------
    // FIND User IN DB
    // ------------------------------------------------------------
    const dbUser = await User.findById(userId);
    // ------------------------------------------------------------
    // IF User NOT FOUND OR HAS BEEN TEMPORARILY DELETED, SEND ERROR
    // ------------------------------------------------------------
    if (!dbUser || dbUser.isDeleted) {
        const error = new Error("User not found");
        error.status = 404;
        return next(error);
    }
    // ------------------------------------------------------------
    //   UPDATE User'S PROFILE
    // ------------------------------------------------------------
    const updatedUser = await User.findByIdAndUpdate(userId, req.body, {
        new: true
    });
    // ------------------------------------------------------------
    //   REDIRECT TO THE User'S PROFILE
    // ------------------------------------------------------------
    return res.redirect(`/api/users/${userId}`);
    // ------------------------------------------------------------
};
