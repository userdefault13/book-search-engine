const router = require('express').Router();
const { authMiddleware } = require('../../utils/auth');
const {
  createUser,
  getSingleUser,
  saveBook,
  deleteBook,
  login,
} = require('../../controllers/user-controller');

router.route('/').post(createUser).put(authMiddleware, saveBook);
router.route('/login').post(login);
router.route('/me').get(authMiddleware, getSingleUser);
router.route('/books/:bookId').delete(authMiddleware, deleteBook);

module.exports = router;
