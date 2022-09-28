const router = require('express').Router();

const {
  getUser,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require('../../controllers/userController.js');

// /api/courses
router.route('/').get(getUser).post(createUser);


// /api/courses/:courseId
router
    .route('/:userId')
    .get(getSingleUser)
    .put(updateUser)
    .delete(deleteUser);
    router.route('/:userId/friend/:friendId').delete(removeFriend).put(addFriend)

module.exports = router;