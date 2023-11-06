const router = require('express').Router();
const {
  getAllUsers,
  getSingleUser,
  createUser,
  deleteUser,
  addThought,
  removeThought,
} = require('../../controllers/UserController');

// /api/user
router.route('/').get(getAllUsers).post(createUser);

// /api/Users/:userId
router.route('/:userId').get(getSingleUser).delete(deleteUser);

// /api/Users/:userId/thoughts
router.route('/:userId/thought/:thoughtId').post(addThought);

// /api/Users/:usertId/thoughts/:thoughtId
router.route('/:userId/thought/:thoughtId').delete(removeThought);

module.exports = router;
