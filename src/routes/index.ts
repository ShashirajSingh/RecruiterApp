import express from 'express';
import searchController from '../controllers/searchController';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('HomePage');
});

router.get('/repo', searchController.repoSearch);
router.post('/user', searchController.userSearch);

export { router as routes };
