const express = require('express');
const router = express.Router();
const articlesController = require('../controllers/articles_controller');

router.get('/', articlesController.getAll);
router.get('/:id', articlesController.getSingle);
router.post('/', articlesController.createArticle);
router.delete('/:id', articlesController.deleteArticle);
router.put('/:id', articlesController.updateArticle);

module.exports = router;
