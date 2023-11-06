const router = require('express').Router();
const {
  getAllUsers,
  getSingleUser,
  createUser,
  deleteUser,
 
} = require('../../controllers/UserController');

// /api/user
router.route('/').get(getAllUsers).post(createUser);

// /api/Users/:userId
router.route('/:userId').get(getSingleUser).delete(deleteUser);



module.exports = router;
