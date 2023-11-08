const router = require('express').Router();
const {
    
getAllThoughts,
getSingleThought,
createThought,
updateThought,
deleteThought,
addReaction,
deleteReaction

} = require('../../controllers/thoughtController');
// /api/thought
router
.route('/').get(getAllThoughts).post(createThought);

// /api/thoughts/:thoughtID
router
.route('/:thoughtId')
.get(getSingleThought)
.delete(deleteThought)
.put(updateThought);

// /api/thoughts/:thoughtId/reactions/
router.route('/:thoughtId/reactions')
.post(addReaction)
.delete(deleteReaction)


module.exports = router;