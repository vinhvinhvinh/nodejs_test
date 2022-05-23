const express=require('express');
const NewsController = require('../app/controllers/SiteController');
const router=express.Router();

const siteController =require('../app/controllers/SiteController');

//siteController.index

router.use('/:slug',siteController.search);
router.use('/',siteController.index);


module.exports = router;