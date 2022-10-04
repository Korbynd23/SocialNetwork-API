const router = require('express').Router();

const {
  getThoughts,
  getThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require('../../controllers/ThoughtController.js');

// /api/courses
router.route('/').get(getThoughts).post(createThought);


// /api/courses/:courseId
router
    .route('/:thoughtId')
    .get(getThought)
    .put(updateThought)
    .delete(deleteThought);
    router.route('/:thoughtId/reactions').post(addReaction)
    router.route('/:thoughtId/reactions/:_id').delete(removeReaction)

module.exports = router;
