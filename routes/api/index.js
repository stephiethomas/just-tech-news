const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const postRoute = require('./post-routes');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);


module.exports = router;

