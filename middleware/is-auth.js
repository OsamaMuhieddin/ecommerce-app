module.exports = (req, res, next) => {
    req.session.reload((err) => {
        if (err) {
            console.log("Session reload error:", err);
            return res.redirect('/login');
        }
        if (!req.session.isLoggedIn) {
            return res.redirect('/login');
        }
        next();
    });
};
