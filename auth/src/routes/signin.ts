import { Router } from 'express';

const router = Router();

router.post('/api/users/signin', (req, res) => {
  res.send('Hi There');
});

export { router as signinRouter };
