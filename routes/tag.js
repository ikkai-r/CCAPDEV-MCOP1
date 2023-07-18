const express = require ("express");
const router = express.Router();


router.get("/:tagname", (req, res)=>{
    res.render("tag");
})


router.get("/", (req, res)=>{
    res.redirect('/');
});

module.exports = router;